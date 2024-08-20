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
  const AnalyzeErrros = useSelector(state=>state.analyze)
  const dispatch = useDispatch()

  function hasValues(obj) {
    return Object.values(obj).some(arr => arr.length > 0 && !(arr.length === 1 && arr[0] === ""));
  }

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


        {
          (showAnalyzeErrorBox && hasValues(AnalyzeErrros)) ?
          <Box
            sx={{
              backgroundColor:"white",
              borderRadius:"32px",
              width:{
                xl:"100%",
                lg:"100%",
                md:"100%",
                sm:"100%",
                xs:"100%"
              },
            
              overflowY: "auto",
              overflowX: "hidden",
              padding:"40px",
              "&::-webkit-scrollbar": {
                width: "8px"
              },
              "&::-webkit-scrollbar-track": {
                background: "#DFDFDF",
                borderRadius: "10px"
              },
              "&::-webkit-scrollbar-thumb": {
                background: "black",
                borderRadius: "10px"
              },
              "&::-webkit-scrollbar-thumb:hover": {
                background: "#b30000"
              },
              height:"100%",
              maxHeight:"90vh",
              // maxWidth: '1140px'
            }}
          >
            {/* {AnalyzeErrros?.TE?.map((item, index)=><Typography key={index}>{item}</Typography>)} */}

            {/* {console.log(AnalyzeErrros.TE[0])} */}
            {(AnalyzeErrros.TE.length>0 && AnalyzeErrros.TE[0]!=="")?
              <Paper sx={{
                padding:"20px",
                margin:"30px 0",
                boxShadow:"0px 8px 26px -4px rgba(0, 0, 0, 0.2)",
                borderRadius:"10px"
              }}>
                <Heading Heading="Title Errors" />
                {AnalyzeErrros?.TE?.map((item, index)=><Typography sx={{padding:"10px 0"}} key={index}>
                {item.split("|-|").map((el,i)=>{
                    return (
                      <>
                        • {el}
                        {i < item.split("|-|").length - 1 && <br />}
                      </>
                    )
                })}
                </Typography>)}
              </Paper>
              :
              null
            }
            {AnalyzeErrros.BE.length>0  && AnalyzeErrros.BE[0]!=="" ?
              <Paper sx={{
                padding:"20px",
                margin:"20px 0",
                 boxShadow:"0px 8px 26px -4px rgba(0, 0, 0, 0.2)",
                borderRadius:"10px"
              }}>
                <Heading Heading="Bullet Errors" />
                {AnalyzeErrros?.BE?.map((item, index)=><Typography sx={{padding:"10px 0"}} key={index}>
                  {item.split("|-|").map((el,i)=>{
                      return (
                        <>
                          • {el}
                          {i < item.split("|-|").length - 1 && <br />}
                        </>
                      )
                  })}
                </Typography>)}
              </Paper>
              :
              null
            }
            {AnalyzeErrros.DE.length>0 && AnalyzeErrros.DE[0]!==""?
              <Paper sx={{
                padding:"20px",
                margin:"20px 0",
                 boxShadow:"0px 8px 26px -4px rgba(0, 0, 0, 0.2)",
                borderRadius:"10px"
              }}>
                <Heading Heading="Description Errors" />
                {AnalyzeErrros?.DE?.map((item, index)=><Typography sx={{padding:"10px 0"}} key={index}>
                {item.split("|-|").map((el,i)=>{
                    return (
                      <>
                        • {el}
                        {i < item.split("|-|").length - 1 && <br />}
                      </>
                    )
                })}
                </Typography>)}
              </Paper>
              :
              null
            }
            {AnalyzeErrros.KE.length>0 && AnalyzeErrros.KE[0]!==""?
              <Paper  sx={{
                padding:"20px",
                margin:"20px 0",
                 boxShadow:"0px 8px 26px -4px rgba(0, 0, 0, 0.2)",
                borderRadius:"10px"
              }}>
                <Heading Heading="Keyword Errors" />
                {AnalyzeErrros?.KE?.map((item, index)=><Typography sx={{padding:"10px 0"}} key={index}>
                {item.split("|-|").map((el,i)=>{
                    return (
                      <>
                        • {el}
                        {i < item.split("|-|").length - 1 && <br />}
                      </>
                    )
                })}
                </Typography>)}
              </Paper>
              :
              null
            }
            {AnalyzeErrros.CE.length>0 && AnalyzeErrros.CE[0]!==""?
              <Paper  sx={{
                padding:"20px",
                margin:"20px 0",
                 boxShadow:"0px 8px 26px -4px rgba(0, 0, 0, 0.2)",
                borderRadius:"10px"
              }}>
                <Heading Heading="Category Errors" />
                {AnalyzeErrros?.CE?.map((item, index)=><Typography sx={{padding:"10px 0"}} key={index}>
                  {item.split("|-|").map((el,i)=>{
                    return (
                      <>
                        • {el}
                        {i < item.split("|-|").length - 1 && <br />}
                      </>
                    )
                  })}
                </Typography>)}
              </Paper>
              :
              null
            }
          </Box>
          :
          null
        }

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
