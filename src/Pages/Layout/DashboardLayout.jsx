import { Box, Button, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import AppSidebar from '../AppSidebar/AppSidebar';
import dashboardImg1 from '../../assets/images/dashboard1.webp';  
import Header from '../../Components/Header/Header';
import MobileSidebar from '../../Components/MobileSidebar/MobileSidebar';
import SnackAlert from '../../Components/SnackAlert/SnackAlert';
import { useDispatch, useSelector } from 'react-redux';
import { handleAnalyzeErrors } from '../../Redux/Slice/AnalyzeSlice/AnalyzeSlice';
import Heading from '../../Components/Heading/Heading';
import { handleSnackAlert } from '../../Redux/Slice/SnackAlertSlice/SnackAlertSlice';
import { useNavigation } from '../../utilis/navigattion';
import Footer from '../../Components/Footer/Footer';

const DashboardLayout = () => {
  const location = useLocation();
  const snackAlert = useSelector(state => state.snackAlert)
  const {pathname} = location
  const showAnalyzeErrorBox =  pathname.includes("/analyze")
  const [loading, setLoading] = useState(true)
  const auth = useSelector(state=>state?.auth)
 
  const dispatch = useDispatch()
  const handleCloseSnackAlert=()=>{
    dispatch(handleSnackAlert( {
      open:false,
  }))
}
useNavigation()
  
  if(!auth?.authenticated){
      dispatch(handleSnackAlert({open:true, message:"Your session has expired. Please log in again to continue.", severity:"error"}))
          return <Navigate to="/" replace={true} />
  } 
  const getHeaderTitle = (pathname) => {
    switch (pathname) {
      case '/dashboard':
        return 'Dashboard';
      case '/analyze':
        return 'Analyze';
      case '/credits':
        return 'Credits Top Up';
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
        case '/contact':
          return 'Choose Your Perfect Plan';
          case '/support':
            return 'Got a Question? Email Us';
            case '/license':
              return 'License';
            //   case '/terms-of-service':
            //     return 'Terms Of Service';
            //     case '/privacy-notice':
            //       return 'Privacy Notice';
      // Add more cases as needed for other routes
      default:
        return '';
    }
  }
  // contact-admin
  const headerTitle = getHeaderTitle(location.pathname);
useEffect(()=>  {
  setTimeout(()=>{
 setLoading(false)
  },[])

},[])

  // if (loading) {
  //   return <>loading</>
  // }

  return (
    
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        minHeight:{
          xs:"100vh",
          sm:"100vh"
        },
        maxHeight:{
          xs:"100vh",
          sm:"100vh"  
        },
        backgroundImage: `linear-gradient(rgba(27, 2, 75, .7), rgba(27, 2, 75, .8)), url(${dashboardImg1})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment:"fixed",

        padding: {
          xl: "15px 30px",
          lg: "3px 30px",
          md: "0px 30px",
          sm: "30px 15px",
          xs: "30px 5px"

        },
        
        boxSizing: 'border-box',
        
      }}
    >
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          maxWidth: `1540px`,
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
              lg: '340px',
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
              lg: auth.role == "user" ? "300px": "340px", 
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
              mt: "0px",
              display:"flex",
              flexDirection:"column",
              gap:"3rem",
              width:"100%",
                flexShrink:"1"
            }}
          >
            
            <Box sx={{
               padding: {
                xl: '30px40px',
                md:"20px 30px",
                sm:"30px 10px",
                xs: '30px 2px',
                borderRadius: '30px',
              },
              backgroundColor: 'white',
              width:"100%",
              flexShrink:"1",
             
            }} >
              <Header title={headerTitle} sx={{
                 fontSize: {
                  sm: "40px",
                  xs: "22px"
                },
              }} />
            <Outlet />

            </Box>
              
          </Box>
         
        </Box>



      </Box>  
      <SnackAlert open={snackAlert?.open} message={snackAlert.message} severity={snackAlert?.severity} handleClose={handleCloseSnackAlert}/>
      

      <Box
    sx={{
      position:"absolute",
      bottom:"0px"
    }}
    >
        <Footer/>

    </Box>
    </Box>
  );
};

export default DashboardLayout;
