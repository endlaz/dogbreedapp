import { SET_GAMETWO_SCORE } from '../actions/gameTwo'

const initialState={
    score: 0
}
const reducer = (state = initialState, action = {}) => {
    switch(action.type) {
        case SET_GAMETWO_SCORE:
            return {...state, ...action.payload}
        default: 
            return state;
    }
}

export default reducer