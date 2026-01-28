## ADDED Requirements

### Requirement: Firebase Authentication Integration
The system SHALL use Firebase Authentication as the centralized auth service for user identity management, token issuance, and token validation.

#### Scenario: User login with email/password
- **WHEN** a user submits valid email and password credentials
- **THEN** Firebase Auth SHALL validate the credentials
- **AND** Firebase Auth SHALL issue an ID token and refresh token
- **AND** the client SHALL store the tokens securely

#### Scenario: User login with invalid credentials
- **WHEN** a user submits invalid credentials
- **THEN** Firebase Auth SHALL reject the authentication
- **AND** an appropriate error message SHALL be returned
- **AND** no tokens SHALL be issued

---

### Requirement: Token Validation Middleware
All protected API endpoints SHALL validate the Firebase ID token before processing requests. Token validation SHALL be performed via Firebase Admin SDK.

#### Scenario: Valid token presented
- **WHEN** a request includes a valid, non-expired Authorization header with Bearer token
- **THEN** the middleware SHALL decode the token via Firebase Admin SDK
- **AND** the user identity SHALL be attached to the request context
- **AND** the request SHALL proceed to the route handler

#### Scenario: Expired token presented
- **WHEN** a request includes an expired Authorization token
- **THEN** the middleware SHALL reject the request with 401 Unauthorized
- **AND** the response SHALL indicate token expiration
- **AND** the client SHALL use the refresh token to obtain a new ID token

#### Scenario: Invalid token presented
- **WHEN** a request includes a malformed or tampered token
- **THEN** the middleware SHALL reject the request with 401 Unauthorized
- **AND** the token SHALL NOT be trusted

#### Scenario: Missing token on protected route
- **WHEN** a request to a protected endpoint lacks an Authorization header
- **THEN** the middleware SHALL reject the request with 401 Unauthorized

---

### Requirement: Token Refresh Handling
The client SHALL be able to refresh expired ID tokens using the refresh token without requiring re-authentication.

#### Scenario: Token refresh success
- **WHEN** a valid refresh token is used to request a new ID token
- **THEN** Firebase Auth SHALL issue a new ID token
- **AND** the new token SHALL have a fresh expiration time

#### Scenario: Token revocation
- **WHEN** a user's refresh token is revoked (e.g., password change, manual revocation)
- **THEN** all existing tokens for that user SHALL become invalid
- **AND** the user SHALL be required to re-authenticate

---

### Requirement: Custom Claims for Authorization
The system SHALL support Firebase custom claims for role-based authorization (e.g., admin, user, editor roles).

#### Scenario: Admin role claim
- **WHEN** a user with admin role accesses an admin-only endpoint
- **THEN** the custom claims in the token SHALL include the admin role
- **AND** the request SHALL be authorized

#### Scenario: Insufficient permissions
- **WHEN** a user without the required role accesses a restricted endpoint
- **THEN** the middleware SHALL reject the request with 403 Forbidden
