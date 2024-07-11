import { Box, FormControl, TextField, Typography } from "@mui/material";
import { forwardRef } from "react";

const CustomTextField = forwardRef(({
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
  border = true,
  boxShadow,
}, ref) => {
  return (
    <Box sx={{ mb: mb }}>
      <FormControl variant="standard" fullWidth
        sx={{
          border: border ? "1px solid #666666":"",
        '& fieldset': {
            display: "none",
          },
          display: "flex",
          flexDirection: "column",
          padding: "0px 10px",
          justifyContent: "space-between",
          borderRadius: "10px",
          // boxShadow: "0px 8px 26px -4px rgba(0, 0, 0, 0.1)",
          mb: 2, width: '100%',
          position: "relative",
          // boxShadow: boxShadow ? "0px 8px 26px -4px rgba(0, 0, 0, 0.1)": "",
        }}

      >
        <TextField
          placeholder={placeholder}
          type={type}
          ref={ref}
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
              color: "#2a2b2d",
              fontFamily: "poppins"
            },
            borderRadius: "12px", // Setting borderRadius to 12px
            height: "56px", // Setting height to 56px
            '& .MuiOutlinedInput-root': { // Override styles for MuiOutlinedInput
              borderRadius: "12px",
              border: "1px solid rgba(102, 102, 102, 0)", // Default border color and style
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
            color: "black"
          }}
          onKeyDown={handleKeyDown}
          name={name}
          onChange={onChange}
          value={value}
          InputLabelProps={{
            shrink: true, // This will keep the label on top
          }}
          multiline={multiline}
          rows={rows}
        />
      </FormControl>
      {error && (
        <Typography sx={{
          background: "whitesmoke",
          p: "10px",
          color: "red",
          mt: "8px",
          wordBreak: "break-word"
        }}>
          {error}
        </Typography>
      )}
    </Box>
  );
});

export default CustomTextField;
