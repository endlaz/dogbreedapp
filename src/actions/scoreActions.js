export const RESET_SCORE = 'RESET_SCORE'
export const UPDATE_SCORE = 'UPDATE_SCORE'

export const resetScore = () => {
  return { type: RESET_SCORE }
}

export const updateScore = (score, streak, totalQuestions, level, successRate) => {
  return {
    type: UPDATE_SCORE,
    payload: { score, streak, totalQuestions, level, successRate }
  }
}