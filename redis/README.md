# Redis Sentinel (Optional)

This project uses a single Redis instance by default. To enable Sentinel‑based HA in a self‑hosted setup:

1. Run a primary (`redis-primary`) and at least two replicas.
2. Run three Sentinel instances using `sentinel.conf`.
3. Configure clients to discover the primary through the Sentinels.

Example Sentinel config is provided in `redis/sentinel.conf`.

Recommended: use a managed Redis service (AWS ElastiCache, GCP Memorystore) for production HA.
