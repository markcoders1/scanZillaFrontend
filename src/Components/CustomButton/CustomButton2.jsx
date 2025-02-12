import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { ArrowLeft } from "lucide-react";


const CustomButton2 = ({
    border = "",
    borderRadius = "",
    buttonTextStyle = {},
    buttonStyle = {},
    ButtonText = "",
    fontSize = "",
    color = "",
    fontWeight = "",
    fullWidth = false,
    variant = "outlined",
    padding = "",
    onClick = () => {},
    background = "",
    hoverBg = "",
    hovercolor = "",
    type,
    width,
    loading = false
}) => {
    return (
        <Button 
            variant={variant} 
            fullWidth={fullWidth}
            onClick={onClick}
            disabled={loading}
            sx={{
                border: border,
                borderRadius,
                padding,
                fontSize,
                color,
                background,
                fontWeight,
                type,
                width,
                textTransform: "none",  // Ensures the text is displayed as provided
                ...buttonStyle,
                '&:hover': {
                    background: hoverBg,
                    color: hovercolor
                },
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                gap:"4px"
            }} 
            type={`${type}`}
        >
              <ArrowLeft />{loading ? "Loading..." : ButtonText} 
          
          
        </Button>
    );
}

export default CustomButton2;
