const gql = require("graphql-tag");
const createTestServer = require("./helper");
const CREATE_POST = gql`
  mutation($input: NewPostInput!) {
    createPost(input: $input) {
      message
    }
  }
`;

describe("mutation", () => {
  const message = { message: "Hello World Again" };

  test("create post", async () => {
    const { mutate } = createTestServer({
      user: { id: 1 },
      models: {
        Post: {
          createOne() {
            return {
              ...message
            };
          }
        },
        user: { id: 1 }
      }
    });

    const res = await mutate({
      query: CREATE_POST,
      variables: {
        input: {
          ...message
        }
      }
    });
    expect(res).toMatchSnapshot();
  });
});
