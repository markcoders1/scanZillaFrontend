import React, { useState } from 'react';
import Box from '@mui/material/Box';
import CustomInputShadow from '../../Components/CustomInputShadow/CustomInputShadow';
import CustomButton from '../../Components/CustomButton/CustomButton';
import Heading from '../../Components/Heading/Heading';
import CustomSelect from "../../Components/CustomSelect/CustomSelect";
import { useDispatch } from "react-redux";
import axiosInstance from "../../Hooks/useQueryGallery/AuthHook/AuthHook";
import { handleSnackAlert } from "../../Redux/Slice/SnackAlertSlice/SnackAlertSlice";
import LoaderMain from "../../Components/Loader/LoaderMain";


const appUrl = import.meta.env.VITE_REACT_APP_API_URL

const ContactForm = () => {

  const [paymentMethod, setPaymentMethod] = useState(["Wise", "Payoneer", "Direct Bank Transfer"]);
  const [data, setData] = useState({
    name: '',
    email: '',
    credits: '',
    paymentMethod: '',
  });


  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    console.log('Form Data:', data);

    console.log(typeof data.name)
    console.log(typeof data.email)

    console.log(typeof data.credits)
    console.log(typeof data.paymentMethod)

    
    try {
      const response = await axiosInstance({
        url: appUrl + "/paymentemail",
        method: "post",
        data: {
          name: data.name,
          email: data.email,
          credits: data.credits,
          paymentDetails: data.paymentMethod,

        },


      })

      console.log(response)

    } catch (error) {
      console.log(error)
    }

  };
  const handleCategoryChange = (paymentMethod) => {
    setData(prev => ({ ...prev, paymentMethod }));
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
          display: "flex",
          flexDirection: "column",
          gap: "8px"
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
          display: "flex",
          flexDirection: "column",
          gap: "8px"
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
          display: "flex",
          flexDirection: "column",
          gap: "8px"
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
          display: "flex",
          flexDirection: "column",
          gap: "8px"
        }}
      >
        <Heading Heading='Payment Method' />

        <CustomSelect categoryError={errors?.paymentMethod} data={paymentMethod} handleChange={handleCategoryChange} boxShadow='0px 8px 26px -4px rgba(0, 0, 0, 0.3)' />
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
