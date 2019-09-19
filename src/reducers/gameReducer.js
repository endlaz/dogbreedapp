import { SET_INITIAL_BREEDS, SET_CORRECT_ANSWER, SET_WRONG_ANSWERS } from '../actions/gameActions'

const initialState = {
    start: false,
    breeds: [],
    correctOption: null,
    wrongOptions: []
}

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_INITIAL_BREEDS:
            return {...state, breeds: [...action.payload]}
        case SET_CORRECT_ANSWER:
            return {...state, correctOption: {...action.payload}}
        case SET_WRONG_ANSWERS:
            return {...state, wrongOptions: [...action.payload]}
        default:
            return state;
    }
}

export default reducer