import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axiosInstance from "../../Hooks/useQueryGallery/AuthHook/AuthHook";
import CustomButton from "../../Components/CustomButton/CustomButton";
import DetailedCard from "../../Components/DetailedCard/DetailedCard";
import CreditsHistory from "../../Components/CreditsHistory/CreditsHistory";
import SwitchCheckBox from "../../Components/SwitchCheckBox/SwitchCheckBox";
import SnackAlert from "../../Components/SnackAlert/SnackAlert";
import LoaderMain from "../../Components/Loader/LoaderMain";
import bg from "./../../assets/images/bg.png";
import dashboardImg1 from "../../assets/images/dashboard.png";
import CreditCard from "../../Components/CustomCreditCard/CustomCreditCard";
import CustomCard from "../../Components/Customcard/Customcard";
import { useDispatch } from "react-redux";
import { handleSnackAlert } from "../../Redux/Slice/SnackAlertSlice/SnackAlertSlice";
import CustomSelect from "../../Components/CustomSelect/CustomSelect";
import { PiSuitcaseSimpleBold } from "react-icons/pi";


const appUrl = import.meta.env.VITE_REACT_APP_API_URL;

const Credits = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [autoCreditsAmount, setAutoCreditsAmount] = useState([]);
  const [inputValue, setInputValue] = useState(auth.preferredCredits);
  const [inputToggle, setInputToggle] = useState(null);
  const dispatch = useDispatch();
  const [snackAlertData, setSnackAlertData] = useState({
    message: "",
    severity: "success",
    open: false,
  });
  const [creditsHistory, setCreditsHistory] = useState([]);
  const [credits, setCredits] = useState(null);

  const [autoCreditsUi, setAutoCreditsUi] = useState(true);

  useEffect(() => {
    setUsername(auth.username);
    setEmail(auth.email);
  }, [auth]);

  const handleNavigate = async (variant, price, planName) => {
    const response = await axiosInstance({
      url: appUrl + "/buycredits",
      method: "post",
      data: {
        email: email,
        variant: variant,
      },
    });
    navigate(`/payments?price=${price}&plan=${planName}`);
    localStorage.setItem("clientSecret", response.data.clientSecret);
  };

  const handleNavigateToContact = (variant) => {
    navigate('/support', { state: { variant } });
  };

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
            message: response?.data?.message,
            severity: "error",
          });
        }
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setSnackAlertData({
        open: true,
        message: error.response.data.message,
        severity: "error",
      });
    }
  };

  const fetchOffers = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance({
        url: `${appUrl}/offers`,
        method: "get",
      });
      setLoading(false);
      console.log("Offers",response.data)

      setAutoCreditsAmount(
        response.data.offers
          .filter((e) => e.variant > 0)
          .sort((a, b) => a.variant - b.variant)
      );
    } catch (error) {
      console.error(error);
    }
  };

  const fetchCredits = async () => {
    setSnackAlertData({
      open: false,
      message: "",
      severity: "success",
    });
    try {
      setLoading(true);
      const response = await axiosInstance({
        url: appUrl + "/getuser",
        method: "get",
        params: { email: auth.email },
      });
      setLoading(false);
      if (response) {
        const userData = response.data.user;
        setCredits(userData.credits);
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
        message: error.response.data.message,

        severity: "error",
      });
    }
  };

  const WarningToBuyCredits = () => {
    if (credits < 30) {
      dispatch(
        handleSnackAlert({
          open: true,
          message: "Your Credits are Low",
          severity: "error",
        })
      );
      console.log("hi");
    }
  };
  const handleChange = (e) => {
    const value = Number(e.target.value);
    if (value >= 1) {
      setInputValue(value);
    } else {
      setInputValue(1); // set to minimum value 1 if input is less than 1
    }
  };

  useEffect(() => {
    fetchCreditsHistory();
    fetchOffers();
    fetchCredits();
    // WarningToBuyCredits();
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
        <Box
          sx={{
            display: "flex",
            gap: "2.2rem",
            marginTop: "10px",
            // border:"2px solid red",
            height: "70vh",
            flexDirection: {
              md: "column",
              xs: "column",
            },
            overflowY: "auto",
            overflowX: "hidden",
            padding: "20px 15px",
            "&::-webkit-scrollbar": {
              width: "8px",
            },
            "&::-webkit-scrollbar-track": {
              background: "#DFDFDF",
              borderRadius: "10px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "black",
              borderRadius: "10px",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              background: "#b30000",
            },
            // zIndex:"-1"
            backgroundColor: "transparent",
          }}
        >
          <Box
            sx={{
              flexBasis: "50%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "20px",
                    flexDirection: {
                      sm: "row",
                      xs: "column",
                    },
                  }}
                >
                  {autoCreditsAmount.map((e, i) => (
                    <CreditCard
                      key={i}
                      title={e?.name}
                      price={ i === 3 ? "": e?.amount / 100}
                      credits={e?.credits}
                      handleNavigate={() => handleNavigateToContact(e?.variant)}
                      variant={e?.variant}
                      planName={e?.name}
                      buttonText={e?.buttonText}
                      desc={e?.description}
                      visibility={i == 3 ? "hidden": "visible"}
                    />
                  ))}
                  {/* <CreditCard
                                        title="Pro"
                                        price={30}
                                        credits={50}
                                        handleNavigate={handleNavigate}
                                        variant={2}
                                        planName="Pro"
                                    />
                              
                                    <CreditCard
                                        title="Enterprise"
                                        price={50}
                                        credits={100}
                                        handleNavigate={handleNavigate}
                                        variant={3}
                                        planName="Enterprise"
                                    /> */}
                  <Box
                    sx={{
                      flexBasis: {
                        md: "218px",
                      },
                      borderRadius: "10px",
                      height: "342px",
                      flexGrow: "1",
                      flexShrink: "1",
                      minWidth: "25%",
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                    }}
                  >
                    <Box
                      sx={{
                        flexBasis: "50%",
                      }}
                    >
                      <DetailedCard
                        title="Total Credits"
                        detailedCardStyles={{
                          justifyContent: "start",
                          alignItems: "start",
                          fontSize: "65px",
                        }}
                        name={credits?.toLocaleString()}
                        action=""
                        nameStyles={{
                          fontSize: "40px",
                          marginTop: "10px",
                        }}
                      />
                    </Box>
                    {autoCreditsUi ? (
                      <Box
                        sx={{
                          height: "50%",
                         
                          borderRadius: "10px",
                          flexGrow: "1",
                          backgroundImage: auth.autocharge
                            ? `linear-gradient(rgba(53, 1, 88, .8), rgba(53, 1, 88, .8)), url(${dashboardImg1})`
                            : "",
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                          padding: "24px 23px",
                          position: "relative",
                          flexBasis: "50%",
                          boxShadow: auth.autocharge
                            ? ""
                            : "4px 5px 15px 0px #C8C8C8",
                        }}
                      >
                        <Typography
                          sx={{
                            fontWeight: "600",
                            fontSize: "27px",
                            color: auth.autocharge ? "#fff " : "#190247",
                          }}
                        >
                          Auto Credits
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: "600",
                            fontSize: "23px",
                            color: auth.autocharge ? "#fff " : "#190247",
                          }}
                        >
                          Coming Soon..
                        </Typography>
                      </Box>
                    ) : (
                      <Box
                        sx={{
                          height: "50%",
                         
                          borderRadius: "10px",
                          flexGrow: "1",
                          backgroundImage: auth.autocharge
                            ? `linear-gradient(rgba(53, 1, 88, .8), rgba(53, 1, 88, .8)), url(${dashboardImg1})`
                            : "",
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                          padding: "24px 23px",
                          position: "relative",
                          flexBasis: "50%",
                          boxShadow: auth.autocharge
                            ? ""
                            : "4px 5px 15px 0px #C8C8C8",
                        }}
                      >
                        <Box
                          sx={{
                            position: "absolute",
                            right: "10px",
                            top: "15px",
                          }}
                        >
                          <SwitchCheckBox
                            theme="alternate"
                            inputValue={inputValue}
                          />
                        </Box>
                        <Typography
                          sx={{
                            fontWeight: "600",
                            fontSize: "27px",
                            color: auth.autocharge ? "#fff " : "#190247",
                          }}
                        >
                          Auto
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: "600",
                            fontSize: "27px",
                            color: auth.autocharge ? "#fff " : "#190247",
                          }}
                        >
                          Credits
                        </Typography>
                        <Typography
                          sx={{
                            position: "absolute",
                            bottom: "10px",
                            right: "20px",
                          }}
                        >
                          <input
                            type="number"
                            style={{
                              width: "50px",
                              height: "32px",
                              
                              outline: "none",
                              borderRadius: "5px",
                              fontWeight: "600",
                              color: "#190247",
                              textAlign: "center",
                              paddingLeft: "8px",
                              fontSize: "18px",
                              border: auth.autocharge
                                ? ""
                                : "1px solid #190247",
                            }}
                            value={inputValue}
                            onChange={handleChange}
                            min={"0"}
                          />
                        </Typography>
                      </Box>
                    )}
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
                boxShadow: "4px 5px 15px 0px #C8C8C8",
                borderRadius: "10px",
                flexShrink: "1",
                height: "495px",
              }}
            >
              <Typography
                sx={{
                  color: "#333333",
                  fontWeight: "600",
                  fontSize: "27px",
                }}
              >
                Credits History
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2.6rem",
                  height: "280px",
                  padding: "0px 30px 0px 0px",
                  overflowY: "scroll",
                  "&::-webkit-scrollbar": {
                    width: "8px",
                  },
                  "&::-webkit-scrollbar-track": {
                    background: "#DFDFDF",
                    borderRadius: "10px",
                  },
                  "&::-webkit-scrollbar-thumb": {
                    background: "black",
                    borderRadius: "10px",
                  },
                  "&::-webkit-scrollbar-thumb:hover": {
                    background: "#b30000",
                  },
                }}
              >
                {loading
                  ? "loading..."
                  : creditsHistory?.length === 0
                  ? "You have not any history yet"
                  : creditsHistory.map((item, index) => (
                      <CreditsHistory item={item} key={index} index={index} />
                    ))}
              </Box>
              <Box>
                <Typography
                  sx={{
                    p: "0px 24px 0px 0px",
                  }}
                >
                  <NavLink to="/history">
                    <Button
                      sx={{
                        p: "15px 20px",
                        background:
                          "linear-gradient(to right, #1A0049, #41016C)",
                        width: "100%",
                        height: "46px",
                        borderRadius: "5px",
                        fontSize: {
                          xs: "14px",
                          sm: "18px",
                        },
                        fontWeight: "500",
                        textTransform: "none",
                        transition: "background 0.9s ease, color 0.4s ease",
                        "&:hover": {
                          background:
                            "linear-gradient(to right, #1G1947, #41016C)",
                          color: "white",
                        },
                        boxShadow: "none",
                      }}
                      variant="contained"
                    >
                      All Credits History
                    </Button>
                  </NavLink>
                </Typography>
              </Box>
            </Box>
            {/* <Box>
              <CustomCard cardStyle={{ height: "153px" }} />
            </Box> */}
          </Box>
          <SnackAlert
            message={snackAlertData.message}
            severity={snackAlertData.severity}
            open={snackAlertData.open}
            handleClose={() => {
              setSnackAlertData((prev) => ({ ...prev, open: false }));
            }}
          />
        </Box>
      )}
    </>
  );
};

export default Credits;
