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





}) => {
    return (
        <Button variant={variant} fullWidth={fullWidth} sx={{
            border: border,
            ...buttonStyle,
            borderRadius,
            padding

        }}><Typography sx={{
            ...buttonTextStyle,
            fontSize,
           color,
            fontWeight,


        }}></Typography>{ButtonText}</Button>
    )
}

export default CustomButton


