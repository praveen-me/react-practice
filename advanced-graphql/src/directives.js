const { SchemaDirectiveVisitor } = require("apollo-server");
const { defaultFieldResolver, GraphQLString } = require("graphql");
const { AuthenticationError } = require("apollo-server");
const { formatDate } = require("./utils");

class FormatDateDirective extends SchemaDirectiveVisitor {
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

class AuthenticationDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    const { resolve = defaultFieldResolver } = field;

    field.resolve = async (root, args, ctx, info) => {
      if (!ctx.user) {
        throw new AuthenticationError("Not Authenticated");
      }
      return resolve(root, args, ctx, info);
    };
  }
}

class AuthorizationDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    const { resolve = defaultFieldResolver } = field;
    const { role } = this.args;

    field.resolve = async (root, args, ctx, info) => {
      if (ctx.user.role !== role) {
        throw new AuthenticationError("Not Authenticated");
      }
      return resolve(root, args, ctx, info);
    };
  }
}

module.exports = {
  FormatDateDirective,
  AuthorizationDirective,
  AuthenticationDirective
};
