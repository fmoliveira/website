import styled from "styled-components"

import Box from "./Box"

const Inline = styled(Box)`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;

  & > *:not(:last-child) {
    margin-right: ${props => props.theme.space[props.space]};
  }
`

export default Inline
