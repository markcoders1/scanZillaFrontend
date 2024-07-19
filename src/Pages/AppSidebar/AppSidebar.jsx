import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import './AppSidebar.css';
import CustomButton from '../../Components/CustomButton/CustomButton';
import Logout from '../../Components/Logout/Logout';
import { useSelector } from 'react-redux';

const AppSidebar = () => {


  const [username, setUsername] = useState()
  const [email, setEmail] = useState()


  const auth = useSelector((state) => state.auth);

  const [admin, setAdmin] = useState(false)

  useEffect(() => {
    // console.log(auth)

    // console.log(auth.email)
    // console.log(auth.username)

    setUsername(auth.username)
    setEmail(auth.email)

  }, [])

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '4rem',
        justifyContent: 'center',
        marginTop: '40px',
        padding: '20px', // Added padding for better spacing
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '80px',
          justifyContent: 'center',
        }}
      >
        <Box>
          <Typography
            sx={{
              fontWeight: '600',
              fontSize: '3rem',
              lineHeight: '35px',
              color: '#D081FF',
            }}
          >
            ScanZilla
          </Typography>
        </Box>

        {
          admin ?
            <Box
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
                    isActive ? 'anchortag anchorActive' : 'anchortag'
                  }
                >
                  DashBoard
                </NavLink>
              </Typography>
              <Typography>
                <NavLink
                  to="/tool-management"
                  className={({ isActive }) =>
                    isActive ? 'anchortag anchorActive' : 'anchortag'
                  }
                >
                  Tool Managemnet
                </NavLink>
              </Typography>
              <Typography>
                <NavLink
                  to="/user-management"
                  className={({ isActive }) =>
                    isActive ? 'anchortag anchorActive' : 'anchortag'
                  }
                >
                  User Managemnet
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
            :
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
              }}
            >
              <Typography>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    isActive ? 'anchortag anchorActive' : 'anchortag'
                  }
                >
                  DashBoard
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
                  Credits
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
            fontWeight: '600',
            fontSize: '1.9rem',
            color: "#ffff"
          }}
        >
          {username}
        </Typography>
        <Typography
          sx={{
            fontWeight: '400',
            fontSize: '1.1rem',
            color: '#a49ab7',
          }}
        >
          {email}
        </Typography>
        <Typography
          sx={{
            marginTop: '10px',
          }}
        >
          <Logout />
        </Typography>
      </Box>
    </Box>
  );
};

export default AppSidebar;
