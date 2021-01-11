import React from 'react';
import ScoreBoard from './ScoreBoard.jsx'

export default class Pins extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      once: false,
      turn: 0,
      firstScore: 0,
      secondScore: 0,
      thirdScore: 0,
      fourthScore: 0
    }

    this.state.onClickOne = this.onClickOne.bind(this)
  }

  onClickOne () {
    console.log('clicked one', this.state)
    if (this.state.turn === 0) {
      console.log('in === 0')
      this.setState({firstScore: 1})
      // this.state.turn++
    }
    if (this.state.turn === 1) {
      this.setState({secondScore: 1})
      // this.state.turn++
    }
    if (this.state.turn === 2) {
      this.setState({thirdScore: 1})
      // this.state.turn++
    }
    if (this.state.turn === 3) {
      this.setState({fourthScore: 1})
      // this.state.turn++
    }
    // if (this.state.turn === 4) {
    //   this.setState({firstScore: 1})
    //   this.state.turn++
    // }
    // if (this.state.turn === 5) {
    //   this.setState({firstScore: 1})
    //   this.state.turn++
    // }
    // if (this.state.turn === 6) {
    //   this.setState({firstScore: 1})
    //   this.state.turn++
    // }
    // if (this.state.turn === 7) {
    //   this.setState({firstScore: 1})
    //   this.state.turn++
    // }
    // if (this.state.turn === 8) {
    //   this.setState({firstScore: 1})
    //   this.state.turn++
    // }
    // if (this.state.turn === 9) {
    //   this.setState({firstScore: 1})
    //   this.state.turn++
    // }

  }

  render () {
    return (
      <div>
        <ScoreBoard score={this.state}/>
        <div className="wrapper">

          <div className="one">
            <button type="submit" text="one" onClick={this.onClickOne}/>
            <div>One</div>
          </div>
          <div className="two">
            <button type="submit" text="one" onClick={this.onClickOne}/>
            <div>Two</div>
          </div>

          <div className="three">
            <button type="submit" text="one" onClick={this.onClickOne}/>
            <div>Three</div>
          </div>

          <div className="four">
            <button type="submit" text="one" onClick={this.onClickOne}/>
            <div>Four</div>
          </div>

          <div className="five">
            <button type="submit" text="one" onClick={this.onClickOne}/>
            <div>Five</div>
          </div>

          <div className="six">
            <button type="submit" text="one" onClick={this.onClickOne}/>
            <div>Six</div>
          </div>

          <div className="seven">
            <button type="submit" text="one" onClick={this.onClickOne}/>
            <div>Seven</div>
          </div>

          <div className="eight">
            <button type="submit" text="one" onClick={this.onClickOne}/>
            <div>Eight</div>
          </div>

          <div className="nine">
            <button type="submit" text="one" onClick={this.onClickOne}/>
            <div>Nine</div>
          </div>

          <div className="ten">
            <button type="submit" text="one" onClick={this.onClickOne}/>
            <div>Ten</div>
          </div>
        </
        div>
      </div>
    )
  }
}