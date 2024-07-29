import React, { useEffect, useState } from 'react';
import bg from "./../../assets/images/bg.png";
import visa from "./../../assets/images/visa circles.png";
import { Box, Typography } from '@mui/material';
import axiosInstance from '../../Hooks/useQueryGallery/AuthHook/AuthHook';
import { useSelector } from 'react-redux';
import LoaderMain from '../Loader/LoaderMain';
import { useNavigate } from 'react-router-dom';

const appUrl = import.meta.env.VITE_REACT_APP_API_URL;

const CustomCard = ({ cardStyle, cb }) => {
    const [num, setNum] = useState('');
    const [username, setUsername] = useState();
    const auth = useSelector(state => state.auth);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCard = async () => {
            setLoading(true);
            try {
                const response = await axiosInstance({ method: 'get', url: `${appUrl}/getcardinfo` });
                if (response.data.cards.length > 0) {
                    setNum(response.data.cards[0].last4);
                }
                setUsername(auth.username);
                console.log(auth.username);
            } catch (error) {
                console.error("Failed to fetch card info:", error);
            }
            setLoading(false);
        }
        fetchCard();
    }, [auth.username]);

    return (
        <>
            {loading ? (
                <Box
                sx={{
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    marginTop:"50px"

                }}
                >
                    <LoaderMain />
                </Box>
            ) : num ? (
                <Box
                    onClick={cb}
                    sx={{
                        background: `linear-gradient(rgba(27, 2, 75, .7), rgba(27, 2, 75, .8)), url(${bg})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        borderRadius: "10px",
                        position: "relative",
                        color: "white",
                        padding: "26px 32px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        flexGrow: 1,
                        boxShadow: "4px 5px 15px rgba(200, 200, 200, 0.61)",
                        ...cardStyle
                    }}
                >
                    <Typography
                        sx={{
                            fontWeight: "600",
                            fontSize: "16px",
                            lineHeight: "24px",
                        }}
                    >
                        Debit Card
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px"
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: "18px",
                                lineHeight: "27px",
                                fontWeight: "400"
                            }}
                        >
                            {`**** **** **** ${num}`}
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: "14px",
                                lineHeight: "21px",
                                fontWeight: "400"
                            }}
                        >
                            {auth.userName}
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            position: "absolute",
                            bottom: "15px",
                            right: "40px"
                        }}
                    >
                        <img src={visa} alt="Visa" />
                    </Box>
                </Box>
            ) : (
                <Box
                    sx={{
                        background: `linear-gradient(rgba(27, 2, 75, .1), rgba(27, 2, 75, .1)), url(${bg})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        borderRadius: "10px",
                        position: "relative",
                        color: "white",
                        padding: "26px 32px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        flexGrow: 1,
                        boxShadow: "4px 5px 15px rgba(200, 200, 200, 0.61)",
                        color: "#FFFFFF",
                        fontSize: "28px",
                        fontWeight: "600",
                        backgroundPosition: "center",
                        cursor: "pointer",
                        height: "100%",
                        ...cardStyle
                    }}
                    onClick={() => navigate("/card-details")}
                >
                    Add Your Card +
                </Box>
            )}
        </>
    );
};

export default CustomCard;
