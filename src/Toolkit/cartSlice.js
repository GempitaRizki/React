import { createSlice } from "@reduxjs/toolkit";

const listOfCart = [
    { prodId: 1, prodName: 'Dell', qty: 1, salary: 5000, Category: 'Laptop' },
    { prodId: 2, prodName: 'Gamis', qty: 1, salary: 4000, Category: 'Baju' },
    { prodId: 3, prodName: 'Xiaomi', qty: 1, salary: 6000, Category: 'Handphone' },
]

const lisCategory = ['Handphone', 'Laptop', 'Baju', 'Alat rumah tangga']

export const cartSlice = createSlice({
    name : 'cart',
    initialState : {
        carts : [...listOfCart],
        category : [...lisCategory],
        totalHarga : 0,
        totalQty : 0
    },
    reducers : {
        doGetCart : state => {
            return state
        },
        doAddCart : (state,action) =>{
            const {payload} = action
            return {
                ...state,
                carts :[...state.carts,payload],
                totalHarga : state.carts.reduce((sum,el)=>sum + (el.salary * el.qty),0),
                totalQty : state.carts.reduce((sum,el)=>sum + el.qty,0)
            }
        }
    }
})

export const {doGetCart,doAddCart} = cartSlice.actions
export default cartSlice.reducer