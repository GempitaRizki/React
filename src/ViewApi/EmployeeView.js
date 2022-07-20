import React, { useState, useEffect } from 'react'
import EmployeeApi from '../api/EmployeeApi'
import EmployeeAdd from './EmployeeAdd'
import EmpionEdit from './EmployeeEdit'

export default function EmployeeView() {
    const [employee, setEmployee] = useState([])
    const [display, setDisplay] = useState(false)
    const [displayEdit, setDisplayEdit] = useState(false)
    const [refresh, setRefresh] = useState(false)
    const [id, setId] = useState()

    useEffect(() => {
        EmployeeApi.show().then(data => {
            setEmployee(data)
        })
        setRefresh(false)
    }, [refresh])
    const onDelete = async (id) => {
        EmployeeApi.deleted(id)
            .then(() => {
                setRefresh(true)
                window.alert('Data Successfully Delete')
            })
    }
    const onClick = (empID) => {
        setDisplayEdit(true)
        setId(empID)
    }
    return (
        <div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                {
                    displayEdit
                        ?
                        <EmpionEdit
                            closeAdd={() => setDisplayEdit(false)}
                            onRefresh={() => setRefresh(true)}
                            id={id}
                            setDisplay={setDisplayEdit}
                        />
                        :
                        display ?
                            <EmployeeAdd
                                setDisplay={setDisplay}
                                closeAdd={() => setDisplay(false)}
                                onRefresh={() => setRefresh(true)}
                            />
                            :
                            <>
                                <button type="button" className="cursor-pointer inline-flex justify-center border py-2 px-2 border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => setDisplay(true)}> Add Employee </button>
                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-auto ">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" className="px-6 py-3">Employee ID</th>
                                            <th scope="col" className="px-6 py-3">First Name</th>
                                            <th scope="col" className="px-6 py-3">Last Name</th>
                                            <th scope="col" className="px-6 py-3">Email</th>
                                            <th scope="col" className="px-6 py-3">Phone Number</th>
                                            <th scope="col" className="px-6 py-3">Hire Date</th>
                                            <th scope="col" className="px-6 py-3">Employee Profile</th>
                                            <th scope="col" className="px-6 py-3">Setting</th>
                                        </tr>
                                    </thead>
                                    <tbody className="overscroll-auto md:overscroll-contain">
                                        {
                                            employee && employee.map(emp => {
                                                return (
                                                    <tr key={emp.employee_id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                        <td scope="row" className="px-6 py-2 font-medium text-gray-900 dark:text-white whitespace-nowrap">{emp.employee_id}</td>
                                                        <td className="px-6 py-2">{emp.first_name}</td>
                                                        <td className="px-6 py-2">{emp.last_name}</td>
                                                        <td className="px-6 py-2">{emp.email}</td>
                                                        <td className="px-6 py-2">{emp.phone_number}</td>
                                                        <td className="px-6 py-2">{emp.hire_date}</td>
                                                        <td className="px-6 py-2">{emp.emp_profile}</td>
                                                        <td className="px-6 py-2">
                                                            <td className='py-2'>
                                                                <button type="button" className="cursor-pointer inline-flex justify-center py-2 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => onDelete(emp.employee_id)}>Delete</button>
                                                            </td>
                                                            <button type="button" className="cursor-pointer inline-flex justify-center py-2 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => onClick(emp.employee_id)}>Edit</button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </>
                }
            </div>
        </div>
    )
}