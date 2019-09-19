import { combineReducers } from 'redux'
import dogsList from './dogsList'
import gameOne from './gameone'
import scoreManupulation from './scoremanupulation'
import dogDetails from './dogDetails'

export default combineReducers({
    dogsList,
    dogDetails,
    gameOne,
    scoreManupulation
})