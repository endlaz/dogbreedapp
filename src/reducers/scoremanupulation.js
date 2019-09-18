const reducer = (state = {}, action={}) => {
    switch(action.type){
        case 'SCORE_MANUPULATION':
            return {...action.payload}
        default: 
            return state;
    }
}

export default reducer