import { combineReducers } from 'redux'
import dogsList from './dogsList'
import dogDetails from './dogDetails'

export default combineReducers({
    dogsList,
    dogDetails
})