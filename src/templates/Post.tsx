import React, { FC } from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";

interface Props {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string;
        date: string;
      };
      html: string;
    };
  };
}

const Post: FC<Props> = ({ data }) => (
  <Layout>
    <h1>{data.markdownRemark.frontmatter.title}</h1>
    <div
      className="markdown"
      dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
    />
  </Layout>
);

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
      html
    }
  }
`;

export default Post;
