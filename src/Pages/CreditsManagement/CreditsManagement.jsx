import React from 'react';
import { Box, Typography } from '@mui/material';
import checkImg from "../../assets/images/check.png";
import CustomButton from '../../Components/CustomButton/CustomButton';
import { useNavigate } from 'react-router-dom';

const CreditsManagement = () => {
  const navigate = useNavigate();

  const handleEditPackage = (planName, price, buttonText) => {
    navigate(`/credits-management/package-setting?planName=${planName}&price=${price}&buttonText=${buttonText}`);
  };

  return (
    <Box>
      <Box sx={{ display: "flex", gap: "2rem", flexWrap: "wrap", flexDirection: { xs: "column", sm: "row" } }}>
        <Box>
          <Box sx={{ flexBasis: { md: "218px" }, padding: "15px 16px 0px 16px", boxShadow: "4px 5px 15px 0px #C8C8C8", borderRadius: "10px", height: "322px" }}>
            <Typography sx={{ fontSize: "23px", color: "#333333", fontWeight: "600", width: "63px", margin: "auto" }}>
              Basic
            </Typography>
            <Box sx={{ marginTop: "15px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              {[...Array(3)].map((_, index) => (
                <Box key={index} sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <Typography>
                    <img src={checkImg} alt="" />
                  </Typography>
                  <Typography sx={{ fontSize: "11px" }}>
                    Lorem ipsum dolor sit
                  </Typography>
                </Box>
              ))}
            </Box>
            <Box sx={{ marginTop: "30px", width: "100%", textAlign: "center", display: "flex", flexDirection: "column", gap: "2px" }}>
              <Typography sx={{ fontSize: "45px", fontWeight: "600", color: "#333333", lineHeight: "40px" }}>
                $10
              </Typography>
              <Typography sx={{ fontSize: "10px", fontWeight: "500", color: "#333333" }}>
                per Month
              </Typography>
            </Box>
            <Box sx={{ margin: "auto", marginTop: "20px", display: "flex", justifyContent: "center" }}>
              <CustomButton border={"1px solid #333333"} borderRadius={"10px"} ButtonText={"Get Credits"} fontSize={"12px"} fontWeight={"500"} color={"#333333"} margin={"auto"} />
            </Box>
          </Box>
          <Typography
            sx={{ marginTop: "10px", fontSize: "13px", fontWeight: "500", textAlign: "center", textDecoration: "underline", color: "#333333", cursor: "pointer" }}
            onClick={() => handleEditPackage('Basic', 10, 'Get Credits')}
          >
            Edit Package
          </Typography>
        </Box>

        <Box>
          <Box sx={{ flexBasis: { md: "218px" }, padding: "15px 16px 0px 16px", boxShadow: "4px 5px 15px 0px #C8C8C8", borderRadius: "10px", height: "322px" }}>
            <Typography sx={{ fontSize: "23px", color: "#333333", fontWeight: "600", width: "63px", margin: "auto" }}>
              Pro
            </Typography>
            <Box sx={{ marginTop: "15px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              {[...Array(3)].map((_, index) => (
                <Box key={index} sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <Typography>
                    <img src={checkImg} alt="" />
                  </Typography>
                  <Typography sx={{ fontSize: "11px" }}>
                    Lorem ipsum dolor sit
                  </Typography>
                </Box>
              ))}
            </Box>
            <Box sx={{ marginTop: "30px", width: "100%", textAlign: "center", display: "flex", flexDirection: "column", gap: "2px" }}>
              <Typography sx={{ fontSize: "45px", fontWeight: "600", color: "#333333", lineHeight: "40px" }}>
                $30
              </Typography>
              <Typography sx={{ fontSize: "10px", fontWeight: "500", color: "#333333" }}>
                per Month
              </Typography>
            </Box>
            <Box sx={{ margin: "auto", marginTop: "20px", display: "flex", justifyContent: "center" }}>
              <CustomButton border={"1px solid #333333"} borderRadius={"10px"} ButtonText={"Get Credits"} fontSize={"12px"} fontWeight={"500"} color={"#333333"} margin={"auto"} />
            </Box>
          </Box>
          <Typography
            sx={{ marginTop: "10px", fontSize: "13px", fontWeight: "500", textAlign: "center", textDecoration: "underline", color: "#333333", cursor: "pointer" }}
            onClick={() => handleEditPackage('Pro', 30, 'Get Credits')}
          >
            Edit Package
          </Typography>
        </Box>

        <Box>
          <Box sx={{ flexBasis: { md: "218px" }, padding: "12px 16px 15px 16px", borderRadius: "10px", height: "322px", overflowY: "scroll", boxShadow: "4px 5px 15px 0px #C8C8C8" }}>
            <Typography sx={{ fontSize: "23px", color: "#333333", fontWeight: "600", margin: "auto", textAlign: "center" }}>
              Enterprise
            </Typography>
            <Box sx={{ marginTop: "15px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              {[...Array(9)].map((_, index) => (
                <Box key={index} sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <Typography>
                    <img src={checkImg} alt="" />
                  </Typography>
                  <Typography sx={{ fontSize: "11px" }}>
                    Lorem ipsum dolor sit
                  </Typography>
                </Box>
              ))}
            </Box>
            <Box sx={{ marginTop: "30px", width: "100%", textAlign: "center", display: "flex", flexDirection: "column", gap: "2px" }}>
              <Typography sx={{ fontSize: "45px", fontWeight: "600", color: "#333333", lineHeight: "40px" }}>
                $60
              </Typography>
              <Typography sx={{ fontSize: "10px", fontWeight: "500", color: "#333333" }}>
                per Month
              </Typography>
            </Box>
            <Box sx={{ margin: "auto", marginTop: "20px", display: "flex", justifyContent: "center" }}>
              <CustomButton border={"1px solid #333333"} borderRadius={"10px"} ButtonText={"Get Credits"} fontSize={"12px"} fontWeight={"500"} color={"#333333"} margin={"auto"} />
            </Box>
          </Box>
          <Typography
            sx={{ marginTop: "10px", fontSize: "13px", fontWeight: "500", textAlign: "center", textDecoration: "underline", color: "#333333", cursor: "pointer" }}
            onClick={() => handleEditPackage('Enterprise', 60, 'Get Credits')}
          >
            Edit Package
          </Typography>
        </Box>
      </Box>
      <Box>
        <Box sx={{ width: { sm: "335px", xs: "100%" }, height: "171px", display: "flex", flexDirection: "column", paddingLeft: "26px", gap: "-10px", marginTop: "30px", boxShadow: "4px 5px 15px 0px #C8C8C8", justifyContent: "center" }}>
          <Typography sx={{ fontSize: "45px", fontWeight: "600", color: "#333333" }}>
            05 Credits
          </Typography>
          <Typography sx={{ fontSize: "20px", fontWeight: "500", color: "#A0A4A9" }}>
            Per Analysis
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CreditsManagement;
