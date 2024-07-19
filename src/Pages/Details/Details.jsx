import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../Hooks/useQueryGallery/AuthHook/AuthHook";
import { Box, Typography, CircularProgress } from "@mui/material";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";
import GiftCard from "../../Components/GiftCard/GiftCard";
import CreditsHistory from "../../Components/CreditsHistory/CreditsHistory";

const appUrl = import.meta.env.VITE_REACT_APP_API_URL;

const Details = () => {
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [creditsHistory, setCreditsHistory] = useState([]);
  const [analyzeHistory, setAnalyzeHistory] = useState([]);
  const [userData, setUserData] = useState([]);

  const [snackAlertData, setSnackAlertData] = useState({
    message: "",
    severity: "success",
    open: false,
  });

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axiosInstance({
          url: `${appUrl}/getspecificuser`,
          method: "get",
          params: {
            id: id,
          },
        });
        console.log(response.data);
        setUserData(response.data);
      } catch (error) {
        setError(error.toString());
        console.log("error,", error);
        console.log(`${appUrl}/getUser/${id}`);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [id]);



  //   if (loading) {
  //     return (
  //       <Box
  //         sx={{
  //           display: 'flex',
  //           justifyContent: 'center',
  //           alignItems: 'center',
  //           height: '100vh',
  //         }}
  //       >
  //         <CircularProgress />
  //       </Box>
  //     );
  //   }

  //   if (error) {
  //     return (
  //       <Box
  //         sx={{
  //           display: 'flex',
  //           justifyContent: 'center',
  //           alignItems: 'center',
  //           height: '100vh',
  //         }}
  //       >
  //         <Typography variant="h6" color="error">
  //           {error}
  //         </Typography>
  //       </Box>
  //     );
  //   }

  // const fetchCreditsHistory = async () => {
  //   setSnackAlertData({
  //     open: false,
  //     message: "",
  //     severity: "success",
  //   });
  //   try {
  //     setLoading(true);
  //     const response = await axiosInstance({
  //       url: appUrl + "/getpurchasehistory",
  //       method: "get",
  //     });
  //     setLoading(false);
  //     if (response) {
  //       setCreditsHistory(response?.data?.payments);
  //       setSnackAlertData({
  //         open: true,
  //         message: response?.data?.message,
  //         severity: "success",
  //       });
  //       if (response?.code > 200) {
  //         setSnackAlertData({
  //           open: true,
  //           message: response?.message,
  //           severity: "error",
  //         });
  //       }
  //     }
  //   } catch (error) {
  //     setLoading(false);
  //     setSnackAlertData({
  //       open: true,
  //       message: error.toString(),
  //       severity: "error",
  //     });
  //   }
  // };
  // const fetchAnalyzeHistory = async () => {
  //   setSnackAlertData({
  //     open: false,
  //     message: "",
  //     severity: "success",
  //   });
  //   try {
  //     const response = await axiosInstance({
  //       url: appUrl + "/getuserhistory",
  //       method: "get",
  //     });
  //     if (response) {
  //       setAnalyzeHistory(response.data.Histories);
  //       setSnackAlertData({
  //         open: true,
  //         message: response?.data?.message,
  //         severity: "success",
  //       });
  //       if (response?.code > 200) {
  //         setSnackAlertData({
  //           open: true,
  //           message: response?.message,
  //           severity: "error",
  //         });
  //       }
  //     }
  //   } catch (error) {
  //     setLoading(false);
  //     setSnackAlertData({
  //       open: true,
  //       message: error.toString(),
  //       severity: "error",
  //     });
  //   }
  // };
  useEffect(() => {
    // fetchCreditsHistory();
    // fetchAnalyzeHistory()
  }, []);

  return (
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
            // border: "2px solid red"
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
            <ProfileCard title="Credits" name={userData.credits} />
          </Box>
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
          {/* 
          {loading ? "loading...." : analyzeHistory.map((item, index) => (
            <GiftCard
              key={item._id}
              id={item._id}
              title={item.title}
              description={item.description}
              bullets={item.bullets}
              index={index}
            // openModal={openModal}
            />
          ))} */}
          {/* <GiftCard /> */}
         
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
          {/* {loading && creditsHistory.length < 1 ? "loading..." : creditsHistory.map((item, index) => (
            <CreditsHistory item={item} key={index} index={index} />
          ))} */}
           {/* <CreditsHistory  /> */}
        </Box>
      </Box>
    </Box>
  );
};

export default Details;
