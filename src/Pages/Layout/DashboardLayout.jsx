import { Box } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import BackgroundDashboard from '../../assets/images/BackgroundDashboard.png'
import AppSidebar from '../AppSidebar/AppSidebar'

const DashboardLayout = () => {
  return (
    <Box
    sx={{
       
    }}
    >
        <AppSidebar/>
    </Box>
  )
}

export default DashboardLayout