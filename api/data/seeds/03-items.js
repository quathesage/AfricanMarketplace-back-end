exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("items")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("items").insert([
        {
          item_name: "Bananas",
          loc_id: 1,
          cat_id: 1,
          user_id: 1,
        },
        {
          item_name: "Eggs",
          loc_id: 1,
          cat_id: 2,
          user_id: 2,
        },
        {
          item_name: "Whole Wheat Bread",
          loc_id: 1,
          cat_id: 3,
          user_id: 3,
        },
        {
          item_name: "Yuca Root",
          loc_id: 1,
          cat_id: 4,
          user_id: 1,
        },
        {
          item_name: "Oats",
          loc_id: 1,
          cat_id: 3,
          user_id: 4,
        },
      ])
    })
}
