import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getDogsList } from '../actions/dogsActions'
import { updateScore } from '../actions/scoreActions'
import { setInitialGameBreeds, setQuestion, showBreedHint, startGame, stopGame } from '../actions/gameActions'
import Scorebar from './Scorebar'
import _ from 'lodash';

class GameOneComponent extends Component {
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
  }

  clickImage = (answer) => {
    let { score, streak, totalQuestions, level, successRate } = this.props.scoreState;

    if (answer === this.props.gameState.correctOption.breed) {
      alert("Correct answer")
      score = score + 1
      streak = streak + 1

      if (streak % 5 === 0) {
        level = level + 1
        // add 3 random
        const threeNewOptions = _.sampleSize(this.props.dogsList.filter(
          function (e) { return this.indexOf(e) < 0 },
          this.props.gameState.breeds
        ), 3)
        console.log(threeNewOptions);
        this.props.gameState.breeds.push(...threeNewOptions)
      }

    } else {
      alert("That's wrong. The correct answer is " + this.props.gameState.correctOption.breed)
      streak = 0;
    }

    totalQuestions = totalQuestions + 1;
    successRate = Math.round((score / totalQuestions) * 100)

    this.props.updateScore(score, streak, totalQuestions, level, successRate)

    this.eventHandler()
  }

  render() {
    let options = []
    if (this.props.gameState.correctOption !== null) {
      options.push(this.props.gameState.correctOption.breed)
      this.props.gameState.wrongOptions.map(wrongOption => {
        options.push(wrongOption.breed)
        return null;
      })
    }

    return (<React.Fragment>
      <h1>Game 1</h1>
      {(this.props.gameState.correctOption === null || this.props.gameState.start === false) && <button className="btn btn-start" onClick={this.eventHandler} >START GAME</button>}

      {this.props.gameState.correctOption !== null && this.props.gameState.start === true && <div>
        <Scorebar />
        <p>What is the corresponding breed for this image</p>
        <img src={this.props.gameState.correctOption.image} alt={this.props.gameState.correctOption.breed} className="game-image" />

        {_.shuffle(options.map(option => {
          return <button className="btn btn-option" onClick={() => this.clickImage(option)}>{option}</button>
        }))}
        <button className="btn btn-hint" onClick={() => this.props.showBreedHint(this.props.gameState.wrongOptions[0].breed)}>Hint</button>
        <p>{this.props.gameState.hint}</p>
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

export default connect(mapStateToProps, {
  getDogsList,
  updateScore,
  setInitialGameBreeds,
  setQuestion,
  showBreedHint,
  startGame,
  stopGame
})(GameOneComponent)