import axios from 'axios';
import config from '../config/config';

const show = async()=>{
    try {
        const result = await axios.get(`${config.domain}/department/`)
        return result.data
    } catch (error) {
        return await error.message
    }
}

const create = async(payload)=>{
    try {
        const result = await axios.post(`${config.domain}/department/`,payload)
        return result.data
    } catch (error) {
        return await error.message
    }
}

const findOne = async (id) =>{
    try {
        const result = await axios.get(`${config.domain}/department/${id}`)
        return result.data
    } catch (error) {
        return await error.message
    }
}

const update = async (data) =>{
    try {
        const result = await axios.put(`${config.domain}/department/${data.department_id}`,data)
        return result
    } catch (error) {
        return await error.message
    }
}


const deleted = async(id)=>{
    try {
        const result = await axios.delete(`${config.domain}/department/${id}`)
        return result
    } catch (error) {
        return await error.message
    }
}

export default {show,create,findOne,update,deleted}