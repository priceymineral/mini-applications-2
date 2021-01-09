import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor (props) {
  super (props);
    this.state = {
      historicEvents: []
    };
  };

  componentDidMount () {
    axios.get('/events')
      .then(res => {
        console.log('events: ', res.data);
        this.setState({historicEvents: res.data})
      })
      .catch(err => {
        console.log('error getting events: ', err);
      })
  };

  fetchEventByKeyword (keyword) {
    axios.get(`/events?q=${keyword}`)
    // 'http://localhost:3000/users?q=yahoo' for
      .then(res => {
        console.log('events: ', res.data);
        this.setState({historicEvents: res.data})
      })
      .catch(err => {
        console.log('error getting events: ', err);
      })
  };

  render () {
    return (
      <div>
        Nothing
      </div>
    )
  };
};

export default App;

// <ReactPaginate
// previousLabel={'previous'}
// nextLabel={'next'}
// breakLabel={'...'}
// breakClassName={'break-me'}
// // pageCount={this.state.pageCount}
// marginPagesDisplayed={2}
// pageRangeDisplayed={5}
// // onPageChange={this.handlePageClick}
// containerClassName={'pagination'}
// subContainerClassName={'pages pagination'}
// activeClassName={'active'}
// />