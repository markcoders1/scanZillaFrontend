import { Box, Typography } from "@mui/material";
import DetailedCard from "../../Components/DetailedCard/DetailedCard";
import Customcard from "../../Components/Customcard/Customcard";
import CardIWithImageBackground from "../../Components/CardIWithImageBackground/CardIWithImageBackground";
import bg from "./../../assets/images/bg.png";
import CreditsHistory from "../../Components/CreditsHistory/CreditsHistory";
import GiftCard from "../../Components/GiftCard/GiftCard";
import CustomButton from "../../Components/CustomButton/CustomButton";
import CustomChart from "../../Components/CustomChart/CustomChart";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axiosInstance from "../../Hooks/useQueryGallery/AuthHook/AuthHook";
import { handleAuth } from "../../Redux/Slice/UserSlice/UserSlice";
import SnackAlert from '../../Components/SnackAlert/SnackAlert';
import { ViewDetailModal } from "../../Components/ViewDetailModal/ViewDetailModal";
import React from "react";
import LoaderMain from "../../Components/Loader/LoaderMain";

const appUrl = import.meta.env.VITE_REACT_APP_API_URL;

const Home = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [credits, setCredits] = useState(0);
  const [numberOfAnalyzed, setNumberOfAnalyzed] = useState(null);
  const [analyzeHistory, setAnalyzeHistory] = useState([]);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [snackAlertData, setSnackAlertData] = useState({
    message: "",
    severity: "success",
    open: false,
  });


  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance({
          url: `${appUrl}/getuser`,
          method: 'get',
          params: { email: auth.email },
        });

        const userData = response.data.user;
        setUsername(userData.userName);
        setEmail(userData.email);
        setCredits(userData.credits);

        dispatch(handleAuth({ credits: userData.credits }));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false);
      }
    };

    if (auth.email) {
      fetchUser();
    }
  }, [auth.email, dispatch]);

  const fetchAnalysed = async () => {
    setSnackAlertData({
      open: false,
      message: "",
      severity: "success",
    });
    try {
      setLoading(true);
      const response = await axiosInstance({
        url: `${appUrl}/getAnalysedNum`,
        method: "get",
      });
      setLoading(false);
      if (response) {
        setNumberOfAnalyzed(response?.data?.count);
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
      console.log(error);
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
        url: `${appUrl}/getuserhistory`,
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
    fetchAnalysed();
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
    <>
      {loading ? (
        <Box
        sx={{
          display:"flex",
          height:"70vh",
          width:"100%",
          justifyContent:"center",
          alignItems:"center"
        }}
        >
          <LoaderMain />

        </Box>
      ) : (
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          gap: "40px",
        }}>
          <Box sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: {
              xs: "column",
              md: "row"
            },
            gap: "40px",
          }}>
            <Box sx={{
              display: "flex",
              flexDirection: "column",
              gap: {
                md: "40px",
                xs: "40px"
              },
              flexGrow: 1,
              flexBasis: {
                md: "45%",
                xs: "100%"
              },
              flexShrink: 0,
            }}>
              <Box
                sx={{
                  display: "flex",
                  gap: {
                    sm: "40px",
                    xs: "10px"
                  },
                  flexBasis: {
                    xl: "45%"
                  },
                  flexGrow: 1,
                  justifyContent: "space-between",
                }}>
                <Box sx={{
                  flexBasis: {
                    xl: "243px"
                  },
                  flexGrow: 3,
                  flexShrink: "1"
                }}>
                  <CardIWithImageBackground
                    text={username}
                    title="Hello,"
                  />
                </Box>
                <Box sx={{
                  flexBasis: {
                    xl: "154px"
                  },
                  flexGrow: 1,
                  flexShrink: "1"
                }}>

                  <Box sx={{
                    boxShadow: "4px 5px 15px rgba(200, 200, 200, 0.61)",
                    padding: {
                      sm: "22px 26px",
                      xs: "20px 10px"
                    },
                    borderRadius: "10px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    height: "100%",
                    justifyContent: "center",
                  }}>

                    <Typography sx={{
                      color: "#A0A4A9",
                      fontWeight: "500",
                      fontSize: "20px",
                      lineHeight: "30px"
                    }}>
                      Credits
                    </Typography>

                    <Typography sx={{
                      fontWeight: "600",
                      fontSize: "50px",
                      lineHeight: "65px",
                      color: "#190247"
                    }}>
                      {credits}
                    </Typography>

                  </Box>
                </Box>

              </Box>
              <Box sx={{
                maxHeight: "400px",
                minHeight: "350px",
                boxSizing: "border-box",
                boxShadow: "4px 5px 15px rgba(200, 200, 200, 0.61)",
                padding: "20px", borderRadius: "10px"
              }}>
                <CustomChart />
              </Box>

            </Box>

            <Box
              sx={{
                flexBasis: {
                  md: "45%",
                },
                flexShrink: 0,
                flexGrow: 1,
                maxHeight: "550px",
                p: "30px 30px 30px 30px",
                display: "flex",
                flexDirection: "column",
                gap: "40px",
                boxShadow: "4px 5px 15px rgba(200, 200, 200, 0.61)",
                borderRadius: "10px",
                position: "relative"

              }}
            >

              <Typography
                sx={{
                  fontSize: "27px",
                  fontWeight: "600",
                  color: "#333333"
                }}
              >
                Analysis History
              </Typography>
              <Box sx={{
                overflowY: "auto",
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
                },
                display: "flex",
                flexDirection: "column",
                gap: "50px",
                borderRadius: "10px",
                paddingRight: "10px"
              }}>

                {analyzeHistory.map((item, index) => (
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
              <Box>
                <CustomButton
                  fullWidth={true}
                  border="2px solid #333333"
                  borderRadius="10px"
                  buttonTextStyle={{}}
                  buttonStyle={{
                    padding: {
                      lg: "12px 20px"
                    }
                  }}
                  ButtonText="History"
                  fontSize
                  color="white"
                  fontWeight
                  variant="contained"
                  padding
                  onClick={() => navigate("/history")}
                  hoverBg="#1A0049"
                  hovercolor="white"
                  background="#1A0049"
                />
              </Box>
            </Box>
          </Box>

          <Box sx={{
            display: "flex",
            gap: "40px",
            flexDirection: {
              xs: "column",
              md: "row"
            }
          }}>

            <Box sx={{ flexBasis: "45%", flexGrow: 1, display: "flex", gap: "20px", flexDirection: "column", boxShadow: "4px 5px 15px rgba(200, 200, 200, 0.61)", padding: "20px", borderRadius: "10px" }}>

              <Typography sx={{
                fontSize: "20px",
                fontWeight: "500",
                lineHeight: "30px",
                color: "#A0A4A9"
              }}>
                Total Analyzed
              </Typography>
              <Typography sx={{
                color: "#190247",
                fontSize: "40px",
                lineHeight: "50px",
                fontWeight: "600"
              }}>
                {numberOfAnalyzed} Analyzed
              </Typography>

            </Box>

            <Box
              onClick={() => navigate("/analyze")}
              sx={{
                flexBasis: "45%", cursor: "pointer", flexGrow: 1, justifyContent: "center", display: "flex", gap: "20px", flexDirection: "column",
                background: `linear-gradient(rgba(27, 2, 75, .1), rgba(27, 2, 75, .1)), url(${bg})`,
                boxShadow: "4px 5px 15px rgba(200, 200, 200, 0.61)", padding: "20px", borderRadius: "10px"
              }}>

              <Typography sx={{
                fontSize: "30px",
                fontWeight: "600",
                lineHeight: "45px",
                color: "white",
                textAlign: "center"
              }}>
                Let’s Analyze
              </Typography>

            </Box>
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
      )}
    </>
  );
};

export default Home;
