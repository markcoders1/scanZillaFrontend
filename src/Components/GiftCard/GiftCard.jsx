import React from 'react';
import { Box, Typography } from '@mui/material';
import CustomButton from '../CustomButton/CustomButton';

const GiftCard = ({ id, title, description, bullets, openModal,error,keywords , reccomendations}) => {
    // console.log("recomendations ===>",reccomendations)
    const collectiveString = `${title}${description}${bullets?.join(" ")}${keywords?keywords:""}`;
    
    let display
    if(collectiveString.length<16){
        display = collectiveString.length>0?collectiveString.slice(0,collectiveString.length):"No Value Entered"
        if(/^\s*$/.test(display)){
            display = "No Value Entered"
        }
    }else{
        display = collectiveString.slice(0,20) + " ..."
    }

    const handleClick = () => {
        openModal({ id, title, description, bullets, error,keywords,reccomendations });
    };

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: {sm:"center", xs:"start"},
                gap: "20px",
                flexDirection:{
                    sm:"row",
                    xs:"column"
                }

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
               {display}
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
