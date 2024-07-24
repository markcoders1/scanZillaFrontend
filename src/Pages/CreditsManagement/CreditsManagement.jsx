import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import checkImg from "../../assets/images/check.png";
import CustomButton from "../../Components/CustomButton/CustomButton";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../Hooks/useQueryGallery/AuthHook/AuthHook";
import { useForm } from "react-hook-form";
import LoaderMain from "../../Components/Loader/LoaderMain";
import { useDispatch } from "react-redux";
import { handleSnackAlert } from "../../Redux/Slice/SnackAlertSlice/SnackAlertSlice";

const appUrl = import.meta.env.VITE_REACT_APP_API_URL;

const CreditsManagement = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [characterCost, setCharacterCost] = useState();
  const [creditCost, setCreditCost] = useState();
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const [offers, setOffers] = useState([]);
  const handleEditPackage = (planName, price, variant) => {
    navigate(
      `/credits-management/package-setting?planName=${planName}&price=${price}&variant=${variant}`
    );
  };
  

  const fetchRules = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance({
        url: `${appUrl}/rules`,
        method: "get",
      });
      setLoading(false);
      setCharacterCost(response.data.characterCost);
      setCreditCost(response.data.creditCost);
    } catch (error) {
      console.error(error);
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
      console.log(response.data.offers)
      setOffers(response.data.offers);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchRules();
    fetchOffers();
  }, []);

  const onSubmit = (data) => {
    const submitCharacterRules = async () => {
      try {
        const response = await axiosInstance({
          url: `${appUrl}/rules`,
          method: "post",
          data: {
            characterCost: data.characters,
            creditCost: data.credits,
          },
        });
        dispatch(handleSnackAlert({open:true,message:"Rules Updated Successfully",severity :"success"}))

        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };
    submitCharacterRules();
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
        <Box>
          <Box
            sx={{
              display: "flex",
              gap: "2rem",
              flexWrap: "wrap",
              flexDirection: { xs: "column", sm: "row" },
              // border:"2px solid red"
            }}
          >
            {offers.map((e, i) => (
              <Box key={i}>
                <Box
                  sx={{
                    // border:"2px solid red",
                    padding: "15px 16px 0px 16px",
                    boxShadow: "4px 5px 15px 0px #C8C8C8",
                    borderRadius: "10px",
                    height: "262px",
                    width:{
                      sm:"210px",
                      xs:"100%"
                    },
                    flexBasis: { md: "258px" },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "23px",
                      color: "#333333",
                      fontWeight: "600",
                      // width: "63px",
                      margin: "auto",
                      textAlign:"center"
                    }}
                  >
                    {e.name}
                  </Typography>
                  <Box
                    sx={{
                      marginTop: "15px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <Typography>
                        <img src={checkImg} alt="" />
                      </Typography>
                      <Typography sx={{ fontSize: "11px" }}>
                        {e.description}
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      marginTop: "30px",
                      width: "100%",
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                      gap: "2px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "45px",
                        fontWeight: "600",
                        color: "#333333",
                        lineHeight: "40px",
                      }}
                    >
                      ${e.amount/100}
                    </Typography>
                    <Typography
                      sx={{ fontSize: "10px", fontWeight: "500", color: "#333333" }}
                    >
                      per Month
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      margin: "auto",
                      marginTop: "20px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                   
                  </Box>
                </Box>
                <Typography
                  sx={{
                    marginTop: "10px",
                    fontSize: "13px",
                    fontWeight: "500",
                    textAlign: "center",
                    textDecoration: "underline",
                    color: "#333333",
                    cursor: "pointer",
                  }}
                  onClick={() => handleEditPackage(e.name, e.amount,e.variant)}
                >
                  Edit Package
                </Typography>
              </Box>
            ))}
          </Box>
          <Box>
            <Box
              sx={{
                height: {
                  md: "181px",
                  xs: "260px",
                },
                display: "flex",
                flexDirection: "column",
                paddingLeft: "26px",
                gap: "-10px",
                marginTop: "50px",
                boxShadow: "4px 5px 15px 0px #C8C8C8",
                justifyContent: "center",
                width: { xs: "100%", md: "630px" },
                borderRadius: "10px",
              }}
            >
              <form onSubmit={handleSubmit(onSubmit)}>
                <Box
                  sx={{
                    fontSize: { sm: "45px", xs: "30px" },
                    fontWeight: "600",
                    color: "#333333",
                    display: "flex",
                    flexDirection: { md: "row", xs: "column" },
                  }}
                >
                  <Box>
                    <input
                      type="text"
                      {...register("credits")}
                      style={{
                        width: "70px",
                        fontSize: "45px",
                        fontWeight: "600",
                        color: "#333333",
                        textAlign: "center",
                        border: "none",
                        outline: "none",
                        borderBottom: "1px solid #333333",
                      }}
                      placeholder={creditCost}
                    />{" "}
                    Credits{" "}
                  </Box>
                  <Box>
                    <input
                      type="text"
                      {...register("characters")}
                      style={{
                        width: "70px",
                        fontSize: "45px",
                        fontWeight: "600",
                        color: "#333333",
                        textAlign: "center",
                        border: "none",
                        outline: "none",
                        borderBottom: "1px solid #333333",
                      }}
                      placeholder={characterCost}
                    />{" "}
                    Characters
                  </Box>
                </Box>
                <Typography sx={{ fontSize: "20px", fontWeight: "500", color: "#A0A4A9" }}>
                  Per Analysis
                </Typography>
                <Typography
                  sx={{
                    mt: "10px",
                    display: "flex",
                    justifyContent: "end",
                    mr: "30px ",
                  }}
                >
                  <CustomButton
                    type="submit"
                    border={"1px solid #333333"}
                    borderRadius={"10px"}
                    ButtonText={"Save"}
                    fontSize={"15px"}
                    fontWeight={"500"}
                    color={"#ffff"}
                    margin={"auto"}
                    background={"linear-gradient(to right, #1A0049, #3F016A)"}
                    padding="5px 25px"
                    loading = {loading}
                  />
                </Typography>
              </form>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default CreditsManagement;
