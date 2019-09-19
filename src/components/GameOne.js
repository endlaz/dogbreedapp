import React from 'react'
import './GameOne.css'
import { connect } from 'react-redux'
import Scorebar from './Scorebar'
// import { AddPara } from '../actions/actioncreator'
import { getDogsList } from '../actions/dogsActions'
import { setInitialGameBreeds, setQuestion } from '../actions/gameActions'
import { updateScore } from '../actions/scoreActions'
import _ from 'lodash';
//import {scoremanupulation} from '../actions/actioncreator'

class GameOne extends React.Component {
    componentDidMount() {
        this.props.getDogsList();
    }

    // HINT
    //  handleevent = (e) =>{ 
    //     this.props.selectedbreedList.map(data => {
    //         if(data !== this.props.breedName[0]){
    //             this.message = `The dog is not ${data}`
    //         }
    //     })
    //     console.log(this.message)
    //     this.props.AddPara(this.message);

    // }

    checkAnswer = (e) => {
        let { score, streak, totalQuestions, level, successRate } = this.props.scoreState;
        // this.countOfQuestions += 1;
        // console.log(this.props.breedName)
        const val = e.target.value;
        // console.log(score)
        if (val === this.props.breedName[0]) {
            // this.countOfCorrectAnswers += 1;
            // this.counterForDifficulty += 1;
            // console.log(this.counterForDifficulty);
            alert('You selected the correct Answer');
            score = score + 1
            streak = streak + 1

            if (streak % 5 === 0) {
                level = level + 1
                this.props.handlesubmit(this.counter, 'difficult');
            }

            // if (this.counterForDifficulty % 5 === 0) {
            //     this.level += 1;
            //     this.counter += 3;
            //     this.props.handlesubmit(this.counter, 'difficult');
            // }

        }
        else {

            // this.countOfWrongAnswers += 1;
            // this.counterForDifficulty = 0;

            alert(`Oops !!!! Wrong Answer. The correct Answer is ${this.props.breedName[0]}`)
            streak = 0;
            // this.props.handlesubmit(3)
        }
        this.props.handlesubmit(3);
        totalQuestions = totalQuestions + 1;
        successRate = Math.round((score / totalQuestions) * 100)

        this.props.updateScore(score, streak, totalQuestions, level, successRate)
    }

    render() {
        console.log(this.props.breedName)
        // console.log(this.message)
        return (

            <React.Fragment>
                <section className="game-container">
                    <Scorebar />
                    <div id="game">
                        
                        {/* {<img src={this.props.breedImage} alt="dog"></img>} */}
                        <div>
                            {this.props.selectedbreedList.map((data, i) => {
                                console.log(data)
                                return (
                                    <div>
                                        <button onClick={this.checkAnswer} value={data} key={i}>{data}</button>
                                    </div>

                                )
                            })}
                        </div>
                        {/* <button onClick={this.handleevent} > Hint </button> */}
                        {/* <p>{this.props.scoreManupulation.hint} </p> */}
                    </div>
                </section>
            </React.Fragment>

        )
    }

}


const mapStateToProps = (state) => {
    return {
        scoreState: state.scoreReducer,
        gameState: state.gameReducer
        //scoreManupulation : state.scoreManupulation
    }
}
export default connect(mapStateToProps, {
    getDogsList,
    updateScore,
    setInitialGameBreeds,
    setQuestion
})(GameOne)

