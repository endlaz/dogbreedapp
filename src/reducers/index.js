import { combineReducers } from 'redux'
import dogsList from './dogsList'
import dogDetails from './dogDetails'
import gametwo from './gametwo'
import gametwoScore from './gametwoScore'

export default combineReducers({
    dogsList,
    dogDetails,
    gametwo,
    gametwoScore
})