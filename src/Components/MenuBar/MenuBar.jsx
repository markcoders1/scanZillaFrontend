import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '../../Redux/Slice/ToggleSidebarSlice/ToggleSidearSlice';
// import menuImg from './../../assets/images/noun-icon.png'
import { HiMenuAlt1 } from "react-icons/hi";
import { Box } from '@mui/material';

const MenuBar = () => {
    const dispatch = useDispatch();

    const handleToggle = () => {
        dispatch(toggleSidebar());
    };

    return (
        <header>
           <div onClick={handleToggle}
           style={{
            fontSize:"40px",
            marginTop:"10px"
           }}
           >
                <HiMenuAlt1/>
           </div>
        </header>


    );
};

export default MenuBar;
