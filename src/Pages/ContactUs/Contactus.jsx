import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import CustomTextField from '../../Components/CustomInputField/CustomInputField'
import axiosInstance from "../../Hooks/useQueryGallery/AuthHook/AuthHook";
import Heading from '../../Components/Heading/Heading';
import { handleSnackAlert } from "../../Redux/Slice/SnackAlertSlice/SnackAlertSlice";
import CustomInputShadow from '../../Components/CustomInputShadow/CustomInputShadow';
import CustomButton from '../../Components/CustomButton/CustomButton';
import { Mail, MapPinHouse } from 'lucide-react';
import { Clock } from 'lucide-react';   
import { useDispatch, useSelector } from 'react-redux';


const appUrl = import.meta.env.VITE_REACT_APP_API_URL


const Contactus = () => {
    const dispatch = useDispatch();
  const [email, setEmail] = useState('');

  const auth = useSelector((state) => state.auth);

  useEffect(()=>{
    setEmail(auth.email)
  },[])

    const [data, setData] = useState({
        name: '',
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

        console.log(email)
    
        
        try {
            console.log("========================>")
          const response = await axiosInstance({
            url: `${appUrl}/supportEmail`,
            method: "post",
            data: {
              name : data.name,
              
              content : data.content
            }

            
    
    
          })
          console.log(response)

          setData({
            name: "",
            content: ""
          })
    
          dispatch(handleSnackAlert({ open: true, message: "Thank you for reaching out to us! we will contact you shortly", severity: "success" }))
          
         
    
        } catch (error) {
          dispatch(handleSnackAlert({ open: true, message: error.response.data.message, severity: "error" }))
        }
    
      };

      const [errors, setErrors] = useState({});
      const [isLoading, setIsLoading] = useState(false);
  return (


    <Box
    sx={{
      display:"flex",
      flexDirection:"column",
      gap:"10px",
      flexBasis:"100%",
      p:"10px 15px",
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
            display:"flex",
            flexDirection:"column",
            gap:"10px"
          
         }}
         >
         <Heading Heading='Name *' sx={{
          display:"none"
         }} />
                <CustomTextField
                  handleKeyDown={() => { }}
                  onChange={handleInput}
                  name="name"
                  value={data?.name}
                  error={errors?.name}
                  placeholder="Name"
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
                 <Heading Heading='How Can We Help?'  sx={{
          display:"none"
         }} />
                <CustomInputShadow
                  type="text"
                  multiline={true}
                  rows={10}  // Adjust the number of rows to match the desired height
                  onChange={handleInput}
                  value={data.content}
            placeholder='How can we Help?'
                 
                  error={errors.content}
                  name={"content"}
                  textFieldStyle={{
                  
                  height:"280px",
                  minHeight: "100%"
                 
                  }}
                
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
  )
}

export default Contactus    