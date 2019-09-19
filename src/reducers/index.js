import { combineReducers } from 'redux'
import dogsList from './dogsListReducer'
import selectedDog from './selectedDogReducer'
import gameOne from './gameone'
import scoreManupulation from './scoremanupulation'
import dogDetails from './dogDetails'
import gametwo from './gametwo'

export default combineReducers({
    dogsList,
    selectedDog,
    dogDetails,
    gametwo,
    gameOne,
    scoreManupulation
})