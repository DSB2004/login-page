# Login Page Server

A secure authentication server built with Express.js, TypeScript, and PostgreSQL. This server provides endpoints for user registration, login, and user information retrieval with JWT authentication.

## Features

- User registration and login
- JWT-based authentication
- PostgreSQL database with Prisma ORM
- TypeScript support
- CORS enabled
- Input validation using Zod
- Secure password hashing with bcrypt

## Prerequisites

- Node.js (v14 or higher)
- Docker and Docker Compose
- PostgreSQL (if running locally without Docker)

## Dependencies

```json
{
  "@prisma/client": "^6.5.0",
  "bcrypt": "^5.1.1",
  "cors": "^2.8.5",
  "express": "^4.21.2",
  "jose": "^6.0.10",
  "prisma": "^6.5.0",
  "zod": "^3.24.2"
}
```

## Local Setup

1. Install dependencies:

```bash
bun i
```

2. Create a `.env` file with your database connection:

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/login_db"
JWT_SECRET="your-secret-key"
PORT=8000
```

3. Run database migrations:

```bash
bun run prisma-migrate
```

4. Start the development server:

```bash
bun run dev
```

## API Endpoints

### 1. Register User

- **URL**: `/auth/signup`
- **Method**: `POST`
- **Body**:

```json
{
  "name": "string",
  "email": "string",
  "password": "string"
}
```

- **Response**:

```json
{
  "message": "User added successfully",
  "token": "jwt_token"
}
```

### 2. Login

- **URL**: `/auth/login`
- **Method**: `POST`
- **Body**:

```json
{
  "email": "string",
  "password": "string"
}
```

- **Response**:

```json
{
  "message": "User logged in successfully",
  "token": "jwt_token"
}
```

### 3. Get User Info

- **URL**: `/api/user/get-user`
- **Method**: `GET`
- **Headers**:
  - `Authorization: Bearer jwt_token`
- **Response**:

```json
{
  "message": "User Found",
  "user": {
    "id": "string",
    "name": "string",
    "email": "string"
  }
}
```

## Development Scripts

- `bun run dev`: Start development server
- `bun run build`: Build the project
- `bun run start`: Start production server
- `bun run prisma-generate`: Generate Prisma client
- `bun run prisma-migrate`: Run database migrations
- `bun run prisma-deploy`: Deploy migrations to production

## Security Features

- Password hashing using bcrypt
- JWT token-based authentication
- Input validation using Zod
- CORS configuration
- Secure headers
- Rate limiting (can be implemented)

## Error Handling

The API returns appropriate HTTP status codes:

- 200: Success
- 201: Created
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 500: Internal Server Error
