import React from 'react';
import { Box, Typography } from '@mui/material';
import CustomButton from '../CustomButton/CustomButton';

const RestrictedKeyword = ({content}) => {
    const handleClick = () => {
       alert("remove button clicked at restricted keyword")
    };

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: 'center',
                gap: "50px"
            }}
        >
            <Typography
                sx={{
                    fontWeight: "400",
                    fontSize: "20px",
                    color: "#A0A4A9",
                }}
            >
                {content}
            </Typography>
            <Typography>
                <CustomButton
                    border={"1px solid #333333"}
                    ButtonText={"Remove"}
                    color={"#333333"}
                    fontSize={"12px"}
                    variant={"outlined"}
                    fontWeight={"500"}
                    onClick={handleClick}
                />
            </Typography>
        </Box>
    );
};

export default RestrictedKeyword;
