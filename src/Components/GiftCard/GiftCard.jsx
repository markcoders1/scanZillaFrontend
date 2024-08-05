import React from 'react';
import { Box, Typography } from '@mui/material';
import CustomButton from '../CustomButton/CustomButton';

const GiftCard = ({ id, title, description, bullets, openModal,error }) => {
    const handleClick = () => {
        openModal({ id, title, description, bullets, error });
    };

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: 'center',
                gap: "20px"
            }}
        >
            <Typography
                sx={{
                    fontWeight: "400",
                    fontSize: {
                        xs:"16px",
                        sm:"16px"
                    },
                    color: "#A0A4A9",
                }}
            >
                Analyzation # {id.substring(16)}
          
            </Typography>
            <Typography>
                <CustomButton
                    border={"1px solid #333333"}
                    ButtonText={"View Details"}
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

export default GiftCard;
