# Robo-Tech API Documentation

## Base URL
`/api`

## Endpoints

### Get All Robots
```http
GET /robots
```

#### Response
```json
[
  {
    "id": 1,
    "name": "Tesla Optimus Gen 2",
    "manufacturer": "Tesla",
    "price": "$20,000",
    "description": "Humanoid robot designed for general purpose tasks.",
    "features": ["Adaptive AI Learning", "Human-like Movement"],
    "image": "/images/placeholder-robot.svg",
    "status": "Pre-order"
  }
]
```

### Get Robot by ID
```http
GET /robots/:id
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| id   | number | Robot ID |

#### Response
```json
{
  "id": 1,
  "name": "Tesla Optimus Gen 2",
  "manufacturer": "Tesla",
  "price": "$20,000",
  "description": "Humanoid robot designed for general purpose tasks.",
  "features": ["Adaptive AI Learning", "Human-like Movement"],
  "image": "/images/placeholder-robot.svg",
  "status": "Pre-order"
}
```

### Create Robot
```http
POST /robots
```

#### Request Body
```json
{
  "name": "New Robot",
  "manufacturer": "Company",
  "price": "$10,000",
  "description": "Description",
  "features": ["Feature 1", "Feature 2"],
  "image": "/images/robot.svg",
  "status": "Pre-order"
}
```

#### Response
```json
{
  "id": 7,
  "name": "New Robot",
  "manufacturer": "Company",
  "price": "$10,000",
  "description": "Description",
  "features": ["Feature 1", "Feature 2"],
  "image": "/images/robot.svg",
  "status": "Pre-order"
}
```

### Update Robot Status
```http
PATCH /robots/:id
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| id   | number | Robot ID |

#### Request Body
```json
{
  "status": "In Stock"
}
```

#### Response
```json
{
  "id": 1,
  "name": "Tesla Optimus Gen 2",
  "manufacturer": "Tesla",
  "price": "$20,000",
  "description": "Humanoid robot designed for general purpose tasks.",
  "features": ["Adaptive AI Learning", "Human-like Movement"],
  "image": "/images/placeholder-robot.svg",
  "status": "In Stock"
}
```

## Error Responses

### 400 Bad Request
```json
{
  "error": "Missing required fields"
}
```

### 404 Not Found
```json
{
  "error": "Robot not found"
}
```

### 500 Internal Server Error
```json
{
  "error": "Internal Server Error"
}
```

## Types

### Robot
```typescript
interface Robot {
  id: number;
  name: string;
  manufacturer: string;
  price: string;
  description: string;
  features: string[];
  image: string;
  status: 'In Stock' | 'Pre-order' | 'Coming Soon';
}
```
