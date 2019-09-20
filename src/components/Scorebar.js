import React from 'react'
import { connect } from 'react-redux';
import { resetScore } from '../actions/scoreActions'

class Scorebar extends React.Component {
    render() {
        const { score, streak, totalQuestions, level, successRate } = this.props.scoreState;
        return (
            <ul className="scorebar">
                <li><strong>Level:</strong> {level}</li>
                <li><strong>Questions Answered:</strong> {totalQuestions}</li>
                <li><strong>Correct Answers:</strong> {score}</li>
                <li><strong>Success Rate:</strong> {successRate}%</li>
                <li><strong>Streak:</strong> {streak}</li>
                <li><button className="btn btn-reset" onClick={this.props.resetScore}>Reset score</button></li>
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        scoreState: state.scoreReducer
    }
}

export default connect(mapStateToProps, { resetScore })(Scorebar)