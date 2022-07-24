import React,{useState,useEffect} from "react"
import RegionApi from "../api/RegionApi"

export default function RegionEdit(props) {
    const [region, setRegion] = useState([])

    useEffect(() => {
        RegionApi.findOne(props.id.regID).then(data => {
            setRegion(data)
        })
    },[])
    return (
        <div>
            <div className='relative z-0 mb-6 w-full group'>
                <form onSubmit={props.onSubmit}>
                    <div>
                        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Region ID : </label>
                        <input type="text" defaultValue={region.region_id} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                            onChange={props.handleOnChange('region_id')} disabled/>
                    </div>
                    <div>
                        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Region Name : </label>
                        <input type="text" placeholder={region.region_name} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                            onChange={props.handleOnChange('region_name')} />
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