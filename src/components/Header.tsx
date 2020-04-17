import PropTypes from "prop-types"
import React from "react"

import Box from "./Box"
import Link from "./Link"
import Title from "./Title"

const Header = ({ siteTitle }) => (
  <Box px={[4, 6]} py={[4, 5]} bg="headerBackground">
    <Box m="0 auto" maxWidth={800}>
      <Title as="h1">
        <Link to="/">{siteTitle}</Link>
      </Title>
    </Box>
  </Box>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
