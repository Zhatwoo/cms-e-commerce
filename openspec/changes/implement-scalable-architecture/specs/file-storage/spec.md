## ADDED Requirements

### Requirement: Firebase Storage Integration
The system SHALL use Firebase Storage as the file storage bucket for user uploads and system files.

#### Scenario: Storage bucket access
- **WHEN** the system needs to store or retrieve a file
- **THEN** Firebase Storage SHALL be used as the storage backend
- **AND** files SHALL be organized by logical paths (e.g., users/products/files)

---

### Requirement: Signed URL for File Upload
The system SHALL generate signed URLs for file uploads, allowing clients to upload directly to Firebase Storage without proxying through API servers.

#### Scenario: Request upload URL
- **WHEN** a client requests permission to upload a file
- **THEN** the API server SHALL generate a signed upload URL
- **AND** the URL SHALL include upload restrictions (file type, size, expiration)
- **AND** the client SHALL upload directly to Firebase Storage using this URL

#### Scenario: Upload URL expiration
- **WHEN** a signed upload URL is used after its expiration time
- **THEN** the upload SHALL be rejected by Firebase Storage
- **AND** the client SHALL request a new upload URL

---

### Requirement: Signed URL for File Download
The system SHALL generate signed URLs for file downloads, providing time-limited access to private files.

#### Scenario: Request download URL
- **WHEN** a client requests to download a file
- **THEN** the API server SHALL verify the client's authorization
- **AND** the server SHALL generate a signed download URL
- **AND** the client SHALL download directly from Firebase Storage

#### Scenario: Download authorization check
- **WHEN** a client requests a download URL for a file they don't have access to
- **THEN** the API server SHALL reject the request with 403 Forbidden
- **AND** no signed URL SHALL be generated

---

### Requirement: File Metadata Storage
File metadata (filename, size, content type, uploader, timestamp) SHALL be stored in the database alongside the storage reference.

#### Scenario: Metadata creation on upload
- **WHEN** a file upload is completed
- **THEN** file metadata SHALL be saved to the database
- **AND** the metadata SHALL include the storage path/reference

#### Scenario: Metadata query
- **WHEN** a client lists files
- **THEN** the metadata SHALL be retrieved from the database
- **AND** the file listing SHALL NOT require querying Firebase Storage directly

#### Scenario: Metadata deletion
- **WHEN** a file is deleted
- **THEN** the file SHALL be removed from Firebase Storage
- **AND** the metadata SHALL be removed from the database

---

### Requirement: Upload Validation
The system SHALL validate file uploads based on allowed file types and size limits.

#### Scenario: Allowed file type
- **WHEN** a client uploads a file with an allowed MIME type
- **THEN** the upload SHALL proceed

#### Scenario: Disallowed file type
- **WHEN** a client attempts to upload a file with a disallowed MIME type
- **THEN** the signed URL generation SHALL be rejected
- **AND** an appropriate error message SHALL be returned

#### Scenario: File size limit
- **WHEN** a client attempts to upload a file exceeding the size limit
- **THEN** Firebase Storage SHALL reject the upload based on signed URL restrictions
