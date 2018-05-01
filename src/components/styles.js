import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
`

export const Heading = styled.h3`
  margin-top: 1.5em;
  padding-bottom: 0.25em;
  border-bottom: 0.1rem solid #cfcfcf;

  &:first-of-type {
    margin-top: 0.5em;
  }
`

export const Link = styled.a`
  color: #1588ea;
  text-decoration: none;

  &:hover {
    color: #40b5db;
  }
`
