
# Travel Booking API

This is a RESTful API for a travel booking website. The API supports user registration, authentication, creating and managing tours, bookings, and reviews, as well as additional features like articles, blogs, and special offers.

## API Endpoints

### Users
| Resource  | Method | URL                   | Auth        | Description              |
|-----------|--------|-----------------------|-------------|--------------------------|
| Users     | POST   | /api/auth/register     | None        | Register a new user       |
| Users     | POST   | /api/auth/login        | None        | Login an existing user    |

### Tours
| Resource  | Method | URL                   | Auth        | Description              |
|-----------|--------|-----------------------|-------------|--------------------------|
| Tours     | POST   | /api/tours             | Admin Only  | Create a new tour         |
| Tours     | GET    | /api/tours             | None        | Get all tours             |
| Tours     | GET    | /api/tours/:id         | None        | Get a specific tour       |
| Tours     | PUT    | /api/tours/:id         | Admin Only  | Update a specific tour    |
| Tours     | DELETE | /api/tours/:id         | Admin Only  | Delete a specific tour    |

### Bookings
| Resource  | Method | URL                   | Auth        | Description              |
|-----------|--------|-----------------------|-------------|--------------------------|
| Bookings  | POST   | /api/bookings          | User Only   | Create a new booking      |
| Bookings  | GET    | /api/bookings          | Admin Only  | Get all bookings          |
| Bookings  | GET    | /api/bookings/user     | User Only   | Get bookings for the logged-in user |

### Reviews
| Resource  | Method | URL                   | Auth        | Description              |
|-----------|--------|-----------------------|-------------|--------------------------|
| Reviews   | POST   | /api/reviews           | User Only   | Create a new review for a tour |
| Reviews   | GET    | /api/reviews/tour/:tourId | None      | Get all reviews for a specific tour |
| Reviews   | PUT    | /api/reviews/:id       | User Only   | Update a specific review  |
| Reviews   | DELETE | /api/reviews/:id       | User Only   | Delete a specific review  |

### Articles
| Resource  | Method | URL                   | Auth        | Description              |
|-----------|--------|-----------------------|-------------|--------------------------|
| Articles  | POST   | /api/articles          | Admin Only  | Create a new article      |
| Articles  | GET    | /api/articles          | None        | Get all articles          |
| Articles  | GET    | /api/articles/:id      | None        | Get a specific article    |
| Articles  | PUT    | /api/articles/:id      | Admin Only  | Update a specific article |
| Articles  | DELETE | /api/articles/:id      | Admin Only  | Delete a specific article |

### Blogs
| Resource  | Method | URL                   | Auth        | Description              |
|-----------|--------|-----------------------|-------------|--------------------------|
| Blogs     | POST   | /api/blogs             | Admin Only  | Create a new blog         |
| Blogs     | GET    | /api/blogs             | None        | Get all blogs             |
| Blogs     | GET    | /api/blogs/:id         | None        | Get a specific blog       |
| Blogs     | PUT    | /api/blogs/:id         | Admin Only  | Update a specific blog    |
| Blogs     | DELETE | /api/blogs/:id         | Admin Only  | Delete a specific blog    |

### Special Offers
| Resource       | Method | URL                        | Auth        | Description               |
|----------------|--------|----------------------------|-------------|---------------------------|
| Special Offers | POST   | /api/special-offers         | Admin Only  | Create a new special offer |
| Special Offers | GET    | /api/special-offers         | None        | Get all special offers     |
| Special Offers | GET    | /api/special-offers/:id     | None        | Get a specific special offer |
| Special Offers | PUT    | /api/special-offers/:id     | Admin Only  | Update a specific special offer |
| Special Offers | DELETE | /api/special-offers/:id     | Admin Only  | Delete a specific special offer |

## How to Test These APIs in Postman

### Authentication:
- For protected routes (marked as "User Only" or "Admin Only"), first log in using the `/api/auth/login` API to get the JWT token.
- In Postman, set the Authorization type to Bearer Token and paste the JWT token in the token field for subsequent requests.
- Public APIs (like getting tours or reviews) do not require authentication.

### Example for Postman

#### Login:
- **URL**: `POST http://localhost:5000/api/auth/login`
- **Body (JSON)**:
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

- Copy the token from the response and use it in subsequent requests.

#### Create a Tour (Admin):
- **URL**: `POST http://localhost:5000/api/tours`
- **Headers**: Set Authorization: Bearer `<JWT Token>`
- **Body (JSON)**:
```json
{
  "name": "Dubai: Guided City Tour",
  "description": "A comprehensive tour of Dubai.",
  "category": "CITY_TOUR",
  "price": 200,
  "duration": "Full day (7+ hours)",
  "location": "Dubai, UAE",
  "languages": ["English", "German"],
  "rating": 5,
  "features": ["Deals & Discounts", "Private Tour"],
  "speedFeatures": "Steady",
  "included": [{ "id": 1, "text": "Lunch included" }],
  "excluded": [{ "id": 7, "text": "Towel not provided" }],
  "roadmap": [{ "id": 1, "icon": "icon-pin", "title": "Day 1: Airport Pick Up", "content": "Airport pickup and hotel transfer." }]
}
```
