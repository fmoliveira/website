import styled from "styled-components"

const Title = styled.span`
  font-family: ${props => props.theme.fonts.heading};
  margin: 0;
  color: ${props => props.theme.colors.titleText};

  a {
    text-decoration: none;
  }
`

export default Title
