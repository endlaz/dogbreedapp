import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDogsList, getRandomImages } from '../actions/dogs'
import { startGameThree, setInitialGameBreeds, updateScore } from '../actions/gameThree'
import _ from 'lodash';
import Score from './Score';

class GameThree extends Component {
    componentDidMount() {
        this.props.getDogsList();
    }

    startGame = () => {
        const start = new Promise((resolve, reject) => {
            this.props.startGameThree();
            this.props.setInitialGameBreeds(this.props.dogsList, this.props.gameThree.level);
            console.log('Init breed array', this.props.gameThree.breeds)
            console.log('Promise done?')
            resolve()
        })

        start.then(() => {
            const correctBreed = _.sample(this.props.gameThree.breeds)
            console.log('Correct breed', correctBreed)

            this.props.getRandomImages(correctBreed)
        })
    }

    shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    checkAnswer = (answer) => {
        let { score, streak, totalQuestions, level, breeds } = this.props.gameThree;
        if (answer === this.props.dogDetails.breed) {
            alert(`${answer} is the right answer`)
            score = score + 1
            streak = streak + 1
            if (streak % 5 === 0) {
                level = level + 1
                // var filtered = [1, 2, 3, 4].filter(
                //     function(e) {
                //       return this.indexOf(e) < 0;
                //     },
                //     [2, 4]
                // );
                const threeNewOptions = _.sampleSize(this.props.dogsList.filter(
                    function(e) { return this.indexOf(e) < 0}, 
                    this.props.gameThree.breeds
                ), 3)
                console.log(threeNewOptions);
                breeds.push(...threeNewOptions)
            }
        } else {
            alert(`${answer} is the wrong answer`)
            streak = 0
        }
        totalQuestions = totalQuestions + 1
        this.props.updateScore(score, streak, totalQuestions, level, breeds)

        const correctBreed = _.sample(this.props.gameThree.breeds)
        // console.log('Correct breed', correctBreed)

        this.props.getRandomImages(correctBreed)
    }

    render() {
        const { start } = this.props.gameThree;
        if (this.props.dogDetails.breed) console.log('dog details', this.props.dogDetails)
        // console.log('Options', this.props.gameThree.breeds)
        // Filter correct answer out
        const allWrongAnswers = this.props.gameThree.breeds.filter(item => {
            if (item !== this.props.dogDetails.breed) {
                return item;
            }
            return null;
        })
        // console.log('All wrong answers:', allWrongAnswers)
        // Pick two wrong answers
        const wrongOptions = _.sampleSize(allWrongAnswers, 2)
        // console.log('Wrong options:', wrongOptions)
        // Add correct answer to array
        const gameOptions = [...wrongOptions, this.props.dogDetails.breed]
        //  console.log('Options to pick from:', gameOptions)
        // Shuffle array
        //  console.log('Shuffle options:', this.shuffle(gameOptions))
        // Display options

        return (<React.Fragment>
            <h1>Game 3</h1>
            {start === false && <button onClick={this.startGame}>Start game</button>}

            {start === true && <React.Fragment><Score /><img key={this.props.dogDetails.images[0]} src={this.props.dogDetails.images[0]} alt={this.props.dogDetails.breed} /></React.Fragment>}
            {start === true && this.shuffle(gameOptions).map(item => {
                return <button key={item} onClick={() => this.checkAnswer(item)}>{item}</button>
            })}
        </React.Fragment>);
    }
}

const mapStateToProps = (state) => {
    return {
        dogsList: state.dogsList,
        gameThree: state.gameThree,
        dogDetails: state.dogDetails
    }
}

export default connect(mapStateToProps, { getDogsList, startGameThree, setInitialGameBreeds, getRandomImages, updateScore })(GameThree)