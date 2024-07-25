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
  const [loadingButton, setLoadingButton] = useState(false);

  variant = Number(variant)


  // const [loading, setLoading] = useState(false);

  const [data, setData] = useState({
    description: "",
    name: "",
    amount: null
  });

  const inputRef = useRef(null);

  const handleInput = (e) => {
    setData((prev) => ({ ...prev, [e?.target?.name]: e?.target?.value }));
  };

  const handleSave = async () => {

    if (!variant || !planName) {
      console.error("Variant or Plan Name is missing.");
      return;
    }

    try {
      setLoadingButton(true);
      const response = await axiosInstance({
        url: `${appUrl}/offers`,
        method: "post",
        data: {
          variant: variant,
          name: data.name,
          description: data.description,
          amount: Number(data.amount)

        },
      });
      setLoadingButton(false);
      dispatch(handleSnackAlert({ open: true, message: response.data.message, severity: "success" }))
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
    // console.log("Price:",typeof price);
    console.log(typeof data.name, 'name')
    // console.log(data.amount)
    console.log(typeof Number(data.amount), "amount")
    console.log(variant)



    console.log("Variant:", typeof variant);
  }, [queryParams, planName, price, variant]);

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
            onChange={handleInput}
            name={"name"}
            type="text"
            value={data.name}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: ".5rem",
            flexDirection: "column",
            flexBasis: "50%",
          }}
        >
          <Heading Heading='Total Amount' />
          <CustomInputShadow
            placeholder={price / 100 }
            onChange={handleInput}
            name={"amount"}
            type="number"
            value={data.amount}
          />
        </Box>
      </Box>
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
            onChange={handleInput}
            name={"name"}
            type="text"
            value={data.name}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: ".5rem",
            flexDirection: "column",
            flexBasis: "50%",
          }}
        >
          <Heading Heading='Total Amount' />
          <CustomInputShadow
            placeholder={price / 100}
            onChange={handleInput}
            name={"amount"}
            type="number"
            value={data.amount}
          />
        </Box>
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
          loading={loadingButton ? true : false}
          hovercolor={"white"}
        />
      </Box>
    </Box>
  );
};

export default PackageSetting;
