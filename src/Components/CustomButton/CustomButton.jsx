import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const CustomButton = ({
    border = "",
    borderRadius,
    buttonTextStyle = {},
    buttonStyle = {},
    ButtonText,
    fontSize,
    color,
    fontWeight,
    fullWidth = false,
    variant = "outlined",
    padding,
    onClick,
    width,
    margin





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
            ...buttonStyle,
            width,
            margin


        }}>{ButtonText}</Button>
    )
}

export default CustomButton


