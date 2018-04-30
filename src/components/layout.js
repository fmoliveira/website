import React from 'react'
import { Link as BaseLink } from 'react-router-dom'
import styled from 'styled-components'

export const Layout = ({ children }) => (
  <Wrapper>
    <Header>
      <Title>Filipe Oliveira</Title>
      <Menu>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/portfolio'>Portfolio</Link>
        <Link to='/hire-me'>Hire Me</Link>
      </Menu>
    </Header>
    <Body>
      {children}
    </Body>
  </Wrapper>
)

const Wrapper = styled.div`
`

const Header = styled.div`
  padding: 1em;
  background-color: #222222;
  color: #ffffff;
  text-align: center;
`

const Body = styled.div`
  padding: 1em;
`

const Title = styled.h1`
  margin: 2em;
`

const Menu = styled.div`
  padding-bottom: 0.5em;
`

const Link = styled(BaseLink)`
  margin: 0 0.5em;
  color: #ffffff;
  text-decoration: none;

  &:hover {
    color: #cfcfcf;
  }
`
