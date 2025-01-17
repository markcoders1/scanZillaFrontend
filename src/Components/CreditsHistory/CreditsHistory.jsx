import React from 'react';
import { Box, Typography } from '@mui/material';
import CustomButton from '../CustomButton/CustomButton';

const CreditsHistory = ({ index, item }) => {
    function getCurrencySymbol(currencyCode) {
        if (!currencyCode) {
            return ''; // Return an empty string or a default value if currencyCode is undefined or null
        }
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currencyCode,
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        });

        return formatter.format(0).replace(/\d/g, '').replace(/\u2212/g, '').trim();
    }
    function formatDate(dateString) {
        const date = new Date(dateString);  // Convert string to Date object
        const options = { year: 'numeric', month: 'short', day: '2-digit' };  // Format options
        return date.toLocaleDateString('en-US', options).replace(',', '');  // Format and remove comma
    }
    function formatUnixTimestamp(timestamp) {
        const date = new Date(timestamp * 1000); // Convert to milliseconds
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }
    
    const formattedDate = formatDate('2024-11-27T17:10:01.720Z');
    // console.log(formattedDate);
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
                    fontWeight: "400",
                    fontSize: "16px",
                    color: "#A0A4A9",
                }}
            >
                {formatUnixTimestamp(item?.date)}
            </Typography>
            <Typography
                sx={{
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#333333",
                }}
            >
                {
                    item?.credits ? `Credits Used  ${item?.credits} `: "--"
                }
           

            </Typography>
        </Box>
    );
};

export default CreditsHistory;
