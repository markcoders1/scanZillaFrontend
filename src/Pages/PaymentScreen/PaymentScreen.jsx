import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { Elements } from "@stripe/react-stripe-js";
import CustomInputShadow from '../../Components/CustomInputShadow/CustomInputShadow';
import SwitchCheckBox from '../../Components/SwitchCheckBox/SwitchCheckBox';
import PaymentComponent from './PaymentComponent';
import { loadStripe } from '@stripe/stripe-js';
import dashboardImg1 from "../../assets/images/dashboard.png";
import { useNavigate } from 'react-router-dom';


const stripePromise = loadStripe("pk_test_51PZF1RRpAMX87OfFfp01TfdMLbrOZFYHtEw3i65pS6rgXMTA92KZaQSykMwZSYu1xpjfiL3r1ncGSh5V5ALn4tNU00hhVNyS0h");

import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Heading from '../../Components/Heading/Heading';

const StripeCardForm = () => {
    const [clientSecret, setClientSecret] = useState('');
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const price = queryParams.get('price');
    const plan = queryParams.get('plan');
    const auth = useSelector(state => state.auth)
    const [inputValue, setInputValue] = useState(0)
    const navigate = useNavigate();


    const handleChange = (e) => {
        const value = Number(e.target.value);
        if (value >= 0) {
            setInputValue(value);
        } else {
            setInputValue(1); // set to minimum value 1 if input is less than 1
        }
    };

    useEffect(() => {
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
                        Plan
                    </Typography>
                    <Box>
                        <CustomInputShadow
                            placeholder={plan}
                            name="name"

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
                            placeholder={`${price}$`}
                            name="amount"


                        />
                    </Box>
                </Box>

                <Box
                    sx={{
                        flexBasis: "200px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.5rem",
                        alignItems: "end",
                        // border:"2px solid red"
                        flexShrink: "0"
                    }}
                >

                    <Box
                        sx={{
                            width: "100%",

                        }}
                    >
                        <Box
                            sx={{
                                // height: "50%",
                                // flexBasis: "218px",
                                borderRadius: "10px",
                                flexGrow: "1",
                                backgroundImage: auth.autocharge ? `linear-gradient(rgba(53, 1, 88, .8), rgba(53, 1, 88, .8)), url(${dashboardImg1})` : "",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                padding: "24px 15px",
                                position: "relative",
                                // flexBasis: "50%",
                                boxShadow: auth.autocharge ? " " : "4px 5px 15px 0px #C8C8C8"

                            }}>
                            <Box
                                sx={{
                                    position: "absolute",
                                    right: "10px",
                                    top: "15px",
                                    // padding:"1rem",
                                    // backgroundColor:"red"
                                }}>
                                <SwitchCheckBox theme="alternate" inputValue={inputValue} />
                            </Box>
                            <Typography
                                sx={{
                                    fontWeight: "600",
                                    fontSize: "27px",
                                    color: auth.autocharge ? "#fff " : "#190247",
                                }}>
                                Auto
                            </Typography>
                            <Typography
                                sx={{
                                    fontWeight: "600",
                                    fontSize: "27px",
                                    color: auth.autocharge ? "#fff " : "#190247",
                                }}>
                                Credits
                            </Typography>
                            <Typography
                                sx={{
                                    position: "absolute",
                                    bottom: "10px",
                                    right: "20px"
                                }}
                            >
                                <input type="number"
                                    style={{
                                        width: "50px",
                                        height: "32px",
                                        border: "none",
                                        outline: "none",
                                        borderRadius: "5px",
                                        fontWeight: "600",
                                        color: "#190247",
                                        textAlign: "center",
                                        paddingLeft: "8px",
                                        fontSize: "18px",
                                        border: auth.autocharge ? "" : "1px solid #190247"
                                    }}

                                    value={inputValue}
                                    onChange={handleChange}
                                    min={"0"}
                                />
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box
                sx={{ mt: "50px" }}
            >


                {clientSecret && (
                    <Elements stripe={stripePromise} options={{ clientSecret, appearance: { theme: 'stripe' } }}>
                        <PaymentComponent />
                    </Elements>
                )}
            </Box>

            <Box
                sx={{
                    mt: "30px",
                    display: "flex",
                    gap: ".6rem"
                }}
            >
                <Typography sx={{ color: "red", fontWeight: "600", fontSize: "18px" }} >
                    Disclaimer : {" "}
                </Typography>
                <Typography sx={{ color: "#333333", fontWeight: "600", fontSize: "18px" }} >  You can also do Payment via ( Wise, Payonner & Bank Transfer) </Typography>
                <Typography sx={{ color: "blue", fontWeight: "600", fontSize: "18px", textDecoration: "underline", cursor: "pointer" }} onClick={() => { navigate("/contact-admin") }} >
                    Contact Us
                </Typography>
            </Box>
        </Box>
    );
};

export default StripeCardForm;
