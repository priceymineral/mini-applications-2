import React from 'react';
import ReactPaginate from 'react-paginate';

class App extends React.Component {
  constructor (props) {
  super (props);

  }

  render () {
    return (
      <div>
        Sup
      </div>
    )
  }
}

export default App;

// Google Scenario - Candidate

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