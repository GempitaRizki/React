import React from 'react'

export default function LocationAdd(props) {
    return (
        <div>
            <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
            <form onSubmit={props.onSubmit}>
                <div>
                <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name'> Location ID : </label>
                <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'type="text" placeholder="location id" 
                    onChange = {props.handleOnChange('location_id')}/>
                </div>
                <div>
                <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name'> Street address : </label>
                <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'type="text" placeholder="Street Address" 
                    onChange = {props.handleOnChange('street_address')}/>
                </div>
                <div>
                <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name'> Postal Code : </label>
                <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'type="text" placeholder="Postal Code" 
                    onChange = {props.handleOnChange('postal_code')}/>
                </div>
                <div>
                <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name'> City : </label>
                <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'type="text" placeholder="city" 
                    onChange = {props.handleOnChange('city')}/>
                </div>
                <div>
                <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name'> State Province : </label>
                <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'type="text" placeholder="Street Address" 
                    onChange = {props.handleOnChange('state_province')}/>
                </div>
                <div>
                <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name'> Country ID : </label>
                <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'type="text" placeholder="country" 
                    onChange = {props.handleOnChange('country_id')}/>
                </div>
                <div>
                    <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' type='submit'> Simpan </button>
                    <button className='text-white bg-red-700 hover:bg-red-800 focus:ring-5 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-6 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' onClick={()=>props.setDisplay(false)}> Cancel </button>
                </div>
            </form>
        </div>
     </div>
    )
 }