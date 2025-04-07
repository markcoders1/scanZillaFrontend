import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import './AppSidebar.css';
import CustomButton from '../../Components/CustomButton/CustomButton';
import Logout from '../../Components/Logout/Logout';
import { useSelector } from 'react-redux';
import logo from '../../assets/images/sample.webp';
import { useLocation } from 'react-router-dom';

const AppSidebar = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [admin, setAdmin] = useState(false);

  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (auth.role == 'admin') {
      setAdmin(true);
      // console.log(auth.role)
    } else {
      setAdmin(false);
    }

    setUsername(auth.userName);
    setEmail(auth.email);
  }, []);

  const {pathname} = useLocation()

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        justifyContent: 'center',
        marginTop: {xl:'20px', xs:"0px"},
        padding: '20px', // Added padding for better spacing
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap:  {xl:'30px', xs:"0px"},
          justifyContent: 'center',
        }}
      >
        <Box>
          <img src={logo} alt="" style={{width:"120px",backgroundColor:"transparent", marginLeft:"-20px"}} />
        </Box>

        {admin ? (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: {xl:'1.5rem', xs:".7rem"},

            }}
          >
            <Typography>
              <NavLink
                to="/dashboard-admin"
                className={({ isActive }) =>
                  isActive ? 'anchortag anchorActive' : 'anchortag'
                }
              >
                Dashboard
              </NavLink>
            </Typography>
            <Typography>
              <NavLink
                to="/tool-management"
                className={({ isActive }) =>
                  isActive ? 'anchortag anchorActive' : 'anchortag'
                }
              >
                Tool Management
              </NavLink>
            </Typography>
            <Typography>
              <NavLink
                to="/assistant-instruction"
                className={({ isActive }) =>
                  isActive ? 'anchortag anchorActive' : 'anchortag'
                }
              >
                Assistant Instructions
              </NavLink>
            </Typography>
            <Typography>
              <NavLink
                to="/user-management"
                className={({ isActive }) =>
                  isActive ? 'anchortag anchorActive' : 'anchortag'
                }
              >
                User Management
              </NavLink>
            </Typography> 
            <Typography>
              <NavLink
                to="/credits-management"
                className={({ isActive }) =>
                  isActive ? 'anchortag anchorActive' : 'anchortag'
                }
              >
                Credits Management
              </NavLink>
            </Typography>
            
          </Box>
        ) : (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: {xl:'1.5rem', md:".7rem" ,xs:".8rem"},
            }}
          >
            <Typography>
              <NavLink
                to="/dashboard"
                // className={({ isActive }) =>
                //   isActive ? 'anchortag anchorActive' : 'anchortag'
                // }
                className={pathname == '/dashboard' ? 'anchortag anchorActive': 'anchortag'}
              >
                Dashboard
              </NavLink>
            </Typography>
            <Typography>
              <NavLink
                to="/analyze"
                className={({ isActive }) =>
                  isActive ? 'anchortag anchorActive' : 'anchortag'
                }
              >
                Analyze
              </NavLink>
            </Typography>
            <Typography>
              <NavLink
                to="/credits"
                className={({ isActive }) =>
                  isActive ? 'anchortag anchorActive' : 'anchortag'
                }
              >
               Credits Top Up
              </NavLink>
            </Typography>
            <Typography>
              <NavLink
                to="/history"
                className={({ isActive }) =>
                  isActive ? 'anchortag anchorActive' : 'anchortag'
                }
              >
                History
              </NavLink>
            </Typography>
            <Typography>
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  isActive ? 'anchortag anchorActive' : 'anchortag'
                }
              >
                Profile
              </NavLink>
            </Typography>
            {/* <Typography>
              <NavLink
                to="/license"
                className={({ isActive }) =>
                  isActive ? 'anchortag anchorActive' : 'anchortag'
                }
              >
                License
              </NavLink>
            </Typography> */}
            <Typography>
              <NavLink
                to="/support"
                className={({ isActive }) =>
                  isActive ? 'anchortag anchorActive' : 'anchortag'
                }
              >
                Contact Us
              </NavLink>
            </Typography>
          </Box>
        )}
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0px',
          justifyContent: 'center',
        }}
      >
        <Typography
          sx={{
            fontWeight: '600',
            fontSize: '1.9rem',
            color: '#ffff', 
          }}
        >
          {auth?.userName}
        </Typography>
        <Typography
          sx={{
            fontWeight: '400',
            fontSize: '0.9rem',
            color: '#a49ab7',
           
          }}
        >
          {auth?.email}
        </Typography>
        <Typography
          sx={{
            marginTop: '25px',
          }}
        >
          <Logout />
        </Typography>
      </Box>
    </Box>
  );
};

export default AppSidebar;
