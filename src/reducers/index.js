import { combineReducers } from 'redux'
import dogsList from './dogsListReducer'
import selectedDog from './selectedDogReducer'
import scoreReducer from './scoreReducer'
import gameReducer from './gameReducer'
import gameOne from './gameone'
import scoreManupulation from './scoremanupulation'
import dogDetails from './dogDetails'
import gametwo from './gametwo'

export default combineReducers({
    dogsList,
    selectedDog,
    scoreReducer,
    gameReducer,
    
    dogDetails,
    gametwo,
    gameOne,
    scoreManupulation
})