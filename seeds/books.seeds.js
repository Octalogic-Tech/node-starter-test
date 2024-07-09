/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("book_authors").del();
  await knex("authors").del();
  await knex("books").del();

  const books_authors = [
    {
      id: 1,
      name: "The Witcher",
      author: "Andrzej Sapkowski",
    },
    {
      id: 2,
      name: "The Lord of the Rings",
      author: "John Ronald Reuel Tolkien",
    },
    {
      id: 3,
      name: "Matilda",
      author: "Roald Dahl",
    },
  ];

  // insert books
  await knex("books").insert(
    books_authors.map((row) => ({
      id: row.id,
      name: row.name,
    }))
  );

  // insert authors
  await knex("authors").insert(
    books_authors.map((row) => ({
      id: row.id,
      name: row.author,
    }))
  );

  // insert relations
  await knex("book_authors").insert(
    books_authors.map((row) => ({
      id_author: row.id,
      id_book: row.id,
    }))
  );
};
