const { gql } = require("apollo-server");

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    pets: [Pet]!
  }

  type Pet {
    id: ID!
    createdAt: String
    name: String!
    type: String!
    user: User!
  }

  input PetInput {
    name: String
    type: String
  }

  input AddPetInput {
    name: String!
    type: String!
  }

  type Query {
    pets(input: PetInput): [Pet]!
    user: User!
    pet(input: PetInput): Pet!
  }

  type Mutation {
    addPet(input: AddPetInput): Pet!
  }
`;

module.exports = typeDefs;
