import { combineReducers } from 'redux'
import dogsList from './dogsList'
import dogDetails from './dogDetails'
import gametwo from './gametwo'

export default combineReducers({
    dogsList,
    dogDetails,
    gametwo
})