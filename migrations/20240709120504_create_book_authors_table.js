exports.up = function (knex) {
  return knex.schema.createTable("book_authors", function (table) {
    table.increments();
    table.integer("id_author").references("id").inTable("authors");
    table.integer("id_book").references("id").inTable("books");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("book_authors");
};
