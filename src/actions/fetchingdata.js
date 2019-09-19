import request from 'superagent'

export const getDogs = () => {
    return(dispatch,getState) => {
        const dogsList = getState(). dogsList;
        if(dogsList !== null) {
            return request
            .get('https://dog.ceo/api/breeds/list/all')
            .then(response => {
                dispatch({
                    type: 'SET_DOGSLIST',
                    payload: Object.keys(response.body.message)
                })
            })
        }
    }
}

