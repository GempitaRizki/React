import * as ActionType from '../Constant'


export const doGetCart = (payload) => ({
    type : ActionType.GET_CART,
    payload
})
export const doAddCart = (payload) => ({
    type : ActionType.ADD_CART,
    payload
})