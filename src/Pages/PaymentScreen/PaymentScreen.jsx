import { Box, Typography, Select, MenuItem, FormControl } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CustomInputShadow from '../../Components/CustomInputShadow/CustomInputShadow'
import visaCircles from '../../assets/images/visa circles.png'
import CustomButton from '../../Components/CustomButton/CustomButton'
import SwitchCheckBox from '../../Components/SwitchCheckBox/SwitchCheckBox'


// stripe integration

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_test_51PZF1RRpAMX87OfFfp01TfdMLbrOZFYHtEw3i65pS6rgXMTA92KZaQSykMwZSYu1xpjfiL3r1ncGSh5V5ALn4tNU00hhVNyS0h");


const Debit = () => {

    const [clientSecret, setClientSecret] = useState("");

    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [data, setData] = useState({
        card_number: "",
        name: "",
        cvv: ""
    });

    const handleMonthChange = (event) => {
        setMonth(event.target.value);
    };

    const handleYearChange = (event) => {
        setYear(event.target.value);
    };

    const hanldeInput = (e) => {
        setData((prev) => ({ ...prev, [e?.target?.name]: e?.target?.value }));
    };

    const handlePayNow = () => {
        console.log("Payment Data: ", {
            ...data,
            expiryMonth: month,
            expiryYear: year,
        });
        // Add your API call logic here
    };

    const handleCancelPayment = () => {
        setData({

            card_number: "",
            name: "",
            cvv: ""
        });
        setMonth('');
        setYear('');
    };

    // useEffect(() => { console.log(data) }, [data]);

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1.6rem",
                marginTop: "20px"
            }}
        >

            <Box
                sx={{
                    display: "flex",
                    gap: "2rem"
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
                            onChange={hanldeInput}
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
                            onChange={hanldeInput}
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
                        // border:"2px solid red"
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
                            // border:"2px solid red",
                            display: "flex",
                            justifyContent: "end",
                            padding: "12px"

                        }}
                    >
                        <SwitchCheckBox theme="default" />
                    </Box>
                </Box>

            </Box>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                    position: "relative"
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
                        position: "relative",
                    }}
                >
                    <CustomInputShadow
                        placeholder="Enter Card Number"
                        onChange={hanldeInput}
                        name="card_number"
                        value={data.card_number}
                    />
                    <img
                        style={{
                            width: "50px",
                            height: "40px",
                            position: "absolute",
                            top: "10px",
                            right: "20px"
                        }}
                        src={visaCircles} alt="" />
                </Box>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: {
                        xs: "column",
                        lg: "row"
                    },
                    gap: {
                        lg: "2rem",
                        xs: "2rem"
                    },
                    position: "relative"
                }}
            >
                <Box
                    sx={{
                        flexBasis: "55%",
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
                            onChange={hanldeInput}
                            name="name"
                            value={data.name}
                        />
                    </Box>
                </Box>

                <Box
                    sx={{
                        flexGrow: "1",
                        flexShrink: "1",
                        flexBasis: "45%",
                        display: "flex",
                        flexDirection: {
                            xs: "column",
                            sm: "row",
                        },
                        gap: "2rem",

                    }}
                >
                    <Box
                        sx={{
                            flexShrink: "2",
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
                            Expiry Date
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                gap: "1rem",
                                boxShadow: "0px 8px 26px -4px rgba(0, 0, 0, 0.1)",
                                borderRadius: "4px",
                                backgroundColor: "#fff",
                                padding: "6px 0px 6px 0px"
                            }}
                        >
                            <FormControl sx={{ minWidth: 120 }}>
                                <Select
                                    id="month-select"
                                    value={month}
                                    onChange={handleMonthChange}
                                    displayEmpty
                                    sx={{
                                        '& .MuiOutlinedInput-notchedOutline': { border: 0 },
                                        '& .MuiSelect-select': { padding: '10px 14px' }
                                    }}
                                >
                                    <MenuItem value="" disabled>
                                        Month
                                    </MenuItem>
                                    {Array.from({ length: 12 }, (_, index) => (
                                        <MenuItem key={index + 1} value={index + 1}>
                                            {new Date(0, index).toLocaleString('default', { month: 'long' })}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <FormControl sx={{ minWidth: 120 }}>
                                <Select
                                    id="year-select"
                                    value={year}
                                    onChange={handleYearChange}
                                    displayEmpty
                                    sx={{
                                        '& .MuiOutlinedInput-notchedOutline': { border: 0 },
                                        '& .MuiSelect-select': { padding: '10px 14px' }
                                    }}
                                >
                                    <MenuItem value="" disabled>
                                        Year
                                    </MenuItem>
                                    {Array.from({ length: 20 }, (_, index) => (
                                        <MenuItem key={index + 2023} value={index + 2023}>
                                            {index + 2023}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Box>
                    </Box>
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
                                color: "#333333",
                            }}
                        >
                            CVV
                        </Typography>
                        <Box>
                            <CustomInputShadow
                                onChange={hanldeInput}
                                name="cvv"
                                value={data.cvv}
                                type="text"
                                fontSize="40px"
                                padding="0px 5px"
                            />
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box sx={{
                display: 'flex',
                gap: "20px",
                justifyContent: "end",
                flexDirection: {
                    sm: "row",
                    xs: "column-reverse"
                },
                mt: "20px"
            }}>
                <Box sx={{
                    display: "flex",
                    gap: "20px"
                }}>
                    <CustomButton
                        border="2px solid #1A0049"
                        borderRadius="10px"
                        buttonTextStyle={{}}
                        buttonStyle={{
                            padding: {
                                lg: "12px 20px"
                            }
                        }}
                        ButtonText="Cancel Payment"
                        fontSize
                        color="#1A0049"
                        fontWeight
                        fullWidth={false}
                        variant="outlined"
                        padding
                        onClick={handleCancelPayment}
                        hoverBg="#1A0049"
                        hovercolor="white"

                    />
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
                        // fullWidth={false} 
                        variant="contained"
                        padding
                        onClick={handlePayNow}
                        width={"143px"}
                    />
                </Box>
            </Box>
        </Box>
    );
}

export default Debit;
