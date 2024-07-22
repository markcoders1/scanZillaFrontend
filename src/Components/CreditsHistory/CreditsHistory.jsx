import React from 'react';
import { Box, Typography } from '@mui/material';
import CustomButton from '../CustomButton/CustomButton';

const CreditsHistory = ({ index, item }) => {
    // console.log(item)
    function getCurrencySymbol(currencyCode) {
        // console.log(currencyCode)
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currencyCode,
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        });
    
        // This uses a hacky way to extract the currency symbol
        // We format a zero value and remove all digits and minus sign to leave only the currency symbol
        // console.log(formatter.format(0).replace(/\d/g, '').replace(/\u2212/g, '').trim())
        return formatter.format(0).replace(/\d/g, '').replace(/\u2212/g, '').trim();
    }
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
                {item.credits} Credits 
            </Typography>
            <Typography
             sx={{
                fontSize: "16px",
                fontWeight: "600",
                color: "#333333",
            }}
            >
                Price:{item.credits}{getCurrencySymbol(item.currency)}
            </Typography>
        </Box>
    );
};

export default CreditsHistory;
