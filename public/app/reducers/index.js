import { combineReducers } from 'redux'
import items from './items'
import filter from './filter'
import titles from './titles'

const rootReducer = combineReducers({
    items,
    filter,
    titles
})

export default rootReducer
