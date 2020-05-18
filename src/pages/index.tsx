import React, { FC } from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Bio from "../components/Bio";
import PostsList from "../components/PostsList";

interface Props {
  data: {
    allMarkdownRemark: {
      edges: {
        node: {
          frontmatter: {
            title: string;
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

const Index: FC<Props> = ({ data }) => (
  <Layout>
    <Bio />
    <h1>Latest Posts</h1>
    <PostsList posts={data.allMarkdownRemark.edges.map((edge) => edge.node)} />
  </Layout>
);

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            title
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

export default Index;