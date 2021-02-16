import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedCount, cartItem) => accumulatedCount + cartItem.quantity,
      0
    )
);

export const selectHiddenDropDown = createSelector(
  [selectCart],
  (cart) => cart.hiddenDropDown
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumulatedTotal, cartItem) =>
      accumulatedTotal + cartItem.quantity * cartItem.price,
    0
  )
);