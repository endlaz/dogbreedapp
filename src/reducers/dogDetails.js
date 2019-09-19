import { SET_BREED_IMAGES } from '../actions/dogsActions'

const initialState = {
    breed: '',
    images: []
}
const reducer = (state = initialState, action = {}) => {
    switch(action.type) {
        case SET_BREED_IMAGES:
            return {breed: action.payload.breed, images: [...action.payload.images]}
        default: 
            return state;
    }
}

export default reducer