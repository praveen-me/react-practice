const gql = require("graphql-tag");
const { ApolloServer } = require("apollo-server");

const typeDefs = gql`
  enum ShowType {
    JORDAN
    NIKE
    ADIDDAS
  }

  type User {
    email: String!
    password: String!
    friend: [User]
  }

  interface Shoe {
    brand: ShowType!
    size: Int!
  }

  type Boot implements Shoe {
    brand: ShowType!
    size: Int!
    hasGrip: Boolean!
  }

  type Sneakers implements Shoe {
    brand: ShowType!
    size: Int!
    sport: String!
  }

  type Query {
    me: User!
    shoes: [Shoe]!
  }
`;

const resolvers = {
  Query: {
    me() {
      return {
        email: "test@gmail.com",
        password: "Apple!",
        friend: []
      };
    },
    shoes() {
      return [
        { brand: "JORDAN", size: 14, hasGrip: true },
        { brand: "NIKE", size: 12, sport: "Apple" }
      ];
    }
  },
  Shoe: {
    __resolveType(shoe) {
      if (shoe.hasOwnProperty("hasGrip")) return "Boot";
      return "Sneakers";
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen(4000).then(() => console.log("https://localhost:4000"));
