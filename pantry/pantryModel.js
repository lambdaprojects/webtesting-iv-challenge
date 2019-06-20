const db = require("../data/dbconfig.js");

module.exports = {
  get,
  getById,
  modify,
  remove,
  add
};

function get() {
  return db("pantry");
}

function getById() {
  return null;
}

function modify() {
  return null;
}

async function remove(id) {
  return db("pantry")
    .where({ id })
    .del();
}

async function add(pantryItem) {
  const [id] = await db("pantry").insert(pantryItem);

  return db("pantry")
    .where({ id })
    .first();
}
