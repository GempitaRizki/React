import axios from 'axios'
import config from '../config/config'

const show = async()=>{
    try {
        const result = await axios.get(`${config.domain}/employee/`)
        return result.data
    } catch (error) {
        return await error.message
    }
}
const image = async(id)=>{
    try {
        const result = await axios.get(`${config.domain}/employee/file/${id}`)
        return result.data
    } catch (error) {
        return await error.message
    }
}
const create = async(payload)=>{
    try {
        const result = await axios.post(`${config.domain}/employee/`,payload)
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
const update = async(data)=>{
    const employee_id = parseInt(data.get("employee_id"));
    try {
        const result = await axios.put(`${config.domain}/employee/${employee_id}`,data)
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

export default {show,image,create,deleted,findOne,update}