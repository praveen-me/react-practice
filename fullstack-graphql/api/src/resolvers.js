/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

module.exports = {
  Query: {
    pets(_, { input }, { models }) {
      return models.Pet.findMany(input);
    },
    pet(_, { input }, { models }) {
      return models.Pet.findOne(input);
    }
  },
  Mutation: {
    addPet(_, { input }, { models }) {
      return models.Pet.create(input);
    }
  },
  Pet: {
    user(_, __, { user }) {
      return user;
    }
  },
  User: {
    pets(_, __, { models }) {
      return models.Pet.findMany({});
    }
  }
};
