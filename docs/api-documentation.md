# RoboTech API Documentation

## API Overview

The RoboTech API is built using Next.js API routes, providing a RESTful interface for various functionalities. All API endpoints are located under `/app/api/`.

## Authentication

### POST /api/auth/login
Authenticate a user and receive a JWT token.

```typescript
// Request
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "yourpassword"
}

// Response
{
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "123",
    "email": "user@example.com",
    "role": "user"
  }
}
```

### POST /api/auth/register
Register a new user account.

```typescript
// Request
POST /api/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "yourpassword",
  "name": "John Doe"
}

// Response
{
  "success": true,
  "user": {
    "id": "123",
    "email": "user@example.com",
    "name": "John Doe"
  }
}
```

## Blog Posts

### GET /api/posts
Retrieve a list of blog posts with pagination.

```typescript
// Request
GET /api/posts?page=1&limit=10

// Response
{
  "posts": [
    {
      "id": "1",
      "title": "Future of Robotics",
      "excerpt": "...",
      "author": "John Doe",
      "publishedAt": "2025-02-11T10:00:00Z"
    }
  ],
  "pagination": {
    "currentPage": 1,
    "totalPages": 5,
    "totalPosts": 50
  }
}
```

### GET /api/posts/[id]
Retrieve a single blog post by ID.

```typescript
// Request
GET /api/posts/1

// Response
{
  "id": "1",
  "title": "Future of Robotics",
  "content": "...",
  "author": {
    "id": "123",
    "name": "John Doe"
  },
  "publishedAt": "2025-02-11T10:00:00Z"
}
```

## Newsletter

### POST /api/newsletter/subscribe
Subscribe to the newsletter.

```typescript
// Request
POST /api/newsletter/subscribe
Content-Type: application/json

{
  "email": "user@example.com"
}

// Response
{
  "success": true,
  "message": "Successfully subscribed to newsletter"
}
```

## Contact

### POST /api/contact
Submit a contact form.

```typescript
// Request
POST /api/contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "user@example.com",
  "message": "Hello, I'm interested in your services",
  "company": "Tech Corp" // optional
}

// Response
{
  "success": true,
  "message": "Message sent successfully"
}
```

## Search

### GET /api/search
Search across blog posts, services, and products.

```typescript
// Request
GET /api/search?q=robotics&type=blog

// Response
{
  "results": [
    {
      "type": "blog",
      "id": "1",
      "title": "Advanced Robotics",
      "excerpt": "...",
      "url": "/blog/advanced-robotics"
    }
  ],
  "metadata": {
    "total": 10,
    "type": "blog"
  }
}
```

## Admin

### GET /api/admin/stats
Get admin dashboard statistics (requires admin authentication).

```typescript
// Request
GET /api/admin/stats
Authorization: Bearer your-jwt-token

// Response
{
  "users": {
    "total": 1000,
    "activeToday": 150
  },
  "posts": {
    "total": 50,
    "publishedToday": 3
  },
  "subscribers": {
    "total": 500,
    "newToday": 10
  }
}
```

## Error Handling

All API endpoints follow a consistent error response format:

```typescript
{
  "error": {
    "code": "INVALID_CREDENTIALS",
    "message": "Invalid email or password",
    "status": 401
  }
}
```

Common error codes:
- `UNAUTHORIZED`: 401 - Authentication required
- `FORBIDDEN`: 403 - Insufficient permissions
- `NOT_FOUND`: 404 - Resource not found
- `VALIDATION_ERROR`: 422 - Invalid input data
- `INTERNAL_ERROR`: 500 - Server error

## Rate Limiting

API requests are rate-limited to:
- 100 requests per minute for authenticated users
- 20 requests per minute for unauthenticated users

Rate limit headers:
```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 99
X-RateLimit-Reset: 1623456789
```

## Implementation Example

Here's how to use the API in your frontend code:

```typescript
// utils/api.ts
const api = {
  async login(email: string, password: string) {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    
    if (!response.ok) {
      throw new Error('Login failed');
    }
    
    return response.json();
  },
  
  async getPosts(page = 1, limit = 10) {
    const response = await fetch(
      `/api/posts?page=${page}&limit=${limit}`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    
    return response.json();
  }
};

export default api;
```

Usage in components:
```typescript
// components/LoginForm.tsx
import api from '../utils/api';

const LoginForm = () => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { token, user } = await api.login(email, password);
      // Handle successful login
    } catch (error) {
      // Handle error
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
    </form>
  );
};
```

## Security Best Practices

1. **Authentication**
   - Always use HTTPS
   - Store JWT tokens securely
   - Implement token refresh mechanism
   - Set appropriate token expiration

2. **Input Validation**
   - Validate all input data
   - Sanitize user input
   - Use TypeScript for type safety

3. **Error Handling**
   - Never expose internal errors
   - Log errors properly
   - Return appropriate status codes

4. **Rate Limiting**
   - Implement rate limiting
   - Use appropriate limits
   - Handle rate limit errors

## Testing

Example of testing API endpoints:

```typescript
// __tests__/api/auth.test.ts
import { testApiHandler } from 'next-test-api-route-handler';
import loginHandler from '../../pages/api/auth/login';

describe('Login API', () => {
  it('should authenticate valid credentials', async () => {
    await testApiHandler({
      handler: loginHandler,
      test: async ({ fetch }) => {
        const res = await fetch({
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify({
            email: 'test@example.com',
            password: 'password123',
          }),
        });
        
        expect(res.status).toBe(200);
        const json = await res.json();
        expect(json).toHaveProperty('token');
      },
    });
  });
});
```
