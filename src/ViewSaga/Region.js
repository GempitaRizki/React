import React, { useState, useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { GetRegionRequest,DelRegionRequest } from '../Redux-saga/Action/RegionAction'

export default function Region() {
    const dispatch = useDispatch()
    const {regions} = useSelector(state => state.regionStated)
    
    useEffect(() => {
        dispatch(GetRegionRequest())
    }, [])

    const onDelete = async (id) =>{
        dispatch(DelRegionRequest(id))
    }

    return (
        <div>
            <h2>List of Regions</h2>
            <table>
                <thead>
                    Region Name
                </thead>
                <tbody>
                    {
                        regions && regions.map(regi => {
                            return (
                                <tr>
                                    <td>{regi.region_id}</td>
                                    <td>{regi.region_name}</td>
                                    <button onClick={()=>{
                                        if(window.confirm('Delete this record')) {
                                            onDelete(regi.region_id)
                                        }
                                    }}>Delete</button>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}