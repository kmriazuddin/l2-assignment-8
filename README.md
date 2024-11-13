# Library Management System
### Objective:
PostgreSql is a relational database management system, Using object-oriented features of PostgreSQL.  its reliability, flexibility, and support of open technical standards.

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

### Book CRUD Operations

1. **Create Book**
   - **Endpoint**: `POST /api/books`
   - **Request Body**:
     ```json
     {
       "title": "To Kill a Mockingbird",
       "genre": "Fiction",
       "publishedYear": 1960,
       "totalCopies": 10,
       "availableCopies": 10
     }
     ```

2. **Read All Books**
   - **Endpoint**: `GET /api/books`

3. **Read Book by ID**
   - **Endpoint**: `GET /api/books/:bookId`

4. **Update Book**
   - **Endpoint**: `PUT /api/books/:bookId`
   - **Request Body**:
     ```json
     {
       "title": "To Kill a Mockingbird - Revised",
       "genre": "Classic Fiction",
       "publishedYear": 1961,
       "totalCopies": 12,
       "availableCopies": 8
     }
     ```

5. **Delete Book**
   - **Endpoint**: `DELETE /api/books/:bookId`

### Member CRUD Operations

1. **Create Member**
   - **Endpoint**: `POST /api/members`
   - **Request Body**:
     ```json
     {
       "name": "Alice Johnson",
       "email": "alice@example.com",
       "phone": "123-456-7890",
       "membershipDate": "2024-01-01T00:00:00.000Z"
     }
     ```

2. **Read All Members**
   - **Endpoint**: `GET /api/members`

3. **Read Member by ID**
   - **Endpoint**: `GET /api/members/:memberId`

4. **Update Member**
   - **Endpoint**: `PUT /api/members/:memberId`
   - **Request Body**:
     ```json
     {
       "name": "Alice Johnson",
       "email": "alice.johnson@example.com",
       "phone": "098-765-4321"
     }
     ```

5. **Delete Member**
   - **Endpoint**: `DELETE /api/members/:memberId`

### Borrow & Return Books

1. **Borrow a Book**
   - **Endpoint**: `POST /api/borrow`
   - **Request Body**:
     ```json
     {
       "bookId": "a24df67b-1234-5678-9101-b2a3c5d7f9b1",
       "memberId": "a24df67b-1234-5678-9101-b2a3c5d7f098"
     }
     ```

2. **Return a Book**
   - **Endpoint**: `POST /api/return`
   - **Request Body**:
     ```json
     {
       "borrowId": "a24df67b-1234-5678-9101-b2a3c5d7f"
     }
     ```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

---

This `README.md` provides an overview of the Library Management System API, instructions for setup and running the project, the database schema, and descriptions of all endpoints with example requests and responses.
