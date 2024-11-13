# Library Management System


#### Objective:
Develop a backend API for a Library Management System that allows library staff and members to manage books, memberships, and borrowing activities. The API will be structured around CRUD operations for books, members, and borrow records, with additional endpoints for borrowing and returning books. You will use UUID for unique identification in all tables.

### Technologies Required
- Prisma ORM
- Node.js
- PostgreSQL
- Express.js
- TypeScript

## Database Schema Requirements
Use Prisma ORM to design the following schema, ensuring each table uses UUID as a primary key:

### 1. Book Table

| Field           | Type   | Description                                   |
|-----------------|--------|-----------------------------------------------|
| `bookId`        | UUID   | Unique identifier for each book               |
| `title`         | String | Title of the book                             |
| `genre`         | String | Genre or category of the book                 |
| `publishedYear` | Int    | Year the book was published                   |
| `totalCopies`   | Int    | Total copies of the book in the library       |
| `availableCopies` | Int  | Number of copies currently available for borrowing |

### 2. Member Table

| Field            | Type     | Description                                 |
|------------------|----------|---------------------------------------------|
| `memberId`       | UUID     | Unique identifier for each member           |
| `name`           | String   | Name of the library member                  |
| `email`          | String   | Member’s email (unique)                     |
| `phone`          | String   | Member’s contact number                     |
| `membershipDate` | DateTime | Date the member joined the library          |

### 3. BorrowRecord Table

| Field        | Type     | Description                                     |
|--------------|----------|-------------------------------------------------|
| `borrowId`   | UUID     | Unique identifier for each borrow record        |
| `borrowDate` | DateTime | Date when the book was borrowed                 |
| `returnDate` | DateTime | Date when the book was returned (nullable)      |
| `bookId`     | UUID     | Foreign key referencing Book                    |
| `memberId`   | UUID     | Foreign key referencing Member                  |


## Features & Endpoints

## 1. Book CRUD Operations

### 1. Create Book
   - Endpoint: `POST /api/books`
   - Request Body:
  ```
  {
    "title": "To Kill a Mockingbird",
    "genre": "Fiction",
    "publishedYear": 1960,
    "totalCopies": 10,
    "availableCopies": 10
  }
  ```
  #### Response:
```
{
  "success": true,
  "status": 201,
  "message": "Book created successfully",
  "data": {
    "bookId": "a24df67b-1234-5678-9101-b2a3c5d7f9b1",
    "title": "To Kill a Mockingbird",
    "genre": "Fiction",
    "publishedYear": 1960,
    "totalCopies": 10,
    "availableCopies": 10
  }
}
```

### 2. Read All Books
   - Endpoint: `GET /api/books`
   #### Response:
   ```
   {
     "success": true,
     "status": 200,
     "message": "Books retrieved successfully",
     "data": [
       {
         "bookId": "a24df67b-1234-5678-9101-b2a3c5d7f9b1",
         "title": "To Kill a Mockingbird",
         "genre": "Fiction",
         "publishedYear": 1960,
         "totalCopies": 10,
         "availableCopies": 10
        }
      ]
  }
```

### 3. Read Book by ID
   - Endpoint: `GET /api/books/:bookId`
   #### Response: 
   ```
   {
     "success": true,
     "status": 200,
     "message": "Book retrieved successfully",
     "data": {
       "bookId": "a24df67b-1234-5678-9101-b2a3c5d7f9b1",
       "title": "To Kill a Mockingbird",
       "genre": "Fiction",
       "publishedYear": 1960,
       "totalCopies": 10,
       "availableCopies": 10
     }
}
```

### 4. Update Book
   - Endpoint: `PUT /api/books/:bookId`
   - Request Body:
   ```
    {
        "title": "To Kill a Mockingbird - Revised",
        "genre": "Classic Fiction",
        "publishedYear": 1961,
        "totalCopies": 12,
        "availableCopies": 8
    }
   ```

   #### Response:
   ```
    {
      "success": true,
      "status": 200,
      "message": "Book updated successfully",
      "data": {
        "bookId": "a24df67b-1234-5678-9101-b2a3c5d7f9b1",
        "title": "To Kill a Mockingbird - Revised",
        "genre": "Classic Fiction",
        "publishedYear": 1961,
        "totalCopies": 12,
        availableCopies": 8
      }
}
   ```
     

