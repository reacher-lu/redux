import { TITLE_BLUR, TITLE_KEYDOWN,TITLE_BAR } from '../constants/actionTypes'

export function titleBlur(pageTitle) {
    console.log('xx');
    return {
        type: TITLE_BLUR,
        pageTitle
    }
}

export function titleKeyDown() {
    return {
        type: TITLE_KEYDOWN
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
