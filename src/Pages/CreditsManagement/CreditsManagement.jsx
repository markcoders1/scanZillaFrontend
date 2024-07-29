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
  const [loadingButton, setLoadingButton] = useState(false);
  const handleEditPackage = (planName, price, variant, credits) => {
    navigate(
      `/credits-management/package-setting?planName=${planName}&price=${price}&variant=${variant}&credits=${credits}`
    );
  };


  const fetchRules = async () => {
    try {

      const response = await axiosInstance({
        url: `${appUrl}/rules`,
        method: "get",
      });

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
        setLoadingButton(true)
        const response = await axiosInstance({
          url: `${appUrl}/rules`,
          method: "post",
          data: {
            characterCost: data.characters,
            creditCost: data.credits,
          },
        });
        setLoadingButton(false)
        dispatch(handleSnackAlert({ open: true, message: "Rules Updated Successfully", severity: "success" }))

        console.log(response);
      } catch (error) {
        console.error(error);
        dispatch(handleSnackAlert({ open: true, message: error.response.data.message, severity: "error" }))
        setLoadingButton(false)
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
        <Box
          sx={{

          }}
        >
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
                    padding: "20px 16px 0px 16px",
                    boxShadow: "4px 5px 15px 0px #C8C8C8",
                    borderRadius: "10px",
                    height: "322px",
                    width: {
                      sm: "200px",
                      xs: "100%"
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
                      textAlign: "center"
                    }}
                  >
                    {e.name}
                  </Typography>

                  <Box
                    sx={{
                      marginTop: "50px",
                      width: "100%",
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "45px",
                        fontWeight: "600",
                        color: "#1E004D",
                        lineHeight: "40px",
                      }}
                    >
                      ${e.amount / 100}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '22.46px',
                        fontWeight: '500',
                        color: '#333333',
                        mt: '13px',
                      }}
                    >
                      {e.variant == -1 ? "per " : e.credits} Credit
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      margin: "auto",
                      marginTop: "50px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <CustomButton
                  border={"1px solid #333333"}
                  ButtonText={"Get Credits"}
                  color={"#333333"}
                  fontSize={"12px"}
                  variant={"outlined"}
                  fontWeight={"500"}
                 
                />
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
                  onClick={() => handleEditPackage(e.name, e.amount, e.variant, e.credits)}
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
                  xs: "300px",
                },
                display: "flex",
                flexDirection: "column",
                paddingLeft: "26px",
                gap: "-10px",
                marginTop: "50px",
                boxShadow: "4px 5px 15px 0px #C8C8C8",
                justifyContent: "center",
                width: { xs: "100%" },
                borderRadius: "10px",
              }}
            >
              <form onSubmit={handleSubmit(onSubmit)}>
                <Box
                  sx={{
                    fontSize: { sm: "45px", xs: "25px" },
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
                    Credits{" "} Every
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
                    loading={loadingButton ? true : false}
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
