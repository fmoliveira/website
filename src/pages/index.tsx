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
        };
      }[];
    };
  };
}

const Index: FC<Props> = ({ data }) => (
  <Layout>
    <Bio />
    <PostsList
      posts={data.allMarkdownRemark.edges.map((edge) => edge.node.frontmatter)}
    />
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
        }
      }
    }
  }
`;

export default Index;
