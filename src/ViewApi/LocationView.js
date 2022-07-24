import React, {useState, useEffect} from 'react'
import locationApi from '../api/locationApi'
import LocationAdd from './LocationAdd'
import LocationEdit from './LocationEdit'

export default function LocationView() {
    const [location, setLocation] = useState([])
    const [display, setDisplay] = useState(false)
    const [displayEdit, setDisplayEdit] = useState(false)
    const [refresh, setRefresh] = useState(false)
    const [id, setId] = useState({})
    const [values, setValues] = useState({
        location_id : undefined,
        street_address : ''
    })

    useEffect(()=>{
        locationApi.show().then(data =>{
            setLocation(data)
        })
        setRefresh(false)
    }, [refresh])

    const handleOnChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }

    const onEdit = async () => {
        const payload ={
            location_id : (id.locID),
            street_address : (values.street_address),
            postal_code : (values.postal_code),
            city : (values.city),
            state_province : (values.state_province),
            country_id : (values.country_id)
        }
        await locationApi.update(payload)
            .then(() => {
                setDisplayEdit(false)
                setRefresh(true)
                window.alert('Data Successfully Insert')
            })

    }

    const onSubmit = async () => {
        const payload = {
            location_id : (values.location_id),
            street_address : (values.street_address),
            postal_code : (values.postal_code),
            city : (values.city),
            state_province : (values.state_province),
            country_id : (values.country_id)
        }

        await locationApi.create(payload)
            .then(() => {
                setDisplay(false)
                setRefresh(true)
                window.alert('Data Successfully Insert')
            })

    }

    const onDelete = async (id) => {
        locationApi.deleted(id)
            .then(() => {
                setRefresh(true)
                window.alert('Data Successfully Delete')
            })
    }

    const onClick = (regID) => {
        setDisplayEdit(true)
        setId(regID)
    }

    return (
        <div>
            <div>
                {
                    displayEdit ?
                    <LocationEdit
                        onSubmit={onEdit}
                        handleOnChange={handleOnChange}
                        id={id}
                        setDisplay={setDisplayEdit}
                    />
                    :
                    display ?
                        <LocationAdd
                            onSubmit={onSubmit}
                            handleOnChange={handleOnChange}
                            setDisplay={setDisplay}
                        />
                        :
                        <>
                        <button type="button" className="cursor-pointer inline-flex justify-center border py-2 px-2 border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" 
                             onClick={() => setDisplay(true)}> Add Locations </button>
                                <table className="w-full text-sm text-left text-gray-900 dark:text-gray-400 table-auto ">
                                    <thead className="text-xs text-grey-900 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <th scope="col" className="px-6 py-3">Location ID</th>
                                        <th scope="col" className="px-6 py-3">Street Address</th>
                                        <th scope="col" className="px-6 py-3">Postal Code</th>
                                        <th scope="col" className="px-6 py-3">City</th>
                                        <th scope="col" className="px-6 py-3">State Province</th>
                                        <th scope="col" className="px-6 py-3">Country ID</th>
                                    </thead>
                                    <tbody>
                                        {
                                            location&&location.map( loc => {
                                                return(
                                                <tr key={loc.location_id}>
                                                    <td scope="row" className="px-6 py-2 font-medium text-gray-900 dark:text-white whitespace-nowrap">{loc.location_id}</td>
                                                    <td className="px-6 py-2">{loc.street_address}</td>
                                                    <td className="px-6 py-2">{loc.postal_code}</td>
                                                    <td className="px-6 py-2">{loc.city}</td>
                                                    <td className="px-6 py-2">{loc.state_province}</td>
                                                    <table>
                                                        <tbody>
                                                            {loc && loc.departments.map(depart => {
                                                                return (
                                                                <tr key={depart.department_id} className = "bg-white border-b dark:bg-gray-900 dark:border-gray-900">
                                                                <td scope="row" className="px-6 py-2 font-medium text-gray-900 dark:text-white whitespace-nowrap">{depart.department_id}</td>
                                                                </tr>
                                                            )})}
                                                        </tbody>
                                                        <button type="button" className="cursor-pointer inline-flex justify-center border py-2 px-2 border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"onClick={() => onDelete(loc.location_id)}> Delete location </button>
                                                        <button type="button" className="cursor-pointer inline-flex justify-center border py-2 px-2 border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => onClick({ locID: loc.location_id })}> Edit location </button>
                                                    </table>
     
                                                </tr>
                                            )})
                                        }
                                    </tbody>
                                </table>
                            </>
                    }
                </div>
        </div>
      )
    }