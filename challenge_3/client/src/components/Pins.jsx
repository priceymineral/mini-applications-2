import React from 'react';
import ScoreBoard from './ScoreBoard.jsx'

export default class Pins extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      firstScore: 0,
      secondScore: 0,
      thirdScore: 0,
      fourthScore: 0,
      fifthScore: 0,
      sixthScore: 0,
      seventhScore: 0,
      eigthScore: 1,
      ninthScore: 0,
      tenthScore: 0,
      eleventhScore: 0,
      twelfthScore: 0,
      thirteenthScore: 0,
      fourteenthScore: 0,
      fifteenthScore: 0,
      sixteenthScore: 0,
      seventeenthScore: 0,
      eighteenthScore: 0,
      nineteenthScore: 0,
      twentiethScore: 0
    }

    var turn = 0

    this.onClickOne = this.onClickOne.bind(this)
    this.onClickTwo = this.onClickTwo.bind(this)
    this.onClickThree = this.onClickThree.bind(this)
    this.onClickFour = this.onClickFour.bind(this)
    this.onClickFive = this.onClickFive.bind(this)
    this.onClickSix = this.onClickSix.bind(this)
    this.onClickSeven = this.onClickSeven.bind(this)
    this.onClickEight = this.onClickEight.bind(this)
    this.onClickNine = this.onClickNine.bind(this)
    this.onClickTen = this.onClickTen.bind(this)
  }

  onClickOne () {

    if (turn === 0) {
      this.setState({firstScore: 1})
      turn++
    }
    if (turn === 1) {
      this.setState({secondScore: 1})
      turn++
    }
    if (turn === 2) {
      this.setState({thirdScore: 1})
      turn++
    }
    if (turn === 3) {
      this.setState({fourthScore: 1})
      turn++
    }
    if (turn === 4) {
      this.setState({fifthScore: 1})
      turn++
    }
    if (turn === 5) {
      this.setState({sixthScore: 1})
      turn++
    }
    if (turn === 6) {
      this.setState({seventhScore: 1})
      turn++
    }
    if (turn === 7) {
      this.setState({eigthScore: 1})
      turn++
    }
    if (turn === 8) {
      this.setState({ninthScore: 1})
      turn++
    }
    if (turn === 9) {
      this.setState({tenthScore: 1})
      turn++
    }
  }

  onClickTwo () {

    if (this.state.turn === 0) {
      this.setState({firstScore: 2})
      this.state.turn++
    }
    if (this.state.turn === 1) {
      this.setState({secondScore: 2})
      this.state.turn++
    }
    if (this.state.turn === 2) {
      this.setState({thirdScore: 2})
      this.state.turn++
    }
    if (this.state.turn === 3) {
      this.setState({fourthScore: 2})
      this.state.turn++
    }
    if (this.state.turn === 4) {
      this.setState({fifthScore: 2})
      this.state.turn++
    }
    if (this.state.turn === 5) {
      this.setState({sixthScore: 2})
      this.state.turn++
    }
    if (this.state.turn === 6) {
      this.setState({seventhScore: 2})
      this.state.turn++
    }
    if (this.state.turn === 7) {
      this.setState({eigthScore: 2})
      this.state.turn++
    }
    if (this.state.turn === 8) {
      this.setState({ninthScore: 2})
      this.state.turn++
    }
    if (this.state.turn === 9) {
      this.setState({tenthScore: 2})
      this.state.turn++
    }
  }
  onClickThree () {


    if (turn === 0) {
      this.setState({firstScore: 3})
      turn++
    }
    if (turn === 1) {
      this.setState({secondScore: 3})
      turn++
    }
    if (turn === 2) {
      this.setState({thirdScore: 3})
      turn++
    }
    if (turn === 3) {
      this.setState({fourthScore: 3})
      turn++
    }
    if (turn === 4) {
      this.setState({fifthScore: 3})
      turn++
    }
    if (turn === 5) {
      this.setState({sixthScore: 3})
      turn++
    }
    if (turn === 6) {
      this.setState({seventhScore: 3})
      turn++
    }
    if (turn === 7) {
      this.setState({eigthScore: 3})
      turn++
    }
    if (turn === 8) {
      this.setState({ninthScore: 3})
      turn++
    }
    if (turn === 9) {
      this.setState({tenthScore: 3})
      turn++
    }
  }
  onClickFour () {
    const {turn} = this.state

    if (turn === 0) {
      this.setState({firstScore: 4})
      turn++
    }
    if (turn === 1) {
      this.setState({secondScore: 4})
      turn++
    }
    if (turn === 2) {
      this.setState({thirdScore: 4})
      turn++
    }
    if (turn === 3) {
      this.setState({fourthScore: 4})
      turn++
    }
    if (turn === 4) {
      this.setState({fifthScore: 4})
      turn++
    }
    if (turn === 5) {
      this.setState({sixthScore: 4})
      turn++
    }
    if (turn === 6) {
      this.setState({seventhScore: 4})
      turn++
    }
    if (turn === 7) {
      this.setState({eigthScore: 4})
      turn++
    }
    if (turn === 8) {
      this.setState({ninthScore: 4})
      turn++
    }
    if (turn === 9) {
      this.setState({tenthScore: 4})
      turn++
    }
  }
  onClickFive () {
    const {turn} = this.state

    if (turn === 0) {
      this.setState({firstScore: 5})
      turn++
    }
    if (turn === 1) {
      this.setState({secondScore: 5})
      turn++
    }
    if (turn === 2) {
      this.setState({thirdScore: 5})
      turn++
    }
    if (turn === 3) {
      this.setState({fourthScore: 5})
      turn++
    }
    if (turn === 4) {
      this.setState({fifthScore: 5})
      turn++
    }
    if (turn === 5) {
      this.setState({sixthScore: 5})
      turn++
    }
    if (turn === 6) {
      this.setState({seventhScore: 5})
      turn++
    }
    if (turn === 7) {
      this.setState({eigthScore: 5})
      turn++
    }
    if (turn === 8) {
      this.setState({ninthScore: 5})
      turn++
    }
    if (turn === 9) {
      this.setState({tenthScore: 5})
      turn++
    }
  }
  onClickSix () {
    const {turn} = this.state

    if (turn === 0) {
      this.setState({firstScore: 6})
      turn++
    }
    if (turn === 1) {
      this.setState({secondScore: 6})
      turn++
    }
    if (turn === 2) {
      this.setState({thirdScore: 6})
      turn++
    }
    if (turn === 3) {
      this.setState({fourthScore: 6})
      turn++
    }
    if (turn === 4) {
      this.setState({fifthScore: 6})
      turn++
    }
    if (turn === 5) {
      this.setState({sixthScore: 6})
      turn++
    }
    if (turn === 6) {
      this.setState({seventhScore: 6})
      turn++
    }
    if (turn === 7) {
      this.setState({eigthScore: 6})
      turn++
    }
    if (turn === 8) {
      this.setState({ninthScore: 6})
      turn++
    }
    if (turn === 9) {
      this.setState({tenthScore: 6})
      turn++
    }
  }
  onClickSeven () {
    const {turn} = this.state

    if (turn === 0) {
      this.setState({firstScore: 7})
      turn++
    }
    if (turn === 1) {
      this.setState({secondScore: 7})
      turn++
    }
    if (turn === 2) {
      this.setState({thirdScore: 7})
      turn++
    }
    if (turn === 3) {
      this.setState({fourthScore: 7})
      turn++
    }
    if (turn === 4) {
      this.setState({fifthScore: 7})
      turn++
    }
    if (turn === 5) {
      this.setState({sixthScore: 7})
      turn++
    }
    if (turn === 6) {
      this.setState({seventhScore: 7})
      turn++
    }
    if (turn === 7) {
      this.setState({eigthScore: 7})
      turn++
    }
    if (turn === 8) {
      this.setState({ninthScore: 7})
      turn++
    }
    if (turn === 9) {
      this.setState({tenthScore: 7})
      turn++
    }
  }
  onClickEight () {
    const {turn} = this.state

    if (turn === 0) {
      this.setState({firstScore: 8})
      turn++
    }
    if (turn === 1) {
      this.setState({secondScore: 8})
      turn++
    }
    if (turn === 2) {
      this.setState({thirdScore: 8})
      turn++
    }
    if (turn === 3) {
      this.setState({fourthScore: 8})
      turn++
    }
    if (turn === 4) {
      this.setState({fifthScore: 8})
      turn++
    }
    if (turn === 5) {
      this.setState({sixthScore: 8})
      turn++
    }
    if (turn === 6) {
      this.setState({seventhScore: 8})
      turn++
    }
    if (turn === 7) {
      this.setState({eigthScore: 8})
      turn++
    }
    if (turn === 8) {
      this.setState({ninthScore: 8})
      turn++
    }
    if (turn === 9) {
      this.setState({tenthScore: 8})
      turn++
    }
  }
  onClickNine () {
    const {turn} = this.state

    if (turn === 0) {
      this.setState({firstScore: 9})
      turn++
    }
    if (turn === 1) {
      this.setState({secondScore: 9})
      turn++
    }
    if (turn === 2) {
      this.setState({thirdScore: 9})
      turn++
    }
    if (turn === 3) {
      this.setState({fourthScore: 9})
      turn++
    }
    if (turn === 4) {
      this.setState({fifthScore: 9})
      turn++
    }
    if (turn === 5) {
      this.setState({sixthScore: 9})
      turn++
    }
    if (turn === 6) {
      this.setState({seventhScore: 9})
      turn++
    }
    if (turn === 7) {
      this.setState({eigthScore: 9})
      turn++
    }
    if (turn === 8) {
      this.setState({ninthScore: 9})
      turn++
    }
    if (turn === 9) {
      this.setState({tenthScore: 9})
      turn++
    }
  }
  onClickTen () {
    const {turn} = this.state

    if (turn === 0) {
      this.setState({firstScore: 10})
      turn++
    }
    if (turn === 1) {
      this.setState({secondScore: 10})
      turn++
    }
    if (turn === 2) {
      this.setState({thirdScore: 10})
      turn++
    }
    if (turn === 3) {
      this.setState({fourthScore: 10})
      turn++
    }
    if (turn === 4) {
      this.setState({fifthScore: 10})
      turn++
    }
    if (turn === 5) {
      this.setState({sixthScore: 10})
      turn++
    }
    if (turn === 6) {
      this.setState({seventhScore: 10})
      turn++
    }
    if (turn === 7) {
      this.setState({eigthScore: 10})
      turn++
    }
    if (turn === 8) {
      this.setState({ninthScore: 10})
      turn++
    }
    if (turn === 9) {
      this.setState({tenthScore: 10})
      turn++
    }
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
            <button type="submit" text="one" onClick={this.onClickTwo}/>
            <div>Two</div>
          </div>

          <div className="three">
            <button type="submit" text="one" onClick={this.onClickThree}/>
            <div>Three</div>
          </div>

          <div className="four">
            <button type="submit" text="one" onClick={this.onClickFour}/>
            <div>Four</div>
          </div>

          <div className="five">
            <button type="submit" text="one" onClick={this.onClickFive}/>
            <div>Five</div>
          </div>

          <div className="six">
            <button type="submit" text="one" onClick={this.onClickSix}/>
            <div>Six</div>
          </div>

          <div className="seven">
            <button type="submit" text="one" onClick={this.onClickSeven}/>
            <div>Seven</div>
          </div>

          <div className="eight">
            <button type="submit" text="one" onClick={this.onClickEight}/>
            <div>Eight</div>
          </div>

          <div className="nine">
            <button type="submit" text="one" onClick={this.onClickNine}/>
            <div>Nine</div>
          </div>

          <div className="ten">
            <button type="submit" text="one" onClick={this.onClickTen}/>
            <div>Ten</div>
          </div>
        </div>
      </div>
    )
  }
}