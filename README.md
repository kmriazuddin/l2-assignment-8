Here's a comprehensive `README.md` file for your Library Management System API project.

```markdown
# Library Management System API

A backend API built with Node.js, Express.js, Prisma ORM, PostgreSQL, and TypeScript for managing library resources including books, members, and borrowing activities. This API allows library staff and members to perform CRUD operations on books, members, and borrow records, along with additional endpoints for borrowing and returning books. UUIDs are used for unique identification across all tables.

## Table of Contents

- [Technologies](#technologies)
- [Installation](#installation)
- [Database Schema](#database-schema)
- [Features & Endpoints](#features--endpoints)
  - [Book CRUD Operations](#book-crud-operations)
  - [Member CRUD Operations](#member-crud-operations)
  - [Borrow & Return Books](#borrow--return-books)
- [License](#license)

## Technologies

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for Node.js.
- **Prisma ORM**: Type-safe ORM for database management.
- **PostgreSQL**: Relational database.
- **TypeScript**: Strongly typed programming language for scalable applications.

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/library-management-system.git
   cd library-management-system
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Set up the PostgreSQL database**
   - Create a PostgreSQL database.
   - Configure the database connection in `.env`:
     ```env
     DATABASE_URL="postgresql://username:password@localhost:5432/library_db"
     ```

4. **Run Prisma migrations**
   ```bash
   npx prisma migrate dev --name init
   ```

5. **Start the server**
   ```bash
   yarn start
   ```

6. **Access the API** at `http://localhost:3000/api`.

## Database Schema

Using Prisma, this project includes three main tables:
1. **Book Table**
   - `bookId` (UUID): Unique identifier for each book.
   - `title` (String): Title of the book.
   - `genre` (String): Genre or category of the book.
   - `publishedYear` (Int): Year the book was published.
   - `totalCopies` (Int): Total copies of the book in the library.
   - `availableCopies` (Int): Number of copies currently available.

2. **Member Table**
   - `memberId` (UUID): Unique identifier for each member.
   - `name` (String): Name of the library member.
   - `email` (String): Member’s email (unique).
   - `phone` (String): Member’s contact number.
   - `membershipDate` (DateTime): Date the member joined.

3. **BorrowRecord Table**
   - `borrowId` (UUID): Unique identifier for each borrow record.
   - `borrowDate` (DateTime): Date when the book was borrowed.
   - `returnDate` (DateTime): Date when the book was returned (nullable).
   - `bookId` (UUID): Foreign key referencing `Book`.
   - `memberId` (UUID): Foreign key referencing `Member`.

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
