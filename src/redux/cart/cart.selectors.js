import { createSelector } from "reselect";

// input selector
//  what it does is it's a function that gets the whole state and just returns a slice of it
const selectCart = state => state.cart;

// create selector which uses input selector
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);
