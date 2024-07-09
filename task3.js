const express = require("express");
const PORT = process.env.PORT || 3002;
// const db = require("./knex");
const app = express();

/* 

  Task 3

  1. Take a look at the database migrations under the migrations folder to see the table structure that exists.
  2. You will be provided with a database URL that you can connect to which has the tables setup along with the data.
  3. Based on that write an API that returns the following response after fetching the data from the database
  4. Feel free to refer to any documentation or use any library that might help with achieving the result

  [
    {
      "id": 1,
      "name": "The Witcher",
      "author": "Andrzej Sapkowski",
      "created_at": "22-07-2024",
      "updated_at": "22-07-2024"
    },
    {
      "id": 2,
      "name": "The Lord of the Rings",
      "author": "John Ronald Reuel Tolkien",
      "created_at": "22-07-2024",
      "updated_at": "22-07-2024"
    },
    {
      "id": 3,
      "name": "Matilda",
      "author": "Roald Dahl",
      "created_at": "22-07-2024",
      "updated_at": "22-07-2024"
    }
  ]



*/

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
