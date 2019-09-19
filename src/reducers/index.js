import { combineReducers } from 'redux'
import dogsList from './dogsList'
import gameOne from './gameone'
import scoreManupulation from './scoremanupulation'
import dogDetails from './dogDetails'
import gametwo from './gametwo'

export default combineReducers({
    dogsList,
    dogDetails,
    gametwo,
    gameOne,
    scoreManupulation
})