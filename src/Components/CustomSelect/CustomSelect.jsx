import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'

const CustomSelect = ({ data = [], handleChange }) => {
  const [selectedCategory, setSelectedCategory] = useState("")

  const handleSelectionChange = (e) => {
    setSelectedCategory(e.target.value);
    handleChange(e.target.value); // Call the parent's handler
  }

  return (
    <FormControl
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "0px 26px",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: "10px",
        boxShadow: "0px 8px 26px -4px rgba(0, 0, 0, 0.1)",
        mb: 2,
        width: '100%',
        "& fieldset": { border: 'none' },
        '& .MuiInputLabel-outlined.Mui-focused': {
          fontSize: {
            lg: "20px"
          },
          lineHeight: {
            lg: "30px"
          },
          fontWeight: {
            lg: "500",
          },
          color: "#A0A4A9",
        },
        position: "relative",
      }}
      variant="outlined"
    >
      <InputLabel
        sx={{
          position: 'absolute',
          top: '50%',
          left: "26px",
          transform: 'translateY(-50%)',
          width: "100%",
          fontSize: {
            lg: "20px"
          },
          lineHeight: {
            lg: "30px"
          },
          fontWeight: {
            lg: "500"
          },
          color: "#A0A4A9",
          display: selectedCategory ? 'none' : 'flex'
        }}
        id="demo-simple-select-label"
      >
        Select Category
      </InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Select Category"
        value={selectedCategory}
        onChange={handleSelectionChange}
        sx={{
          width: "100%",
          fontSize: {
            lg: "20px"
          },
          lineHeight: {
            lg: "30px"
          },
          fontWeight: {
            lg: "500"
          },
          color: selectedCategory ? "black" : "#A0A4A9"
        }}
      >
        {data?.map((item, index) => <MenuItem key={index} value={item}>{item}</MenuItem>)}
      </Select>
    </FormControl>
  )
}

export default CustomSelect
