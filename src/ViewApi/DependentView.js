import React,{useState,useEffect} from 'react'
import DependentApi from '../api/DependentApi'
import DependentAdd from './DependentAdd'


export default function DependentView() {
    const [dependent,setDependent] = useState([])
    const [display , setDisplay] = useState(false)
    const [refresh, setRefresh] = useState(false)
    const [values, setValues] = useState({
        dependent_id: undefined,
        first_name: '',
        last_name: '',
        relationship: '',
        employee_id: undefined
    })

    useEffect(()=> {
        DependentApi.show().then(data =>{
            setDependent(data)
        })
        setRefresh(false)
    },[refresh])

    const handleOnChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }

    const onSubmit = async () => {
        const payload = {
            region_name: (values.region_name),
            country_id : (values.country_id),
            country_name: (values.country_name)

        }

        await DependentApi.create(payload)
            .then(() => {
                setDisplay(false)
                setRefresh(true)
                window.alert('Data Successfully Insert')
            })

    }
    const onDelete = async (id) => {
        DependentApi.deleted(id)
            .then(() => {
                setRefresh(true)
                window.alert('Data Successfully Delete')
            })
    }

    return (
        <div>
            <div>
                <h2>Dependent List</h2>
                <button onClick={() => setDisplay(true)}> Add Dependent </button>
                {
                    display ?
                        <DependentAdd
                            onSubmit={onSubmit}
                            handleOnChange={handleOnChange}
                            setDisplay={setDisplay}
                        />
                        :
                        <>
                            <table>
                                <th>Dependent ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Relationship</th>
                                <th>Employee ID</th>

                                <tbody>
                                    {
                                        dependent && dependent.map(reg => {
                                            return (
                                                <tr key={reg.dependent_id}>
                                                    <td>{reg.dependent_id}</td>
                                                    <td>{reg.first_name}</td>
                                                    <td>{reg.last_name}</td>
                                                    <td>{reg.relationship}</td>
                                                    <td>{reg.employee_id}</td>
                                                    <table>
                                                        <th>Employee ID </th>
                                                        <th> First Name</th>
                                                        <th> Last Name</th>
                                                        <th> Email</th>
                                                        <th> Phone Number</th>
                                                        <th> Hire Date</th>
                                                        <th> Job ID</th>
                                                        <th> Salary</th>
                                                        <th> Manager ID</th>
                                                        <th> Department ID</th>
                                                        <th> Employee Profile</th>
                                                        <tbody>
                                                            {reg && reg.employee.map(coun => {
                                                                return (
                                                                <tr key={coun.employee_id}>
                                                                <td>{coun.employee_id}</td>
                                                                <td>{coun.first_name}</td>
                                                                <td>{coun.last_name}</td>
                                                                <td>{coun.email}</td>
                                                                <td>{coun.phone_number}</td>
                                                                <td>{coun.job_id}</td>
                                                                <td>{coun.manager_id}</td>
                                                                <td>{coun.department_id}</td>
                                                                <td>{coun.emp_profile}</td>
                                                                </tr>
                                                            )})}
                                                        </tbody>


                                                    </table>
                                                    <button onClick={() => onDelete(reg.employee_id)}> Delete Employee </button>
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