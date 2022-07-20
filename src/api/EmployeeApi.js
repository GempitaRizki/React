import axios from "axios";
import config from "../config/config";

const show = async()=>{
    try {
        const result = await axios.get(`${config.domain}/employee/`)
        return result.data
    } catch (error) {
        return await error.message
    }
}

const create = async(payload)=>{
    try {
        const result = await axios.post(`${config.domain}/employee`,payload)
        return result
    } catch (error) {
        return await error.message
    }
}

const findOne = async(id)=>{
    try {
        const result = await axios.get(`${config.domain}/employee/${id}`)
        return result.data
    } catch (error) {
        return error
    }
}

const updateNoFile = async(data)=>{
    const employee_id = data.employee_id;
    try {
        const result = await axios.put(`${config.domain}/employee/nofile/${employee_id}`,data)
        return result
    } catch (error) {
        return error
    }
}
const deleted = async(id)=>{
    try {
        const result = await axios.delete(`${config.domain}/employee/${id}`)
        return result
    } catch (error) {
        return await error.message
    }
}

export default {show,create,findOne,updateNoFile,deleted}