import React from 'react'
import { Box, Typography, Button } from '@mui/material';
import dashboardImg1 from '../../assets/images/dashboard.png'
import CreditsHistory from '../../Components/CreditsHistory/CreditsHistory';
import PricingBox from '../../Components/PricingBox/PricingBox';
import { NavLink } from 'react-router-dom';
import { FaCheck } from "react-icons/fa6";
import checkImg from '../../assets/images/check.png'
import CustomButton from '../../Components/CustomButton/CustomButton';
import Customcard from '../../Components/Customcard/Customcard';
const Credits = () => {
    return (
        <Box
            sx={{
                display: "flex",
                gap: "2.2rem",
                marginTop: "10px",
                flexDirection:{
                    md:"row",
                    xs:"column"
                }
            }}
        >
            <Box
                sx={{
                    flexBasis: "50%",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Box
                    sx={{
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "20px"

                        }}
                    >
                        {/* Pricing box rendering */}
                        <Box
                            sx={{
                                // border: "1px solid black",
                                // backgroundColor: "red",
                                display: "flex",
                                gap: "20px",
                                flexDirection:{
                                    sm:"row",
                                    xs:"column",
                                }

                            }}
                        >
                            <Box
                                sx={{
                                    flexBasis: {
                                        md: "218px",
                                    },
                                    padding: "15px 16px 0px 16px ",
                                    boxShadow: "4px 5px 15px 0px #C8C8C8",
                                    borderRadius: "10px  ",
                                    height: "322px",
                                    flexGrow: {
                                        sm:"1",
                                    },
                                    
                                    // flexShrink: "1"
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: "23px",
                                        color: "#333333",
                                        fontWeight: "600",
                                        width: "63px",
                                        margin: "auto"

                                    }}
                                >
                                    Basic
                                </Typography>
                                <Box
                                    sx={{
                                        marginTop: "15px",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center"
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            // justifyContent:"center",
                                            gap: "10px",



                                        }}
                                    >
                                        <Typography>
                                            <img src={checkImg} alt="" />
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: "11px",
                                            }}
                                        >
                                            Lorem ipsum dolor sit
                                        </Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "10px",


                                        }}
                                    >
                                        <Typography>
                                            <img src={checkImg} alt="" />
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: "11px",
                                            }}
                                        >
                                            Lorem ipsum dolor sit
                                        </Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "10px",


                                        }}
                                    >
                                        <Typography>
                                            <img src={checkImg} alt="" />
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: "11px",
                                            }}
                                        >
                                            Lorem ipsum dolor sit
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box sx={{
                                    marginTop: "30px",
                                    width: "100%",
                                    textAlign: "center",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "2px "


                                }}>
                                    <Typography sx={{
                                        fontSize: "45px",
                                        fontWeight: "600",
                                        color: "#333333",
                                        lineHeight: "40px"

                                    }} >
                                        $10
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: "10px",
                                            fontWeight: "500",
                                            color: "#333333",

                                        }}
                                    >
                                        per Month
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        margin: "auto",
                                        marginTop: "20PX",
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                >
                                    <CustomButton
                                        border={"1px solid #333333"}
                                        borderRadius={"10px"}
                                        ButtonText={"Get Credits"}
                                        fontSize={"12px"}
                                        fontWeight={"500"}
                                        color={"#333333"}
                                        margin={"auto"}
                                    />
                                </Box>
                            </Box>

                            {/* 2nd box */}


                            <Box
                                sx={{
                                    flexBasis: {
                                        md: "218px",
                                    },
                                    padding: "15px 16px 0px 16px ",
                                    boxShadow: "4px 5px 15px 0px #C8C8C8",
                                    borderRadius: "10px  ",
                                    height: "322px",
                                    flexGrow: "1"
                                    // , flexShrink: "1"
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: "23px",
                                        color: "#333333",
                                        fontWeight: "600",
                                        width: "63px",
                                        margin: "auto"

                                    }}
                                >
                                    Pro
                                </Typography>
                                <Box
                                    sx={{
                                        marginTop: "15px",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center"
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "10px",


                                        }}
                                    >
                                        <Typography>
                                            <img src={checkImg} alt="" />
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: "11px",
                                            }}
                                        >
                                            Lorem ipsum dolor sit
                                        </Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "10px",


                                        }}
                                    >
                                        <Typography>
                                            <img src={checkImg} alt="" />
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: "11px",
                                            }}
                                        >
                                            Lorem ipsum dolor sit
                                        </Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "10px",


                                        }}
                                    >
                                        <Typography>
                                            <img src={checkImg} alt="" />
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: "11px",
                                            }}
                                        >
                                            Lorem ipsum dolor sit
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box sx={{
                                    marginTop: "30px",
                                    width: "100%",
                                    textAlign: "center",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "2px "


                                }}>
                                    <Typography sx={{
                                        fontSize: "45px",
                                        fontWeight: "600",
                                        color: "#333333",
                                        lineHeight: "40px"

                                    }} >
                                        $30
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: "10px",
                                            fontWeight: "500",
                                            color: "#333333",

                                        }}
                                    >
                                        per Month
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        margin: "auto",
                                        marginTop: "20PX",
                                        display: "flex",
                                        justifyContent: "center",
                                        


                                    }}
                                >
                                    <CustomButton
                                        border={"1px solid #333333"}
                                        borderRadius={"10px"}
                                        ButtonText={"Get Credits"}
                                        fontSize={"12px"}
                                        fontWeight={"500"}
                                        color={"#333333"}

                                        margin={"auto"}

                                    />
                                </Box>
                            </Box>

                        </Box>

                        {/* 3rd box */}

                        <Box
                            sx={{
                                // border: "1px solid black",
                                // backgroundColor: "red",
                                display: "flex",
                                gap: "20px",
                                flexDirection:{
                                    sm :"row",
                                    xs:"column"
                                }

                            }}
                        >
                            <Box
                                sx={{
                                    flexBasis: {
                                        md: "218px",
                                    },
                                    padding: "12px 16px 0px 16px ",
                                    boxShadow: "4px 5px 15px 0px #C8C8C8",
                                    borderRadius: "10px  ",
                                    height: "322px",
                                    flexGrow: "1",
                                    flexShrink: "1",
                                    overflowY: "scroll",
                                    "&::-webkit-scrollbar": {
                                        width: "8px" // Adjust the width of the scrollbar here
                                    },
                                    "&::-webkit-scrollbar-track": {
                                        background: "#DFDFDF",
                                        borderRadius: "10px"
                                    },
                                    "&::-webkit-scrollbar-thumb": {
                                        background: "black", // Change this for different scrollbar thumb color
                                        borderRadius: "10px"
                                    },
                                    "&::-webkit-scrollbar-thumb:hover": {
                                        background: "#b30000" // Change this for scrollbar thumb color on hover
                                    }


                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: "23px",
                                        color: "#333333",
                                        fontWeight: "600",
                                        width: "100%",
                                        textAlign: "center",


                                    }}
                                >
                                    Enterprise
                                </Typography>
                                <Box
                                    sx={{

                                        marginTop: "15px",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center"
                                    }}
                                >
                                    {Array.from({ length: 9 }).map((_, index) => (
                                        <Box
                                            key={index}

                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "10px",


                                            }}
                                        >

                                            <Typography>
                                                <img src={checkImg} alt="" />
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    fontSize: "11px",
                                                }}
                                            >
                                                Lorem ipsum dolor sit
                                            </Typography>
                                        </Box>
                                    ))}

                                </Box>
                                <Box sx={{
                                    marginTop: "30px",
                                    width: "100%",
                                    textAlign: "center",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "2px "


                                }}>
                                    <Typography sx={{
                                        fontSize: "45px",
                                        fontWeight: "600",
                                        color: "#333333",
                                        lineHeight: "40px"

                                    }} >
                                        $60
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: "10px",
                                            fontWeight: "500",
                                            color: "#333333",

                                        }}
                                    >
                                        per Month
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        margin: "auto",
                                        marginTop: "20PX",
                                        display: "flex",
                                        justifyContent: "center",


                                    }}
                                >
                                    <CustomButton
                                        border={"1px solid #333333"}
                                        borderRadius={"10px"}
                                        ButtonText={"Get Credits"}
                                        fontSize={"12px"}
                                        fontWeight={"500"}
                                        color={"#333333"}

                                        margin={"auto"}

                                    />
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    flexBasis: {
                                        md: "218px",
                                    },
                                    borderRadius: "10px  ",
                                    height: "322px",
                                    flexGrow: "1",
                                    flexShrink: "1",
                                    minWidth: "25%",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "1rem"

                                }}
                            >
                                <Box
                                    sx={{
                                        height: "50%",
                                        flexBasis: "218px",
                                        borderRadius: "10px",
                                        flexGrow: "1",
                                        boxShadow: "4px 5px 15px 0px #C8C8C8",
                                        padding: "24px 23px",

                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontWeight: "500",
                                            fontSize: "20px",
                                            color: "#A0A4A9",

                                        }}
                                    >
                                        Total Credits
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontWeight: "600",
                                            fontSize: "56px",
                                            color: "#190247",

                                        }}
                                    >
                                        50
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        height: "50%",
                                        flexBasis: "218px",
                                        borderRadius: "10px",
                                        flexGrow: "1",
                                        backgroundImage: `linear-gradient(rgba(53, 1, 88, .8), rgba(53, 1, 88, .8)), url(${dashboardImg1})`,
                                        backgroundSize: "cover",
                                        backgroundRepeat: "no-repeat",
                                        backgroundPosition: "center",
                                        padding: "24px 23px",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontWeight: "600",
                                            fontSize: "27px",
                                            color: "#fff ",

                                        }}
                                    >
                                        Let's
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontWeight: "600",
                                            fontSize: "27px",
                                            color: "#fff ",

                                        }}
                                    >
                                        Analyze
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box

                sx={{
                    flexBasis: "50%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    flexShrink: "1",

                }}
            >


                <Box
                    sx={{

                        padding: "24px 0px 0px 23px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "2rem",
                        boxShadow: "4px 5px 15px 0px #C8C8C8 ",
                        borderRadius: "10px",
                        flexShrink: "1",
                        height: "495px",

                    }}
                >
                    <Typography
                        sx={{
                            color: "#333333",
                            fontWeight: "600",
                            fontSize: "27px"
                        }}
                    >
                        Credits History
                    </Typography
                    >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "2.6rem",
                            height: "280px",
                            padding: "0px 30px 0px 0px",
                            overflowY: "scroll",
                            "&::-webkit-scrollbar": {
                                width: "8px" // Adjust the width of the scrollbar here
                            },
                            "&::-webkit-scrollbar-track": {
                                background: "#DFDFDF",
                                borderRadius: "10px"
                            },
                            "&::-webkit-scrollbar-thumb": {
                                background: "black", // Change this for different scrollbar thumb color
                                borderRadius: "10px"
                            },
                            "&::-webkit-scrollbar-thumb:hover": {
                                background: "#b30000" // Change this for scrollbar thumb color on hover
                            }

                        }}
                    >

                        {Array.from({ length: 9 }).map((_, index) => (
                            <CreditsHistory key={index} index={index} />
                        ))}

                    </Box>
                    <Box>


                        <Typography>
                            <NavLink
                                to="/history"
                            >
                                <Button
                                    sx={{
                                        p: "15px 20px",
                                        background: "linear-gradient(to right, #1A0049, #41016C)",
                                        width: "100%",
                                        height: "46px",
                                        borderRadius: "5px",
                                        fontSize: {
                                            xs: "14px",
                                            sm: "18px"
                                        },
                                        fontWeight: "500",
                                        textTransform: "none",
                                        transition: "background 0.9s ease, color 0.4s ease",
                                        "&:hover": {
                                            background: "linear-gradient(to right, #1G1947, #41016C)",
                                            color: "white"
                                        },
                                        boxShadow: "none"
                                    }}
                                    variant="contained"
                                >
                                    All Credits History
                                </Button>
                            </NavLink>
                        </Typography>
                    </Box>

                </Box>
                <Typography>
                    <Customcard />
                </Typography>
            </Box>
        </Box>
    )
}

export default Credits