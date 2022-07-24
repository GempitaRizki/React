import React, {useState, useEffect} from 'react'
import jobApi from '../api/jobApi'
import JobAdd from './JobAdd'
import JobEdit from './JobEdit'

export default function JobView() {
    const [job, setJob] = useState ([])
    const [display, setDisplay] = useState (false)
    const [displayEdit, setDisplayEdit] = useState(false)
    const [refresh, setRefresh] = useState (false)
    const [id, setId] = useState({})
    const [values, setValues] = useState({
        job_id : undefined,
        job_title : '',
    })

    useEffect(()=>{
        jobApi.show().then(data =>{
            setJob(data)
        })
        setRefresh(false)
    },[refresh])

    const handleOnChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }

    const onEdit = async () =>{
        const payload = {
            job_title: (values.job_title)
        }
        await jobApi.update(payload)
        .then(()=>{
            setDisplayEdit(false)
            setRefresh(true)
            window.alert('Data Successfully Edit')
        })
    }

    const onSubmit = async () => {
        const payload = {
            job_title: (values.job_title)
        }

        await jobApi.create(payload)
            .then(() => {
                setDisplay(false)
                setRefresh(true)
                window.alert('Data Successfully Insert')
            })

    }
    const onDelete = async (id) => {
        jobApi.deleted(id)
            .then(() => {
                setRefresh(true)
                window.alert('Data Successfully Delete')
            })
    }
    const onClick = (joID) => {
        setDisplayEdit(true)
        setId(joID)
    }

    return (
        <div>
            <div className = "relative overflow-x-auto shadow-md sm:rounded-lg">
            <button button type="button" className="cursor-pointer inline-flex justify-center border py-2 px-2 border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" 
                    onClick={() => setDisplay(true)}> Add Job </button>
                {
                    displayEdit ?
                    <JobEdit
                        onSubmit={onsubmit}
                        handleOnChange ={handleOnChange}
                        id ={id}
                        setDisplay ={setDisplayEdit}
                        />
                        :
                    display ?
                        <JobAdd
                            onSubmit={onSubmit}
                            handleOnChange={handleOnChange}
                            setDisplay={setDisplay}
                        />
                        :
                        <>
                                <table className="w-full text-sm text-left text-gray-900 dark:text-gray-400 table-auto ">
                                    <thead className="text-xs text-grey-900 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <th scope="col" className="px-6 py-3">Job ID</th>
                                        <th scope="col" className="px-6 py-3">Job Title</th>
                                        <th scope="col" className="px-6 py-3">Minimal Salary</th>
                                        <th scope="col" className="px-6 py-3">Maximal Salary</th>
                                    </thead>
                                    <tbody>
                                        {
                                            job&&job.map( job => (
                                                <tr key={job.job_id}className = "bg-white border-b dark:bg-gray-900 dark:border-gray-900">
                                                    <td scope="row" className="px-6 py-2 font-medium text-gray-900 dark:text-white whitespace-nowrap">{job.job_id}</td>
                                                    <td className="px-6 py-2">{job.job_title}</td>
                                                    <td className="px-6 py-2">{job.min_salary}</td>
                                                    <td className="px-6 py-2">{job.max_salary}</td>
                                                    <button type="button" className="cursor-pointer inline-flex justify-center py-2 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"onClick={() => onDelete(job.job_id)}> Delete Job </button>
                                                    <button type="button" className="cursor-pointer inline-flex justify-center py-2 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"onClick={() => onClick({joID : job.job_id})}> Edit Job</button>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </>
                    }
                </div>
        </div>
      )
    }