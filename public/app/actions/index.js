import { TITLE_BLUR, TITLE_KEYDOWN, TITLE_BAR } from '../constants/actionTypes'

export function titleBlur(pageTitle) {
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

export function addToCart(productId) {
  return (dispatch, getState) => {
    if (getState().products.byId[productId].inventory > 0) {
      dispatch(addToCartUnsafe(productId))
    }
  }
}