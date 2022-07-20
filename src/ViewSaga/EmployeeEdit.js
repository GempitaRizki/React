import React, { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { GetOneEmployeeRequest, EditEmployeeRequest, EditNoEmployeeRequest } from '../Redux-saga/Action/EmployeeAction'
import config from '../config/config'

export default function EmployeeAdd(props) {
    const dispatch = useDispatch()
    const { employee } = useSelector(state => state.employeeStated)
    const [previewImg, setPreviewImg] = useState();
    const [uploaded, setUploaded] = useState(false);

    useEffect(() => {
        dispatch(GetOneEmployeeRequest(props.id))
    }, [])

    useEffect(() => {
        let img = `${config.domain + '/employee/file/' + employee.emp_profile}`
        setPreviewImg(img)
    }, [employee])

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
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
        validationSchema : Yup.object({
            first_name: Yup.string("Enter Firstname").required("Firstname is required"),
            last_name: Yup.string("Enter Lastname").required("Lastname is required"),
            email: Yup.string("Enter Email").required("Email is required"),
            phone_number: Yup.string("Enter Phone Number").required("Phone Number is required"),
            job_id: Yup.string("Enter Job ID").required("Job ID is required"),
            salary: Yup.string("Enter Salary").required("Salary is required"),
            manager_id: Yup.string("Enter Manager ID").required("Manager ID is required"),
            department_id: Yup.string("Enter Department ID").required("Department ID is required")
        }),
        onSubmit: async (values) => {
            if (uploaded === true) {
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
                payload.append('employee_id', employee.employee_id)
                dispatch(EditEmployeeRequest(payload))
            } else {
                const payload = {
                    first_name: values.first_name,
                    last_name: values.last_name,
                    email: values.email,
                    phone_number: values.phone_number,
                    job_id: parseInt(values.job_id),
                    salary: values.salary,
                    manager_id: parseInt(values.manager_id),
                    department_id: parseInt(values.department_id),
                    employee_id: parseInt(employee.employee_id)
                };
                dispatch(EditNoEmployeeRequest(payload))
            }
            props.closeAdd();
            window.alert('Data Succesfully Edited')
            props.onRefresh();

        }
    })

    const uploadOnChange = name => event => {
        let reader = new FileReader()
        let file = event.target.files[0]
        console.log(file);

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
                <label class="block text-sm font-medium text-gray-700">First Name : </label>
                <input
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    type="text"
                    name="first_name"
                    id="first_name"
                    value={formik.values.first_name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoComplete="first_name"
                />
                 {formik.touched.first_name && formik.errors.first_name ? <span className="mt-2 text-sm text-red-600">{formik.errors.first_name}</span> : null}
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700">Last Name : </label>
                <input
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    type="text"
                    name="last_name"
                    id="last_name"
                    value={formik.values.last_name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoComplete="last_name"
                />
                {formik.touched.last_name && formik.errors.last_name ? <span className="mt-2 text-sm text-red-600">{formik.errors.last_name}</span> : null}
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700">Email : </label>
                <input
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    type="text"
                    name="email"
                    id="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoComplete="email"
                />
                {formik.touched.email && formik.errors.email ? <span className="mt-2 text-sm text-red-600">{formik.errors.email}</span> : null}
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700">Phone Number : </label>
                <input
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    type="text"
                    name="phone_number"
                    id="phone_number"
                    value={formik.values.phone_number}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoComplete="phone_number"
                />
                {formik.touched.phone_number && formik.errors.phone_number ? <span className="mt-2 text-sm text-red-600">{formik.errors.phone_number}</span> : null}
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700">Job ID : </label>
                <input
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    type="text"
                    name="job_id"
                    id="job_id"
                    value={formik.values.job_id}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoComplete="job_id"
                />
                {formik.touched.job_id && formik.errors.job_id ? <span className="mt-2 text-sm text-red-600">{formik.errors.job_id}</span> : null}
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700">Salary : </label>
                <input
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    type="text"
                    name="salary"
                    id="salary"
                    value={formik.values.salary}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoComplete="salary"
                />
                {formik.touched.salary && formik.errors.salary ? <span className="mt-2 text-sm text-red-600">{formik.errors.salary}</span> : null}
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700">Manager ID : </label>
                <input
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    type="text"
                    name="manager_id"
                    id="manager_id"
                    value={formik.values.manager_id}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoComplete="manager_id"
                />
                {formik.touched.manager_id && formik.errors.manager_id ? <span className="mt-2 text-sm text-red-600">{formik.errors.manager_id}</span> : null}
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700">Department ID : </label>
                <input
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    type="text"
                    name="department_id"
                    id="department_id"
                    value={formik.values.department_id}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoComplete="department_id"
                />
                {formik.touched.department_id && formik.errors.department_id ? <span className="mt-2 text-sm text-red-600">{formik.errors.department_id}</span> : null}
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700">Profile : </label>
                <div>
                    <div>
                        <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                            <div class="space-y-1 text-center">
                                {
                                    previewImg === `${config.domain + '/employee/file/null'}` ?
                                        <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        :
                                        <>
                                            <img crossOrigin='anonymous' src={previewImg} alt='image' />
                                            <span class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500" onClick={onClearImage}>Remove</span>
                                        </>
                                }

                                <div class="flex text-sm text-gray-600">
                                    <label for="profile" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                        <span>Upload a file</span>
                                        <input id="profile" name="profile" type="file" accept='image/*' onChange={uploadOnChange('file')} class="sr-only" />
                                    </label>
                                    <p class="pl-1">or drag and drop</p>
                                </div>
                                <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <button type='submit' className="cursor-pointer inline-flex justify-center py-2 px-2 shadow-sm text-sm font-medium rounded-md text-indigo-500 hover:text-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={formik.handleSubmit}> Simpan </button>
                <button className="cursor-pointer inline-flex justify-center py-2 px-2 shadow-sm text-sm font-medium rounded-md text-indigo-500 hover:text-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => props.setDisplay(false)}> Cancel </button>
            </div>
        </div>
    )
}