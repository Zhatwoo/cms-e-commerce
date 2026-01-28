# Project Context

## Purpose
CMS E-Commerce is a scalable, horizontally-distributed e-commerce content management system designed for high availability and resilience. The system supports multiple concurrent users with load-balanced backend and frontend services.

## Tech Stack

### Backend
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js v5
- **Database**: Firebase Firestore (NoSQL, managed)
- **Database SDK**: Firebase Admin SDK
- **Authentication**: Firebase Auth
- **Storage**: Firebase Storage

### Frontend
- **Framework**: Next.js 16
- **UI Library**: React 19
- **Styling**: TailwindCSS v4
- **Authentication**: NextAuth v5 (beta)

### Infrastructure
- **Container Orchestration**: Docker Compose
- **Load Balancer**: NGINX (Alpine)
- **Reverse Proxy**: NGINX with upstream pools
- **Cache**: Redis (planned)
- **Message Queue**: BullMQ / Redis (planned)

## Project Conventions

### Code Style
- TypeScript strict mode enabled
- ES Modules preferred
- Functional components for React
- Named exports for utilities, default exports for pages/components

### Architecture Patterns
- **Stateless API Servers**: All backend instances are stateless for horizontal scaling
- **Circuit Breaker Pattern**: For external service calls
- **Repository Pattern**: For data access layer
- **Middleware-based Auth**: Token validation via centralized token store

### Testing Strategy
- Unit tests for business logic
- Integration tests for API endpoints
- E2E tests for critical user flows
- Health check endpoints for all services

### Git Workflow
- Feature branches from `main`
- Pull requests required for all changes
- Semantic commit messages

## Domain Context
- E-commerce product catalog management
- User authentication and authorization
- Order processing and management
- Content management for product pages

## Important Constraints
- All API servers must be stateless (no local session storage)
- Token validation must use centralized token store
- Database connections must handle replica failover
- File uploads must use signed URLs (no server-side storage)

## External Dependencies
- Firebase Authentication (Auth Service)
- Firebase Firestore (Database primary)
- Firebase Storage (File storage bucket)
- Redis (Cache and Message Queue)
