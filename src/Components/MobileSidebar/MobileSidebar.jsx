import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { toggleSidebar } from '../../Redux/Slice/ToggleSidebarSlice/ToggleSidearSlice';
import './MobileSidebar.css';
import CustomButton from '../../Components/CustomButton/CustomButton';
import Logout from '../../Components/Logout/Logout';

const appUrl = import.meta.env.VITE_REACT_APP_API_URL;

const MobileSidebar = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.sidebarToggle.isOpen);

  const handleToggle = () => {
    dispatch(toggleSidebar());
  };

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
        left: 0,
        width: '300px',
        height: '100%',
        backgroundColor: '#060413',
        transform: isOpen ? 'translateX(0)' : 'translateX(-300px)',
        transition: 'transform 0.3s ease-in-out',
        zIndex: 1000,
        paddingLeft:"20px",
        //  margin:"auto"
       
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '60px',
          justifyContent: 'center',
        
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
              fontSize: '2.8rem',
              lineHeight: '35px',
              color: '#D081FF',
            }}
          >
            ScanZilla
          </Typography>
        </Box>
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
            fontWeight: "600",
            fontSize: "1.9rem"
          }}
        >
          Samantha
        </Typography>
        <Typography
          sx={{
            fontWeight: "400",
            fontSize: "1.1rem",
            color: "#a49ab7",
          }}
        >
          samantha@email.com
        </Typography>
        <Typography
          sx={{
            marginTop: "10px"
          }}
        >
          <Logout />
        </Typography>
      </Box>
    </Box>
  );
};

export default MobileSidebar;
