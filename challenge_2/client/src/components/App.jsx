import React from 'react'
import axios from 'axios'
import BpiChart from './Chart.jsx'

export default class App extends React.Component {
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
        <BpiChart bpi={this.state.bpi}/>
        <div>
        --------------------------------------------------------Powered By CoinDesk
        </div>
      </div>
    )
  }
}

// export default App