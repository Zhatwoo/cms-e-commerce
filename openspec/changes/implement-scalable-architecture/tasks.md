# Implementation Tasks

## Current State Analysis
- [x] Review mermaid diagram architecture
- [x] Analyze existing codebase structure
- [x] Document current capabilities (NGINX LB, 3 backend, 2 frontend)
- [x] Create OpenSpec proposal

---

## Phase 1: Auth Service & Token Store

### 1.1 Firebase Admin SDK Setup
- [x] 1.1.1 Install Firebase Admin SDK in backend (`firebase-admin`)
- [x] 1.1.2 Create `backend/src/config/firebase.ts` for admin initialization
- [x] 1.1.3 Add Firebase service account credentials configuration
- [x] 1.1.4 Create environment variables for Firebase Admin

### 1.2 Token Validation Middleware
- [x] 1.2.1 Create `backend/src/middleware/authMiddleware.ts`
- [x] 1.2.2 Implement ID token verification via Firebase Admin
- [x] 1.2.3 Add token refresh handling
- [x] 1.2.4 Integrate middleware with protected routes

### 1.3 Auth Controller Updates
- [x] 1.3.1 Update `authController.ts` to use Firebase Auth
- [x] 1.3.2 Remove local password handling (Firebase manages this)
- [x] 1.3.3 Add custom claims handling for roles

---

## Phase 2: Data Layer Enhancement

### 2.1 Firebase Firestore Setup
- [ ] 2.1.1 Configure Firestore database in Firebase Console
- [ ] 2.1.2 Create `backend/src/services/firestoreService.ts` for database operations
- [ ] 2.1.3 Define Firestore collection schemas (users, products, orders, etc.)
- [ ] 2.1.4 Create data migration scripts from MongoDB to Firestore
- [ ] 2.1.5 Configure Firestore security rules
- [ ] 2.1.6 Set up Firestore indexes for compound queries
- [ ] 2.1.7 Deploy Firestore rules and indexes via Firebase CLI

### 2.2 Redis Cache Layer
- [ ] 2.2.1 Add Redis service to `docker-compose.yml`
- [ ] 2.2.2 Install `ioredis` package
- [ ] 2.2.3 Create `backend/src/config/redis.ts`
- [ ] 2.2.4 Implement cache service with get/set/invalidate
- [ ] 2.2.5 Add caching to frequently accessed endpoints

### 2.3 Firestore Data Access Patterns
- [ ] 2.3.1 Create repository pattern wrappers for Firestore collections
- [ ] 2.3.2 Implement transaction helpers for multi-document operations
- [ ] 2.3.3 Add error handling for Firestore-specific errors

---

## Phase 3: Async Job Processing

### 3.1 Message Queue Setup
- [ ] 3.1.1 Install BullMQ package
- [ ] 3.1.2 Create `backend/src/queues/` directory structure
- [ ] 3.1.3 Create queue connection configuration
- [ ] 3.1.4 Define job types and payloads

### 3.2 Worker Implementation
- [ ] 3.2.1 Create `backend/src/workers/index.ts` entry point
- [ ] 3.2.2 Implement worker process logic
- [ ] 3.2.3 Add worker Dockerfile
- [ ] 3.2.4 Add worker containers to `docker-compose.yml`

### 3.3 Job Publishers
- [ ] 3.3.1 Create job publisher utilities
- [ ] 3.3.2 Integrate job publishing in API controllers
- [ ] 3.3.3 Add job status tracking

---

## Phase 4: File Storage

### 4.1 Firebase Storage Integration
- [ ] 4.1.1 Create `backend/src/services/storageService.ts`
- [ ] 4.1.2 Implement signed URL generation for uploads
- [ ] 4.1.3 Implement signed URL generation for downloads
- [ ] 4.1.4 Add file metadata storage in database

### 4.2 Storage API Endpoints
- [ ] 4.2.1 Create `backend/src/routes/storageRoutes.ts`
- [ ] 4.2.2 Add upload URL request endpoint
- [ ] 4.2.3 Add download URL request endpoint
- [ ] 4.2.4 Add file metadata CRUD operations

---

## Phase 5: Observability Stack

### 5.1 Centralized Logging
- [ ] 5.1.1 Install Winston logger
- [ ] 5.1.2 Create `backend/src/utils/logger.ts`
- [ ] 5.1.3 Configure log levels and transports
- [ ] 5.1.4 Add request/response logging middleware
- [ ] 5.1.5 Integrate structured logging across all modules

### 5.2 Metrics Collection
- [ ] 5.2.1 Install `prom-client` for Prometheus metrics
- [ ] 5.2.2 Create `/metrics` endpoint
- [ ] 5.2.3 Add request duration histograms
- [ ] 5.2.4 Add error counters
- [ ] 5.2.5 Add custom business metrics

### 5.3 Distributed Tracing
- [ ] 5.3.1 Install OpenTelemetry SDK
- [ ] 5.3.2 Configure trace exporter
- [ ] 5.3.3 Add automatic HTTP instrumentation
- [ ] 5.3.4 Add manual spans for critical operations

### 5.4 Alerting
- [ ] 5.4.1 Define alerting rules for critical metrics
- [ ] 5.4.2 Configure alert destinations (email, Slack, etc.)
- [ ] 5.4.3 Add health check aggregation

---

## Phase 6: Edge Services & SPOF Mitigation

### 6.1 Rate Limiting
- [ ] 6.1.1 Install `rate-limiter-flexible` package
- [ ] 6.1.2 Create `backend/src/middleware/rateLimiter.ts`
- [ ] 6.1.3 Configure Redis-backed rate limiting
- [ ] 6.1.4 Add rate limit headers to responses
- [ ] 6.1.5 Update NGINX for X-RateLimit headers

### 6.2 Infrastructure HA
- [ ] 6.2.1 Document CDN configuration recommendations
- [ ] 6.2.2 Document WAF rules for common attacks
- [ ] 6.2.3 Add Redis Sentinel or cluster configuration
- [ ] 6.2.4 Document DNS failover strategy

---

## Verification & Testing

### Integration Tests
- [ ] Test token validation across all API servers
- [ ] Test cache invalidation
- [ ] Test job queue processing
- [ ] Test file upload/download flow
- [ ] Test metrics endpoint

### Load Testing
- [ ] Load test with horizontal scaling
- [ ] Verify round-robin distribution
- [ ] Measure response times under load

### Failover Testing
- [ ] Test backend instance failure recovery
- [ ] Test Redis connection loss handling
- [ ] Test database connection pool exhaustion

---

## Documentation
- [ ] Update README with architecture diagram
- [ ] Document environment variables
- [ ] Create deployment guide
- [ ] Document SPOF mitigation strategies
