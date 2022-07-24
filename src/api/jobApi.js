import axios from 'axios'
import config from '../config/config'

const show = async () =>{
    try {
       const result = await axios.get(`${config.domain}/job/`) 
       return result.data
    } catch (error) {
        return await error.message
    }
}

const create = async(payload)=>{
    try {
        const result = await axios.post(`${config.domain}/job/`,payload)
        return result.data
    } catch (error) {
        return await error.message
    }
}

const findOne = async(id)=>{
    try {
        const result = await axios.get(`${config.domain}/job/${id}`)
        return result.data
    } catch (error) {
        return await error.message
    }
}

const update = async (data) =>{
    try {
        const result = await axios.put(`${config.domain}/job/${data.job_id}`,data)
        return result
    } catch (error) {
        return await error.message
    }
}

const deleted = async(id)=>{
    try {
        const result = await axios.delete(`${config.domain}/job/${id}`)
        return result
    } catch (error) {
        return await error.message
    }
}

export default {show,create,findOne,update,deleted}