### 5. Delete Book
   - Endpoint: `DELETE /api/books/:bookId`
   #### Response:
   ```
    {
        "success": true,
        "status": 200,
        "message": "Book successfully deleted"
    }
```

## 2. Member CRUD Operations

### 1. Create Member
   - Endpoint: `POST /api/members`
   - Request Body:
   ```
    {
       "name": "Alice Johnson",
       "email": "alice@example.com",
       "phone": "123-456-7890",
       "membershipDate": "2024-01-01T00:00:00.000Z"
    }
   ```

   #### Response:
   ```
    {
        "success": true,
        "status": 201,
        "message": "Member created successfully",
        "data": {
            "memberId": "8765-4321-1098",
            "name": "Alice Johnson",
            email": "alice@example.com",
            "phone": "123-456-7890",
            "membershipDate": "2024-01-01T00:00:00.000Z"
        }
    }

   ```



### 2. Read All Member
   - Endpoint: `GET /api/members`

   #### Response:
   ```
    {
        "success": true,
        "status": 201,
        "message": "Member retrieved successfully",
        "data": {
            "memberId": "8765-4321-1098",
            "name": "Alice Johnson",
            email": "alice@example.com",
            "phone": "123-456-7890",
            "membershipDate": "2024-01-01T00:00:00.000Z"
        }
    }
   ```

### 3. Read Member by ID
   - Endpoint: `GET /api/members/:memberId`
   #### Response:
   ```
    {
        "success": true,
        "status": 201,
        "message": "Member retrieved successfully",
        "data": {
            "memberId": "8765-4321-1098",
            "name": "Alice Johnson",
            email": "alice@example.com",
            "phone": "123-456-7890",
            "membershipDate": "2024-01-01T00:00:00.000Z"
        }
    }
```


### 4. Update Member
   - Endpoint: `PUT /api/members/:memberId`
   - Request Body:
   ```
    {
       "name": "Alice Johnson",
       "email": "alice.johnson@example.com",
       "phone": "098-765-4321"
    }
   ```
   #### Response:
   ```
    {
        "success": true,
        "status": 201,
        "message": "Member updated successfully",
        "data": {
            "memberId": "8765-4321-1098",
            "name": "Alice Johnson",
            email": "alice@example.com",
            "phone": "123-456-7890",
            "membershipDate": "2024-01-01T00:00:00.000Z"
        }
    }
   ```

### 5. Delete Member
   - Endpoint: `DELETE /api/members/:memberId`
   #### Response:
   ```
   {
      "success": true,
      "status": 201,
      "message": "Member updated successfully"
  }
   ```

## 3. Borrow & Return Books

### 1. Borrow a Book
   - Endpoint: `POST /api/borrow`
   - Request Body:
   ```
   {
       "bookId": "a24df67b-1234-5678-9101-b2a3c5d7f9b1",
       "memberId": "a24df67b-1234-5678-9101-b2a3c5d7f098"
  }
```

#### Response:
```
{
  "success": true,
  "status": 200,
  "message": "Book borrowed successfully",
  "data": {
    "borrowId": "a24df67b-1234-5678-9101-b2a3c5d7f",
    "bookId": "a24df67b-1234-5678-9101-b2a3c5d7f9b1",
    "memberId": "8765-4321-1098",
    "borrowDate": "2024-09-01T10:00:00.000Z"
  }
}
```

### 2. Return a Book
   - Endpoint: `POST /api/return`
   - Request Body:

   ```
    {
      "borrowId": "a24df67b-1234-5678-9101-b2a3c5d7f"
    }
   ```
   #### Response:
   ```
    {
      "success": true,
      "status": 200,
      "message": "Book returned successfully"
    }
   ```
