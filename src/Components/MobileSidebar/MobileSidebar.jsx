import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { toggleSidebar } from '../../Redux/Slice/ToggleSidebarSlice/ToggleSidearSlice';
import './MobileSidebar.css';
import CustomButton from '../../Components/CustomButton/CustomButton';
import Logout from '../../Components/Logout/Logout';
import { RxCross2 } from "react-icons/rx";

const appUrl = import.meta.env.VITE_REACT_APP_API_URL;

const MobileSidebar = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.sidebarToggle.isOpen);

  const handleToggle = () => {
    dispatch(toggleSidebar());
  };

  const handleNavLinkClick = () => {
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
        right: -30,
        width: {
          sm: "330px",
          xs: "250px",
        },
        height: '100%',
        backgroundColor: '#060413',
        transform: isOpen ? 'translateX(0)' : 'translateX(330px)',
        transition: 'transform 0.3s ease-in-out',
        zIndex: 1000,
        paddingLeft: "20px",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          color: "white",
          top: "10px",
          left: "20px",
          fontSize:"2rem",
          fontWeight:"600"
        }}
      ><RxCross2 onClick={handleToggle} /></Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '60px',
          justifyContent: 'center',
          marginBottom:"120px "
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
              onClick={handleNavLinkClick}
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
              onClick={handleNavLinkClick}
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
              onClick={handleNavLinkClick}
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
              onClick={handleNavLinkClick}
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
              onClick={handleNavLinkClick}
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
            fontSize: "1.6rem",
            color:"white"
          }}
        >
          Samantha
        </Typography>
        <Typography
          sx={{
            fontWeight: "400",
            fontSize: "0.9rem",
            color: "#a49ab7",
          }}
        >
          samantha@email.com
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
