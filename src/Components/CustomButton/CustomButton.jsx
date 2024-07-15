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
    width





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
            ...buttonStyle,
            fontWeight,
            width,
            '&:hover':{
                background:hoverBg,
                color:hovercolor
            }

        }}>{ButtonText}</Button>
    )
}

export default CustomButton


