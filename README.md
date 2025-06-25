# NodejsTechTest

Berikut tabel yang digunakan didalam postgres:

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password TEXT NOT NULL
);

CREATE TABLE checklists (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  user_id INTEGER REFERENCES users(id)
);

CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  is_done BOOLEAN DEFAULT FALSE,
  checklist_id INTEGER REFERENCES checklists(id)
);

# PENTING
Masukkan Bearer Token JWT pada header Athorization setelah login

# API Endpoints

# Register&Login

POST /api/register
Register a new user.
{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "secret123"
}

POST /api/login
Log in and receive a JWT token.
{
  "username": "johndoe",
  "password": "secret123"
}

# Checklist

GET /api/checklist
List all checklists (requires auth).

POST /api/checklist
Create a checklist.
{
  "name": "Daily Tasks"
}

DELETE /api/checklist/:id
Delete a checklist by ID.

# Checklist Items

GET /api/checklist/:checklistId/item
List items in a checklist.

POST /api/checklist/:checklistId/item
Add a new item to checklist.
{
  "itemName": "Buy milk"
}

GET /api/checklist/:checklistId/item/:itemId
Get details of a checklist item.

PUT /api/checklist/:checklistId/item/:itemId
Change item's is_done status.

DELETE /api/checklist/:checklistId/item/:itemId
Delete an item from a checklist.

PUT /api/checklist/:checklistId/item/rename/:itemId
{
  "itemName": "Buy coffee"
}