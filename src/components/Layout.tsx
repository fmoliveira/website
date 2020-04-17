/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { Normalize } from "styled-normalize"
import { ThemeProvider, createGlobalStyle } from "styled-components"

import theme from "../config/theme"
import Header from "./Header"
import Box from "./Box"

const year = new Date().getFullYear()

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    background-color: ${props => props.theme.colors.bodyBackground};
    color: ${props => props.theme.colors.bodyText};
    font-family: ${props => props.theme.fonts.body};
    font-size: 1.6rem;
    line-height: 2.5rem;
  }

  img:not([src*="*.svg"]) {
    filter: grayscale(50%);
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Kameron&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Nunito+Sans:400,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Box m="0 auto" p={[4, 6]} maxWidth={800}>
        {children}
      </Box>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
