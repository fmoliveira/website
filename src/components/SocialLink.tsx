import React from "react"
import styled from "styled-components"
import { space } from "@styled-system/space"

const socialNetworks = {
  github: { name: "GitHub", bg: "#eff3f6", color: "#333333" },
  twitch: { name: "Twitch", bg: "#6441a4", color: "#e4eaf7" },
  twitter: { name: "Twitter", bg: "#1da1f2", color: "#e4eaf7" },
  youtube: { name: "YouTube", bg: "#ff0000", color: "#e4eaf7" },
}

const StyledLink = styled.a`
  ${space}
  text-decoration: none;
  border-radius: 5px;
  background-color: ${props => socialNetworks[props.network]?.bg};
  color: ${props => socialNetworks[props.network]?.color};
`

const SocialButton = ({ network, url }) => (
  <StyledLink p={3} network={network} href={url} target="_blank">
    {socialNetworks[network]?.name}
  </StyledLink>
)

export default SocialButton
