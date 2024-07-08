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
    onClick





}) => {
    return (
        <Button variant={variant} fullWidth={fullWidth}
        onClick={onClick}
        sx={{
            border: border,
            ...buttonStyle,
            borderRadius,
            padding,
            fontSize,
            color,
            ButtonText

        }}>{ButtonText}</Button>
    )
}

export default CustomButton


