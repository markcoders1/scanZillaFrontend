import { Box, FormControl, TextField, Typography } from "@mui/material";
import React, { forwardRef } from "react";

const CustomInputShadow = forwardRef(({
  type = "text",
  rows = 4,
  multiline = false,
  handleKeyDown = () => { },
  onChange = () => { },
  name = "",
  value = "",
  error = "",
  mb = "0px",
  placeholder = "",
  border = false,
  boxShadow,
  height = "56px", // Set default height here
  color = "#2a2b2d",
  disabled = false,
  textFieldStyle = {},
  onBlur = () => {}, 
  
}, ref) => {
  return (
    <Box sx={{ mb: mb }}>
      <FormControl variant="standard" fullWidth
        sx={{
          border: border ? "1px solid #666666" : "",
          '& fieldset': {
            display: "none",
          },
          display: "flex",
          flexDirection: "column",
          padding: "0px 10px",
          justifyContent: "space-between",
          borderRadius: "10px",
          mb: 2,
          width: '100%',
          position: "relative",
          boxShadow: "0px 8px 26px -4px rgba(0, 0, 0, 0.2)",
        }}
      >
        <TextField
          placeholder={placeholder}
          type={type}
          ref={ref}
          disabled = {disabled}
          onBlur={onBlur} 
          
          sx={{
            '& ::placeholder': {
              fontSize: {
                lg: "20px"
              },
              lineHeight: {
                lg: "30px"
              },
              fontWeight: {
                lg: "600"
              },
              color: color,
              fontFamily: "poppins"
            },
            borderRadius: "12px",
            height: height, // Use the height prop here
            '& .MuiOutlinedInput-root': {
              borderRadius: "12px",
              border: "1px solid rgba(102, 102, 102, 0)",
            },
            fontSize: {
              lg: "20px"
            },
            lineHeight: {
              lg: "30px"
            },
            fontWeight: {
              lg: "500"
            },
            color: "color",
            ...textFieldStyle
            
          }}
          onKeyDown={handleKeyDown}
          name={name}
          onChange={onChange}
          value={value}
          InputLabelProps={{
            shrink: true,
          }}
          multiline={multiline}
          rows={rows}
        />
      </FormControl>
      {/* {error && (
        <Typography sx={{
          background: "white",
          p: "10px",
          color: "#3d0168",
          mt: "8px",
          wordBreak: "break-word"
        }}>
          {error.split('|-|').map((line, index) => (
        <React.Fragment key={index}>
          {line}
          {index < error.split('|-|').length - 1 && <br />}
        </React.Fragment>
      ))}
        </Typography>
      )} */}

      {/* {error && (
        <Typography sx={{
          background: "white",
          p: "10px",
          color: "#3d0168",
          mt: "8px",
          wordBreak: "break-word",
        }}>
          {error.map((line, index) => (
        <React.Fragment key={index}>
          {line.split("|-|").map((el,i)=>{
            return (
              <>
              {el}
              {i < line.split("|-|").length - 1 && <br />}
              </>
            )
          })}
          {index < error.length - 1 && <br />}
        </React.Fragment>
      ))}
        </Typography>
      )} */}


    </Box>
  );
});

export default CustomInputShadow;
