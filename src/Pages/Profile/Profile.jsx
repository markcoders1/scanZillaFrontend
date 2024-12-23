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
import editIcon from '../../assets/images/edit.png'

const Profile = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [open, setOpen] = useState(false);
  const [numberOfAnalyzed, setNumberOfAnalyzed] = useState(null);

  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  console.log(auth)

  useEffect(() => {



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
        message: error.response.data.message,

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
            height:"70vh",
            overflowY: "auto",
            overflowX: "hidden",
            padding: "20px 15px",
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
                <ProfileCard title=" Name" name={auth.userName} iconToSHow={true} />
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
                <ProfileCard title="Email" name={auth?.email} />
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
                    // border: "2px solid red",
                  display:"none"
                  }}
                  // onClick={handleNavigate}
                >
                  <Customcard name={username} cardStyle={{ height: "180px" }} />
                </Box>
                <Box
                  sx={{
                    flexGrow: 1,
                    // display:"none"
                    // mb:"20px"
                  }}
                >
                  <DetailedCard
                    title="Total Analyzed"
                    detailedCardStyles={{ justifyContent: "center" }}
                    name={numberOfAnalyzed}
                    action=""
                  />
                </Box>
              </Box>
            </Box>
          </Box>

          {/* <Box
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
          ></Box> */}
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
