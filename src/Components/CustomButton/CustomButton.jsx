import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const CustomButton = ({
    border = "",
    borderRadius="",
    buttonTextStyle = {},
    buttonStyle = {},
    ButtonText="",
    fontSize="",
    color="",
    fontWeight="",
    fullWidth = false,
    variant = "outlined",
    padding="",
    onClick=()=>{},
    background="",
    hoverBg="",
    hovercolor="",
    type,
    width,
    loading=false





}) => {
    return (
        <Button variant={variant} fullWidth={fullWidth}
        onClick={onClick}
        sx={{
            border: border,
            borderRadius,
            padding,
            fontSize,
            color,
            ButtonText,
            background,
            fontWeight,
            type,
            width,
            ...buttonStyle,

            '&:hover':{
                background:hoverBg,
                color:hovercolor
            }
            

        }} type={`${type}`}>{loading?"Loading...":ButtonText}</Button>
    )
}

export default CustomButton


