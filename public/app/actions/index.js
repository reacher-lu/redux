import { ADD_ITEM, DELETE_ITEM, DELETE_ALL, FILTER_ITEM, TITLE_BAR } from '../constants/actionTypes'

export function addItem() {
    return dispatch => {
        setTimeout(() => dispatch({type: ADD_ITEM}), 1000)
    }
}
export function deleteItem(item) {
    return {
        type: DELETE_ITEM,
        item
    }
}
export function deleteAll() {
    return {
        type: DELETE_ALL
    }
}
export function filterItem(e) {
    let filterItem = e.target.value

    return {
        type: FILTER_ITEM,
        filterItem
    }
}

export function titleBar(e) {
    return {
        type: TITLE_BAR
    }
}
