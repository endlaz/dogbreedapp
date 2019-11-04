import { RESET_SCORE, UPDATE_SCORE } from '../actions/scoreActions'

const initialState = {
  score: 0,
  streak: 0,
  totalQuestions: 0,
  level: 1,
  successRate: 0
}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case RESET_SCORE:
      return { ...initialState }
    case UPDATE_SCORE:
      return { ...state, ...action.payload }
    default:
      return state;
  }
}

export default reducer