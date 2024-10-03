
# Travel Booking API

This API provides user authentication, tour management, booking management, and review functionalities for a travel booking platform. Admins have special privileges for managing tours and bookings.

## Table of Contents
1. [Authentication](#authentication)
2. [Tours](#tours)
3. [Bookings](#bookings)
4. [Reviews](#reviews)

---

## 1. Authentication

### Register a New User
- **Method**: POST  
- **URL**: `http://localhost:5000/api/auth/register`  
- **Body**:
  ```json
  {
    "username": "testuser",
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "password": "password123"
  }
  ```

### User Login
- **Method**: POST  
- **URL**: `http://localhost:5000/api/auth/login`  
- **Body**:
  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```

---

## 2. Tours

### a) Create a New Tour (Admin Only)
- **Method**: POST  
- **URL**: `http://localhost:5000/api/tours`  
- **Authorization**: Bearer Token (Admin)  
- **Body**:
  ```json
  {
    "name": "Desert Safari",
    "description": "Explore the beautiful dunes.",
    "category": "DESERT_SAFARI",
    "price": 120,
    "duration": 6,
    "location": "Doha, Qatar",
    "availableFrom": "2024-10-10",
    "availableTo": "2024-10-15",
    "maxPeople": 10
  }
  ```

### b) Get All Tours
- **Method**: GET  
- **URL**: `http://localhost:5000/api/tours`  
- **Authorization**: None

### c) Get Single Tour
- **Method**: GET  
- **URL**: `http://localhost:5000/api/tours/{tourId}`  
- **Authorization**: None

### d) Update a Tour (Admin Only)
- **Method**: PUT  
- **URL**: `http://localhost:5000/api/tours/{tourId}`  
- **Authorization**: Bearer Token (Admin)  
- **Body**:
  ```json
  {
    "price": 130,
    "maxPeople": 15
  }
  ```

### e) Delete a Tour (Admin Only)
- **Method**: DELETE  
- **URL**: `http://localhost:5000/api/tours/{tourId}`  
- **Authorization**: Bearer Token (Admin)

---

## 3. Bookings

### a) Create a Booking (User-specific)
- **Method**: POST  
- **URL**: `http://localhost:5000/api/bookings`  
- **Authorization**: Bearer Token (User)  
- **Body**:
  ```json
  {
    "tourId": "64af30d7f1c2b611ea8e8a89",
    "bookingDate": "2024-11-10",
    "people": 3
  }
  ```

### b) Get All Bookings (Admin Only)
- **Method**: GET  
- **URL**: `http://localhost:5000/api/bookings`  
- **Authorization**: Bearer Token (Admin)

### c) Get Bookings for a Specific User
- **Method**: GET  
- **URL**: `http://localhost:5000/api/bookings/user`  
- **Authorization**: Bearer Token (User)

---

## 4. Reviews

### a) Create a Review (User-specific)
- **Method**: POST  
- **URL**: `http://localhost:5000/api/reviews`  
- **Authorization**: Bearer Token (User)  
- **Body**:
  ```json
  {
    "tourId": "64af30d7f1c2b611ea8e8a89",
    "rating": 5,
    "comment": "Fantastic experience!"
  }
  ```

### b) Get All Reviews for a Tour
- **Method**: GET  
- **URL**: `http://localhost:5000/api/reviews/tour/{tourId}`  
- **Authorization**: None

### c) Update a Review (User-specific)
- **Method**: PUT  
- **URL**: `http://localhost:5000/api/reviews/{reviewId}`  
- **Authorization**: Bearer Token (User)  
- **Body**:
  ```json
  {
    "rating": 4,
    "comment": "Amazing experience!"
  }
  ```

### d) Delete a Review (User-specific)
- **Method**: DELETE  
- **URL**: `http://localhost:5000/api/reviews/{reviewId}`  
- **Authorization**: Bearer Token (User)
