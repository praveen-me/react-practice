const resolver = require("../src/resolvers");

describe("resolvers", () => {
  test("query feed", () => {
    const result = resolver.Query.feed(null, null, {
      models: {
        Post: {
          findMany() {
            return ["Hello World", "Hello World Again"];
          }
        }
      }
    });

    expect(result).toEqual(["Hello World", "Hello World Again"]);
  });
});
