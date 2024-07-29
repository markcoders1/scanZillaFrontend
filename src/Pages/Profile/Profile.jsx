import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";
import Heading from "../../Components/Heading/Heading";
import DetailedCard from "../../Components/DetailedCard/DetailedCard";
import Customcard from "../../Components/Customcard/Customcard";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ChangePasswordModal from "../../Components/ChangePasswordModal/ChangePasswordModal";
import SnackAlert from "../../Components/SnackAlert/SnackAlert";
import axiosInstance from "../../Hooks/useQueryGallery/AuthHook/AuthHook";
const appUrl = import.meta.env.VITE_REACT_APP_API_URL;
import LoaderMain from "../../Components/Loader/LoaderMain";

const Profile = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [open, setOpen] = useState(false);
  const [numberOfAnalyzed, setNumberOfAnalyzed] = useState(null);

  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(auth);

    console.log(auth.email);
    console.log(auth.username);

    setUsername(auth.userName);
    setEmail(auth.email);
  }, []);

  const handleNavigate = () => {
    navigate("/card-details");
  };

  const [snackAlertData, setSnackAlertData] = React.useState({
    message: "",
    severity: "success",
    open: false,
  });
  const [loading, setLoading] = useState(false);

  const fetchAnalysed = async () => {
    setSnackAlertData({
      open: false,
      message: "",
      severity: "success",
    });
    try {
      setLoading(true);
      const response = await axiosInstance({
        url: appUrl + "/getAnalysedNum",
        method: "get",
      });
      setLoading(false);
      if (response) {
        console.log(response);
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

  useEffect(() => {
    fetchAnalysed();
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
            gap: "50px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              flexBasis: {
                md: "606px",
                xs: "100%",
              },
              // backgroundColor:"red",
              flexGrow: 1,
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "40px",
                flexDirection: {
                  md: "row",
                  xs: "column",
                },
              }}
            >
              <Box
                sx={{
                  flexBasis: {
                    md: "250px",
                    xs: "100%",
                  },
                }}
              >
                <ProfileCard title=" Name" name={username} />
              </Box>
              <Box
                sx={{
                  flexBasis: {
                    md: "390px",
                    xs: "100%",
                  },
                  flexGrow: 1,
                }}
              >
                <ProfileCard title="Email" name={email} />
              </Box>
            </Box>

                

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                flexBasis: "190px",
                flexGrow: 1,
                gap: "10px",
                // border: "2px solid red"
              }}
            >
              <Heading Heading="Debit Card Detail" />
              <Box
                sx={{
                  display: "flex",
                  gap: "33px",
                  flexDirection: {
                    md: "row",
                    xs: "column",
                  },
                }}
              >
                <Box
                  sx={{
                    flexGrow: 3,
                    // cursor: "pointer"
                    // border: "2px solid red"
                  }}
                  // onClick={handleNavigate}
                >
                  <Customcard name={username} cardStyle={{ height: "180px" }} />
                </Box>
                <Box
                  sx={{
                    flexGrow: 1,
                  }}
                >
                  <DetailedCard
                    title="Total Analyze"
                    detailedCardStyles={{ justifyContent: "center" }}
                    name={numberOfAnalyzed}
                    action=""
                  />
                </Box>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              display: {
                xs: "none",
                xl: "unset",
              },
              background: "#D99DFD",
              borderRadius: "10px",
              flexBasis: "130px",
              flexShrink: 0,
              boxShadow: "4px 5px 15px rgba(200, 200, 200, 0.61)",
            }}
          ></Box>
          <ChangePasswordModal
            open={open}
            handleClose={() => {
              setOpen(false);
            }}
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

export default Profile;
