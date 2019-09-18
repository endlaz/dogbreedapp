import { START_GAME_THREE, SET_INITIAL_BREEDS, UPDATE_SCORE } from '../actions/gameThree'

const initialState = {
    start: false,
    score: 0,
    streak: 0,
    totalQuestions: 0,
    level: 1,
    successRate: 0,
    breeds: []
}

const reducer = (state = initialState, action = {}) => {
    switch(action.type) {
        case START_GAME_THREE:
            return {...state, ...action.payload}
        case SET_INITIAL_BREEDS:
            return {...state, breeds: [...action.payload]}
        case UPDATE_SCORE:
            return {...state, ...action.payload, successRate: (action.payload.score / action.payload.totalQuestions)*100}
        default: 
            return state;
    }
}

export default reducer