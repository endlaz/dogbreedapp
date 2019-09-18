import _ from 'lodash';
export const START_GAME_THREE = 'START_GAME_THREE'
export const SET_INITIAL_BREEDS = 'SET_INITIAL_BREEDS'
export const UPDATE_SCORE = 'UPDATE_SCORE'

export function setInitialGameBreeds(dogsList, level) {
    const randomBreeds = _.sampleSize(dogsList, (level * 3))
    return function (dispatch) {
        dispatch({
            type: SET_INITIAL_BREEDS,
            payload: randomBreeds
        })
    }
}

export function startGameThree() {
    return function (dispatch) {
        dispatch({
            type: START_GAME_THREE,
            payload: { start: true }
        })
    }
}

export function updateScore(score, streak, totalQuestions, level, breeds) {
    return (dispatch) => {
        dispatch({
            type: UPDATE_SCORE,
            payload: {score, streak, totalQuestions, level, breeds}
        })
    }
}