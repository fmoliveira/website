import React, { FC } from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import PostsList from "../components/PostsList";

interface Props {
  data: {
    allMarkdownRemark: {
      edges: {
        node: {
          frontmatter: {
            title: string;
            type: string;
            date: string;
          };
          fields: {
            slug: string;
          };
        };
      }[];
    };
  };
}

const Posts: FC<Props> = ({ data }) => (
  <Layout>
    <Helmet>
      <title>All Posts</title>
    </Helmet>
    <h1>All Posts</h1>
    <PostsList posts={data.allMarkdownRemark.edges.map((edge) => edge.node)} />
  </Layout>
);

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: null } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            type
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default Posts;
