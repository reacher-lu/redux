import Immutable from 'immutable'
import { TITLE_BLUR,TITLE_BAR } from '../constants/actionTypes'

const initialFilterItem = Immutable.Map({
	pageTitle : 2222
})

export default function titles(state = initialFilterItem, action) {
    switch(action.type) {
        case TITLE_BAR:
            return action.inputValue
        case TITLE_BLUR:
            console.log('action',action)
            console.log('state',state)
            return state.set('pageTitle', action.pageTitle)
        default:
            return state
    }
}
