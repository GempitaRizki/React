import React, { useState, useEffect } from 'react'
import RegionApi from '../api/RegionApi'

export default function RegionEdit(props) {
    const [region, setRegion] = useState([])

    useEffect(() => {
        RegionApi.findOne(props.id.regID).then(data => {
            setRegion(data)
        })
    },[])
    return (
        <div>
            <div>
                <h2>Edit Region</h2>
                <form onSubmit={props.onSubmit}>
                    <div>
                        <label>Region ID : </label>
                        <input type="text" defaultValue={region.region_id}
                            onChange={props.handleOnChange('region_id')} disabled/>
                    </div>
                    <div>
                        <label>Region Name : </label>
                        <input type="text" placeholder={region.region_name}
                            onChange={props.handleOnChange('region_name')} />
                    </div>
                    <div>
                        <button type='submit'> Simpan </button>
                        <button onClick={() => props.setDisplay(false)}> Cancel </button>
                    </div>
                </form>
            </div>
        </div>
    )
}