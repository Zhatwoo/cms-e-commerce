# NGINX Load Balancer Setup

This directory contains NGINX configuration for load balancing your CMS E-commerce application.

## Configuration Files

| File | Purpose |
|------|---------|
| `nginx.conf` | Production configuration for Docker deployment |
| `nginx.local.conf` | Local development configuration |

## Load Balancing Methods

The default configuration uses **round-robin** load balancing. To change:

### Least Connections
Best when requests have varying processing times:
```nginx
upstream backend_pool {
    least_conn;
    server backend1:5000;
    server backend2:5000;
    server backend3:5000;
}
```

### IP Hash (Session Persistence)
Use when you need sticky sessions:
```nginx
upstream backend_pool {
    ip_hash;
    server backend1:5000;
    server backend2:5000;
    server backend3:5000;
}
```

### Weighted Distribution
Give more traffic to stronger servers:
```nginx
upstream backend_pool {
    server backend1:5000 weight=3;  # Gets 60% traffic
    server backend2:5000 weight=1;  # Gets 20% traffic
    server backend3:5000 weight=1;  # Gets 20% traffic
}
```

## Health Checks

NGINX performs passive health checks:
- `max_fails=3` - Mark server as down after 3 failures
- `fail_timeout=30s` - Wait 30 seconds before retrying

## Local Development

1. Install NGINX on Windows: https://nginx.org/en/download.html
2. Copy `nginx.local.conf` to your NGINX installation
3. Start multiple backend instances:
   ```powershell
   # Terminal 1
   cd backend && $env:PORT=5000; npm run dev
   
   # Terminal 2
   cd backend && $env:PORT=5001; npm run dev
   
   # Terminal 3
   cd backend && $env:PORT=5002; npm run dev
   ```
4. Start NGINX: `nginx -c path/to/nginx.local.conf`
5. Access app at http://localhost:8080
