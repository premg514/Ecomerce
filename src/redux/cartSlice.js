import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "creteslice",
    initialState: {
        cartCount: 0,
        cartItems: []
    },
    reducers: {
        setUser: (state, action) => {
            const productToBeAdded = action.payload
            const required_product = state.cartItems
                .find(each => each.id == productToBeAdded.id)
            if (required_product == undefined) {
                productToBeAdded.indQunatity = 1
                state.cartItems.push(action.payload)
            } else {
                required_product.indQunatity++
            }

        },
         removeUser: (state, action) => {
            const productToBeAdded = action.payload
            const indexx = state.cartItems.findIndex(each => {
                return each.id == productToBeAdded.id
            })
            if (indexx == -1) {

            } else {
                const item = state.cartItems[indexx]
                if (item.indQunatity > 1) {
                    state.cartItems[indexx].indQunatity--
                } else {
                    state.cartItems.splice(indexx, 1)
                }
            }

        },
        increment: (state) => {
            state.cartCount += 1
        },
        decrement: (state) => {
            state.cartCount -= 1
        }
    }
})
export default cartSlice