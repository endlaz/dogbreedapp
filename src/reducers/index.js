import { combineReducers } from 'redux'
import dogsList from './dogsListReducer'
import selectedDog from './selectedDogReducer'
import scoreReducer from './scoreReducer'
import gameReducer from './gameReducer'

export default combineReducers({
    dogsList,
    selectedDog,
    scoreReducer,
    gameReducer
})