const express = require("express");
const app = express();
app.use(express.json());

/* 

Task 2

  1. Update the app to include a validation library of your choice.
  2. Update the app to then validate the PUT request below and ensure the following
    a) accept title and author which are string required fields
    b) accept an array of strings that must have at least 1 item in it. The key can be called 'category' and will have values like horror, comedy, thriller

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

// PUT /books/:id
app.put("/books/:id", (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).send("Book not found");

  const { title, author } = req.body;

  book.title = title;
  book.author = author;
  res.json(book);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
