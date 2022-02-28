const db = require("../api/data/db-config")

function getUsers() {
  return db("user")
}

function getById(id) {
  return db("users").select("id", "username").where({ id }).first()
}

function findBy(filter) {
  return db("user").where(filter)
}

async function addUser(user) {
  const [id] = await db("users").insert(user, "id")

  return getById(id)
}

async function updateUser(id, changes) {
  await db("user").where({ id }).update(changes)

  return getById(id)
}
function deleteUser(id) {
  return db("user").where({ id }).del()
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
