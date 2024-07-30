import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';
import React from 'react';
import CustomButton from '../../Components/CustomButton/CustomButton';
import SnackAlert from '../../Components/SnackAlert/SnackAlert'
import { useNavigate } from 'react-router-dom';


const PaymentComponent =()=>{
    const stripe = useStripe();
    const elements = useElements();
    const [snackAlertData, setSnackAlertData]= React.useState({
        message:"",
        severity:"success",
        open:false,
    })
    const [navigateToDashboard, setNavigateToDashboard] = React.useState(false);
    const navigate = useNavigate()
    

    React.useEffect(() => {
        if (navigateToDashboard) {
          const timer = setTimeout(() => {
            navigate('/dashboard');
          }, 1500);
    
          // Cleanup timer on component unmount
          return () => clearTimeout(timer);
        }
      }, [navigateToDashboard, navigate]);


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const refreshToken = sessionStorage.getItem('refreshToken')
        localStorage.setItem('refreshToken',refreshToken)

        const result = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: "https://scan-zilla-frontend.vercel.app",
                // return_url: "http://localhost:5173",
            },
        }).then(function(result) {
            if (result.error) {
              setSnackAlertData({
                message:result.error.message,
                severity:'error',
                open:true
              })
                setNavigateToDashboard(true);
            }
          });
    };

    return(
        <>
        <form onSubmit={handleSubmit}>
            <PaymentElement />
            <CustomButton
                            border="2px solid #1A0049"
                            borderRadius="10px"
                            background="#1A0049"
                            hoverBg="white"
                            hovercolor="#1A0049"
                            buttonTextStyle={{}}
                            buttonStyle={{
                                padding: {
                                    lg: "12px 20px"
                                },
                                marginTop:"10px"
                            }}
                            ButtonText="Pay Now"
                            fontSize="14px"
                            color="white"
                            fontWeight
                            variant="contained"
                            padding
                            fullWidth
                            type='submit'
                        />
        </form>
        <SnackAlert message={snackAlertData.message} severity={snackAlertData.severity} open={snackAlertData.open} handleClose={()=>{setSnackAlertData(prev=>({...prev, open:false}))}} />
        </>
    )
}

export default PaymentComponent