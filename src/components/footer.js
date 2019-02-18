import React from "react";
import { StaticQuery, graphql } from "gatsby";

function Footer() {
  return (
    <StaticQuery
      query={footerQuery}
      render={data => {
        const { social } = data.site.siteMetadata;
        return (
          <footer>
            <a
              href={`https://github.com/${social.github}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>{" "}
            &bull;{" "}
            <a
              href={`https://twitter.com/${social.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              twitter
            </a>
          </footer>
        );
      }}
    />
  );
}

const footerQuery = graphql`
  query FooterQuery {
    site {
      siteMetadata {
        social {
          github
          twitter
        }
      }
    }
  }
`;

export default Footer;
