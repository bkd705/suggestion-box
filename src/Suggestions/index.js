import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class Suggestions extends Component {
  render() {
    const { allSuggestions } = this.props.data
    const suggestionList = (allSuggestions || []).map(({ id, text, user }) =>
      <li key={id}>
        {text} by {user.username}
      </li>
    )

    return (
      <ul>
        {suggestionList}
      </ul>
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

export default graphql(SuggestionQuery)(Suggestions)
