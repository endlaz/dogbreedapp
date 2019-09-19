import { SET_IMAGES } from '../actions/gameTwo'

const initialState={
    wrongImages:[]
}
const reducer = (state = initialState, action = {}) => {
    switch(action.type) {
        case SET_IMAGES:
            return {wrongImages: [...action.payload.wrongImages]}
        default: 
            return state;
    }
}

export default reducer