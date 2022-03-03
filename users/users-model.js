const db = require("../api/data/db-config")

function getUsers() {
  return db("users")
}

function getById(id) {
  return db("users").select("id", "username").where({ id }).first()
}

function findBy(filter) {
  return db("users").where(filter)
}

async function addUser(user) {
  const [id] = await db("users").insert(user, "id")

  return getById(id)
}

async function updateUser(id, changes) {
  await db("users").where({ id }).update(changes)

  return getById(id)
}
function deleteUser(id) {
  return db("users").where({ id }).del()
}

function findItemsByUser(id) {
  return db("item").where({ user_id: id })
}

module.exports = {
  getUsers,
  addUser,
  getById,
  findBy,
  updateUser,
  findItemsByUser,
  deleteUser,
}
