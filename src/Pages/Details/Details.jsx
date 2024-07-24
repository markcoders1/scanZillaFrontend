import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../Hooks/useQueryGallery/AuthHook/AuthHook";
import { Box, Typography } from "@mui/material";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";
import GiftCard from "../../Components/GiftCard/GiftCard";
import CreditsHistory from "../../Components/CreditsHistory/CreditsHistory";
import { ViewDetailModal } from "../../Components/ViewDetailModal/ViewDetailModal";
import SnackAlert from "../../Components/SnackAlert/SnackAlert";
import Heading from "../../Components/Heading/Heading";
import CustomInputShadow from "../../Components/CustomInputShadow/CustomInputShadow";
import CustomButton from "../../Components/CustomButton/CustomButton";
import LoaderMain from "../../Components/Loader/LoaderMain";
import { useDispatch } from "react-redux";
import { handleSnackAlert } from "../../Redux/Slice/SnackAlertSlice/SnackAlertSlice";

const appUrl = import.meta.env.VITE_REACT_APP_API_URL;

const Details = () => {
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [creditsHistory, setCreditsHistory] = useState([]);
  const [analyzeHistory, setAnalyzeHistory] = useState([]);
  const [userData, setUserData] = useState([]);
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const [snackAlertData, setSnackAlertData] = useState({
    message: "",
    severity: "success",
    open: false,
  });

  const [data, setData] = useState({
    sendCredits: "",
  });

  const [errors, setErrors] = useState({
    sendCredits: "",
  });

  const handleInput = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = async () => {
    if (data.sendCredits === "") {
      setErrors({ sendCredits: "You have not entered credits" });
    } else {
      setData("")
      console.log(data.sendCredits);

      try {
        setLoading(true);
        const response = await axiosInstance({
          url: `${appUrl}/givecredits`,
          method: "post",
          body: {
            userId: id,
            credits: data.sendCredits,
          },
        });
        console.log(response)
       tUserData(response.data);
      } catch (error) {
        // setError(error.toString());
    
      } finally {
        setLoading(false);
      }
    }
  };

  const handlekeydown = (e) => {
    if (e.key === "Enter") {
      handleSave();
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance({
          url: `${appUrl}/getspecificUser`,
          method: "get",
          params: {
            id: id,
          },
        });
        setUserData(response.data);
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [id]);

  const openModal = (data) => {
    setModalData(data);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setModalData({});
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
        url: appUrl + "/gethistory",
        method: "get",
        params: {
          userId: id,
        },
      });
      console.log(response);
      setLoading(false);
      if (response) {
        setCreditsHistory(response.data);
        setSnackAlertData({
          open: true,
          message: response.data.message,
          severity: "success",
        });
        if (response.code > 200) {
          setSnackAlertData({
            open: true,
            message: response.message,
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
        url: appUrl + "/getuserpurchases",
        method: "get",
        params: {
          userId: id,
        },
      });
      console.log(response);
      if (response) {
        setAnalyzeHistory(response.data.payments);
        setSnackAlertData({
          open: true,
          message: response.data.message,
          severity: "success",
        });
        if (response.code > 200) {
          setSnackAlertData({
            open: true,
            message: response.message,
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
        <Box>
          <Box
            sx={{
              position: "relative",
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  sm: "40px",
                  xs: "28px",
                },
                fontWeight: "600",
                position: "absolute",
                top: "-70px",
              }}
            >
              {userData.userName} Profile
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: "2rem",
                marginTop: {
                  sm: "70px",
                  xs: "65px",
                },
                flexDirection: {
                  lg: "row",
                  xs: "column",
                },
              }}
            >
              <Box
                sx={{
                  flexBasis: "28%",
                  flexGrow: "1",
                }}
              >
                <ProfileCard title="Name" name={userData.userName} />
              </Box>
              <Box
                sx={{
                  flexBasis: "44%",
                  flexGrow: "1",
                }}
              >
                <ProfileCard title="Email" name={userData.email} />
              </Box>
              <Box
                sx={{
                  flexBasis: "28%",
                  flexGrow: "1",
                }}
              >
                <ProfileCard title="No of Credits" name={userData.credits} />
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: "0.5rem",
              flexDirection: "column",
              marginTop: "30px",
            }}
          >
            <Heading Heading="Send Credits" />
            <Box
              sx={{
                position: "relative",
              }}
            >
              <CustomInputShadow
                ref={inputRef}
                handlekeydown={handlekeydown}
                error={errors.sendCredits}
                onChange={handleInput}
                name="sendCredits"
                value={data.sendCredits}
                rows={1}
                color={"blue"}
              />
              <Typography sx={{ position: "absolute", top: "10px", right: "20px" }} >
                <CustomButton
                  borderRadius="5px"
                  padding="4px 0px"
                  fontSize="12px"
                  ButtonText="Save"
                  width="90.43px"
                  color="white"
                  background="linear-gradient(to right, #1A0049, #3F016A)"
                  onClick={handleSave}
                />
              </Typography>

            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: "2rem",
              marginTop: "10px",
              flexDirection: {
                xs: "column",
                md: "row",
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
                height: "500px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "27px",
                  fontWeight: "600",
                  color: "#333333",
                }}
              >
                Analyze History
              </Typography>

              {loading
                ? "loading...."
                : creditsHistory.map((item, index) => (
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
                height: "500px",
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
              {loading && analyzeHistory.length < 1
                ? "loading..."
                : analyzeHistory.map((item, index) => (
                  <CreditsHistory item={item} key={index} index={index} />
                ))}
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
            handleClose={() => {
              setSnackAlertData((prev) => ({ ...prev, open: false }));
            }}
          />
        </Box>
      )}
    </>
  );
};

export default Details;
