import { createSlice } from '@reduxjs/toolkit';

const storedItems = localStorage.getItem("cartItems");
const initialState = {
    cartItems : storedItems ? JSON.parse(storedItems) : []
};
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state,action) => {
            const newItem = action.payload;
            const existingItem = state.cartItems.find(
                (items) => items._id === newItem._id
            );
            if (existingItem) {
                existingItem.quantity += newItem.quantity;
            } else {
                state.cartItems.push({
                    _id: newItem._id,
                    title: newItem.title,
                    des: newItem.des,
                    img: newItem.img,
                    price: newItem.price,
                    quantity: newItem.quantity,
                });
            }
            localStorage.setItem("cartItems",JSON.stringify(state.cartItems));
        },
        deleteFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(
                (items) =>  items._id !== action.payload._id
            );
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        updateQuantity: (state, action) => {
            const {_id, quantity } =action.payload;
            const itemToUpdate = state.cartItems.find((item) => item._id === _id);
            if (itemToUpdate){
                itemToUpdate.quantity = quantity;
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            }
        },
    },
});

export default cartSlice.reducer;
export const { addToCart, deleteFromCart, updateQuantity } = cartSlice.actions;


