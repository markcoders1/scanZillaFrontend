import { Box, Typography } from '@mui/material'
import React from 'react'

const DashboardCard = ({
    title = "",
    text = "",
    action = "",
    cb = () => { },
    funcLoading = false,
}) => {
    return (
        <Box sx={{
            boxShadow: "4px 5px 15px rgba(200, 200, 200, 0.61)",
            padding: "22px 26px",
            borderRadius: "10px",
            minHeight: "160px",
            maxHeight: "100%"
        }}>

            <Typography sx={{
                color: "#A0A4A9",
                fontWeight: "500",
                fontSize: {
                    sm: "20px",
                    xs: "19px"
                },
                lineHeight: "60.5px",
            }}>
                {title}
            </Typography>

            <Typography sx={{
                color: "#190247",
                fontWeight: "600",
                fontSize: {
                    sm: "40px",
                    xs: "36px"
                },
                lineHeight: "40px"
            }}>
                {funcLoading ? "---" : text}
            </Typography>

            <Typography
                onClick={cb}
                sx={{
                    color: "#190247",
                    fontWeight: "500",
                    fontSize: "14px",
                    lineHeight: "22.5px",
                    textDecoration: "underline"
                }} >
                {action}
            </Typography>

        </Box>
    )
}

export default DashboardCard
