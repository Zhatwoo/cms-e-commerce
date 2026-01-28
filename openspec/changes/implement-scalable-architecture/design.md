## Context

This design document describes the technical decisions for implementing the scalable architecture defined in the mermaid diagram. The architecture supports horizontal scaling, high availability, and observability for a CMS e-commerce system.

### Current State
- **Backend**: Express.js with Mongoose, 3 instances behind NGINX
- **Frontend**: Next.js 16 with React 19, 2 instances behind NGINX
- **Auth**: Basic auth controller with bcrypt password handling
- **Storage**: Not implemented
- **Caching**: Not implemented
- **Jobs**: Not implemented (synchronous processing only)
- **Observability**: Console logging only

### Target State
- **Database**: Firebase Firestore (NoSQL, managed, serverless)
- **Auth**: Firebase Authentication
- **Storage**: Firebase Storage

### Stakeholders
- Development team
- DevOps/Infrastructure team
- Product team (for feature impact)

## Goals / Non-Goals

### Goals
- Implement stateless API servers with centralized token validation
- Add Redis caching for frequently accessed data
- Enable async job processing for background tasks
- Implement Firebase Storage with signed URLs
- Add comprehensive observability (logs, metrics, traces, alerts)
- Mitigate identified SPOF risks

### Non-Goals
- Kubernetes migration (remain on Docker Compose for now)
- Multi-region deployment (single region initially)
- Complete database migration away from MongoDB (support both during transition)

## Decisions

### Decision 1: Firebase Auth for Token Store
**What**: Use Firebase Authentication instead of custom JWT implementation.

**Why**: 
- Firebase Auth handles token issuance, refresh, and revocation
- Built-in HA (managed service)
- Supports multiple auth providers (email, Google, etc.)
- Reduces custom code maintenance

**Alternatives considered**:
- Custom JWT with Redis token store: More control but more maintenance
- Auth0/Okta: Higher cost, more features than needed

### Decision 2: Redis for Cache and Message Queue
**What**: Use Redis for both caching and BullMQ message queue.

**Why**:
- Single service for two use cases (operational simplicity)
- BullMQ is mature, well-maintained, and Redis-native
- Redis Sentinel provides HA without complex setup

**Alternatives considered**:
- RabbitMQ for queue: Additional infrastructure component
- Memcached for cache: No persistence, Redis features more useful

### Decision 3: Firebase Firestore with Firebase Admin SDK
**What**: Use Firebase Firestore as the primary database with Firebase Admin SDK for server-side access.

**Why**:
- Managed NoSQL database with automatic scaling
- Built-in HA (multi-region replication)
- Real-time sync capabilities for frontend
- Seamless integration with Firebase Auth and Storage
- No server-side database management required
- Pay-per-use pricing model

**Alternatives considered**:
- Keep MongoDB: Requires managing infrastructure, no built-in HA
- PostgreSQL with Prisma: More relational, but adds operational complexity
- MongoDB Atlas: Managed but separate vendor from auth/storage

### Decision 4: Winston + OpenTelemetry for Observability
**What**: Use Winston for logging, prom-client for metrics, OpenTelemetry for tracing.

**Why**:
- Industry-standard tools with broad ecosystem support
- OpenTelemetry provides vendor-neutral instrumentation
- Winston is flexible with multiple transports

**Alternatives considered**:
- Datadog/New Relic agents: Vendor lock-in, higher cost
- Bunyan for logging: Less feature-rich than Winston

### Decision 5: Rate Limiting at Application Layer
**What**: Implement rate limiting in Express middleware with Redis backing.

**Why**:
- Distributed rate limiting across all API instances
- Granular control (per-user, per-endpoint)
- NGINX rate limiting can be added as defense-in-depth

**Alternatives considered**:
- NGINX-only rate limiting: Not distributed, harder to customize
- API Gateway: Additional infrastructure, overkill for current scale

## Risks / Trade-offs

### Risk: MongoDB to Firestore Migration
- **Risk**: Data model differences (document structure, query patterns)
- **Mitigation**: 
  - Create migration scripts to transform MongoDB documents to Firestore format
  - Test with a subset of data first
  - Implement dual-write during transition if needed
  - Plan for query pattern changes (Firestore has different indexing requirements)

### Risk: Redis as Single Point of Failure
- **Risk**: Redis failure affects both cache and job queue
- **Mitigation**:
  - Configure Redis Sentinel for automatic failover
  - Implement graceful degradation (cache miss falls through to DB)
  - Job queue retries on reconnection

### Risk: Observability Overhead
- **Risk**: Metrics/tracing adds latency
- **Mitigation**:
  - Sampling for traces (not 100% of requests)
  - Async log shipping
  - Monitor overhead and adjust

## Migration Plan

### Phase 1: Auth (Week 1-2)
1. Deploy Firebase Admin SDK alongside existing auth
2. Add token validation middleware
3. Migrate clients to use Firebase Auth
4. Remove deprecated auth endpoints

### Phase 2: Data Layer (Week 3-4)
1. Add Redis container
2. Set up Firebase Admin SDK for Firestore access
3. Create Firestore collections matching existing data models
4. Migrate data from MongoDB to Firestore
5. Implement caching layer with Redis

### Phase 3: Async Jobs (Week 5)
1. Deploy worker containers
2. Implement first job type (e.g., email notifications)
3. Migrate existing sync operations to async

### Phase 4: File Storage (Week 6)
1. Configure Firebase Storage
2. Implement signed URL endpoints
3. Add file metadata tracking

### Phase 5: Observability (Week 7-8)
1. Deploy logging infrastructure
2. Add metrics endpoints
3. Configure tracing
4. Set up alerting

### Phase 6: Edge Services (Week 9)
1. Add rate limiting
2. Document CDN/WAF recommendations
3. Validate SPOF mitigations

### Rollback Strategy
Each phase is independently deployable. Rollback by:
1. Disabling feature flags
2. Reverting container versions
3. Restoring previous NGINX config

## Open Questions

1. ~~**Database choice**: Continue with MongoDB or fully migrate to Firebase Firestore?~~
   - **RESOLVED**: Using Firebase Firestore for managed HA and seamless Firebase ecosystem integration

2. **Log aggregation destination**: Self-hosted (ELK) or cloud (CloudWatch, Stackdriver)?
   - Recommendation: Start with cloud for simplicity, migrate if cost prohibitive

3. **Alert destinations**: Email, Slack, PagerDuty?
   - Need product/ops team input

4. **Rate limit thresholds**: What are acceptable limits per user/endpoint?
   - Need product team input for business logic
