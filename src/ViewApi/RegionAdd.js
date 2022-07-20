import React from 'react'

export default function RegionAdd(props) {
  return (
    <div>
        <form onSubmit={props.onSubmit}>
            <div>
                <label>Region Name : </label>
                <input type="text" placeholder="Region Name" 
                onChange = {props.handleOnChange('region_name')}/>
            </div>
            <div>
                <label>Country ID : </label>
                <input type="text" placeholder="Country ID" 
                onChange = {props.handleOnChange('country_id')}/>
            </div>
            <div>
                <label>Country Name : </label>
                <input type="text" placeholder="Country Name" 
                onChange = {props.handleOnChange('country_name')}/>
            </div>
            <div>
                <button type='submit'> Simpan </button>
                <button onClick={()=>props.setDisplay(false)}> Cancel </button>
            </div>
        </form>
    </div>
  )
}