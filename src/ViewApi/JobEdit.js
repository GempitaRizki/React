import React, {useState, useEffect} from 'react'
import jobApi from '../api/jobApi'

export default function JobEdit(props) {
    const [job, setJob] = useState([])

    useEffect(()=>{
        jobApi.findOne(props.id.joID).then(data =>{
            setJob(data)
        })
    },[])
  return (
    <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
      <form onSubmit={props.onSubmit}>
          <div>
              <label>Job Title :</label>
              <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'type = "text" placeholder="Job Title"
               onChange={props.handleOnChange('job_title')}/>
          </div>
          <div>
            <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' type='submit'> Simpan </button>
            <button className='text-white bg-red-700 hover:bg-red-800 focus:ring-5 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-6 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' onClick={()=>props.setDisplay(false)}> Cancel </button>
          </div>
        </form>
    </div>
  )
}
