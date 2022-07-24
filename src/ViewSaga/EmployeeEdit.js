import React, { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import employeeApi from '../api/employeeApi';

export default function EmployeeAdd(props) {
    const [employee, setEmployee] = useState([])
    const [previewImg, setPreviewImg] = useState();
    const [uploaded, setUploaded] = useState(false);
    useEffect(() => {
        employeeApi.findOne(props.id).then(data => {
            setEmployee(data)
        })
    }, [])
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            employee_id : employee.employee_id,
            first_name: employee.first_name,
            last_name: employee.last_name,
            email: employee.email,
            phone_number: employee.phone_number,
            job_id: employee.job_id,
            salary: employee.salary,
            manager_id: employee.manager_id,
            department_id: employee.department_id,
            emp_profile: employee.emp_profile
        },
        onSubmit: async (values) => {
            let payload = new FormData();
            payload.append('first_name', values.first_name)
            payload.append('last_name', values.last_name)
            payload.append('email', values.email)
            payload.append('phone_number', values.phone_number)
            payload.append('job_id', parseInt(values.job_id))
            payload.append('salary', (values.salary))
            payload.append('manager_id', parseInt(values.manager_id))
            payload.append('department_id', parseInt(values.department_id))
            payload.append('emp_profile', values.profile)
            payload.append('employee_id', values.employee_id)

            await employeeApi.update(payload)
                .then(() => {
                    props.closeAdd();
                    window.alert('Data Succesfully Edited')
                    props.onRefresh();
                })

        }
    })

    const uploadOnChange = name => event => {
        let reader = new FileReader()
        let file = event.target.files[0]

        reader.onload = () => {
            formik.setFieldValue('profile', file);
            setPreviewImg(reader.result)
        }
        reader.readAsDataURL(file);
        setUploaded(true)
    }

    const onClearImage = event => {
        event.preventDefault();
        setUploaded(false);
        setPreviewImg(null)
    }
    return (
        <div>
            <div>
                <label>First Name : </label>
                <input
                    type="text"
                    name="first_name"
                    id="first_name"
                    value={formik.values.first_name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoComplete="first_name"
                />
            </div>
            <div>
                <label>Last Name : </label>
                <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    value={formik.values.last_name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoComplete="last_name"
                />
            </div>

            <div>
                <label>Email : </label>
                <input
                    type="text"
                    name="email"
                    id="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoComplete="email"
                />
            </div>
            <div>
                <label>Phone Number : </label>
                <input
                    type="text"
                    name="phone_number"
                    id="phone_number"
                    value={formik.values.phone_number}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoComplete="phone_number"
                />
            </div>
            <div>
                <label>Job ID : </label>
                <input
                    type="text"
                    name="job_id"
                    id="job_id"
                    value={formik.values.job_id}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoComplete="job_id"
                />
            </div>
            <div>
                <label>Salary : </label>
                <input
                    type="text"
                    name="salary"
                    id="salary"
                    value={formik.values.salary}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoComplete="salary"
                />
            </div>
            <div>
                <label>Manager ID : </label>
                <input
                    type="text"
                    name="manager_id"
                    id="manager_id"
                    value={formik.values.manager_id}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoComplete="manager_id"
                />
            </div>
            <div>
                <label>Department ID : </label>
                <input
                    type="text"
                    name="department_id"
                    id="department_id"
                    value={formik.values.department_id}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoComplete="department_id"
                />
            </div>
            <div>
                <label >Profile : </label>
                <div>
                    <div>
                        {
                            uploaded === false ?
                                <> </>
                                :
                                <>
                                    <img src={previewImg} alt={previewImg} />
                                    <span onClick={onClearImage}>Remove</span>
                                </>
                        }
                        <div>
                            <span>Upload a file</span>
                            <input
                                type="file"
                                id="profile"
                                accept='image/*'
                                onChange={uploadOnChange('file')}
                                className='sr-only'
                            />
                        </div>
                        <p>PNG, JPG, GIF up to 10MB</p>
                    </div>
                </div>
            </div>
            <div>
                <button type='submit' onClick={formik.handleSubmit}> Simpan </button>
                <button onClick={() => props.setDisplay(false)}> Cancel </button>
            </div>
        </div>
    )
}