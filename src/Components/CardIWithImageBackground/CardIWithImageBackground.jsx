import React from 'react'
import bg from "./../../assets/images/bg1.webp"
import visa from "./../../assets/images/visa circles.png"
import { Box, Typography } from '@mui/material'

const CardIWithImageBackground = ({
    title = "",
    text = "",
    sxCardCss = {},
    sxTextCss = {},

    sxTitleCss = {},

}) => {
    return (
        <Box sx={{
            background: `linear-gradient(rgba(27, 2, 75, .1), rgba(27, 2, 75, .1)), url(${bg})`,
            backgroundSize: "cover", backgroundRepeat: "no-repeat",
            borderRadius: "10px",
            position: "relative",
            color: "white",
            padding: {
                sm: "26px 32px",
                xs: "26px 32px"
            },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "150px",
            
            boxShadow: "4px 5px 15px rgba(200, 200, 200, 0.61)",
            ...sxCardCss

        }}>

            <Typography sx={{
                fontWeight: "600",
                fontSize: {
                    sm: "25px",
                    xs: "22px",
                    lg:"22px"
                },
                lineHeight: "40px",
                ...sxTitleCss
            }}>
                {title}
            </Typography>
            <Typography sx={{
                fontWeight: "600",
                fontSize: {
                    sm: "25px",
                    xs: "22px",
                     lg:"22px"
                },
                lineHeight: "40px",
                ...sxTextCss

            }}>
                {text}
            </Typography>


        </Box>
    )
}

export default CardIWithImageBackground