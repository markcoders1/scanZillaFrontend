import React from 'react';
import { useForm } from 'react-hook-form';
import CustomInputShadow from '../../Components/CustomInputShadow/CustomInputShadow';
import CustomButton from '../../Components/CustomButton/CustomButton';
import { Box } from '@mui/material';

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        padding: '20px',
        maxWidth: '600px',
        margin: '0 auto'
      }}
    >
      <CustomInputShadow
        label="Name"
        {...register("name", { required: "Name is required" })}
        error={errors.name}
        placeholder="Enter your name"
      />
      <CustomInputShadow
        label="Email"
        type="email"
        {...register("email", { 
          required: "Email is required", 
          pattern: {
            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            message: "Invalid email address"
          }
        })}
        error={errors.email}
        placeholder="Enter your email"
      />
      <CustomInputShadow
        label="Credits"
        type="number"
        {...register("credits", { required: "Credits are required" })}
        error={errors.credits}
        placeholder="Enter credits"
      />
      <CustomInputShadow
        label="Message"
        {...register("message", { required: "Message is required" })}
        error={errors.message}
        placeholder="Enter your message"
      />
      <CustomButton
        border="2px solid #1A0049"
        borderRadius="10px"
        background="#1A0049"
        hoverBg="white"
        hovercolor="#1A0049"
        buttonTextStyle={{}}
        buttonStyle={{ padding: { lg: "12px 20px" } }}
        ButtonText="Submit"
        fontSize
        color="white"
        fontWeight
        fullWidth={true}
        variant="contained"
        padding
        onClick={handleSubmit(onSubmit)}
      />
    </Box>
  );
};

export default ContactForm;
