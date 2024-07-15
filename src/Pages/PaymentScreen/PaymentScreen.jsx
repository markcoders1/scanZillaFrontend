import React from 'react';
import { Box, Typography } from '@mui/material';
import { useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement } from "@stripe/react-stripe-js";
import CustomButton from '../../Components/CustomButton/CustomButton';
import CustomInputShadow from '../../Components/CustomInputShadow/CustomInputShadow';
import SwitchCheckBox from '../../Components/SwitchCheckBox/SwitchCheckBox';
import cardIcon from '../../assets/images/visa circles.png';

const StripeCardForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const clientSecret = localStorage.getItem("clientSecret");

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const cardNumberElement = elements.getElement(CardNumberElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardNumberElement,
        });

        if (error) {
            console.error(error);
            return;
        }

        const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: paymentMethod.id,
            return_url: 'https://example.com/success',
        });

        if (confirmError) {
            console.error(confirmError);
        } else if (paymentIntent && paymentIntent.status === 'succeeded') {
            // Payment successful, handle the success state (e.g., show success message, redirect)
            window.location.href = 'https://example.com/success';
        } else {
            // Handle other statuses (e.g., processing, requires_action)
            console.log('Payment status:', paymentIntent.status);
        }
    };

    const elementStyle = {
        style: {
            base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                    color: '#aab7c4',
                },
            },
            invalid: {
                color: '#9e2146',
            },
        },
    };

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

            <Box>
                <form onSubmit={handleSubmit}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "1.6rem",
                            marginTop: "10px"
                        }}
                    >
                        <Box
                            sx={{
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
                                Card Number
                            </Typography>
                            <Box
                                sx={{
                                    position: "relative"
                                }}
                            >
                                <Box
                                    sx={{
                                        padding: "17px",
                                        boxShadow: "0px 8px 26px -4px rgba(0, 0, 0, 0.1)",
                                        borderRadius: "4px",
                                    }}
                                >
                                    <CardNumberElement options={elementStyle} />
                                </Box>
                                <img
                                    style={{
                                        position: "absolute",
                                        right: "20px",
                                        top: "10px"
                                    }}
                                    src={cardIcon} alt="" />
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                gap: "2rem",
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "0.5rem",
                                    flexBasis:"55%"
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
                                <Box
                                  
                                >
                                   <CustomInputShadow
                                   
                                   />
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "0.5rem",
                                    flexBasis:"25%"
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
                                    Expiry Date
                                </Typography>
                                <Box
                                    sx={{
                                        padding: "17px",
                                        boxShadow: "0px 8px 26px -4px rgba(0, 0, 0, 0.1)",
                                        borderRadius: "4px"
                                    }}
                                >
                                    <CardExpiryElement options={elementStyle} />
                                </Box>
                            </Box>

                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "0.5rem",
                                    flexBasis:"20%"
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontWeight: "600",
                                        fontSize: "22px",
                                        letterSpacing: "0.34px",
                                        color: "#333333",
                                  

                                    }}
                                >
                                    CVC
                                </Typography>
                                <Box
                                    sx={{
                                        padding: "10px",
                                        boxShadow: "0px 8px 26px -4px rgba(0, 0, 0, 0.1)",
                                        borderRadius: "4px",
                                        padding:"17px"
                                    }}
                                >
                                    <CardCvcElement options={elementStyle} />
                                </Box>
                            </Box>
                        </Box>

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
                            }}
                            ButtonText="Pay Now"
                            fontSize="14px"
                            color="white"
                            fontWeight
                            variant="contained"
                            padding
                            type="submit"
                        />
                    </Box>
                </form>
            </Box>
        </Box>
    );
};

export default StripeCardForm;
