import * as ActionType from '../Constant/EmployeeConstant'

export const GetEmployeeRequest = () => ({
    type : ActionType.GET_EMPLOYEE_REQUEST
})

export const GetEmployeeSuccess = (payload) => ({
    type : ActionType.GET_EMPLOYEE_SUCCESS,
    payload
})

export const GetEmployeeFailed = (payload) => ({
    type : ActionType.GET_EMPLOYEE_FAILED,
    payload
})

export const DelEmployeeRequest = (payload) => ({
    type:ActionType.DEL_EMPLOYEE_REQUEST,
    payload
})

export const DelEmployeeSuccess = (payload) => ({
    type:ActionType.DEL_EMPLOYEE_SUCCESS,
    payload
})

export const DelEmployeeFailed = (payload) =>({
    type : ActionType.DEL_EMPLOYEE_FAILED,
    payload
})

export const AddEmployeeRequest = (payload) => ({
    type:ActionType.ADD_EMPLOYEE_REQUEST,
    payload
})

export const AddEmployeeSuccess = (payload) => ({
    type:ActionType.ADD_EMPLOYEE_SUCCESS,
    payload
})

export const AddEmployeeFailed = (payload) =>({
    type : ActionType.ADD_EMPLOYEE_FAILED,
    payload
})

export const GetOneEmployeeRequest = (payload) => ({
    type : ActionType.GETONE_EMPLOYEE_REQUEST,
    payload
})

export const GetOneEmployeeSuccess = (payload) => ({
    type : ActionType.GETONE_EMPLOYEE_SUCCESS,
    payload
})

export const GetOneEmployeeFailed = (payload) => ({
    type : ActionType.GETONE_EMPLOYEE_FAILED,
    payload
})

export const EditEmployeeRequest = (payload) => ({
    type:ActionType.EDIT_EMPLOYEE_REQUEST,
    payload
})

export const EditEmployeeSuccess = (payload) => ({
    type:ActionType.EDIT_EMPLOYEE_SUCCESS,
    payload
})

export const EditEmployeeFailed = (payload) =>({
    type : ActionType.EDIT_EMPLOYEE_FAILED,
    payload
})

export const EditNoEmployeeRequest = (payload) => ({
    type:ActionType.EDITNOFILE_EMPLOYEE_REQUEST,
    payload
})

export const EditNoEmployeeSuccess = (payload) => ({
    type:ActionType.EDITNOFILE_EMPLOYEE_SUCCESS,
    payload
})

export const EditNoEmployeeFailed = (payload) =>({
    type : ActionType.EDITNOFILE_EMPLOYEE_FAILED,
    payload
})