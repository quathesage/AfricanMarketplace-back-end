exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("categories")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("categories").insert([
        {
          category_name: "Fruits",
          category_description: "Delicious ripe fruits",
        },
        {
          category_name: "Dairy",
        },
        {
          category_name: "Grains",
        },
        {
          category_name: "Vegetables",
        },
      ])
    })
}
