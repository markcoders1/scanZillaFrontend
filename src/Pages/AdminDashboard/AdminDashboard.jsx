import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import DashboardCard from "../../Components/DashboardCard/DashboardCard";
import axiosInstance from "../../Hooks/useQueryGallery/AuthHook/AuthHook";
import LoaderMain from "../../Components/Loader/LoaderMain";
import Chart from "../../Components/Chart/Chart";

const appUrl = import.meta.env.VITE_REACT_APP_API_URL;

const AdminDashboard = () => {
  const [totalUsers, setTotalUsers] = useState();
  const [loading, setLoading] = useState();
  const [totalIncome, setTotalIncome] = useState();
  const [username, setUsername] = useState();

  const [bullets, setBullets] = useState([]);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [credits, setCredits] = useState();
  const [analysisGraph, setAnalysisGraph] = useState([]);
  const [totalIncomeGraph, setTotalIncomeGraph] = useState([]);
  const [hoveredIncomeValue, setHoveredIncomeValue] = useState(null);
  const [hoveredAnalysisValue, setHoveredAnalysisValue] = useState(null);

  const getAllUser = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance({
        url: appUrl + "/gettotalusers",
        method: "get",
      });
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
        url: appUrl + "/getincome",
        method: "get",
      });
      setTotalIncome(response.data.value);
      setTotalIncomeGraph(response.data.result);
      console.log(response.data.result);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getAnalysisGraph = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance({
        url: appUrl + "/analysisgraph",
        method: "get",
      });
      setAnalysisGraph(response.data);
      console.log(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUser();
    getTotalIncome();
    getAnalysisGraph();
  }, []);

  // Function to convert cents to dollars
  const convertCentsToDollars = (cents) => cents / 100;

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
              <DashboardCard
                title="Total Payment this Month"
                text={totalIncome}
              />
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
              mt: "50px",
              display: "flex",
              gap: "2rem",
              flexDirection: {
                md: "row",
                xs: "column",
              },
            }}
          >
            <Box
              sx={{
                flexBasis: "50%",
                boxShadow: "4px 5px 15px 0px #C8C8C8",
                padding: "50px 20px 20px 20px",
                borderRadius: "10px",
                position: "relative"
              }}
            >
              <Typography
                sx={{
                  position: "absolute",
                  top: "20px",
                  left: "20px",
                  color:"",
                  fontWeight:"500",
                  fontSize:"18px"
                }}
              >
                {hoveredIncomeValue !== null ? `$${hoveredIncomeValue} Dollars` : "$400 Dollars"}
              </Typography>
              <Box>
                <Chart data={totalIncomeGraph} xKey="createdAt" yKey="amount" yFormatter={convertCentsToDollars} setHoveredValue={setHoveredIncomeValue} />
              </Box>
            </Box>
            <Box
              sx={{
                flexBasis: "50%",
                boxShadow: "4px 5px 15px 0px #C8C8C8",
                padding: "50px 20px 20px 0px",
                borderRadius: "10px",
                position: "relative"
              }}
            >
              <Typography
                sx={{
                  position: "absolute",
                  top: "20px",
                  left: "35px",
                  color:"#171717",
                  fontWeight:"500",
                  fontSize:"18px"
                }}
              >
                {hoveredAnalysisValue !== null ? `${hoveredAnalysisValue} Analysis` : "Analysis Data"}
              </Typography>
              <Box>
                <Chart data={analysisGraph} xKey="date" yKey="analysis" setHoveredValue={setHoveredAnalysisValue} />
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default AdminDashboard;
