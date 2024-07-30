import React, { useState } from 'react';
import Box from '@mui/material/Box';
import CustomInputShadow from '../../Components/CustomInputShadow/CustomInputShadow';
import CustomButton from '../../Components/CustomButton/CustomButton';
import Heading from '../../Components/Heading/Heading';

const ContactForm = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    credits: '',
    paymentMethod: '',
  });

  const [errors, setErrors] = useState({});

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    console.log('Form Data:', data);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
      }}
    >
      <Box
      sx={{
        display:"flex",
        flexDirection:"column",
        gap:"8px"
      }}
      >
      <Heading Heading='Name' />
      <CustomInputShadow
        handleKeyDown={handleKeyDown}
        onChange={handleInput}
        name="name"
        value={data.name}
        error={errors.name}
        placeholder="Name"
        border=""
        boxShadow={true}
      />
      </Box>
      <Box
      sx={{
        display:"flex",
        flexDirection:"column",
        gap:"8px"
      }}
      >
      <Heading Heading='Email' />
      <CustomInputShadow
        handleKeyDown={handleKeyDown}
        onChange={handleInput}
        name="email"
        value={data.email}
        error={errors.email}
        placeholder="Email"
        border=""
        boxShadow={true}
      />
      </Box>
      <Box
      sx={{
        display:"flex",
        flexDirection:"column",
        gap:"8px"
      }}
      >
      <Heading Heading='No. of Credits' />
      <CustomInputShadow
        handleKeyDown={handleKeyDown}
        onChange={handleInput}
        name="credits"
        value={data.credits}
        error={errors.credits}
        placeholder="No. of Credits"
        border=""
        boxShadow={true}
      />
      </Box>
      <Box
      sx={{
        display:"flex",
        flexDirection:"column",
        gap:"8px"
      }}
      >
      <Heading Heading='Payment Method' />
      <CustomInputShadow
        handleKeyDown={handleKeyDown}
        onChange={handleInput}
        name="paymentMethod"
        value={data.paymentMethod}
        error={errors.paymentMethod}
        placeholder="Payment Method"
        border=""
        boxShadow={true}
      />
      </Box>
      <CustomButton
        border="2px solid #1A0049"
        borderRadius="10px"
        background="#1A0049"
        hoverBg="white"
        hovercolor="#1A0049"
        buttonTextStyle={{}}
        buttonStyle={{ padding: { lg: '12px 20px' } }}
        ButtonText="Submit"
        fontSize
        color="white"
        fontWeight
        fullWidth={true}
        variant="contained"
        padding
        onClick={handleSubmit}
      />
    </Box>
  );
};

export default ContactForm;
