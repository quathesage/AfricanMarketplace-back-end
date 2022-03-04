exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("locations")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("locations").insert([
        {
          location_name: "Greenfield",
        },
        {
          location_name: "Savannah",
        },
        {
          location_name: "Sunrise",
        },
        {
          location_name: "Tena",
        },
      ])
    })
}
