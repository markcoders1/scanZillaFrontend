import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import DashboardCard from "../../Components/DashboardCard/DashboardCard";
import Heading from "../../Components/Heading/Heading";
import CustomChart from "../../Components/CustomChart/CustomChart";
import axiosInstance from "../../Hooks/useQueryGallery/AuthHook/AuthHook";
import LoaderMain from "../../Components/Loader/LoaderMain";

const appUrl = import.meta.env.VITE_REACT_APP_API_URL;

const AdminDashboard = () => {
    const [totalUsers, setTotalUsers] = useState();
    const [loading, setLoading] = useState();
    const [totalIncome, setTotalIncome] = useState();
    const bulletPoints = [
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, ipsa?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, ipsa?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, ipsa?",
    ];

    const getAllUser = async () => {
        try {
            setLoading(true);
            const response = await axiosInstance({
                url: appUrl + "/gettotalusers",
                method: "get",
            });
            console.log(response);
            setTotalUsers(response.data.users);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    const getTotalIncome = async () => {
        try {
            setLoading(true);
            const response = await axiosInstance({
                url: appUrl + "/gettotalincome",
                method: "get",
            });
            console.log(response.data.value);
            setTotalIncome(response.data.value);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllUser();
        getTotalIncome();
    }, []);

    return (
        <>
            {loading ? (
                <Box
                    sx={{
                        display: "flex",
                        height: "70vh",
                        width: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <LoaderMain />
                </Box>
            ) : (
                <Box sx={{}}>
                    <Box
                        sx={{
                            display: "flex",
                            gap: "2.5rem",
                            flexDirection: {
                                md: "row",
                                xs: "column",
                            },
                        }}
                    >
                        <Box
                            sx={{
                                flexBasis: "50%",
                                flexShrink: "1",
                            }}
                        >
                            <DashboardCard title="Total Payment this Month" text={totalIncome} />
                        </Box>
                        <Box
                            sx={{
                                flexBasis: "50%",
                                flexShrink: "1",
                            }}
                        >
                            <DashboardCard title="Total Users" text={totalUsers} />
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            mt: "30px",
                            display: "flex",
                            flexDirection: {
                                md: "row",
                                xs: "column",
                            },
                        }}
                    >
                        <Box
                            sx={{
                                flexBasis: "50%",
                            }}
                        >
                            <CustomChart />
                        </Box>
                        <Box
                            sx={{
                                flexBasis: "50%",
                            }}
                        >
                            <CustomChart />
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            mt: "30px",
                        }}
                    >
                        <Box>
                            <Heading Heading="Recent Analysis" />
                        </Box>

                        <Box
                            sx={{
                                mt: "30px",
                                boxShadow: "4px 5px 15px 0px #C8C8C8",
                                p: "31px 35px 65px 36px",
                                borderRadius: "10px",
                            }}
                        >
                            <Typography
                                sx={{
                                    color: "#A0A4A9",
                                    fontWeight: "400",
                                    fontSize: "20px",
                                }}
                            >
                                Title
                            </Typography>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    mt: "20px",
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: "#333333",
                                        fontWeight: "500",
                                        fontSize: "22px",
                                    }}
                                >
                                    LoremImsum
                                </Typography>
                                <Typography
                                    sx={{
                                        color: "#333333",
                                        fontWeight: "500",
                                        fontSize: "22px",
                                    }}
                                >
                                    Samantha
                                </Typography>
                            </Box>

                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "1rem",
                                    mt: "60px",
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: "#A0A4A9",
                                        fontWeight: "400",
                                        fontSize: "20px",
                                    }}
                                >
                                    Bullets Points
                                </Typography>

                                {bulletPoints.map((bullet, index) => (
                                    <Typography
                                        key={index}
                                        sx={{
                                            color: "#333333",
                                            fontWeight: "400",
                                            fontSize: "22px",
                                        }}
                                    >
                                        {bullet}
                                    </Typography>
                                ))}
                            </Box>

                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "1rem",
                                    mt: "60px",
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: "#A0A4A9",
                                        fontWeight: "400",
                                        fontSize: "20px",
                                    }}
                                >
                                    Product Description
                                </Typography>
                                <Typography
                                    sx={{
                                        color: "#333333",
                                        fontWeight: "400",
                                        fontSize: "20px",
                                    }}
                                >
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Cumque iste animi voluptatem, autem aliquid minima maxime
                                    omnis. Esse sed tenetur perferendis corporis distinctio
                                    expedita? A temporibus minima cupiditate impedit mollitia
                                    error magnam?
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            )}
        </>
    );
};

export default AdminDashboard;
