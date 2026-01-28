# Phase 6: Edge Services & SPOF Mitigation

## CDN Recommendations
- Use a multi‑region CDN (Cloudflare, Fastly, Akamai) with origin shielding.
- Cache static assets and product media aggressively; bypass cache for auth/session endpoints.
- Enable TLS termination at the edge with automatic certificate rotation.
- Turn on DDoS protection and rate‑based rules for bursts.

## WAF Rules (Baseline)
- OWASP Core Rule Set (CRS) or managed WAF rules.
- Block common attacks: SQLi, XSS, RCE, path traversal, request smuggling.
- Enforce sane request size limits and content‑type allowlists.
- Enable bot detection with challenge/ratelimit for suspicious user agents.

## Redis HA (Sentinel / Managed)
- Prefer managed Redis with automatic failover (ElastiCache, Memorystore).
- If self‑hosting, use Redis Sentinel with 1 primary + 2 replicas + 3 sentinels.
- Clients should connect via the Sentinel endpoints to discover the current primary.
- Keep cache TTLs short; ensure jobs tolerate Redis reconnects.
- Sample Sentinel config is available at `redis/sentinel.conf`.

## DNS Failover Strategy
- Use multi‑provider DNS or a provider that supports health checks + failover.
- Set low TTLs (30–60s) for critical records to reduce failover time.
- Monitor upstream load balancer health and automate failover updates.
- Keep a secondary region or standby LB ready for disaster recovery.
