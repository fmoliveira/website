import React, { FC } from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";

import Layout from "../components/Layout";

interface Props {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string;
        type: string;
        date: string;
      };
      html: string;
    };
  };
}

const Post: FC<Props> = ({ data }) => {
  const { title, type, date } = data.markdownRemark.frontmatter;
  const fullTitle = [title, type || ""].join(" ");

  return (
    <Layout>
      <Helmet>
        <title>{fullTitle}</title>
      </Helmet>
      <h1 className="mb-0">{fullTitle}</h1>
      <p className="mb-8 text-sm">{date}</p>
      <div
        className="markdown"
        dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
      />
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        type
        date(formatString: "DD MMMM, YYYY")
      }
      html
    }
  }
`;

export default Post;
