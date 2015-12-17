import Immutable from 'immutable'
import { TITLE_BLUR,TITLE_BAR,TITLE_CHANGE } from '../constants/actionTypes'

const initialState = Immutable.fromJS({
    pageTitle: 'Use Redux',
    completed: false,
    id: 0
})

export default function titles(state = initialState, action) {
    console.log(state);
    switch(action.type) {
        case TITLE_CHANGE:
            console.log('action',action)
            console.log('state',state)
            return state.set('pageTitle',action.pageTitle)
        case TITLE_BAR:
            return state
        case TITLE_BLUR:
            console.log('action',action)
            console.log('state',state)
            return state.set('pageTitle',action.pageTitle)
        default:
            return state
    }
}
