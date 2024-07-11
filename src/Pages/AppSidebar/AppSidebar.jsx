import React from 'react';
import { Box, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import './AppSidebar.css';
import CustomButton from '../../Components/CustomButton/CustomButton';
import Logout from '../../Components/Logout/Logout';

const AppSidebar = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
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
            color:"#ffff"
          }}
        >
          Samantha
        </Typography>
        <Typography
          sx={{
            fontWeight: '400',
            fontSize: '1.1rem',
            color: '#a49ab7',
          }}
        >
          samantha@email.com
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
