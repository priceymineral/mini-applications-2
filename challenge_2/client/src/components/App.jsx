import React from 'react'
import axios from 'axios'

class App extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      bpi: {}
    }
  }

  componentDidMount () {
    axios.get('/prices')
      .then(res => {
        this.setState({bpi: res.data.bpi})
      })
      .catch(err => {
        console.log(err)
      })
  }

  render () {
    return (
      <div>
        React Werks
      </div>
    )
  }
}

export default App