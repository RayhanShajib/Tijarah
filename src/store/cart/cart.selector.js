import { createSelector } from 'reselect';

const cartSelectReducer = (state) => state.cart;

export const selectIsCartOpen = createSelector(
  [cartSelectReducer],
  (cart) => cart.isCartOpen
);

export const selectCartItems = createSelector(
  [cartSelectReducer],
  (cart) => cart.cartItems
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  )
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);