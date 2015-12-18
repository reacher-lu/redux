import { TITLE_BLUR, TITLE_KEYDOWN, TITLE_BAR, TITLE_CHANGE } from '../constants/actionTypes'

export function titleBlur(pageTitle) {
    return (dispatch) => {
        dispatch(titleChange(pageTitle))
    }
}

export function titleChange(pageTitle) {
    return {
        type: TITLE_CHANGE,
        pageTitle
    }
}

export function titleKeyDown(pageTitle) {
    return (dispatch) => {
        dispatch(titleChange(pageTitle))
    }
}

export function titleBar(e,x) {
    console.log('e',e);
    console.log('x',x);
    let inputValue = e;
    return {
        type: TITLE_BAR,
        inputValue
    }
}