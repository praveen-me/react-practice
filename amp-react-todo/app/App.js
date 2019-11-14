import React, { Suspense, lazy } from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Postcard from "./PostCard";

const query = gql`
  query {
    posts {
      nodes {
        id
        title
        excerpt
        featuredImage {
          sourceUrl
        }
        tags {
          nodes {
            name
          }
        }
      }
    }
  }
`;

const App = () => {
  const { error, loading, data } = useQuery(query);

  const posts = data?.posts?.nodes;

  console.log(posts);
  return (
    <main className="main flex flex-wrap text-center my-8 mx-0">
      {posts && posts.map(post => <Postcard {...post} isAmp={true} />)}
    </main>
  );
};

export default App;
