import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://rtcamp-clone.dev5.rt.gw/graphql"
});

export default client;
