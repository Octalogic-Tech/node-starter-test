exports.up = function (knex) {
  return knex.schema.createTable("authors", function (table) {
    table.increments();
    table.text("name").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("authors");
};
