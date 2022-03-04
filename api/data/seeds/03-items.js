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
          suggested_price: 0.22,
          pricing_unit: "each",
        },
        {
          item_name: "Milk",
          loc_id: 1,
          cat_id: 2,
          suggested_price: 3.12,
          pricing_unit: "gallon",
        },
        {
          item_name: "Oats",
          loc_id: 1,
          cat_id: 3,
          suggested_price: 1.62,
          pricing_unit: "lb",
        },
        {
          item_name: "Broccoli",
          loc_id: 1,
          cat_id: 4,
          suggested_price: 2.28,
          pricing_unit: "lb",
        },
      ])
    })
}
