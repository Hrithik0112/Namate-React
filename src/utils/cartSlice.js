import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name : 'cart',
    initialState : {
        items : []
    },
    reducers : {
        additem : (state , action) => {
            state.items.push(action.payload);
        },
        removeitem : (state , action) => {
            state.items.pop();
        },
        clearcart : (state , ) => {
            state.items = []
        },
    },
});

export const {additem, removeitem ,clearcart} = cartSlice.actions;

export default cartSlice.reducer;