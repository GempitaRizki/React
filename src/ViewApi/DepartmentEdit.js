import React, {useState, useEffect} from 'react'
import DepartmentApi from '../api/DepartmentApi'



export default function DepartmentEdit(props) {
    const [department, setDepartment] = useState ([])

    useEffect(()=>{
        DepartmentApi.findOne(props.id.depID).then(data =>{
            setDepartment(data)
        })
    },[])

  return (
    <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
          <form onSubmit={props.onSubmit}>

                <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
                    <label>Department ID : </label>
                    <input className='w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline ' type="text" placeholder="Department ID" 
                    onChange = {props.handleOnChange('department_id')}/>
                </div>
                <div>
                     <label>Department Name :</label>
                     <input className='w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline ' type = "text" placeholder="Department Name"
                     onChange={props.handleOnChange('department_name')}/>
                </div>
                <div>
                        <label>Location ID : </label>
                        <input className='w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline 'type="text" placeholder="Location ID" 
                        onChange = {props.handleOnChange('location_id')}/>
                </div>
                <div>
                    <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' type='submit'> Simpan </button>
                    <button className='text-white bg-red-700 hover:bg-red-800 focus:ring-5 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-6 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' onClick={()=>props.setDisplay(false)}> Cancel </button>
                </div>
            </form>
        </div>
      )
    }