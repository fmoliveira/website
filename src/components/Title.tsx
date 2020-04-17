import styled from "styled-components"
import { color } from "styled-system"

const Title = styled.span`
  font-family: ${props => props.theme.fonts.heading};
  margin: 0;
  ${color}

  a {
    text-decoration: none;
  }
`

export default Title
