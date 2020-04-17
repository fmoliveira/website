import PropTypes from "prop-types"
import React from "react"

import Box from "./Box"
import Link from "./Link"
import Title from "./Title"

const Header = ({ siteTitle }) => (
  <Box px={6} py={5} bg="headerBackground">
    <Title as="h1">
      <Link to="/">{siteTitle}</Link>
    </Title>
  </Box>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
