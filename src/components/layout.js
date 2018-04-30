import React from 'react'
import { Link as BaseLink } from 'react-router-dom'
import styled from 'styled-components'

export const Layout = ({ children }) => (
  <Wrapper>
    <Header>
      <Title>Filipe Oliveira</Title>
      <SubTitle>Cloud Software Engineer</SubTitle>
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
  margin-top: 2em;
  margin-bottom: 0.25em;
  font-size: 2.5em;
  font-weight: bold;
`

const SubTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 5em;
  font-size: 1em;
  font-weight: normal;
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
