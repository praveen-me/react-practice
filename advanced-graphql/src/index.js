const {
  ApolloServer,
  AuthenticationError,
  UserInputError,
  ApolloError
} = require("apollo-server");
const typeDefs = require("./typedefs");
const resolvers = require("./resolvers");
const { createToken, getUserFromToken } = require("./auth");
const db = require("./db");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  async context({ req, connection }) {
    if (connection) {
      return { ...db, ...connection.context };
    } else {
      const token = req.headers.authorization;
      const user = getUserFromToken(token);

      return { ...db, user, createToken };
    }
  },
  subscriptions: {
    onConnect(connectionParams) {
      if (connectionParams.Authorization) {
        const user = getUserFromToken(connectionParams.Authorization);

        if (!user) {
          throw new Error("No User Found");
        }

        return { user };
      }

      throw new Error("not authenticated");
    }
  }
});

server.listen(4000).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
