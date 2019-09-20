import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getDogsList } from '../actions/dogsActions'
// import { getWrongImages } from '../actions/gameTwo'
import { updateScore } from '../actions/scoreActions'
import { setInitialGameBreeds, setQuestion } from '../actions/gameActions'
import Scorebar from './Scorebar'
import _ from 'lodash';

class GameTwoComponent extends Component {
    //this.randomImage=this.props.randomImage


    componentDidMount() {
        this.props.getDogsList()
    }

    eventHandler = () => {
        this.props.setInitialGameBreeds(this.props.dogsList, this.props.scoreState.level)
        this.props.setQuestion();



        // const randomDog = get_random(this.props.dogsList)
        // this.props.getRandomImages(randomDog, 1)
        // this.props.getWrongImages()
    }

    clickImage = (answer) => {
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
            alert("That's wrong")
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

        if (this.props.gameState.correctOption === null) {
            return <button className="btn btn-start" onClick={this.eventHandler} >START GAME 2</button>
        }

        return (this.props.gameState.correctOption !== null && <div>
            <Scorebar />
            <p>What is the corresponding image for <b>{this.props.gameState.correctOption.breed}</b></p>
            {_.shuffle(options.map(option => {
                return <img onClick={() => this.clickImage(option)} src={option} alt={option} className="game-image-option" />
            }))}
        </div>)
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
    setQuestion })(GameTwoComponent)