
const reducer = (state = null, action ={}) =>{
    switch(action.type){
        case 'ADD_DOG':
            return {...action.payload}
        default: 
            return state;
    }
}

export default reducer
