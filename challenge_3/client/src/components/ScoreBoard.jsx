import React from 'react';

export default class ScoreBoard extends React.Component {
  constructor (props) {
    super (props)
    // this.state = {
      // firstScore: 1,
      // secondScore: 2,
      // thirdScore: 3,
    // }
  }


  render () {
    return (
      <div className="score-board-wrapper">
        <div className="score-cards">FIRST GO
          <div>First score</div>
          <div>{this.props.score.firstScore}</div>
          Second Score
          <div>{this.props.score.secondScore}</div>
          <br/>
          <div>Total</div>
          <div>{this.props.score.firstScore + this.props.score.secondScore}</div>
        </div>

        <div className="score-cards">SECOND GO
          <div>First score</div>
          <div>{this.props.score.thirdScore}</div>
          <div>Second Score</div>
          <div>{this.props.score.fourthScore}</div>
          <br/>
          <div>Total</div>
          <div>{this.props.score.thirdScore + this.props.score.fourthScore}</div>
        </div>

      </div>
    )
  }
}