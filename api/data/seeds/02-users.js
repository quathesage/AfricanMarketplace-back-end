const bcrypt = require("bcryptjs")

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      const hash = bcrypt.hashSync("password", 10) // 2 ^ n
      // Inserts seed entries
      return knex("users").insert([
        {
          username: "admin",
          password: hash,
          first_name: "admin",
          last_name: "admin",
          email: "admin@adminsemail.com",
          isOwner: true,
          isAdmin: true,
          avatar_url:
            "https://www.chsbuffalo.org/sites/default/files/styles/crop_230x230/public/default_images/profile-default_0.jpg?itok=DTiAzsNA",
        },
        {
          username: "usertest",
          password: hash,
          first_name: "test",
          last_name: "user",
          email: "test@useremail.com",
          avatar_url:
            "https://www.chsbuffalo.org/sites/default/files/styles/crop_230x230/public/default_images/profile-default_0.jpg?itok=DTiAzsNA",
        },
        {
          username: "account",
          password: hash,
          first_name: "account",
          last_name: "user",
          email: "test@email.com",
          isOwner: true,
          avatar_url:
            "https://www.chsbuffalo.org/sites/default/files/styles/crop_230x230/public/default_images/profile-default_0.jpg?itok=DTiAzsNA",
        },
      ])
    })
}
