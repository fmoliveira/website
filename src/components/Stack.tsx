import React from "react"
import styled from "styled-components"

import Box from "./Box"

const Stack = styled(Box)`
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: ${props => props.theme.space[props.space]};
  }
`

export default Stack
