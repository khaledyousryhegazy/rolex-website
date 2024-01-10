import { createSlice } from "@reduxjs/toolkit";

const getInitailState = () => {
  const cartStorage = localStorage.getItem("cart");
  return cartStorage ? JSON.parse(cartStorage) : [];
};

const cartSlice = createSlice({
  name: "cart",
  initialState: getInitailState(),
  reducers: {
    addToCart: (state, action) => {
      // if product exist
      const productId = action.payload.id;
      const findProduct = state.find((product) => product.id === productId);

      if (findProduct) {
        // quantity plus
        findProduct.quantity += 1;
      } else {
        // add quantity and push product in state
        const product = { ...action.payload, quantity: 1 };
        state.push(product);
      }

      //   add to localStorage
      localStorage.setItem("cart", JSON.stringify(state));
    },

    removeFromCart: (state, action) => {
      // get index
      const productId = action.payload.id;

      const index = state.findIndex((product) => product.id === productId);

      if (index !== -1) {
        state.splice(index, 1);
      }

      localStorage.setItem("cart", JSON.stringify(state));
    },

    decrease: (state, action) => {
      const productId = action.payload.id;
      const findProduct = state.find((product) => product.id === productId);

      if (findProduct.quantity > 1) {
        // quantity plus
        findProduct.quantity -= 1;
      } else {
        // add quantity and push product in state
        return;
      }
    },
  },
});

export const { addToCart, removeFromCart, decrease } = cartSlice.actions;
export default cartSlice.reducer;
