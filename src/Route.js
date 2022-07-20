import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import DashboardLayout from './MainLayout/Dashboard'
import RegionView from './ViewApi/RegionView'
import EmployeeView from './ViewApi/EmployeeView'
import DependentView from './ViewApi/DependentView'



export default function Route() {
  return useRoutes([
    {
        path: '/',
        element: <DashboardLayout />,
        children: [
            {path: 'dependent',element: <DependentView />},
            { path: 'region', element: <RegionView /> },
            { path: 'employee', element: <EmployeeView /> },
        ]
    },
    { path: '*', element: <Navigate to='/404' replace /> }
])
}