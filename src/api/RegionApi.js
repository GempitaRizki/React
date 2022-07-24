import axios from 'axios'
import config from '../config/config'

const show = async()=>{
    try {
        const result = await axios.get(`${config.domain}/region`)
        return result.data
    } catch (error) {
        return await error.message
    }
}

const findOne = async (id) => {
    try {
        const result = await axios.get(`${config.domain}/region ${id}`)
        return result.data
    } catch (error) {
        return await error.message
    }
}

const update = async(data)=>{
    try {
        const result = await axios.put(`${config.domain}/region/${data.region_id}`,data)
        return result
    } catch (error) {
        return error
    }
}

const create = async(payload)=>{
    try {
        const result = await axios.post(`${config.domain}/region`,payload)
        return result
    } catch (error) {
        return await error.message
    }
}

const deleted = async(id)=>{
    try {
        const result = await axios.delete(`${config.domain}/region/${id}`)
        return result
    } catch (error) {
        return await error.message
    }
}

export default {show,findOne,create,update,deleted}