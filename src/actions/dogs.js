import * as request from 'superagent';

export const SET_DOGSLIST = 'SET_DOGSLIST'
export const SET_BREED_IMAGES = 'SET_BREED_IMAGES'

export function getDogsList() {
    return function (dispatch, getState) {
        const dogsList = getState().dogsList
        if(dogsList.length > 0) return
        
        request('https://dog.ceo/api/breeds/list/all')
            .then(response => {
                dispatch({
                    type: SET_DOGSLIST,
                    payload: Object.keys(response.body.message)
                })
            })
            .catch(console.error)
    }
}

export function getRandomImages(breed, num = 1) {
    return function (dispatch) {
        request(`https://dog.ceo/api/breed/${breed}/images/random/${num}`)
            .then(response => {
                dispatch({
                    type: SET_BREED_IMAGES,
                    payload: { breed: breed, images: [...response.body.message] }
                })
            })
            .catch(console.error)
    }
}