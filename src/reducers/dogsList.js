import { SET_DOGSLIST } from '../actions/dogs'

const reducer = (state = [], action = {}) => {
    switch(action.type) {
        case SET_DOGSLIST:
            return [...state, ...action.payload]
        default: 
            return state;
    }
}

export default reducer
