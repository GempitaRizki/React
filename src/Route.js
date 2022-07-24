import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import DashboardLayout from './MainLayout/Dashboard'
import EmployeeView from './ViewApi/EmployeeView'
import RegionView from './ViewApi/RegionView'
import DepartmentView from './ViewApi/DepartmentView'
import JobView from './ViewApi/JobView'
import LocationView from './ViewApi/LocationView'

export default function Route() {
  return useRoutes([
    {
        path: '/',
        element: <DashboardLayout />,
        children: [
            { path: 'job', element: <JobView /> },
            { path: 'location', element: <LocationView /> },
            { path: 'department', element: <DepartmentView /> },
            { path: 'region', element: <RegionView /> },
            { path: 'employee', element: <EmployeeView /> },
        ]
    },
    { path: '*', element: <Navigate to='/404' replace /> }
])
}