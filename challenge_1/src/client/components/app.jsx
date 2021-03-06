import React from 'react';
import axios from 'axios';
import Form from './Form.jsx';
import Events from './Events.jsx';

class App extends React.Component {
  constructor (props) {
  super (props);
    this.state = {
      historicEvents: []
    };

    this.fetchEventByKeyword = this.fetchEventByKeyword.bind(this);
  };

  // componentDidMount () {
  //   axios.get('/events')
  //     .then(res => {
  //       console.log('events: ', res.data);
  //       // this.setState({historicEvents: [res.data[0], res.data[1], res.data[2]]})
  //       this.setState({historicEvents: res.data})
  //     })
  //     .catch(err => {
  //       console.log('error getting events: ', err);
  //     })
  // };

  fetchEventByKeyword (keyword) {
    axios.get(`/events?q=${keyword}&_page=7`)
    // 'http://localhost:3000/users?q=yahoo' for
      .then(res => {
        console.log('events: ', res);
        this.setState({historicEvents: res.data})
      })
      .catch(err => {
        console.log('error getting events: ', err);
      })
  };

  render () {
    return (
      <div>
        <Form  fetchEventByKeyword={this.fetchEventByKeyword}/>
        <div>*******************************************************</div>
        <Events events={this.state.historicEvents} />
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