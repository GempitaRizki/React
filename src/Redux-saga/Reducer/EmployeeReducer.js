import * as ActionType from '../Constant/EmployeeConstant'

const INIT_STATE = {
    employees: [],
    employee: [],
}

const EmployeeReduce = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ActionType.GET_EMPLOYEE_REQUEST:
            return { ...state }
        case ActionType.GET_EMPLOYEE_SUCCESS:
            return GetEmployeeSucceed(state, action)
        case ActionType.DEL_EMPLOYEE_REQUEST:
            return { ...state }
        case ActionType.DEL_EMPLOYEE_SUCCESS:
            return DelEmployeeSucceed(state, action)
        case ActionType.ADD_EMPLOYEE_REQUEST:
            return { ...state }
        case ActionType.ADD_EMPLOYEE_SUCCESS:
            return AddEmployeeSucceed(state, action)
        case ActionType.GETONE_EMPLOYEE_REQUEST:
            return { ...state }
        case ActionType.GETONE_EMPLOYEE_SUCCESS:
            return GetOneEmployeeSucceed(state, action)
        case ActionType.EDIT_EMPLOYEE_REQUEST:
            return { ...state }
        case ActionType.EDIT_EMPLOYEE_SUCCESS:
            return EditEmployeeSucceed(state, action)
        case ActionType.EDITNOFILE_EMPLOYEE_REQUEST:
            return { ...state }
        case ActionType.EDITNOFILE_EMPLOYEE_SUCCESS:
            return EditNoEmployeeSucceed(state, action)
        default:
            return GetEmployeeSucceed(state, action)
    }
}

const GetEmployeeSucceed = (state, action) => {
    return {
        ...state,
        employees: action.payload
    }
}

const GetOneEmployeeSucceed = (state, action) => {
    return {
        ...state,
        employee: action.payload
    }
}

const DelEmployeeSucceed = (state, action) => {
    const { payload } = action
    const filterEmployee = state.employees.filter(el => el.employee_id !== payload)
    return {
        ...state,
        employees: [...filterEmployee]
    }
}
const AddEmployeeSucceed = (state, action) => {
    const { payload } = action
    return {
        ...state,
        employees: [...state.employees, payload]
    }
}
const EditEmployeeSucceed = (state, action) => {
    const { payload } = action
    const filterEmployee = state.employees.filter(el => el.employee_id !== payload[0].employee_id)
    return {
        ...state,
        employees: [...filterEmployee, payload[0]]
    }
}
const EditNoEmployeeSucceed = (state, action) => {
    const { payload } = action
    const filterEmployee = state.employees.filter(el => el.employee_id !== payload[0].employee_id)
    return {
        ...state,
        employees: [...filterEmployee, payload[0]]
    }
}
export default EmployeeReduce