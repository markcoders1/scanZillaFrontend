import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import CustomInputShadow from '../../Components/CustomInputShadow/CustomInputShadow';
import Heading from '../../Components/Heading/Heading';
import CustomButton from '../../Components/CustomButton/CustomButton';
import axiosInstance from '../../Hooks/useQueryGallery/AuthHook/AuthHook';
import { useDispatch } from "react-redux";
import { handleSnackAlert } from "../../Redux/Slice/SnackAlertSlice/SnackAlertSlice";

const appUrl = import.meta.env.VITE_REACT_APP_API_URL;

const PackageSetting = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const dispatch = useDispatch();
  const planName = queryParams.get('planName');
  const price = queryParams.get('price');
  let variant = queryParams.get('variant');
  const credits = queryParams.get('credits');
  const buttonText = queryParams.get('ButtonText')
  const [loadingButton, setLoadingButton] = useState(false);
  

  variant = Number(variant)


  // const [loading, setLoading] = useState(false);
  const {state} = location;
  console.log(state)
  const [data, setData] = useState({
    name: state?.name? state?.name: "",
    amount: (state?.amount/100) ? (state?.amount/100) : "",
    credits: state?.credits ? state?.credits : "",
    buttonText: state?.buttonText ? state?.buttonText: "",
    description: state?.description ? state?.description: "",
    variant: state?.variant ? state?.variant: "",

  });

  const inputRef = useRef(null);

  const handleInput = (e) => {
    setData((prev) => ({ ...prev, [e?.target?.name]: e?.target?.value }));
  };

  const handleSave = async () => {

  

    try {
      setLoadingButton(true);
      const response = await axiosInstance({
        url: `${appUrl}/offers`,
        method: "post",
        data: {
          variant: data.variant,
          name: data.name,
          amount: Number(data.amount),
          buttonText:data.buttonText,
          credits:data.credits,
          description : data.description,
        },
      });
      setLoadingButton(false);
      dispatch(handleSnackAlert({ open: true, message: "Package Details Updated Successfully", severity: "success" }))
      console.log(response);
    } catch (error) {
      console.error(error);
      setLoadingButton(false);
      dispatch(handleSnackAlert({ open: true, message: error.response.data.message, severity: "error" }))
    }
  };

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  useEffect(() => {
    // console.log("Query Params:", queryParams.toString());
    // console.log("Plan Name:", planName);
    // console.log("Price:",price);
    // console.log(typeof data.name, 'name')
    // console.log(data.amount)
    // console.log(typeof Number(data.amount), "amount")
    // console.log(variant)
    // console.log("Variant:", typeof variant);
  }, [queryParams, planName, price, variant]);

  return (
    <Box
    sx={{
      height: "70vh",
      overflowY: "auto",
      overflowX: "hidden",
      padding: "20px 15px",
      "&::-webkit-scrollbar": {
        width: "8px"
      },
      "&::-webkit-scrollbar-track": {
        background: "#DFDFDF",
        borderRadius: "10px"
      },
      "&::-webkit-scrollbar-thumb": {
        background: "black",
        borderRadius: "10px"
      },
      "&::-webkit-scrollbar-thumb:hover": {
        background: "#b30000"
      },
    }}
    >
      <Box
      sx={{
     
      }}
      >

      <Box sx={{ display: "flex", gap: "2.5rem", flexDirection: { md: "column", xs: "column" }, }} >
        <Box sx={{ display: "flex", gap: ".5rem", flexDirection: "column", flexBasis: "50%" }}>
          <Heading Heading='Package' />
          <CustomInputShadow placeholder={planName} onChange={handleInput} name={"name"} type="text" value={data.name} />
        </Box>
        <Box sx={{ display: "flex", gap: ".5rem", flexDirection: "column", flexBasis: "50%" }} >
          <Heading Heading='Total Amount' />
          <CustomInputShadow placeholder={price / 100} onChange={handleInput} name={"amount"} type="number" value={data.amount}/>
        </Box>
      </Box>


      <Box sx={{ display: "flex", gap: "2.5rem", flexDirection: { md: "row", xs: "column", }, }} >
        <Box sx={{ display: "flex", gap: ".5rem", flexDirection: "column", flexBasis: "100%", }} >
          <Heading Heading='Number of Credits' />
          <CustomInputShadow placeholder={credits} onChange={handleInput}   name={"credits"} type="number" value={data.credits}/>
        </Box>
      </Box>
      
      <Box sx={{ display: "flex", gap: "2.5rem", flexDirection: { md: "row", xs: "column", }, }} >
        <Box sx={{ display: "flex", gap: ".5rem", flexDirection: "column", flexBasis: "100%", }} >
          <Heading Heading='Description' />
          <CustomInputShadow placeholder={""} onChange={handleInput}   name={"description"} type="text" value={data.description}/>
        </Box>
      </Box>


      <Box sx={{ display: "flex", gap: "2.5rem", flexDirection: { md: "row", xs: "column", }, }} >
        <Box sx={{ display: "flex", gap: ".5rem", flexDirection: "column", flexBasis: "100%", }} >
          <Heading Heading='Button Text' />
          <CustomInputShadow placeholder={buttonText} onChange={handleInput} name={"buttonText"} type="text" value={data.buttonText}/>
        </Box>
      </Box>



      <Box sx={{ display: "flex", width: "100%", justifyContent: "end", mt: "30px", }} >
        <CustomButton borderRadius='12px' padding='12px 0px' fontSize='14px' ButtonText='Save' width={"143px"} color='white' background="linear-gradient(to right, #1A0049, #3F016A)" onClick={handleSave} loading={loadingButton ? true : false} hovercolor={"white"} />
      </Box>
      </Box>

    </Box>
  );
};

export default PackageSetting;
