import React from 'react'
import { Box, Typography, Button } from '@mui/material';
import dashboardImg1 from '../../assets/images/dashboard.png'
import CreditsHistory from '../../Components/CreditsHistory/CreditsHistory';
import PricingBox from '../../Components/PricingBox/PricingBox';
const Credits = () => {
    return (
        <Box
            sx={{
                marginTop: "15px",
                display: "flex",
                gap: "2.2rem",
                // marginTop: "30px"
            }}
        >
            <Box
                sx={{
                    flexBasis: "50%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "2rem",
                       border:"2px solid red",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        gap: "3rem",
                    }}
                >
                    <Typography
                        sx={{

                            backgroundImage: `linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)), url(${dashboardImg1})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            flexBasis: {
                                lg: "330.5px",
                                md: "243.5px"
                            },
                            flexGrow: "1",
                            height: "159.9px",
                            borderRadius: "10px",
                            color: "white",
                            padding: "34px 26px",
                            fontSize: {
                                lg: "35px",
                                md: "27px"
                            },
                            fontWeight: "700px",



                        }}
                    >
                        Get <br /> Credits

                    </Typography>
                    <Box
                        sx={{
                            flexBasis: {
                                lg: "200px",
                                md: "163.15px"
                            },
                            flexGrow: "1",
                            height: "150px",
                            backgroundColor: "white",
                            boxShadow: "4px 5px 15px 0px #C8C8C8 ",
                            borderRadius: "10px",
                            padding: "24px 26px",

                        }}
                    >
                        <Typography
                            sx={{
                                fontWeight: "500",
                                fontSize: "20px",
                                color: "#A0A4A9",
                            }}
                        >
                            Credits
                        </Typography>
                        <Typography
                            sx={{
                                fontWeight: "600",
                                fontSize: "4.063rem ",
                                color: "#190247",
                            }}
                        >
                            50
                        </Typography>
                    </Box>


                </Box>
                <Box
                    sx={{
                    }}
                >
                    <Typography
                        sx={{
                            fontWeight: "600",
                            fontSize: "22px",
                            color: "#333333",
                        }}
                    >
                        Pricing
                    </Typography>
                    <Box
                        sx={{
                            marginTop: "10px",
                            display: "flex",
                            gap: '3rem',
                            flexWrap:"wrap"
                        }}
                    >
                        {/* Pricing box rendering */}

                        <Box
                            sx={{
                                flexBasis: {
                                    md: "204px",
                                },
                                padding: "9px 16px ",
                                boxShadow: "4px 5px 15px 0px #C8C8C8",
                                borderRadius: "10px  ",
                                flexGrow: "1"
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: "15px",
                                    color: "#333333",
                                }}
                            >
                                Free
                            </Typography>
                            <Box
                                sx={{
                                    position: "relative",
                                    display: "flex",
                                    height: "60px",
                                    width: "90px",
                                    margin: "auto"

                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: "15px",
                                        color: "#190247",
                                        position: "absolute",
                                        top: "10px",
                                        fontWeight: "500"
                                    }}
                                >
                                    $
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: "50px",
                                        color: "#190247",
                                        position: "absolute",
                                        left: "8px",
                                        fontWeight: "500"

                                    }}
                                >
                                    0
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: "13px",
                                        color: "#190247",
                                        position: "absolute",
                                        left: "38px",
                                        top: "40px",
                                        fontWeight: "500"
                                    }}
                                >
                                    / mo
                                </Typography>


                            </Box>
                            <Box
                                sx={{
                                    borderBottom: "1px solid #B8B8B8",
                                    marginTop: "19px",

                                }}
                            ></Box>
                            <Box
                                sx={{
                                    padding: "10px 15px",
                                    fontSize: "14px",
                                    color: "#333333",
                                    fontWeight: "500 "
                                }}
                            >
                                <ul>


                                    <li>7 analyze</li>
                                    <li>limited Access</li>

                                    <li>loremimpsum</li>

                                    <li>loremimpsum</li>

                                </ul></Box>
                        </Box>
                        <Box
                            sx={{
                                width: {

                                    md: "204px"

                                },
                                padding: "9px 16px ",
                                boxShadow: "4px 5px 15px 0px #C8C8C8",
                                borderRadius: "10px  ",
                                flexGrow: "1"
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: "15px",
                                    color: "#333333",
                                }}
                            >
                                Basic
                            </Typography>
                            <Box
                                sx={{
                                    position: "relative",
                                    display: "flex",
                                    height: "60px",
                                    width: "120px",
                                    margin: "auto"

                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: "15px",
                                        color: "#190247",
                                        position: "absolute",
                                        top: "10px",
                                        fontWeight: "500"
                                    }}
                                >
                                    $
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: "50px",
                                        color: "#190247",
                                        position: "relative",
                                        left: "8px",
                                        fontWeight: "500"

                                    }}
                                >
                                    20
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: "13px",
                                        color: "#190247",
                                        position: "absolute",
                                        left: "68px",
                                        top: "40px",
                                        fontWeight: "500"
                                    }}
                                >
                                    / mo
                                </Typography>


                            </Box>
                            <Box
                                sx={{
                                    borderBottom: "1px solid #B8B8B8",
                                    marginTop: "19px",

                                }}
                            ></Box>
                            <Box
                                sx={{
                                    padding: "10px 15px",
                                    fontSize: "14px",
                                    color: "#333333",
                                    fontWeight: "500 "
                                }}
                            >
                                <ul>


                                    <li>7 analyze</li>
                                    <li>limited Access</li>

                                    <li>loremimpsum</li>

                                    <li>loremimpsum</li>

                                </ul></Box>
                        </Box>
                    

                        <Box
                            sx={{
                                width: {

                                    md: "204px"

                                },
                                padding: "9px 16px ",
                                boxShadow: "4px 5px 15px 0px #C8C8C8",
                                borderRadius: "10px  ",
                              
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: "15px",
                                    color: "#333333",
                                }}
                            >
                                Basic
                            </Typography>
                            <Box
                                sx={{
                                    position: "relative",
                                    display: "flex",
                                    height: "60px",
                                    width: "120px",
                                    margin: "auto"

                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: "15px",
                                        color: "#190247",
                                        position: "absolute",
                                        top: "10px",
                                        fontWeight: "500"
                                    }}
                                >
                                    $
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: "50px",
                                        color: "#190247",
                                        position: "relative",
                                        left: "8px",
                                        fontWeight: "500"

                                    }}
                                >
                                    20
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: "13px",
                                        color: "#190247",
                                        position: "absolute",
                                        left: "68px",
                                        top: "40px",
                                        fontWeight: "500"
                                    }}
                                >
                                    / mo
                                </Typography>


                            </Box>
                            <Box
                                sx={{
                                    borderBottom: "1px solid #B8B8B8",
                                    marginTop: "19px",

                                }}
                            ></Box>
                            <Box
                                sx={{
                                    padding: "10px 15px",
                                    fontSize: "14px",
                                    color: "#333333",
                                    fontWeight: "500 "
                                }}
                            >
                                <ul>


                                    <li>7 analyze</li>
                                    <li>limited Access</li>

                                    <li>loremimpsum</li>

                                    <li>loremimpsum</li>
                                    <li>7 analyze</li>
                                    <li>limited Access</li>

                                    <li>loremimpsum</li>

                                    <li>loremimpsum</li>

                                </ul></Box>
                        </Box>

                    </Box>
                </Box>
            </Box>


            <Box
                sx={{
                    flexBasis: "50%",
                    padding: "24px 30px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "2.6rem",
                    boxShadow: "4px 5px 15px 0px #C8C8C8 ",
                    borderRadius: "10px"




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
                </Typography>
                {Array.from({ length: 4 }).map((_, index) => (
                    <CreditsHistory key={index} index={index} />
                ))}

                <Typography>
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
                </Typography>
            </Box>
        </Box>
    )
}

export default Credits