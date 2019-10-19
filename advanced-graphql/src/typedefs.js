const { SchemaDirectiveVisitor } = require("apollo-server");
const { defaultFieldResolver, GraphQLString } = require("graphql");
const gql = require("graphql-tag");
const { formatDate } = require("./utils");

class FormatDate extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    const { resolve = defaultFieldResolver } = field;
    const { defaultFormat } = this.args;
    field.args.push({
      type: GraphQLString,
      name: "format"
    });

    field.resolve = async (source, { format, ...args }, context, info) => {
      const date = await resolve.call(this, source, args, context, info);

      return formatDate(date, format || defaultFormat);
    };
  }
}

module.exports = {
  FormatDate,
  typeDefs: gql`
    directive @formatDate(
      defaultFormat: String = "mm dd yyyy"
    ) on FIELD_DEFINITION

    enum Theme {
      DARK
      LIGHT
    }

    enum Role {
      ADMIN
      MEMBER
      GUEST
    }

    type User {
      id: ID!
      email: String!
      avatar: String!
      verified: Boolean!
      createdAt: String! @formatDate
      posts: [Post]!
      role: Role!
      settings: Settings!
    }

    type AuthUser {
      token: String!
      user: User!
    }

    type Post {
      id: ID!
      message: String!
      author: User!
      createdAt: String!
      likes: Int!
      views: Int!
    }

    type Settings {
      id: ID!
      user: User!
      theme: Theme!
      emailNotifications: Boolean!
      pushNotifications: Boolean!
    }

    type Invite {
      email: String!
      from: User!
      createdAt: String!
      role: Role!
    }

    input NewPostInput {
      message: String!
    }

    input UpdateSettingsInput {
      theme: Theme
      emailNotifications: Boolean
      pushNotifications: Boolean
    }

    input UpdateUserInput {
      email: String
      avatar: String
      verified: Boolean
    }

    input InviteInput {
      email: String!
      role: Role!
    }

    input SignupInput {
      email: String!
      password: String!
      role: Role!
    }

    input SigninInput {
      email: String!
      password: String!
    }

    type Query {
      me: User!
      posts: [Post]!
      post(id: ID!): Post!
      userSettings: Settings!
      feed: [Post]!
    }

    type Mutation {
      updateSettings(input: UpdateSettingsInput!): Settings!
      createPost(input: NewPostInput!): Post!
      updateMe(input: UpdateUserInput!): User
      invite(input: InviteInput!): Invite!
      signup(input: SignupInput!): AuthUser!
      signin(input: SigninInput!): AuthUser!
    }

    type Subscription {
      newPost: Post!
    }
  `
};
