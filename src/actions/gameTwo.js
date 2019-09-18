import request from 'superagent'
export const SET_IMAGES = 'SET_IMAGES'



export function getWrongImages() {
    return function (dispatch) {
        request.get('https://dog.ceo/api/breeds/image/random/2')
            .then(response => {
                dispatch({
                    type: SET_IMAGES,
                    payload: { wrongImages: [...response.body.message] }
                })
            })
            .catch(console.error)
    }
}
