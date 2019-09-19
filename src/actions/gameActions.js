import _ from 'lodash';
import request from 'superagent';

export const SET_INITIAL_BREEDS = 'SET_INITIAL_BREEDS'
export const SET_CORRECT_ANSWER = 'SET_CORRECT_ANSWER'
export const SET_WRONG_ANSWERS = 'SET_WRONG_ANSWERS'

export function setInitialGameBreeds(dogsList, level) {
    const randomBreeds = _.sampleSize(dogsList, (level * 3))
    return (dispatch, getState) => {
        if (getState().gameReducer.breeds.length > 0) return

        dispatch({
            type: SET_INITIAL_BREEDS,
            payload: randomBreeds
        })
    }
}

export const setQuestion = () => {
    return (dispatch, getState) => {
        const randomDog = _.sample(getState().gameReducer.breeds);
        const wrongDogs = _.sampleSize(
            getState().gameReducer.breeds.filter(
                function (e) { return this.indexOf(e) < 0 },
                randomDog
            ), 2)
        console.log('Correct dog:', randomDog);

        // Fetch random image for correct dog
        request.get(`https://dog.ceo/api/breed/${randomDog}/images/random`)
            .then(response => {
                // If we have an image, save breed name and image as correct answer
                dispatch({
                    type: SET_CORRECT_ANSWER,
                    payload: { breed: randomDog, image: response.body.message }
                })
            })

        let wrongImages = []
        new Promise((resolve, reject) => {
            resolve(request.get(`https://dog.ceo/api/breed/${wrongDogs[0]}/images/random`))
        })
            .then((result) => {
                wrongImages.push(result.body.message);
                return request.get(`https://dog.ceo/api/breed/${wrongDogs[1]}/images/random`)
            })
            .then((result) => {
                wrongImages.push(result.body.message)

                dispatch({
                    type: SET_WRONG_ANSWERS,
                    payload: [
                        {breed: wrongDogs[0], image: wrongImages[0]},
                        {breed: wrongDogs[1], image: wrongImages[1]}
                    ]
                })
            });
    }
}