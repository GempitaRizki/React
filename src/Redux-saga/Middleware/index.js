import {takeEvery, all} from 'redux-saga/effects'
import { handleAddEmployee, handleDelEmployee,handleGetEmployee,handleGetOneEmployee,handleEditEmployee,handleEditNoEmployee } from './EmployeeMidle'
import * as ActionTypeEmployee from '../Constant/EmployeeConstant'

function * watchAll(){
    yield all([
        takeEvery(ActionTypeEmployee.GET_EMPLOYEE_REQUEST,handleGetEmployee),
        takeEvery(ActionTypeEmployee.DEL_EMPLOYEE_REQUEST,handleDelEmployee),
        takeEvery(ActionTypeEmployee.ADD_EMPLOYEE_REQUEST,handleAddEmployee),
        takeEvery(ActionTypeEmployee.GETONE_EMPLOYEE_REQUEST,handleGetOneEmployee),
        takeEvery(ActionTypeEmployee.EDIT_EMPLOYEE_REQUEST,handleEditEmployee),
        takeEvery(ActionTypeEmployee.EDITNOFILE_EMPLOYEE_REQUEST,handleEditNoEmployee),
    ])
}

export default watchAll