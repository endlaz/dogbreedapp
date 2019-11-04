import { SELECT_DOG } from '../actions/dogsActions'

const initialState = {
  breed: '',
  images: []
}
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SELECT_DOG:
      return { breed: action.payload.breed, images: [...action.payload.images] }
    default:
      return state;
  }
}

export default reducer