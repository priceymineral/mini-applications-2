import React from 'react';

class Form extends React.Component {
  constructor (props) {
  super (props);
  this.state = {
    keyword: ''
  }

  this.onChange = this.onChange.bind(this);
  this.onSubmit = this.onSubmit.bind(this);
  };

  onChange (event) {
    this.setState({[event.target.name]: event.target.value});

  };

  onSubmit (event) {
    event.preventDefault();
    this.props.fetchEventByKeyword(this.state.keyword);
  }

  render () {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>
            Search By Keyword:
            <input type="text" name="keyword" value={this.state.keyword} onChange={this.onChange}/>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  };
};

export default Form;
