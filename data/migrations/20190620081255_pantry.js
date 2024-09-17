exports.up = function(knex, Promise) {
  return knex.schema.createTable("pantry", tbl => {
    tbl.increments();
    tbl
      .string("item_name", 255)
      .notNullable()
      .unique();
    tbl.string("item_description", 255).notNullable();
    tbl
      .integer("item_quantity")
      .notNullable()
      .unsigned();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("pantry");
};
