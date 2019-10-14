/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

module.exports = {
  Query: {
    pets(
      _,
      {
        input: { name, type }
      },
      { models }
    ) {
      if (name) {
        return models.Pet.findMany({ name });
      } else if (type) {
        return models.Pet.findMany({ type });
      } else {
        return models.Pet.findMany({ type, name });
      }
    },
    pet(
      _,
      {
        input: { name, type }
      },
      { models }
    ) {
      if (name) {
        return models.Pet.findOne({ name });
      } else if (type) {
        return models.Pet.findOne({ type });
      } else {
        return models.Pet.findOne({ type, name });
      }
    }
  }
  // Mutation: {},
  // Pet: {
  //   img(pet) {
  //     return pet.type === "DOG"
  //       ? "https://placedog.net/300/300"
  //       : "http://placekitten.com/300/300";
  //   }
  // },
  // User: {}
};
