import { Box, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import GiftCard from "../../Components/GiftCard/GiftCard";
import CreditsHistory from "../../Components/CreditsHistory/CreditsHistory";
import SnackAlert from "../../Components/SnackAlert/SnackAlert";
import axiosInstance from "../../Hooks/useQueryGallery/AuthHook/AuthHook";
import { ViewDetailModal } from "../../Components/ViewDetailModal/ViewDetailModal";
import LoaderMain from "../../Components/Loader/LoaderMain";

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
        message: error.response.data.message,

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
        params: {
          limit: 100,
        },
      });
      console.log(response);
      if (response) {
        setAnalyzeHistory(response?.data?.Histories);
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
        message: error.response.data.message,
        severity: "error",
      });
    }
  };

  useEffect(() => {
    fetchCreditsHistory();
    fetchAnalyzeHistory();
  }, []);

  const openModal = (data) => {
    console.log("view button clicked",data)
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
          }}
        >
          <LoaderMain />
        </Box>
      ) : (
        <Box
          sx={{
            marginTop: "15px",
            display: "flex",
            gap: {
              lg: "2.2rem",
              xs: "1rem",
            },
            height: "70vh",

            flexDirection: {
              lg: "row",
              xs: "column",
            },
            overflowY: "auto",
            // overflowX: "hidden",
            padding: { sm: "20px 15px", xs: "5px 8px" },
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
          <Box
            sx={{
              marginTop: "15px",
              display: "flex",
              gap: "1.8rem",
              flexBasis: "50%",
              padding: { sm: "24px 30px", xs: "14px 20px" },
              borderRadius: "10px",
              flexDirection: "column",
              maxHeight: "680px",
              overflow: "auto",
              // overflowX:"hidden",
              // border:"2px solid red",
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
            }}
          >
            <Typography
              sx={{
                fontSize: { sm: "27px", xs: "22px" },
                fontWeight: "600",
                color: "#333333",
              }}
            >
              Analysis History
            </Typography>

            {analyzeHistory.length < 1 ? (
              <Typography>You have not analyzed yet</Typography>
            ) : (
              analyzeHistory?.map((item, index) => (
                <GiftCard
                  key={item?._id}
                  id={item?._id}
                  title={item?.title}
                  description={item?.description}
                  bullets={item?.bullets}
                  index={index}
                  openModal={openModal}
                  error={item?.error}
                  keywords={item?.keywords}
                  reccomendations={item?.reccomendations}
                />
              ))
            )}
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
            }}
          >
            <Typography
              sx={{
                fontSize: { sm: "27px", xs: "22px" },

                fontWeight: "600",
                color: "#333333",
              }}
            >
              Credits History
            </Typography>
            {analyzeHistory.length < 1 ? (
              <Typography>You do not have any credit history yet</Typography>
            ) : (
              analyzeHistory.map((item, index) => (
                <CreditsHistory item={item} key={index} index={index} />
              ))
            )}
          </Box>

          <ViewDetailModal
          key={modalData.id}
            open={open}
            handleClose={handleClose}
            title={modalData.title}
            bullets={modalData.bullets}
            description={modalData.description}
            error={modalData.error}
            keywords={modalData.keywords}
            reccomendations={modalData?.reccomendations}
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

export default History;
