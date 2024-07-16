import React, { forwardRef, useEffect, useState } from 'react';
import bg from "./../../assets/images/bg.png";
import visa from "./../../assets/images/visa circles.png";
import { Box, Typography } from '@mui/material';
import axiosInstance from '../../Hooks/useQueryGallery/AuthHook/AuthHook';

const appUrl = import.meta.env.VITE_REACT_APP_API_URL

const CustomCard = ({ name ,cardStyle, cb}) => {
    const [num,setNum] = useState('')

    useEffect(()=>{
        const fetchCard =async ()=>{
            const response=await axiosInstance({method:'get',url:`${appUrl}/getcardinfo`})
            setNum(response.data.cards[0].last4)
        }
        fetchCard()
    },[])


    return (
        <Box
        onClick={cb}
            sx={{
                background: `linear-gradient(rgba(27, 2, 75, .7), rgba(27, 2, 75, .8)), url(${bg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                borderRadius: "10px",
                position: "relative",
                color: "white",
                padding: "26px 32px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                flexGrow:1,
                boxShadow: "4px 5px 15px rgba(200, 200, 200, 0.61)",
                ...cardStyle
            }}
        >
            <Typography
                sx={{
                    fontWeight: "600",
                    fontSize: "16px",
                    lineHeight: "24px",
                }}
            >
                Debit Card
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px"
                }}
            >
                <Typography
                    sx={{
                        fontSize: "18px",
                        lineHeight: "27px",
                        fontWeight: "400"
                    }}
                >
                    {num?`**** **** **** ${num}`:'no card found'}
                </Typography>

                <Typography
                    sx={{
                        fontSize: "14px",
                        lineHeight: "21px",
                        fontWeight: "400"
                    }}
                >
                    {name}
                </Typography>
            </Box>

            <Box
                sx={{
                    position: "absolute",
                    bottom: "15px",
                    right: "40px"
                }}
            >
                <img src={visa} alt="Visa" />
            </Box>
        </Box>
    );
};

export default CustomCard;
