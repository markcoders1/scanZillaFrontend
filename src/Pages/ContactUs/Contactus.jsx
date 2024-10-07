import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import CustomTextField from '../../Components/CustomInputField/CustomInputField'
import axiosInstance from "../../Hooks/useQueryGallery/AuthHook/AuthHook";
import Heading from '../../Components/Heading/Heading';
import { handleSnackAlert } from "../../Redux/Slice/SnackAlertSlice/SnackAlertSlice";
import CustomInputShadow from '../../Components/CustomInputShadow/CustomInputShadow';
import CustomButton from '../../Components/CustomButton/CustomButton';
import { Mail } from 'lucide-react';
import { Clock } from 'lucide-react';   
import { useDispatch } from 'react-redux';


const appUrl = import.meta.env.VITE_REACT_APP_API_URL


const Contactus = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({
        name: '',
        email: '',
        content: '',
        
      });

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
    
        
        try {
            console.log("========================>")
          const response = await axiosInstance({
            url: `${appUrl}/supportEmail`,
            method: "post",
            data: {
              name : data.name,
              email : data.email,
              content : data.content
            }
    
    
          })
          console.log(response)
    
        //   dispatch(handleSnackAlert({ open: true, message: "Thank you for reaching out to us! we will contact you shortly", severity: "success" }))
          
          setTimeout(()=>{navigate('/dashboard')},2000)
    
        } catch (error) {
        //   dispatch(handleSnackAlert({ open: true, message: error.response.data.message, severity: "error" }))
        }
    
      };

      const [errors, setErrors] = useState({});
      const [isLoading, setIsLoading] = useState(false);
  return (


    <Box
    sx={{
        display:"flex",
        gap:{md:"30px", xs:"100px"},
        flexDirection:{md:"row", xs:"column"}
    }}
    >
    <Box
    sx={{
        display:"flex",
        flexDirection:"column",
        gap:"10px",
        flexBasis:"50%",
       
     }}
    >
        <Typography sx={{
        color: "#333333",
        fontWeight: "600",
        fontSize: {
          sm: "30px",
          xs: "26px"
        },
      }}>
        Got a Question? Email Us
      </Typography>
         <Box
         sx={{
            display:"flex",
            flexDirection:"column",
            gap:"10px",
            
           
         }}
         >
         <Heading Heading='Name *   ' />
                <CustomTextField
                  handleKeyDown={() => { }}
                  onChange={handleInput}
                  name="name"
                  value={data?.name}
                  error={errors?.name}
                  placeholder=""
                  border=""
                  boxShadow={true}
                  maxLength={500}
                />
              </Box>
              <Box
              sx={{
                display:"flex",
                flexDirection:"column",
                gap:"10px"
             }}
              >
              <Heading Heading='Email *' />
                <CustomTextField
                  handleKeyDown={() => { }}
                  onChange={handleInput}
                  name="email"
                  value={data?.email}
                  error={errors?.email}
                  placeholder=""
                  border=""
                  boxShadow={true}
                  maxLength={500}
                />
              </Box>
              <Box
              sx={{
                display:"flex",
                flexDirection:"column",
                gap:"10px"
             }}
              >
                 <Heading Heading='How Can We Help? *' />
                <CustomInputShadow
                  type="text"
                  multiline={true}
                  rows={10}  // Adjust the number of rows to match the desired height
                  onChange={handleInput}
                  value={data.content}
                  height={"360px"}
                  error={errors.content}
                  name={"content"}
                
                />
              </Box>
              <CustomButton
                  border="2px solid #1A0049"
                  borderRadius="10px"
                  background="#1A0049"
                  hoverBg="white"
                  hovercolor="#1A0049"
                  buttonTextStyle={{}}
                  buttonStyle={{ padding: { lg: "12px 20px" } }}
                  ButtonText={"Submit Email"}
                  fontSize
                  color="white"
                  fontWeight
                  // fullWidth={true}
                  width="100%"
                  variant="contained"
                  padding
                  onClick={handleSubmit}    
                />
    </Box>

    <Box
     sx={{
        display:"flex",
        flexDirection:"column",
        gap:"10px",
        flexBasis:"50%",
        // border:"2px solid red"
     }}
    >
           <Typography sx={{
        color: "#333333",
        fontWeight: "600",
        fontSize: {
          sm: "30px",
          xs: "26px"
        },
      }}>
        Contact Info
      </Typography>

      <Box
      sx={{
        display:"flex",
        alignItems:"center",
        gap:"15px",
        mt:{md:"60px", xs:"20px"}
      }}
      >
      <Mail /> E-MAIL : amz@blazecopywriting.com
      </Box>
     
      <Heading  Heading='Hours of Operation' headingstyle={{mt:"30px"}} />
      <Box
      sx={{
        display:"flex",
        alignItems:"center",
        gap:"15px",
        mt:"8px"
      }}
      >
        <Clock /> Monday-Friday : 8am to 6pm
      </Box>

    </Box>
    </Box>
  )
}

export default Contactus