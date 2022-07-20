import React, { useState, useEffect } from 'react'
import RegionApi from '../api/RegionApi'
import RegionAdd from './RegionAdd'

export default function RegionView() {
    const [region, setRegion] = useState([])
    const [display, setDisplay] = useState(false)
    const [refresh, setRefresh] = useState(false)
    const [values, setValues] = useState({
        region_id: undefined,
        region_name: '',
        country_name: '',
    })
    useEffect(() => {
        RegionApi.show().then(data => {
            setRegion(data)
        })
        setRefresh(false)
    }, [refresh])

    const handleOnChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }

    const onSubmit = async () => {
        const payload = {
            region_name: (values.region_name),
            country_id : (values.country_id),
            country_name: (values.country_name)

        }

        await RegionApi.create(payload)
            .then(() => {
                setDisplay(false)
                setRefresh(true)
                window.alert('Data Successfully Insert')
            })

    }
    const onDelete = async (id) => {
        RegionApi.deleted(id)
            .then(() => {
                setRefresh(true)
                window.alert('Data Successfully Delete')
            })
    }

    return (
        <div>
            <div>
                <h2>List Region</h2>
                <button onClick={() => setDisplay(true)}> Add Region </button>
                {
                    display ?
                        <RegionAdd
                            onSubmit={onSubmit}
                            handleOnChange={handleOnChange}
                            setDisplay={setDisplay}
                        />
                        :
                        <>
                            <table>
                                <th>Region ID</th>
                                <th>Region Name</th>
                                <th>Country</th>
                                <tbody>
                                    {
                                        region && region.map(reg => {
                                            return (
                                                <tr key={reg.region_id}>
                                                    <td>{reg.region_id}</td>
                                                    <td>{reg.region_name}</td>
                                                    <table>
                                                        <th>Country ID </th>
                                                        <th> Country Name</th>
                                                        <tbody>
                                                            {reg && reg.countries.map(coun => {
                                                                return (
                                                                <tr key={coun.country_id}>
                                                                <td>{coun.country_id}</td>
                                                                <td>{coun.country_name}</td>
                                                                </tr>
                                                            )})}
                                                        </tbody>


                                                    </table>
                                                    <button onClick={() => onDelete(reg.region_id)}> Delete Region </button>
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