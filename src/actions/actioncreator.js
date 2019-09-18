export const ADD_DOG = "ADD_DOG"

export const ADD_PARA = "ADD_PARA"

export const SCORE_MANUPULATION = "SCORE_MANUPULATION"

export function AddDog(selectedbreedList,breedName,breedImage){
    return{
        type:ADD_DOG,
        payload:{
            selectedbreedList,
            breedName,
            breedImage
        }
    }
}

export function AddPara(value){
    return{
        type:ADD_PARA,
        payload: value
    }
}

export function scoreManupulation(countOfCorrectAnswers,countOfQuestions,countOfWrongAnswers,successPercentage,level,hint){
    return{
        type:SCORE_MANUPULATION,
        payload:{
            countOfCorrectAnswers : countOfCorrectAnswers,
            countOfQuestions : countOfQuestions,
            countOfWrongAnswers : countOfWrongAnswers,
            successPercentage : successPercentage,
            level : level,
            hint : hint
        }
    }
}

