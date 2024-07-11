import { Box, Typography, Select, MenuItem, FormControl } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CustomInputShadow from '../../Components/CustomInputShadow/CustomInputShadow'
import visaCircles from '../../assets/images/visa circles.png'

const Debit = () => {
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [data, setData] = useState({
        debit_card_number: "",
        credit_card_number: "",
        card_number: "",
        name: "",
        cvv:""



    })
    const handleMonthChange = (event) => {
        setMonth(event.target.value);
    };

    const handleYearChange = (event) => {
        setYear(event.target.value);
    };
    const hanldeInput = (e) => {
        setData((prev) => ({ ...prev, [e?.target?.name]: e?.target?.value }));
    };


    useEffect(() => { console.log(data) }, [data])
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1.7rem"
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: {
                        md: "row",
                        xs: "column"
                    },
                    gap: {
                        sm: "2rem",
                        xs: "2.5rem"
                    }
                }}
            >
                <Box
                    sx={{
                        flexBasis: "50%"
                    }}
                >
                    <CustomInputShadow
                        placeholder="Debit Card"
                        onChange={hanldeInput}
                        name="debit_card_number"
                        value={data.debit_card_number}

                    />
                </Box>

                <Box
                    sx={{
                        flexBasis: "50%"
                    }}
                >
                    <CustomInputShadow
                        onChange={hanldeInput}
                        name="credit_card_number"
                        value={data.credit_card_number}
                        placeholder="Credit Card"
                    />
                </Box>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.3rem",
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
                        xs:"column",
                        lg:"row"
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
                        flexGrow:"1",
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
                    <Box>


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
                    >
                        <Typography
                            sx={{
                                fontWeight: "600",
                                fontSize: "22px",
                                letterSpacing: "0.34px",
                                color: "#333333"
                            }}
                        >
                            CVV
                        </Typography>
                        <Box>
                            <CustomInputShadow
                                onChange={hanldeInput}
                                name="cvv"
                                value={data.cvv}
                                type="password"
                            />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Debit