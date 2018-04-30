import React from 'react'
import { Link as BaseLink } from 'react-router-dom'
import styled from 'styled-components'

export const Layout = ({ children }) => (
  <Wrapper>
    <Header>
      <Title>Filipe Oliveira</Title>
      <SubTitle>Cloud Software Engineer</SubTitle>
      <Menu>
        {/*<Link to='/'>Home</Link>*/}
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
  color: #ffffff;
  text-align: center;
  background-color: #222222;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%23333333' fill-opacity='0.2' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
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
  margin: 0 1em;
  color: #ffffff;
  text-decoration: none;

  &:hover {
    color: #cfcfcf;
  }
`
