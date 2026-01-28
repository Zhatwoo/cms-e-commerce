# Verification & Testing Runbook

This runbook covers the Phase 6 verification items in `tasks.md`. Most checks require Firebase credentials, Redis, and Docker Compose running.

## Prerequisites
1. Create `.env` from `.env.example` and fill in Firebase + Redis values.
2. Ensure Firestore rules/indexes are deployed:
   - `firebase deploy --only firestore`
3. Start services:
   - `docker compose up --build`

## Integration Tests

### 1) Token validation across API servers
1. Register and login to obtain `idToken` (example uses PowerShell):
   - `$register = Invoke-RestMethod -Method Post -Uri http://localhost/api/auth/register -Body (@{name='Test User';email='test+1@example.com';password='password123'} | ConvertTo-Json) -ContentType 'application/json'`
   - `$login = Invoke-RestMethod -Method Post -Uri http://localhost/api/auth/login -Body (@{email='test+1@example.com';password='password123'} | ConvertTo-Json) -ContentType 'application/json'`
   - `$token = $login.idToken`
2. Call a protected endpoint through NGINX:
   - `Invoke-RestMethod -Headers @{ Authorization = "Bearer $token" } -Uri http://localhost/api/users`
3. Repeat the call several times to validate token works regardless of backend instance.

### 2) Cache invalidation
1. Call `/api/users` twice and observe Redis keys:
   - `docker exec -it redis-cache redis-cli keys "users:*"`
2. Register a new user and verify the cache key was invalidated and repopulated after the next `/api/users` call.

### 3) Job queue processing
1. Use the `welcomeJobId` returned by `/api/auth/register`.
2. Query job status:
   - `Invoke-RestMethod -Headers @{ Authorization = "Bearer $token" } -Uri http://localhost/api/jobs/email/$welcomeJobId`
3. Check worker logs for `job-completed`.

### 4) File upload/download flow
1. Request upload URL:
   - `$upload = Invoke-RestMethod -Method Post -Uri http://localhost/api/storage/upload-url -Headers @{ Authorization = "Bearer $token" } -Body (@{originalName='hello.txt';contentType='text/plain'} | ConvertTo-Json) -ContentType 'application/json'`
2. Upload the file using the signed URL:
   - `curl.exe -X PUT -H "Content-Type: text/plain" --data-binary "hello" "$($upload.uploadUrl)"`
3. Mark metadata as uploaded:
   - `Invoke-RestMethod -Method Patch -Uri http://localhost/api/storage/files/$($upload.fileId) -Headers @{ Authorization = "Bearer $token" } -Body (@{status='uploaded';size=5} | ConvertTo-Json) -ContentType 'application/json'`
4. Request download URL:
   - `Invoke-RestMethod -Method Post -Uri http://localhost/api/storage/download-url -Headers @{ Authorization = "Bearer $token" } -Body (@{fileId=$upload.fileId} | ConvertTo-Json) -ContentType 'application/json'`

### 5) Metrics endpoint
1. Visit `http://localhost/metrics`
2. Confirm presence of:
   - `http_request_duration_seconds`
   - `http_request_errors_total`
   - `users_total`

## Load Testing

### 1) Round-robin distribution
Run multiple requests against `/health` and inspect instance counts:

```
node -e "const n=30;const url='http://localhost/health';Promise.all([...Array(n)].map(()=>fetch(url).then(r=>r.json()))).then(res=>{const counts=res.reduce((acc,r)=>{acc[r.instance]=(acc[r.instance]||0)+1;return acc;},{});console.log(counts);});"
```

### 2) Response time under load

```
node -e "const n=100;const url='http://localhost/api/users';const start=Date.now();Promise.all([...Array(n)].map(()=>fetch(url))).then(()=>{console.log('avg ms', (Date.now()-start)/n);});"
```

## Failover Testing

### 1) Backend instance failure
1. Stop one backend container:
   - `docker stop backend-2`
2. Continue calling `/health` and `/api/users` to verify availability.
3. Restart: `docker start backend-2`

### 2) Redis connection loss
1. Stop Redis:
   - `docker stop redis-cache`
2. Call `/api/users` and ensure requests still succeed (cache/rate limiting falls back).
3. Restart: `docker start redis-cache`

### 3) Database pool exhaustion (manual)
1. Temporarily set `MONGODB_URI` to a low pool size:
   - `mongodb://localhost:27017/cms-ecommerce?maxPoolSize=1`
2. Fire concurrent requests (see load test).
3. Observe 5xx rates in `/metrics` and logs.
