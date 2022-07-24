import React, {useState, useEffect} from 'react'
import DepartmentApi from '../api/DepartmentApi'
import DepartmentAdd from './DepartmentAdd'
import DepartmentEdit from './DepartmentEdit'

export default function DepartmentView() {
    const [department, setDepartment] = useState([])
    const [display, setDisplay] = useState(false)
    const [displayEdit,setDisplayEdit] = useState(false)
    const [refresh, setRefresh] = useState(false)
    const [id, setId] = useState({})
    const [values, setValues] = useState({
        department_id : undefined,
        department_name : ''
    })

    useEffect(()=>{
        
        DepartmentApi.show().then(data =>{
            setDepartment(data)
            
        })
        setRefresh(false)
        
    },[refresh])

    const handleOnChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }

   const onEdit = async ()=>{
		const payload = {
            department_id : (id.depID),
            department_name: (values.department_name),
            location_id :(values.location_id)
        }
        await DepartmentApi.update()
        .then(()=>{
			
			setDisplayEdit(false)
			setRefresh(true)
			window.alert('Data Successfully Edit')
		})

}

    const onSubmit = async () => {
        const payload = {
            department_id : (values.department_id),
            department_name: (values.department_name),
           location_id :(values.location_id)
        }

        await DepartmentApi.create(payload)
            .then(() => {
                setDisplay(false)
                setRefresh(true)
                window.alert('Data Successfully Insert')
            })
    }

    const onDelete = async (id) => {
        DepartmentApi.deleted(id)
            .then(() => {
                setRefresh(true)
                window.alert('Data Successfully Delete')
            })
    }
    const onClick = (depID) => {
        setDisplayEdit(true)
        setId(depID)
    }
    return (
        <div>
            <div className = "relative overflow-x-auto shadow-md sm:rounded-lg">
                    {
                        displayEdit ?
                        <DepartmentEdit
                            onSubmit={onEdit}
						    handleOnChange={handleOnChange}
						    id={id}
						    setDisplay={setDisplayEdit}
					/>
					: 
                    display ?
                        <DepartmentAdd
                            onSubmit={onSubmit}
                            handleOnChange={handleOnChange}
                            setDisplay={setDisplay}
                        />
                        :
                        <>
                        <button button type="button" className="cursor-pointer inline-flex justify-center border py-2 px-2 border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={() => setDisplay(true)}> Add Department </button>
                            <table className="w-full text-sm text-left text-gray-900 dark:text-gray-400 table-auto ">
                                <thead className="text-xs text-grey-900 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <th scope="col" className="px-6 py-3">Department ID</th>
                                    <th scope="col" className="px-6 py-3">Department Name</th>
                                    <th scope="col" className="px-6 py-3">Location ID </th>
                                </thead>
                            <tbody className="overscroll-auto md:overscroll-contain">
                                {
                                    department&&department.map(depart => (
                                        <tr key={depart.department_id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-900">
                                            <td scope="row" className="px-6 py-2 font-medium text-gray-900 dark:text-white whitespace-nowrap">{depart.department_id}</td>
                                            <td className="px-6 py-2">{depart.department_name}</td>
                                            <td className="px-6 py-2">{depart.location_id}</td>
                                            <button type="button" className="cursor-pointer inline-flex justify-center py-2 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => onDelete(depart.department_id)}> Delete Department </button>
                                            <button type="button" className="cursor-pointer inline-flex justify-center py-2 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" onClick={() => onClick({ depID: depart.department_id })}> Edit Department </button>
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