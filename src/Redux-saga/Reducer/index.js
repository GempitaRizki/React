import { combineReducers } from "redux";

import RegionsReduce from "./RegionReducer";
import EmployeeReduce from "./EmployeeReducer";

const rootReducer = combineReducers({
    regionStated : RegionsReduce,
    employeeStated : EmployeeReduce
})

export default rootReducer