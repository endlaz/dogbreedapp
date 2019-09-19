import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getDogsList, getRandomImages } from '../actions/dogsActions'
import { getWrongImages } from '../actions/gameTwo'
import { updateScore } from '../actions/scoreActions'
import Scorebar from './Scorebar'

class GameTwoComponent extends Component {
    //this.randomImage=this.props.randomImage


    componentDidMount() {
        this.props.getDogsList()
    }

    eventHandler = () => {

        const randomDog = get_random(this.props.dogsList)
        this.props.getRandomImages(randomDog, 1)
        this.props.getWrongImages()
    }

    clickImage = (img) => {
        let { score, streak, totalQuestions, level, successRate} = this.props.scoreState;

        if (img === this.props.dogDetails.images[0]) {
            alert("Correct answer")
            score = score + 1
            streak = streak + 1

            if (streak % 5 === 0) {
                level = level + 1
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
        if (this.props.dogDetails.breed === '') {
            return <button onClick={this.eventHandler} >START GAME 2</button>
        }

        return <div>
            <Scorebar />
            <p>What is the corresponding image for <b>{this.props.dogDetails.breed}</b></p>
            {this.props.dogDetails.images.map(image => {
                return <img onClick={() => this.clickImage(image)} src={image} alt="img" />
            })}

            {this.props.wrongImages.wrongImages.map(wrongImage => {
                return <img onClick={() => this.clickImage(wrongImage)} src={wrongImage} alt="img2" />
            })}


        </div>
    }
}

const get_random = function (list) {
    return list[Math.floor((Math.random() * list.length))];
}

const mapStateToProps = (state) => {

    // console.log(randomDog)
    // 3.) get randomDogURL from the redux state -> put into component as props
    return {
        dogsList: state.dogsList,
        dogDetails: state.dogDetails,
        wrongImages: state.gametwo,
        scoreState: state.scoreReducer


        //randomDog: state.randomDog
        //   randomDog: state.randomDog
    }
}

export default connect(mapStateToProps, { getDogsList, getRandomImages, getWrongImages, updateScore })(GameTwoComponent)