import * as ActionType from '../Constant/RegionConstant'

export const GetRegionRequest = () => ({
    type : ActionType.GET_REGIONS_REQUEST
})

export const GetRegionSuccess = (payload) => ({
    type : ActionType.GET_REGIONS_SUCCESS,
    payload
})

export const GetRegionFailed = (payload) => ({
    type : ActionType.GET_REGIONS_FAILED,
    payload
})

export const DelRegionRequest = (payload) => ({
    type:ActionType.DEL_REGIONS_REQUEST,
    payload
})

export const DelRegionSuccess = (payload) => ({
    type:ActionType.DEL_REGIONS_SUCCESS,
    payload
})

export const DelRegionFailed = (payload) =>({
    type : ActionType.DEL_REGIONS_FAILED,
    payload
})

export const AddRegionRequest = (payload) => ({
    type:ActionType.ADD_REGIONS_REQUEST,
    payload
})

export const AddRegionSuccess = (payload) => ({
    type:ActionType.ADD_REGIONS_SUCCESS,
    payload
})

export const AddRegionFailed = (payload) =>({
    type : ActionType.ADD_REGIONS_FAILED,
    payload
})