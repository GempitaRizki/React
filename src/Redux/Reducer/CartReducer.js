import { GET_CART, ADD_CART } from "../Constant";

const listOfCart = [
    { prodId: 1, prodName: 'Dell', qty: 1, salary: 5000, Category: 'Laptop' },
    { prodId: 2, prodName: 'Gamis', qty: 1, salary: 4000, Category: 'Baju' },
    { prodId: 3, prodName: 'Xiaomi', qty: 1, salary: 6000, Category: 'Handphone' },
]

const lisCategory = ['Handphone', 'Laptop', 'Baju', 'Alat rumah tangga']

const INIT_STATE = {
    carts: [...listOfCart],
    totalHarga: 0,
    totalQty: 0,
    category: [...lisCategory]
}

const CartReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case GET_CART:
            return { ...state }
        case ADD_CART:
            return applyAddCart(state, action)
        default:
            return state
    }
}

const applyAddCart = (state,action) => {
    const {payload} = action
    return {
        ...state,
        carts :[...state.carts,payload],
        totalHarga : state.carts.reduce((sum,el)=>sum + (el.salary * el.qty),0),
        totalQty : state.carts.reduce((sum,el)=>sum + el.qty,0)
    }
}

export default CartReducer
