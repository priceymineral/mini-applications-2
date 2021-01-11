import React from 'react';

export default class ScoreBoard extends React.Component {
  constructor (props) {
    super (props)
  }


  render () {
    return (
      <div className="score-board-wrapper">
        <div className="score-cards">1st GO
          <div>First score</div>
          <div>{this.props.score.firstScore}</div>
          Second Score
          <div>{this.props.score.secondScore}</div>
          <br/>
          <div>Total</div>
          <div>{this.props.score.firstScore + this.props.score.secondScore}</div>
        </div>

        <div className="score-cards">2nd GO
          <div>First score</div>
          <div>{this.props.score.thirdScore}</div>
          <div>Second Score</div>
          <div>{this.props.score.fourthScore}</div>
          <br/>
          <div>Total</div>
          <div>{this.props.score.thirdScore + this.props.score.fourthScore}</div>
        </div>

        <div className="score-cards">3rd GO
          <div>First score</div>
          <div>{this.props.score.fifthScore}</div>
          <div>Second Score</div>
          <div>{this.props.score.sixthScore}</div>
          <br/>
          <div>Total</div>
          <div>{this.props.score.fifthScore + this.props.score.sixthScore}</div>
        </div>

        <div className="score-cards">4th GO
          <div>First score</div>
          <div>{this.props.score.seventhScore}</div>
          Second Score
          <div>{this.props.score.eigthScore}</div>
          <br/>
          <div>Total</div>
          <div>{this.props.score.seventhScore + this.props.score.eigthScore}</div>
        </div>

        <div className="score-cards">5th GO
          <div>First score</div>
          <div>{this.props.score.ninthScore}</div>
          <div>Second Score</div>
          <div>{this.props.score.tenthScore}</div>
          <br/>
          <div>Total</div>
          <div>{this.props.score.ninthScore + this.props.score.tenthScore}</div>
        </div>

        <div className="score-cards">6th GO
          <div>First score</div>
          <div>{this.props.score.eleventhScore}</div>
          <div>Second Score</div>
          <div>{this.props.score.twelfthScore}</div>
          <br/>
          <div>Total</div>
          <div>{this.props.score.eleventhScore + this.props.score.twelfthScore}</div>
        </div>

        <div className="score-cards">7th GO
          <div>First score</div>
          <div>{this.props.score.thirteenthScore}</div>
          <div>Second Score</div>
          <div>{this.props.score.fourteenthScore}</div>
          <br/>
          <div>Total</div>
          <div>{this.props.score.thirteenthScore + this.props.score.fourteenthScore}</div>
        </div>

        <div className="score-cards">8th GO
          <div>First score</div>
          <div>{this.props.score.fifteenthScore}</div>
          Second Score
          <div>{this.props.score.sixteenthScore}</div>
          <br/>
          <div>Total</div>
          <div>{this.props.score.fifteenthScore + this.props.score.sixteenthScore}</div>
        </div>

        <div className="score-cards">9th GO
          <div>First score</div>
          <div>{this.props.score.seventeenthScore}</div>
          <div>Second Score</div>
          <div>{this.props.score.eighteenthScore}</div>
          <br/>
          <div>Total</div>
          <div>{this.props.score.seventeenthScore + this.props.score.eighteenthScore}</div>
        </div>

        <div className="score-cards">10th GO
          <div>First score</div>
          <div>{this.props.score.nineteenthScore}</div>
          <div>Second Score</div>
          <div>{this.props.score.twentiethScore}</div>
          <br/>
          <div>Total</div>
          <div>{this.props.score.nineteenthScore + this.props.score.twentiethScore}</div>
        </div>
      </div>
    )
  }
}