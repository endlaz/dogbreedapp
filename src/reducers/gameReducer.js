import { SET_INITIAL_BREEDS, SET_CORRECT_ANSWER, SET_WRONG_ANSWERS, SHOW_BREED_HINT, RESET_HINT } from '../actions/gameActions'

const initialState = {
    start: false,
    breeds: [],
    correctOption: null,
    wrongOptions: [],
    hint: null
}

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_INITIAL_BREEDS:
            return {...state, breeds: [...action.payload]}
        case SET_CORRECT_ANSWER:
            return {...state, correctOption: {...action.payload}}
        case SET_WRONG_ANSWERS:
            return {...state, wrongOptions: [...action.payload]}
        case SHOW_BREED_HINT:
            return {...state, hint: `It's not a ${action.payload}`}
        case RESET_HINT:
            return {...state, hint: null}
        default:
            return state;
    }
}

export default reducer