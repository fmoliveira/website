import React, { FC } from "react";
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

const Garden: FC<Props> = ({ data }) => (
  <Layout>
    <h1>All Notes</h1>
    <PostsList posts={data.allMarkdownRemark.edges.map((edge) => edge.node)} />
  </Layout>
);

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "garden" } } }
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

export default Garden;
