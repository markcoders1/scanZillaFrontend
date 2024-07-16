import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { Elements } from "@stripe/react-stripe-js";
import CustomInputShadow from '../../Components/CustomInputShadow/CustomInputShadow';
import SwitchCheckBox from '../../Components/SwitchCheckBox/SwitchCheckBox';
import PaymentComponent from './PaymentComponent';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe("pk_test_51PZF1RRpAMX87OfFfp01TfdMLbrOZFYHtEw3i65pS6rgXMTA92KZaQSykMwZSYu1xpjfiL3r1ncGSh5V5ALn4tNU00hhVNyS0h");

const StripeCardForm = () => {
    const [clientSecret, setClientSecret] = useState('');

    useEffect(() => {
        // Simulate fetching clientSecret from localStorage or an API
        const clientSecret = localStorage.getItem("clientSecret");
        setClientSecret(clientSecret);
    }, []);

    

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: "0rem"
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    gap: {
                        xs: "1rem",
                        lg: "2rem"
                    },
                    flexDirection: {
                        xs: "column-reverse",
                        lg: "row"
                    }
                }}
            >
                <Box
                    sx={{
                        flexBasis: "50%",
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.5rem",
                    }}
                >
                    <Typography
                        sx={{
                            fontWeight: "600",
                            fontSize: "22px",
                            letterSpacing: "0.34px",
                            color: "#333333"
                        }}
                    >
                        Name
                    </Typography>
                    <Box>
                        <CustomInputShadow
                            placeholder="Enter Name"
                            name="name"
                            value={"Pro"}
                        />
                    </Box>
                </Box>

                <Box
                    sx={{
                        flexBasis: "30%",
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.5rem",
                    }}
                >
                    <Typography
                        sx={{
                            fontWeight: "600",
                            fontSize: "22px",
                            letterSpacing: "0.34px",
                            color: "#333333"
                        }}
                    >
                        Total Amount
                    </Typography>
                    <Box>
                        <CustomInputShadow
                            placeholder="Enter Name"
                            name="name"
                            value={"30$"}
                        />
                    </Box>
                </Box>

                <Box
                    sx={{
                        flexBasis: "20%",
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.5rem",
                        alignItems: "end",
                    }}
                >
                    <Typography
                        sx={{
                            fontWeight: "600",
                            fontSize: "22px",
                            letterSpacing: "0.34px",
                            color: "#333333"
                        }}
                    >
                        Auto Credits
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "end",
                            padding: "12px"
                        }}
                    >
                        <SwitchCheckBox theme="default" />
                    </Box>
                </Box>
            </Box>

            {clientSecret && (
                <Elements stripe={stripePromise} options={{ clientSecret, appearance: { theme: 'stripe' } }}>
                    <PaymentComponent />
                </Elements>
            )}
        </Box>
    );
};

export default StripeCardForm;