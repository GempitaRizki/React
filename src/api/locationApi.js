import axios from 'axios';
import config from '../config/config';

const show = async()=>{
    try {
        const result = await axios.get(`${config.domain}/location/`)
        return result.data
    } catch (error) {
        return await error.message
    }
}

const create = async(payload)=>{
    try {
        const result = await axios.post(`${config.domain}/location/`,payload)
        return result
    } catch (error) {
        return await error.message
    }
}

const findOne = async(id) =>{
    try {
        const result = await axios.get(`${config.domain}/location/${id}`)
        return result.data
    } catch (error) {
      return await error.message  
    }
}

const update = async(data) =>{
    try {
        const result = await axios.put(`${config.domain}/location/${data.location_id}`,data)
        return result
    } catch (error) {
        return await error.message
    }
}

const deleted = async(id)=>{
    try {
        const result = await axios.delete(`${config.domain}/location/${id}`)
    } catch (error) {
        return await error.message
    }
}

export default {show,create,findOne,update,deleted}