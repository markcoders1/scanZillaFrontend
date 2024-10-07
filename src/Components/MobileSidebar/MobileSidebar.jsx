import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { toggleSidebar } from '../../Redux/Slice/ToggleSidebarSlice/ToggleSidearSlice';
import './MobileSidebar.css';
import CustomButton from '../../Components/CustomButton/CustomButton';
import Logout from '../../Components/Logout/Logout';
import { RxCross2 } from "react-icons/rx";


const appUrl = import.meta.env.VITE_REACT_APP_API_URL;

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

const MobileSidebar = () => {
  const [username, setUsername] = useState()
  const [email, setEmail] = useState()
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.sidebarToggle.isOpen);
  const [admin, setAdmin] = useState();

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());


  useEffect(() => {
    // console.log(auth)

    // console.log(auth.email)
    // console.log(auth.username)
    setAdmin(auth.role)
    // console.log(auth.role)
    if (auth.role == "admin") {
      setAdmin(true)
    } else {
      setAdmin(false)

    }

    setUsername(auth.userName)
    setEmail(auth.email)

  }, [])

  const handleToggle = () => {
    dispatch(toggleSidebar());
  };

  const handleNavLinkClick = () => {
    dispatch(toggleSidebar());

  };

  useEffect(()=>{
    const {height} = windowDimensions
  },[windowDimensions])


  return (
    <Box
      className={`sidebar ${isOpen ? 'open' : ''}`}
      sx={{
        display: {
          lg: "none",
          xs: "flex",
        },
        flexDirection: 'column',
        gap: '2rem',
        justifyContent: 'center',
        position: "fixed",
        top: 0,
        right: -30,
        width: {
          sm: "370px",
          xs: "280px",
        },
        height: '100%',
        backgroundColor: '#060413',
        transform: isOpen ? 'translateX(0)' : 'translateX(470px)',
        transition: 'transform 0.3s ease-in-out',
        zIndex: 1000,
        paddingLeft: "20px",
        overflowY:"auto",
        paddingTop:`${windowDimensions.height <= 700? "100px":"10px"}`
      }}
    >
      <Box
        sx={{
          position: "absolute",
          color: "white",
          top: "10px",
          left: "20px",
          fontSize: "2rem",
          fontWeight: "600",
        }}
      ><RxCross2 onClick={handleToggle} /></Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '60px',
          justifyContent: 'center',
          // marginBottom: `${windowDimensions.height <= 700?"0px":"120px"}`
        }}
      >
        <Box
          sx={{
            gap: "20px",
          }}
        >
          <Typography
            sx={{
              fontWeight: '600',
              fontSize: {
                sm: "'2.8rem'",
                xs: "2rem"
              },
              lineHeight: '35px',
              color: '#D081FF',
            }}
          >
            ScanZilla
          </Typography>
        </Box>
        {
          admin ? <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            <Typography>
              <NavLink
                to="/dashboard-admin"
                className={({ isActive }) =>
                  isActive ? 'anchortag2 anchorActive2' : 'anchortag2'
                }
                onClick={handleNavLinkClick}
              >
                Dashboard
              </NavLink>
            </Typography>
            <Typography>
              <NavLink
                to="/tool-management"
                className={({ isActive }) =>
                  isActive ? 'anchortag2 anchorActive2' : 'anchortag2'
                }
                onClick={handleNavLinkClick}
              >
                Tool Management
              </NavLink>
            </Typography>
            <Typography>
              <NavLink
                to="/assistant-instruction"
                className={({ isActive }) =>
                  isActive ? 'anchortag2 anchorActive2' : 'anchortag2'
                }
                onClick={handleNavLinkClick}
              >
                Assistant Instruction
              </NavLink>
            </Typography>
            <Typography>
              <NavLink
                to="/user-management"
                className={({ isActive }) =>
                  isActive ? 'anchortag2 anchorActive2' : 'anchortag2'
                }
                onClick={handleNavLinkClick}
              >
                User Management
              </NavLink>
            </Typography>
            <Typography>
              <NavLink
                to="/credits-management"
                className={({ isActive }) =>
                  isActive ? 'anchortag2 anchorActive2' : 'anchortag2'
                }
                onClick={handleNavLinkClick}
              >
                Credits Management
              </NavLink>
            </Typography>
            
          </Box> :
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem"
              }}
            >
              <Typography>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    isActive ? 'anchortag2 anchorActive2' : 'anchortag2'
                  }
                  onClick={handleNavLinkClick}
                >
                  Dashboard
                </NavLink>
              </Typography>

              <Typography>
                <NavLink
                  to="/analyze"
                  className={({ isActive }) =>
                    isActive ? 'anchortag2 anchorActive2' : 'anchortag2'
                  }
                  onClick={handleNavLinkClick}
                >
                  Analyze
                </NavLink>
              </Typography>
              <Typography>
                <NavLink
                  to="/credits"
                  className={({ isActive }) =>
                    isActive ? 'anchortag2 anchorActive2' : 'anchortag2'
                  }
                  onClick={handleNavLinkClick}
                >
                  Credits
                </NavLink>
              </Typography>
              <Typography>
                <NavLink
                  to="/history"
                  className={({ isActive }) =>
                    isActive ? 'anchortag2 anchorActive2' : 'anchortag2'
                  }
                  onClick={handleNavLinkClick}
                >
                  History
                </NavLink>
              </Typography>
              <Typography>
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    isActive ? 'anchortag2 anchorActive2' : 'anchortag2'
                  }
                  onClick={handleNavLinkClick}
                >
                  Profile
                </NavLink>
              </Typography>
              <Typography>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? 'anchortag2 anchorActive2' : 'anchortag2'
                  }
                  onClick={handleNavLinkClick}
                >
                  Contact Us
                </NavLink>
              </Typography>
            </Box>
        }
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '5px',
          justifyContent: 'center',
        }}
      >
        <Typography
          sx={{
            fontWeight: "600",
            fontSize: "1.6rem",
            color: "white"
          }}
        >
          {username}
        </Typography>
        <Typography
          sx={{
            fontWeight: "400",
            fontSize: "0.9rem",
            color: "#a49ab7",
          }}
        >
          {email}
        </Typography>
        <Typography
          sx={{
            marginTop: "10px"
          }}
          onClick={handleNavLinkClick}
        >
          <Logout />
        </Typography>
      </Box>
    </Box>
  );
};

export default MobileSidebar;
