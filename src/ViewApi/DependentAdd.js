import React from 'react'

export default function DependentAdd(props) {
  return (
    <div>
        <form onSubmit={props.onSubmit}>
            <div>
                <label>First Name : </label>
                <input type="text" placeholder="First Name" 
                onChange = {props.handleOnChange('first_name')}/>
            </div>
            <div>
                <label>Last Name : </label>
                <input type="text" placeholder="Last Name" 
                onChange = {props.handleOnChange('last_name')}/>
            </div>
            <div>
                <label>Relationship : </label>
                <input type="text" placeholder="Relationship" 
                onChange = {props.handleOnChange('relationship')}/>
            </div>
            <div>
                <button type='submit'> Simpan </button>
                <button onClick={()=>props.setDisplay(false)}> Cancel </button>
            </div>
        </form>
    </div>
  )
}