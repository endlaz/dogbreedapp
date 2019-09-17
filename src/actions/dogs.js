import * as request from 'superagent';

export const SET_DOGSLIST = 'SET_DOGSLIST'
export const SET_BREED_IMAGES = 'SET_BREED_IMAGES'

export function getDogsList() {
    return function (dispatch) {
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

export function getTenRandomBreedImages(breed) {
    return function (dispatch) {
        request(`https://dog.ceo/api/breed/${breed}/images/random/10`)
            .then(response => {
                dispatch({
                    type: SET_BREED_IMAGES,
                    payload: { breed: breed, images: [...response.body.message] }
                })
            })
            .catch(console.error)
    }
}