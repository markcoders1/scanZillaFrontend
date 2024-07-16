import { Box, Typography, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import GiftCard from '../../Components/GiftCard/GiftCard';
import CreditsHistory from '../../Components/CreditsHistory/CreditsHistory';
import SnackAlert from '../../Components/SnackAlert/SnackAlert';
import axiosInstance from '../../Hooks/useQueryGallery/AuthHook/AuthHook';
import { ViewDetailModal } from '../../Components/ViewDetailModal/ViewDetailModal';

const appUrl = import.meta.env.VITE_REACT_APP_API_URL;

const History = () => {
    const [snackAlertData, setSnackAlertData] = useState({
        message: "",
        severity: "success",
        open: false,
    });
    const [loading, setLoading] = useState(false);
    const [creditsHistory, setCreditsHistory] = useState([]);
    const [analyzeHistory, setAnalyzeHistory] = useState([]);
    const [open, setOpen] = useState(false);
    const [modalData, setModalData] = useState({});

    const fetchCreditsHistory = async () => {   
        setSnackAlertData({
            open: false,
            message: "",
            severity: "success",
        });
        try {
            setLoading(true);
            const response = await axiosInstance({
                url: appUrl + "/getpurchasehistory",
                method: "get",
            });
            setLoading(false);
            if (response) {
                setCreditsHistory(response?.data?.payments);
                setSnackAlertData({
                    open: true,
                    message: response?.data?.message,
                    severity: "success",
                });
                if (response?.code > 200) {
                    setSnackAlertData({
                        open: true,
                        message: response?.message,
                        severity: "error",
                    });
                }
            }
        } catch (error) {
            setLoading(false);
            setSnackAlertData({
                open: true,
                message: error.toString(),
                severity: "error",
            });
        }
    };

    const fetchAnalyzeHistory = async () => {
        setSnackAlertData({
            open: false,
            message: "",
            severity: "success",
        });
        try {
            const response = await axiosInstance({
                url: appUrl + "/getuserhistory",
                method: "get",
            });
            if (response) {
                setAnalyzeHistory(response.data.Histories);
                setSnackAlertData({
                    open: true,
                    message: response?.data?.message,
                    severity: "success",
                });
                if (response?.code > 200) {
                    setSnackAlertData({
                        open: true,
                        message: response?.message,
                        severity: "error",
                    });
                }
            }
        } catch (error) {
            setLoading(false);
            setSnackAlertData({
                open: true,
                message: error.toString(),
                severity: "error",
            });
        }
    };

    useEffect(() => {
        fetchCreditsHistory();
        fetchAnalyzeHistory();
    }, []);

    const openModal = (data) => {
        setModalData(data);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setModalData({});
    };

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
                        width: "8px"
                    },
                    "&::-webkit-scrollbar-track": {
                        background: "#DFDFDF",
                        borderRadius: "10px"
                    },
                    "&::-webkit-scrollbar-thumb": {
                        background: "black",
                        borderRadius: "10px"
                    },
                    "&::-webkit-scrollbar-thumb:hover": {
                        background: "#b30000"
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

                {loading ? "loading...." : analyzeHistory.map((item, index) => (
                    <GiftCard 
                        key={item._id} 
                        id={item._id} 
                        title={item.title} 
                        description={item.description} 
                        bullets={item.bullets} 
                        index={index} 
                        openModal={openModal} 
                    />
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
                        width: "8px"
                    },
                    "&::-webkit-scrollbar-track": {
                        background: "#DFDFDF",
                        borderRadius: "10px"
                    },
                    "&::-webkit-scrollbar-thumb": {
                        background: "black",
                        borderRadius: "10px"
                    },
                    "&::-webkit-scrollbar-thumb:hover": {
                        background: "#b30000"
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
                {loading && creditsHistory.length < 1 ? "loading..." : creditsHistory.map((item, index) => (
                    <CreditsHistory item={item} key={index} index={index} />
                ))}
            </Box>

            <ViewDetailModal
                open={open}
                handleClose={handleClose}
                title={modalData.title}
                bullets={modalData.bullets}
                description={modalData.description}
            />

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
