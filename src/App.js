import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import { Layout } from './components/layout'

import { Home } from './pages/home'
import { About } from './pages/about'
import { Portfolio } from './pages/portfolio'
import { HireMe } from './pages/hire-me'

export default class App extends Component {
  render() {
    return (
      <Layout>
        <Route path='/' exact component={Home}/>
        <Route path='/about' exact component={About}/>
        <Route path='/portfolio' exact component={Portfolio}/>
        <Route path='/hire-me' exact component={HireMe}/>
      </Layout>
    )
  }
}
