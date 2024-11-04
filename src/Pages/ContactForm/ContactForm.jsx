import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import CustomTextField from '../../Components/CustomInputField/CustomInputField';
import axiosInstance from "../../Hooks/useQueryGallery/AuthHook/AuthHook";
import Heading from '../../Components/Heading/Heading';
import { handleSnackAlert } from "../../Redux/Slice/SnackAlertSlice/SnackAlertSlice";
import CustomInputShadow from '../../Components/CustomInputShadow/CustomInputShadow';
import CustomButton from '../../Components/CustomButton/CustomButton';
import { useDispatch, useSelector } from 'react-redux';
import CustomSelect from '../../Components/CustomSelect/CustomSelect';

const appUrl = import.meta.env.VITE_REACT_APP_API_URL;

const ContactForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [offers, setOffers] = useState([]);
  const [offerRender, setOfferRender] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [amount, setAmount] = useState('');
  const [credits, setCredits] = useState();
  const [isEditable, setIsEditable] = useState(true);
  const [planName,setPlanName] = useState("")

  const auth = useSelector((state) => state.auth);

  const queryParams = new URLSearchParams(window.location.search);
  let initialVariant = queryParams.get('variant') || '4';


  const fetchOffers = async () => {

    try {
      const response = await axiosInstance({
        url: `${appUrl}/offers`,
        method: "get",
      });
      setOffers(response?.data?.offers);
      setOfferRender(response?.data?.offers?.slice(1)); // Include all offers

      console.log(response.data.offers.slice(1));

     
      const preselectedPlan = response.data.offers.find(
        (offer) => offer.variant === Number(initialVariant)
      );
      if (preselectedPlan) {
        setSelectedPlan(preselectedPlan);
        setPlanName(preselectedPlan?.name)
        setAmount(preselectedPlan?.amount);
        setCredits(preselectedPlan?.credits);
        setIsEditable(preselectedPlan?.variant == 4 ? false : true);
      } else {
        console.warn("No plan found for variant:", initialVariant);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    setEmail(auth.email);
    fetchOffers();
  }, []);


  const handlePlanChange = (selectedName) => {
    const plan = offerRender.find((offer) => offer.name === selectedName);
    if (plan) {
      setSelectedPlan(plan);
      setAmount(plan?.amount);
      setCredits(plan?.credits);
      setIsEditable(plan?.variant === 4? true : false);
    } else {
      console.warn("Selected plan not found in offers");
    }
  };
  

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async () => {
    // console.log('Form Data:', data);
  //   console.log(selectedPlan.variant);
  //   console.log(credits);
  // console.log(data.name);
  // console.log(data.content);




    try {
      const response = await axiosInstance({
        url: `${appUrl}/paymentEmail`,
        method: "post",
        data: {
          name: data?.name,
          paymentDetails: data?.content,
          variant: selectedPlan?.variant,
          credits: +credits,

        }
      });
      console.log(response)

      setData({
        name: "",
        content: "",
       
      });

      dispatch(handleSnackAlert({ open: true, message: "Thank you for reaching out to us! We will contact you shortly.", severity: "success" }));
    } catch (error) {
      dispatch(handleSnackAlert({ open: true, message: error.response.data.message, severity: "error" }));
    }
  };

  const [data, setData] = useState({
    name: '',
    content: '',
  });
  
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        gap: { md: "30px", xs: "100px" },
        flexDirection: { md: "row", xs: "column" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          flexBasis: "100%",
          p: "10px 15px",
          height: "70vh",
          overflowY: "auto",
          overflowX: "hidden",
          padding: "20px 15px",
          "&::-webkit-scrollbar": { width: "8px" },
          "&::-webkit-scrollbar-track": { background: "#DFDFDF", borderRadius: "10px" },
          "&::-webkit-scrollbar-thumb": { background: "black", borderRadius: "10px" },
          "&::-webkit-scrollbar-thumb:hover": { background: "#b30000" },
        }}
      >
         <Box
         sx={{
            display:"flex",
            flexDirection:"column",
            gap:"10px",
          
         }}
         >
         <Heading Heading='Name' />
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
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Heading Heading='Plan Name' />
          <CustomSelect
          categoryError={errors?.category}
          data={offerRender?.map((offer) => offer?.name)}
          handleChange={handlePlanChange}
          value={selectedPlan ? selectedPlan.name : ''}
          placeHolder={"Select Plan"}
        />
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Heading Heading='Credits' />
          <CustomTextField
          type="number"
            value={credits}
            placeholder='Credits'
            border=''
            boxShadow={true}
            
            disabled={isEditable}
            padding={true}
            onChange={
              isEditable ? (e) => setCredits(e.target.value) : undefined
            }
          />
        </Box>
      
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Heading Heading='Amount' />
        <CustomTextField
          value={`${amount/100} $`}
          placeholder="Amount"
          border=""
          boxShadow={true}
          maxLength={500}
          disabled={!isEditable}
          padding={true}

        />
      </Box>
        


        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Heading Heading='Payment Details *' />
          <CustomInputShadow
            type="text"
            multiline={true}
            rows={10}
            onChange={handleInput}
            value={data.content}
            error={errors.content}
         

            name={"content"}
            textFieldStyle={{
              height: "280px",
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
          ButtonText={"Submit Email"}
          color="white"
          width="100%"
          variant="contained"
          onClick={handleSubmit}
        />
      </Box>
    </Box>
  );
};

export default ContactForm;
