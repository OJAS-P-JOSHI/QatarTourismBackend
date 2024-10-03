Register: POST http://localhost:5000/api/auth/register with JSON body:
{
  "username": "testuser",
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "password": "password123"
}


Login: POST http://localhost:5000/api/auth/login
{
  "email": "john@example.com",
  "password": "password123"
}
