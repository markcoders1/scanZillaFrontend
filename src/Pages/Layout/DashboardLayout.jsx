import { Box, Button, Paper, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import AppSidebar from '../AppSidebar/AppSidebar';
import dashboardImg1 from '../../assets/images/dashboard.png';
import Header from '../../Components/Header/Header';
import MobileSidebar from '../../Components/MobileSidebar/MobileSidebar';
import SnackAlert from '../../Components/SnackAlert/SnackAlert';
import { useDispatch, useSelector } from 'react-redux';
import { handleAnalyzeErrors } from '../../Redux/Slice/AnalyzeSlice/AnalyzeSlice';
import Heading from '../../Components/Heading/Heading';

const DashboardLayout = () => {
  const location = useLocation();
  const snackAlert = useSelector(state => state.snackAlert)
  const {pathname} = location
  const showAnalyzeErrorBox =  pathname.includes("/analyze")

  const getHeaderTitle = (pathname) => {
    switch (pathname) {
      case '/dashboard':
        return 'Dashboard';
      case '/analyze':
        return 'Analyze';
      case '/credits':
        return 'Credits & Pricing';
      case '/history':
        return 'History';
      case '/profile':
        return 'Profile';
      case '/card-details':
        return 'Debit / Credit card';
      case '/payments':
        return 'Payment Screen';
      case '/tool-management':
        return 'Tool Management';
      case '/user-management':
        return 'User Management';
      case '/credits-management':
        return 'Credits Management';
      case '/credits-management/package-setting':
        return 'Package Setting';
      case '/dashboard-admin':
        return 'Dashboard';
      case '/assistant-instruction':
        return 'Assistant Instructions';
        case '/contact-admin':
          return 'Contact Admin';
      // Add more cases as needed for other routes
      default:
        return '';
    }
  }
  // contact-admin
  const headerTitle = getHeaderTitle(location.pathname);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        minHeight: '100vh',
        backgroundImage: `linear-gradient(rgba(27, 2, 75, .7), rgba(27, 2, 75, .8)), url(${dashboardImg1})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment:"fixed",
        padding: {
          sm: "20px 30px",
          xs: "10px 10px"
        },
        // marginLeft: "-15px",
        boxSizing: 'border-box',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          maxWidth: `1440px`,
          boxSizing: 'border-box',
          gap: "1rem",
          flexDirection:{
            xl:"column",
            lg:"column",
            m:"column",
            sm:"column",
            xs:"column"
          }
        }}
      >
        <Box
          sx={{
            width: {
              lg: '320px',
              xs: '0px', // Hidden on smaller screens
            },
            position: 'fixed', // Fixed position
            height: '100%',
            zIndex: 1,
            display: {
              xs: 'none',
              lg: 'block',
            },
          }}
        >
          <AppSidebar />
        </Box>
        <Box>
          <MobileSidebar />
        </Box>
        <Box
          sx={{
            marginLeft: {
              lg: '320px', // Adjust to match fixed sidebar width
              xs: '0px',
            },
            // width: '100%',
            // maxWidth: '1140px', // Reduced to fit within the available space
             flexShrink:"1",
           
            boxSizing: 'border-box',
            overflowY: 'auto', // Enable scrolling for the main content
          }}
        >
          
          <Box
            sx={{
              mt: "20px",
              display:"flex",
              flexDirection:"column",
              ga:"3rem",
              width:"100%",
                flexShrink:"1"
            }}
          >
            
            <Box sx={{
               padding: {
                sm: '50px',
                xs: '30px 12px',
                borderRadius: '30px',
              },
              backgroundColor: 'white',
              width:"100%",
              flexShrink:"1"
            }} >
              <Header title={headerTitle} />
            <Outlet />

            </Box>
            <Box sx={{mt:"30px"}} >
        
        {/* ---------------- */}

        {/* ------------------- */}
            </Box>
          </Box>
         
        </Box>

        {/* <Button onClick={()=>{
            dispatch(
              handleAnalyzeErrors(
                {
                  TE:["abc", "def", "efg"],
                  DE:["abc", "def", "efg"],
                  BE:["abc", "def", "efg"],
                  KE:["abc", "def", "efg"],
                  CE:["abc", "def", "efg"],
                }
              )
            )
          }}>
          add error
        </Button> */}

    
      </Box>  
      <SnackAlert open={snackAlert.open} message={snackAlert.message} severity={snackAlert.severity} />
      

    </Box>
  );
};

export default DashboardLayout;
