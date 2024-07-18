import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import CustomInputShadow from '../../Components/CustomInputShadow/CustomInputShadow';
import Heading from '../../Components/Heading/Heading';
import CustomButton from '../../Components/CustomButton/CustomButton';

const PackageSetting = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const planName = queryParams.get('planName');
  const price = queryParams.get('price');
  const buttonText = queryParams.get('buttonText');

  const [data, setData] = useState({
    description: "",
  });

  const inputRef = useRef(null);

  const handleInput = (e) => {
    setData((prev) => ({ ...prev, [e?.target?.name]: e?.target?.value }));
  };

  const handleSave = () => {
    console.log(data.description);
  };

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          gap: "2.5rem",
          flexDirection: {
            md: "row",
            xs: "column",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: ".5rem",
            flexDirection: "column",
            flexBasis: "50%",
          }}
        >
          <Heading Heading='Package' />
          <CustomInputShadow
            placeholder={planName}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: ".5rem",
            flexDirection: "column",
            flexBasis: "25%",
          }}
        >
          <Heading Heading='Total Amount' />
          <CustomInputShadow
            placeholder={price}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: ".5rem",
            flexDirection: "column",
            flexBasis: "25%",
          }}
        >
          <Heading Heading='Button Text' />
          <CustomInputShadow
            placeholder={buttonText}
          />
        </Box>
      </Box>
      <Box
        sx={{
          mt: "30px",
          display: "flex",
          gap: ".5rem",
          flexDirection: "column",
        }}
      >
        <Heading Heading='Description' />
        <CustomInputShadow
          multiline={true}
          onChange={handleInput}
          name={"description"}
          type="text"
          value={data.description}
          placeholder={"Enter Package detail"}
          height="200px"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "end",
          mt: "30px",
        }}
      >
        <CustomButton
          borderRadius='12px'
          padding='12px 0px'
          fontSize='14px'
          ButtonText='Save'
          width={"143px"}
          color='white'
          background="linear-gradient(to right, #1A0049, #3F016A)"
          onClick={handleSave}
        />
      </Box>
    </Box>
  );
};

export default PackageSetting;
