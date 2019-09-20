import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getDogsList } from '../actions/dogsActions'
// import { getWrongImages } from '../actions/gameTwo'
import { updateScore } from '../actions/scoreActions'
import { setInitialGameBreeds, setQuestion, startGame, stopGame } from '../actions/gameActions'
import Scorebar from './Scorebar'
import _ from 'lodash';

class GameTwoComponent extends Component {
    //this.randomImage=this.props.randomImage


    componentDidMount() {
        this.props.getDogsList()
    }

    componentWillUnmount() {
        this.props.stopGame()
    }

    eventHandler = () => {
        this.props.setInitialGameBreeds(this.props.dogsList, this.props.scoreState.level)
        this.props.startGame();
        this.props.setQuestion();



        // const randomDog = get_random(this.props.dogsList)
        // this.props.getRandomImages(randomDog, 1)
        // this.props.getWrongImages()
    }

    clickImage = (answer, options) => {
        let { score, streak, totalQuestions, level, successRate} = this.props.scoreState;

        if (answer === this.props.gameState.correctOption.image) {
            alert("Correct answer")
            score = score + 1
            streak = streak + 1

            if (streak % 5 === 0) {
                level = level + 1
                // add 3 random
                const threeNewOptions = _.sampleSize(this.props.dogsList.filter(
                    function(e) { return this.indexOf(e) < 0}, 
                    this.props.gameState.breeds
                ), 3)
                console.log(threeNewOptions);
                this.props.gameState.breeds.push(...threeNewOptions)
            }

        } else {
            alert("That's wrong. The correct option is picture "+ (parseInt(options.indexOf(this.props.gameState.correctOption.image))+1))
            streak = 0;
        }

        totalQuestions = totalQuestions + 1;
        successRate = Math.round((score / totalQuestions)*100)

        this.props.updateScore(score, streak, totalQuestions, level, successRate)

        this.eventHandler()
    }

    render() {
        let options = []
        if (this.props.gameState.correctOption !== null) {
            options.push(this.props.gameState.correctOption.image)
            this.props.gameState.wrongOptions.map(wrongOption => {
                options.push(wrongOption.image)
            })
        }
        const shuffledOptions = _.shuffle([...options]);

        return (<React.Fragment>
            <h1>Game 2</h1>
            {(this.props.gameState.correctOption === null || this.props.gameState.start === false) && <button className="btn btn-start" onClick={this.eventHandler} >START GAME</button>}

            {this.props.gameState.correctOption !== null && this.props.gameState.start === true && <div>
            <Scorebar />
            <p>What is the corresponding image for <b>{this.props.gameState.correctOption.breed}</b></p>
            {shuffledOptions.map(option => {
                return <img onClick={() => this.clickImage(option, shuffledOptions)} src={option} alt={option} className="game-image-option" />
            })}
        </div>}
        </React.Fragment>)
    }
}

const mapStateToProps = (state) => {
    return {
        dogsList: state.dogsList,
        dogDetails: state.dogDetails,
        wrongImages: state.gametwo,
        scoreState: state.scoreReducer,
        gameState: state.gameReducer
    }
}

export default connect(mapStateToProps, { getDogsList,
    updateScore,
    setInitialGameBreeds,
    setQuestion,
    startGame, 
    stopGame })(GameTwoComponent)