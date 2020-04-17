import React from "react"
import { Link as GatsbyLink } from "gatsby"
import styled from "styled-components"
import { color, typography } from "styled-system"

const Link = styled(GatsbyLink)`
  color: ${props => props.theme.colors.linkText};
  ${color}
  ${typography}

  &:hover {
    color: ${props => props.theme.colors.linkHoverText};
  }
`

export default Link
