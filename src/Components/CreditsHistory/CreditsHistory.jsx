import React from 'react';
import { Box, Typography } from '@mui/material';
import CustomButton from '../CustomButton/CustomButton';

const CreditsHistory = ({ index }) => {
    
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: 'center'
            }}
        >
            <Typography
            sx={{
                fontWeight:"400",
                fontSize:"20px",
                color:"#A0A4A9",
            }}
            >
                90 Credits 
            </Typography>
            <Typography
             sx={{
                fontSize: "16px",
                fontWeight: "600",
                color: "#333333",
            }}
            >
                Price: 180$
            </Typography>
        </Box>
    );
};

export default CreditsHistory;
