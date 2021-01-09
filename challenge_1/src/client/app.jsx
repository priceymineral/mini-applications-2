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
      .then((response) => {
        // console.log('events: ', response.data);
        this.setState({historicEvents: response.data})
      })
      .catch((err) => {
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