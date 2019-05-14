import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Menu from "../components/menu";
import Project from "../components/project";
import SEO from "../components/seo";
import { rhythm } from "../utils/typography";

import personalProjects from "../constants/personal-projects.json";
import professionalWork from "../constants/professional-work.json";

const standardMargin = { margin: `${rhythm(1)} 0` };

const ListProjects = ({ projects }) =>
  projects.map(p => (
    <Project
      key={p.name}
      name={p.name}
      description={p.description}
      year={p.year}
      image={p.image}
      links={p.links}
    />
  ));

class Portfolio extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Portfolio"
          keywords={[`portfolio`, `gatsby`, `javascript`, `react`]}
        />
        <Menu location={this.props.location} />
        <div style={standardMargin}>
          <p>
            Here you can check out a little bit of my professional work and
            personal projects. Please take in account that I cannot provide
            access and screenshots for most of my professional work because of
            NDAs, but I'm sharing here everything I can.
          </p>
          <p>
            I currently work as a freelance Software Engineer through Upwork,
            and you can check{" "}
            <a
              href="https://www.upwork.com/freelancers/~01d039e62ae6453db2"
              target="_blank"
              rel="noopener noreferrer"
            >
              my public profile here
            </a>
            .
          </p>
          <h4 style={standardMargin}>Professional work</h4>
          <ListProjects projects={professionalWork} />
          <h4 style={standardMargin}>Personal projects</h4>
          <ListProjects projects={personalProjects} />
        </div>
      </Layout>
    );
  }
}

export default Portfolio;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
