import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import { Layout } from './components'
import { Home, About, Portfolio, HireMe } from './pages'

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
