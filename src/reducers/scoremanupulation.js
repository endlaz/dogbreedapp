const initialState = {
        countOfCorrectAnswers:0,
        countOfQuestions:0,
        countOfWrongAnswers:0,
        successPercentage:0,
        level:1,
        hint: null
}

const reducer = (state = initialState, action={}) => {
    switch(action.type){
        case 'SCORE_MANUPULATION':
            return {...state, ...action.payload}
        case 'ADD_PARA':
            return {...state, hint: action.payload}
        default: 
            return state;
    }
}

export default reducer