import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';
import CustomButton from '../../Components/CustomButton/CustomButton';


const PaymentComponent =()=>{
    const stripe = useStripe();
    const elements = useElements();

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
        });

        if (result.error) {
            console.log("fail",result);
        } else {
            console.log("success",result)
        }
    };

    return(
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
    )
}

export default PaymentComponent