import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import GiftCard from '../../Components/GiftCard/GiftCard';
import CreditsHistory from '../../Components/CreditsHistory/CreditsHistory';
import SnackAlert from '../../Components/SnackAlert/SnackAlert';
import axiosInstance from '../../Hooks/useQueryGallery/AuthHook/AuthHook';
const appUrl = import.meta.env.VITE_REACT_APP_API_URL

const History = () => {
    const [snackAlertData, setSnackAlertData] = React.useState({
        message: "",
        severity: "success",
        open: false,
    })
    const [loading, setLoading] = useState(false)
    const [creditsHistory, setCreditsHistory] = useState([])
    const [analyzeHistory, setAnalyzeHistory] = useState([])

    const fetchCreditsHisotry = async () => {
        setSnackAlertData({
            open: false,
            message: "",
            severity: "success",
        })
        try {

            setLoading(true);
            const response = await axiosInstance({
                url: appUrl + "/getpurchasehistory",
                method: "get",
            });
            setLoading(false);
            if (response) {
                setCreditsHistory(response?.data?.payments)
                setSnackAlertData({
                    open: true,
                    message: response?.data?.message,
                    severity: "success",
                })
                if (response?.code > 200) {
                    setSnackAlertData({
                        open: true,
                        message: response?.message,
                        severity: "error",
                    })
                }
            }


        } catch (error) {
            setLoading(false);
            setSnackAlertData({
                open: true,
                message: error.toString(),
                severity: "error",
            })

        }

    }


    const fetchAnalyzeHisotry = async () => {
        setSnackAlertData({
            open: false,
            message: "",
            severity: "success",
        })
        try {
            console.log("hi")

            // setLoading(true);
            const response = await axiosInstance({
                url: appUrl + "/getuserhistory",
                method: "get",

            });
            console.log("response from history",response)
            // setLoading(false);
            if (response) {
                // setAnalyzeHistory()
                setSnackAlertData({
                    open: true,
                    message: response?.data?.message,
                    severity: "success",
                })
                if (response?.code > 200) {
                    setSnackAlertData({
                        open: true,
                        message: response?.message,
                        severity: "error",
                    })
                }
            }


        } catch (error) {
            setLoading(false);
            setSnackAlertData({
                open: true,
                message: error.toString(),
                severity: "error",
            })

        }

    }


    useEffect(() => {
        fetchCreditsHisotry()
        fetchAnalyzeHisotry()
    }, [])

    return (
        <Box
            sx={{
                marginTop: "15px",
                display: "flex",
                gap: "2.2rem",
                flexDirection: {
                    lg: "row",
                    xs: 'column',
                },
            }}
        >
            
            <Box
                sx={{
                    marginTop: "15px",
                    display: "flex",
                    gap: "1.8rem",
                    flexBasis: "50%",
                    padding: "24px 30px",
                    borderRadius: "10px",
                    flexDirection: "column",
                    maxHeight: "680px",
                    overflow: "auto",
                    boxShadow: "4px 5px 15px rgba(200, 200, 200, 0.61)",
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
                        fontSize: "27px",
                        fontWeight: "600",
                        color: "#333333"
                    }}
                >
                    Analyze History
                </Typography>

                {Array.from({ length: 60 }).map((_, index) => (
                    <GiftCard key={index} index={index} />
                ))}

            </Box>
            <Box
                sx={{
                    marginTop: "15px",
                    display: "flex",
                    gap: "1.8rem",
                    flexBasis: "50%",
                    padding: "24px 30px",
                    borderRadius: "10px",
                    flexDirection: "column",
                    maxHeight: "680px",
                    overflow: "auto",
                    boxShadow: "4px 5px 15px rgba(200, 200, 200, 0.61)",
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
                        fontSize: "27px",
                        fontWeight: "600",
                        color: "#333333",

                    }}
                >

                    Credits History
                </Typography>
                {
                    (loading && creditsHistory?.length < 1) ? "loading..." : creditsHistory.map((item, index) => (
                        <CreditsHistory item={item} key={index} index={index} />
                    ))
                }


            </Box>
            <SnackAlert
                message={snackAlertData.message}
                severity={snackAlertData.severity}
                open={snackAlertData.open}
                handleClose={() => { setSnackAlertData(prev => ({ ...prev, open: false })) }}


            />
        </Box>
    );
};

export default History;
