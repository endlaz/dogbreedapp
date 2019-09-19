import React from 'react'
import { connect } from 'react-redux';
import { resetScore } from '../actions/scoreActions'

class Scorebar extends React.Component{
    render(){
        const { score, streak, totalQuestions, level, successRate} = this.props.scoreState;
        return (
            <div className="score">
                <p>
                    Level {level}
                </p>
                <p>
                    No. of Questions Answered {totalQuestions}
                </p>
                <p>
                    No.of Correct Answers {score}
                </p>
                <p>
                    Success Percentage {successRate}%
                </p>
                <p>Streak: {streak}</p>
                <button onClick={this.props.resetScore}>Reset score</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        scoreState: state.scoreReducer
    }
}

export default connect(mapStateToProps, { resetScore })(Scorebar)