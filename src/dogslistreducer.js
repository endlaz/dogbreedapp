const reducer = (state = [], action = {}) => {
    switch (action.type) {
        case 'CHANGE_STATE':
            return [...state, { ...action.payload }]
    default:
      return state
    }
  }
  
  export default reducer