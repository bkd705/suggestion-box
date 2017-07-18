import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

const SuggestionQuery = gql`
  query allSuggestions {
    allSuggestions(orderBy: createdAt_DESC) {
      id
      user {
        id
        username
      }
      text
    }
  }
`

export default graphql(SuggestionQuery)(App)
