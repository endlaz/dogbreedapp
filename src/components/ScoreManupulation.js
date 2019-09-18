import React from 'react'
import { connect } from 'react-redux';

class ScoreManupulation extends React.Component{
    render(){
        return (
            <div>
                <p>
                    Level {this.props.scoreManupulation.level}
                </p>
                <p>
                    No. of Questions Answered {this.props.scoreManupulation.countOfQuestions}
                </p>
                <p>
                    No.of Correct Answers {this.props.scoreManupulation.countOfCorrectAnswers}
                </p>
                <p>
                    No. of Wrong Answers {this.props.scoreManupulation.countOfWrongAnswers}
                </p>
                <p>
                    Success Percentage {this.props.scoreManupulation.successPercentage}%
                </p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        scoreManupulation : state.scoreManupulation
    }
}

export default connect(mapStateToProps)(ScoreManupulation)