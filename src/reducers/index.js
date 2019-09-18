import { combineReducers } from 'redux'
import dogsList from './dogsList'
import gameOne from './gameone'
import scoreManupulation from './scoremanupulation'

export default combineReducers({
    dogsList,
    gameOne,
    scoreManupulation
})