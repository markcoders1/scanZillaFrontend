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
import { handleSnackAlert } from "../../Redux/Slice/SnackAlertSlice/SnackAlertSlice";

const appUrl = import.meta.env.VITE_REACT_APP_API_URL;

const Home = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [credits, setCredits] = useState(0);
  const [numberOfAnalyzed, setNumberOfAnalyzed] = useState(null);
  const [analyzeHistory, setAnalyzeHistory] = useState([]);
  const [graphdata, setGraphdata] = useState([])
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
          params: { email: auth?.email },
        });

        const userData = response?.data?.user;
        setUsername(userData?.userName);
        setEmail(userData?.email);
        setCredits(userData?.credits);

        dispatch(handleAuth({ credits: userData?.credits }));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false);
      }
    };

    if (auth.email) {
      fetchUser();
      console.log(auth)
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
        const histories = response?.data?.Histories?.slice(0, 4);
        setAnalyzeHistory(histories);
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

    }
  };

  const fetchGraphData = async () => {
    const response = await axiosInstance({
      url: `${appUrl}/getgraphdata`,
      method: "get",
    })
    setGraphdata(response?.data)
  }

  const WarningToBuyCredits = () => {
    if (credits < 30) {
      dispatch(handleSnackAlert({ open: true, message: "Your Credits are Low", severity: "error" }));
      console.log("hi")
    }
  }

  useEffect(() => {
    fetchAnalysed();
    fetchAnalyzeHistory();
    // fetchGraphData()
    // WarningToBuyCredits()
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
            display: "flex",
            height: "70vh",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column"
          }}
        >
          <LoaderMain />

        </Box>
      ) : (
        <Box sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row"
          },
          gap: "30px",
          // border: "2px solid red",

        }}>

          <Box sx={{
            display: "flex",
            flexDirection: "column",
            gap: {
              md: "30px",
              xs: "30px"
            },
            flexGrow: 1,
            flexBasis: {
              md: "50%",
              xs: "100%"
            },
            // border: "2px solid black",


            flexShrink: 1,
          }}>

            <Box sx={{

              flexGrow: 2,
              flexShrink: "1",
              height: "150px",
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
              flexShrink: "1",
              cursor: "pointer"
            }}
              onClick={() => navigate("/credits")}>

              <Box sx={{
                boxShadow: "4px 5px 15px rgba(200, 200, 200, 0.61)",

                padding: {
                  sm: "19px 26px",
                  xs: "20px 10px"
                },
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                height: "212px",
                justifyContent: "center",
                // gap: "20px",
                '&:hover': {
                  boxShadow: "4px 5px 20px rgba(200, 200, 200, 0.9)", // Change this value to whatever effect you desire
                  backgroundColor: "#edecec"
                }
              }}>

                <Typography sx={{

                  color: "#333333",
                  fontWeight: "600",
                  fontSize: "27px",
                  lineHeight: "30px",
                  letterSpacing: "0.34px"
                }}>
                  Total Credits
                </Typography>

                <Typography sx={{
                  mt: "20px",
                  fontWeight: "600",
                  fontSize: "80px",
                  lineHeight: "65px",
                  color: "#190247",
                  letterSpacing: "0.67px"
                }}>
                  {credits}
                </Typography>

                {
                  credits <= 10 ? (
                    <Box sx={{
                      mt: "10px",
                      fontWeight: "600",
                      fontSize:{
                        md:"14px",
                        lg:"16px",
                        xs:"13px"
                      },
                      // lineHeight: "65px",
                      color: "#ffff",
                      letterSpacing: "0.67px",
                      backgroundColor: "#D32F2F",
                      p: "10px 20px",
                      borderRadius: "5px",
                      display: "flex",
                   
                    }}>
                      You have low credits<Typography sx={{
                        color: "white",
                        backgroundColor: "#1F044C",
                        ml: "20px",
                        display: "flex",
                        fontSize: "10px",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "5px 10px",
                        borderRadius: "5px",
                        '&:hover': {
                          boxShadow: "4px 5px 20px rgba(200, 200, 200, 0.9)", // Change this value to whatever effect you desire
                          backgroundColor: "blue"
                        }
                      }} > Buy Now</Typography>
                    </Box>
                  ) : ""
                }


              </Box>
            </Box>


            {/* <Box sx={{
                maxHeight: "400px",
                minHeight: "350px",
                boxSizing: "border-box",
                boxShadow: "4px 5px 15px rgba(200, 200, 200, 0.61)",
                padding: "20px", borderRadius: "10px"
              }}>
                <CustomChart data={graphdata} />
              </Box> */}
            <Box sx={{
              flexBasis: "254px",
              flexGrow: 1,
              display: "flex",
              gap: "20px",
              flexDirection: "column",
              boxShadow: "4px 5px 15px rgba(200, 200, 200, 0.61)",
              padding: "20px",
              borderRadius: "10px",
              justifyContent: "center",
              paddingLeft: "26px"
            }}>

              {/* <Typography sx={{
                  fontSize: "20px",
                  fontWeight: "500",
                  lineHeight: "30px",
                  color: "#A0A4A9"
                }}>
                  Total Analyzed
                </Typography> */}
              <Typography sx={{
                color: "#190247",
                fontSize: "40px",
                lineHeight: "50px",
                fontWeight: "600"
              }}>
                {numberOfAnalyzed} Analyzed <br />
                So far
              </Typography>

            </Box>
          </Box>




          <Box sx={{
            display: "flex",
            gap: "40px",
            flexDirection: {
              xs: "column",
              md: "column"
            },
            flexBasis: {
              md: "50%",
              xs: "100%"
            },
            // border: "2px solid red"
          }}>

            <Box
              sx={{
                flexBasis: {
                  md: "70%",
                },
                flexShrink: 0,
                flexGrow: 1,
                height: "450px",
                p: "30px 30px 30px 30px",
                display: "flex",
                flexDirection: "column",
                gap: "40px",
                boxShadow: "4px 5px 15px rgba(200, 200, 200, 0.61)",
                borderRadius: "10px",
                position: "relative",
                // border: "2px solid red"
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
                gap: "40px",
                borderRadius: "10px",
                paddingRight: "10px"
              }}>

                {
                  analyzeHistory.length < 1 ? (
                    <Box>
                      You Have Not Analyzed Yet
                    </Box>
                  ) : (
                    analyzeHistory.map((item, index) => (
                      <GiftCard
                        key={item._id}
                        id={item._id}
                        title={item.title}
                        description={item.description}
                        bullets={item.bullets}
                        error={item.error}
                        index={index}
                        openModal={openModal}
                        keywords ={item.keywords}
                      />
                    ))
                  )
                }
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  bottom: "30px",
                  width: "90%",
                  left: "0px",
                  right: "0px",
                  margin: "auto"
                }}
              >
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
            error={modalData.error}
            keywords={modalData.keywords}
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
