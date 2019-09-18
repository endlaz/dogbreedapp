import React, { Component } from 'react';
import { connect } from 'react-redux';

class Score extends Component {
    render() { 
        return ( 
            <div>
                <p>Score: {this.props.gameThree.score}</p>
                <p>Success rate: {this.props.gameThree.successRate.toFixed(2)}%</p>
                <p>Total questions: {this.props.gameThree.totalQuestions}</p>
                <p>Steak: {this.props.gameThree.streak}</p>
                <p>Level: {this.props.gameThree.level}</p>
            </div>
         );
    }
}
 
const mapStateToProps = (state) => {
    return {
        gameThree: state.gameThree
    }
}

export default connect(mapStateToProps)(Score)