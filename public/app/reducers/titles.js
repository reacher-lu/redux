import Immutable from 'immutable'
import { TITLE_BLUR,TITLE_BAR,TITLE_CHANGE } from '../constants/actionTypes'

let json = require("json!../../mock/pageData.json")
console.log('_products',json)

// const url = 'mock/pageData.json'
// fetch(url).then(response => response.json())
//   .then(data => console.log('data',data))
//   .catch(e => console.log("Oops, error", e))


const initialState = Immutable.fromJS(json.content[0])

export default function titles(state = initialState, action) {
    // console.log(state);
    switch(action.type) {
        case TITLE_CHANGE:
            return state.set('pageTitle',action.pageTitle)
        case TITLE_BAR:
            return state
        case TITLE_BLUR:
            return state.set('pageTitle',action.pageTitle)
        default:
            return state
    }
}
