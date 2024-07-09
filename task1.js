const express = require("express");
const app = express();
app.use(express.json());

/* 

Task 1

  1. Update the code so that when an error is returned, the response type is JSON
  2. Update the code so that all responses and errors thrown always returns a standard response format like the one below
  3. Make sure that when an error response is thrown, the appropriate http code is set on the response.

  // 1. data - contains the payload that should be returned
  // 2. errorMessage - will be null is the response is a 200 or it will contain the error message otherwise
  // 3. errorCode - contains a unique code that is defined by the developer
  // 4. stack - contains the stack trace that is thrown when an error occurs

  {
    "data": [],
    "errorMessage": "",
    "errorCode": "",
    "stack": ""
  }


*/

let books = [
  {
    id: 1,
    name: "The Witcher",
  },
  {
    id: 2,
    name: "Lord of the Rings",
  },
  {
    id: 3,
    name: "Matilda",
  },
];

// GET /books
app.get("/books", (req, res) => {
  res.json(books);
});

// GET /books/:id
app.get("/books/:id", (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).send("Book not found");
  res.json(book);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
