import { TITLE_BAR } from '../constants/actionTypes'

const initialFilterItem = ''

export default function filter(state = initialFilterItem, action) {
    switch(action.type) {
        case TITLE_BAR:
            console.log(action);
            return action.titleBar
        default:
            return state
    }
}
