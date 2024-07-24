import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import checkImg from "../../assets/images/check.png";
import CustomButton from "../../Components/CustomButton/CustomButton";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../Hooks/useQueryGallery/AuthHook/AuthHook";
import { useForm } from "react-hook-form";
import LoaderMain from "../../Components/Loader/LoaderMain";

const appUrl = import.meta.env.VITE_REACT_APP_API_URL;

const CreditsManagement = () => {
  const navigate = useNavigate();
  const [characterCost, setCharacterCost] = useState();
  const [creditCost, setCreditCost] = useState();
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);


  const handleEditPackage = (planName, price, buttonText) => {
    navigate(
      `/credits-management/package-setting?planName=${planName}&price=${price}&buttonText=${buttonText}`
    );
  };

  const fetchRules = async () => {
    try {
      setLoading(true)
      const response = await axiosInstance({
        url: `${appUrl}/rules`,
        method: "get",
      });
      setLoading(false)
      console.log(response);
      setCharacterCost(response.data.characterCost);
      setCreditCost(response.data.creditCost)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchRules();
  }, [])



  const onSubmit = (data) => {

    console.log(data);
    const submitCharacterRules = async () => {
      try {
        const response = await axiosInstance({
          url: `${appUrl}/rules`,
          method: "post",
          data: {
            characterCost: data.characters,
            creditCost: data.credits
          }
        });

        console.log(response);

      } catch (error) {
        console.error(error);
      }
    };
    submitCharacterRules()
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
            }}
          >
            <Box>
              <Box
                sx={{
                  flexBasis: { md: "218px" },
                  padding: "15px 16px 0px 16px",
                  boxShadow: "4px 5px 15px 0px #C8C8C8",
                  borderRadius: "10px",
                  height: "262px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "23px",
                    color: "#333333",
                    fontWeight: "600",
                    width: "63px",
                    margin: "auto",
                  }}
                >
                  Basic
                </Typography>
                <Box
                  sx={{
                    marginTop: "15px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  {[...Array(3)].map((_, index) => (
                    <Box
                      key={index}
                      sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                    >
                      <Typography>
                        <img src={checkImg} alt="" />
                      </Typography>
                      <Typography sx={{ fontSize: "11px" }}>
                        Lorem ipsum dolor sit
                      </Typography>
                    </Box>
                  ))}
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
                    $10
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
                  {/* <CustomButton border={"1px solid #333333"} borderRadius={"10px"} ButtonText={"Get Credits"} fontSize={"12px"} fontWeight={"500"} color={"#333333"} margin={"auto"} /> */}
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
                onClick={() => handleEditPackage("Basic", 10, "Get Credits")}
              >
                Edit Package
              </Typography>
            </Box>

            <Box>
              <Box
                sx={{
                  flexBasis: { md: "218px" },
                  padding: "15px 16px 0px 16px",
                  boxShadow: "4px 5px 15px 0px #C8C8C8",
                  borderRadius: "10px",
                  height: "262px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "23px",
                    color: "#333333",
                    fontWeight: "600",
                    width: "63px",
                    margin: "auto",
                  }}
                >
                  Pro
                </Typography>
                <Box
                  sx={{
                    marginTop: "15px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  {[...Array(3)].map((_, index) => (
                    <Box
                      key={index}
                      sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                    >
                      <Typography>
                        <img src={checkImg} alt="" />
                      </Typography>
                      <Typography sx={{ fontSize: "11px" }}>
                        Lorem ipsum dolor sit
                      </Typography>
                    </Box>
                  ))}
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
                    $30
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
                  {/* <CustomButton border={"1px solid #333333"} borderRadius={"10px"} ButtonText={"Get Credits"} fontSize={"12px"} fontWeight={"500"} color={"#333333"} margin={"auto"} /> */}
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
                onClick={() => handleEditPackage("Pro", 30, "Get Credits")}
              >
                Edit Package
              </Typography>
            </Box>

            <Box>
              <Box
                sx={{
                  flexBasis: { md: "218px" },
                  padding: "12px 16px 15px 16px",
                  borderRadius: "10px",
                  height: "262px",
                  overflowY: "scroll",
                  boxShadow: "4px 5px 15px 0px #C8C8C8",
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
                    fontSize: "23px",
                    color: "#333333",
                    fontWeight: "600",
                    margin: "auto",
                    textAlign: "center",
                  }}
                >
                  Enterprise
                </Typography>
                <Box
                  sx={{
                    marginTop: "15px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  {[...Array(9)].map((_, index) => (
                    <Box
                      key={index}
                      sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                    >
                      <Typography>
                        <img src={checkImg} alt="" />
                      </Typography>
                      <Typography sx={{ fontSize: "11px" }}>
                        Lorem ipsum dolor sit
                      </Typography>
                    </Box>
                  ))}
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
                    $60
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
                  {/* <CustomButton border={"1px solid #333333"} borderRadius={"10px"} ButtonText={"Get Credits"} fontSize={"12px"} fontWeight={"500"} color={"#333333"} margin={"auto"} /> */}
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
                onClick={() => handleEditPackage("Enterprise", 60, "Get Credits")}
              >
                Edit Package
              </Typography>
            </Box>
          </Box>
          <Box>
            <Box
              sx={{
                height: {
                  md: "181px",
                  xs: "260px"
                },
                display: "flex",
                flexDirection: "column",
                paddingLeft: "26px",
                gap: "-10px",
                marginTop: "30px",
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
                  />
                </Typography>
              </form>



            </Box>
          </Box>
        </Box >
      )}
    </>
  );
};

export default CreditsManagement;
