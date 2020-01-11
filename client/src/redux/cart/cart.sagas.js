import { put, takeLatest, all, call, select } from "redux-saga/effects";
import UserActionTypes from "../user/user.types";
import { clearCart, setCartFromFirebase } from "./cart.actions";
import CartActionTypes from "./cart.types";
import { getUserCartRef } from "./../../firebase/firebase.utils";
import { selectCartItems } from "./cart.selectors";
import { selectCurrentUser } from "./../user/user.selector";

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* updateCartInFirebase() {
  const currentUser = yield select(selectCurrentUser);
  if (currentUser) {
    try {
      const cartRef = yield getUserCartRef(currentUser.id);
      const cartItems = yield select(selectCartItems);
      yield cartRef.update({ cartItems });
    } catch (error) {
      console.log(error);
    }
  }
}

export function* checkCartInFirebase({ payload: user }) {
  try {
    const cartRef = yield getUserCartRef(user.id);
    const snapShot = yield cartRef.get();
    const { cartItems } = yield snapShot.data();
    console.log(cartItems);
    yield put(setCartFromFirebase(cartItems));
  } catch (error) {
    console.log(error);
    // not sure
  }
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, clearCartOnSignOut);
}

export function* onUserSignIn() {
  yield takeLatest(UserActionTypes.SIGN_IN_SUCCESS, checkCartInFirebase);
}

export function* onCartChange() {
  yield takeLatest(
    [
      CartActionTypes.ADD_ITEM,
      CartActionTypes.REMOVE_ITEM,
      CartActionTypes.CLEAR_ITEM_FROM_CART
    ],
    updateCartInFirebase
  );
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess), call(onUserSignIn), call(onCartChange)]);
}
