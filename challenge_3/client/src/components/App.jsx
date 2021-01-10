import React from 'react'

export default class App extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      something: ''
    }
  }

  render () {
    return (
      <div>
        React Werkss
      </div>
    )
  }
}