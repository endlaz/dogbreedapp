import { combineReducers } from 'redux'
import dogsList from './dogsList'
import dogDetails from './dogDetails'
import gameThree from './gameThree'

export default combineReducers({
    dogsList,
    dogDetails,
    gameThree
})