import React, { useEffect, useState } from "react";
import { Box, Typography } from '@mui/material';
import CustomSelect from "../../Components/CustomSelect/CustomSelect";
import Heading from "../../Components/Heading/Heading";
import CustomTextField from "../../Components/CustomInputField/CustomInputField";
import CustomButton from "../../Components/CustomButton/CustomButton";
import { Editor } from '@tinymce/tinymce-react';
import { useDispatch } from "react-redux";
import axiosInstance from "../../Hooks/useQueryGallery/AuthHook/AuthHook";
import { handleSnackAlert } from "../../Redux/Slice/SnackAlertSlice/SnackAlertSlice";
import SnackAlert from "../../Components/SnackAlert/SnackAlert";
import { useNavigate } from "react-router-dom";
// this is the loader here 
import LoaderMain from "../../Components/Loader/LoaderMain";
import CustomInputShadow from "../../Components/CustomInputShadow/CustomInputShadow";

const appUrl = import.meta.env.VITE_REACT_APP_API_URL
const tinyMCEAPIKey = import.meta.env.VITE_TINYMCEAPIKEY

const Analyze = () => {
  const [category, setCategory] = useState(["Food", "Gadgets", "OutFits", "Arts & Crafts", "Automotive", "Baby", "Beauty & Personal Care", "Books", "Boys' Fashion", "Computers", "Deals", "Digital Music", "Electronics", "Girls' Fashion", "Health & HouseHold", "Home & Kitchen", "Industrail & Scientific", "Kindle Store", "Luggage", "Mens Fashion", "Movies & TV", "Music, Cds & Vinyl", "Pet Supplies", "Prime Video", "Software", "Sports & Outdoor", "Tools & Home Improvement", "Toys & Games", "Video Games", "Women's Fashion"]);
  const navigate = useNavigate();
  const [data, setData] = useState({
    title: "",
    bulletpoints: [{ index: 0, value: "" }],
    description: "",
    keywords: "",
    category: ""
  });
  const [errors, setErrors] = useState({
    title: "",
    bulletpoints: "",
    description: "",
    keywords: "",
    category: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [snackAlertData, setSnackAlertData] = useState({
    message: "",
    severity: "success",
    open: false,
  });
  const [editorLoading, setEditorLoading] = useState(true);
  const handleInputChange = (e) => {
    setData((prev) => ({ ...prev, [e?.target?.name]: e?.target?.value }));
  };

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setEditorLoading(false);
  //   }, 2000);

  //   return () => clearTimeout(timer);
  // }, []);

  const handleData = (errorsData) => {
    const generatedErrors = errorsData?.error
    setErrors(prev => ({
      ...prev,
      title: generatedErrors.TE,
      bulletpoints: generatedErrors.BE,
      description: generatedErrors.DE,
      keywords: generatedErrors.KE,
      category: generatedErrors.CE
    }))
  };

  const hanldeInput = (e) => {
    setData((prev) => ({ ...prev, [e?.target?.name]: e?.target?.value }));
  };

  const handleAnalyze = async () => {
    setErrors({ title: "", bulletpoints: "", description: "", keywords: "" });

    try {
      setIsLoading(true);
      console.log(data)
      const response = await axiosInstance({
        url: appUrl + "/verifyText",
        method: "post",
        data: data,
      });
      console.log(response)
      setIsLoading(false);
      if (response.data.error) {
        handleData(response.data);
      }
      setSnackAlertData({
        open: true,
        message: response.data.message,
        severity: "error",
      })
    } catch (error) {
      const errorData = error?.response?.data;
      setIsLoading(false);

      setSnackAlertData({
        open: true,
        message: errorData.message,
        severity: "error",
      })
    }
    setIsLoading(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAnalyze();
    }
  };

  const addBullet = () => {
    if (data.bulletpoints.length < 10) {
      setData(prev => ({
        ...prev,
        bulletpoints: [...prev.bulletpoints, { index: prev.bulletpoints.length, value: "" }]
      }));
    }
  };

  const removeBullet = () => {
    if (data.bulletpoints.length > 1) {
      setData(prev => ({
        ...prev,
        bulletpoints: prev.bulletpoints.slice(0, -1)
      }));
    }
  };

  const handleBulletPointChange = (index, value) => {
    setData(prev => ({
      ...prev,
      bulletpoints: prev.bulletpoints.map((bullet, idx) => idx === index ? { ...bullet, value: value } : bullet)
    }));
  };

  const handleCategoryChange = (category) => {
    setData(prev => ({ ...prev, category }));
  };


  const isAnyFieldFilled = () => {
    const { title, bulletpoints, description, keywords, category } = data;
    const isTextFieldFilled = [title, description, keywords].some(field => field !== "") || bulletpoints.some(bullet => bullet.value !== "");
    return category !== "" && isTextFieldFilled;
  };

  return (

    <>
      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            height: "70vh",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column"
          }}
        >
          <LoaderMain />

        </Box>
      ) : (
        <Box
          sx={{
            maxHeight: "680px",
            display: "flex",
            gap: "20px",
            flexDirection: "column",
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
            // zIndex:"-1"
            backgroundColor: "transparent"
          }}
        >
          <Box
            sx={{
              padding: "0px 0px",
              display: "flex",
              flexDirection: "column",
              gap: ".7rem"
            }}
          >
            <CustomSelect categoryError={errors?.category} data={category} handleChange={handleCategoryChange} />
            <Box sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px"
                }}
              >
                <Heading Heading="Title" characterText="Character Count" count={data.title.length} />
                <CustomTextField
                  handleKeyDown={() => { }}
                  onChange={hanldeInput}
                  name="title"
                  value={data?.title}
                  error={errors?.title}
                  placeholder="Insert Title Here"
                  border=""
                  boxShadow={true}
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "15px"
              }}
            >
              <Heading Heading="Bullet Points" />
              {data.bulletpoints.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0px",
                    // mt: "10px"
                  }}
                >
                  <CustomTextField
                    handleKeyDown={() => { }}
                    onChange={(e) => handleBulletPointChange(index, e.target.value)}
                    name={""}
                    value={item.value}
                    // error={errors?.bulletpoints}
                    placeholder="Bullet Text"
                    border=""
                    boxShadow={true}
                  />


                </Box>
              ))}
              {errors && (
                <Typography sx={{
                  display: errors.bulletpoints ? "flex" : "none",
                  background: "whitesmoke",
                  p: "10px",
                  color: "red",
                  mt: "8px",
                  wordBreak: "break-word"
                }}>
                  {errors.bulletpoints}
                </Typography>
              )}
              <Box sx={{
                display: 'flex',
                gap: "20px",
                justifyContent: {
                  md: "space-between",

                },
                flexDirection: {
                  sm: "row",
                  xs: "column-reverse"
                },
                mt: "20px",
                // border:"1px solid red",
                alignItems: "end"
              }}>
                <Typography
                  sx={{
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#A0A4A9"
                  }}
                >
                  Add More (up to 10 in total)
                </Typography>

                <Box sx={{
                  display: "flex",
                  gap: "20px"
                }}>
                  {data.bulletpoints.length > 1 && (
                    <CustomButton
                      border="2px solid #1A0049"
                      borderRadius="10px"
                      buttonTextStyle={{}}
                      buttonStyle={{
                        padding: {
                          lg: "12px 20px"
                        }
                      }}
                      ButtonText="Remove Last Bullet"
                      fontSize
                      color="#1A0049"
                      fontWeight
                      fullWidth={false}
                      variant="outlined"
                      padding
                      onClick={removeBullet}
                      hoverBg="#1A0049"
                      hovercolor="white"
                      width={"189px"}
                    />
                  )}

                  <CustomButton
                    border="2px solid #1A0049"
                    borderRadius="10px"
                    background="#1A0049"
                    hoverBg="white"
                    hovercolor="#1A0049"
                    buttonTextStyle={{}}
                    buttonStyle={{
                      padding: {
                        lg: "12px 20px"
                      },
                    }}
                    ButtonText="Add A Bullet +"
                    fontSize
                    color="white"
                    fontWeight
                    fullWidth={false}
                    variant="contained"
                    padding
                    onClick={addBullet}
                  // width={"143px"}

                  />
                </Box>
              </Box>
            </Box>
            <Box>
              <Heading Heading="Product Description" />
              <Box
                sx={{
                  mt: "10px"
                }}
              >
                <CustomInputShadow
                  type="text"
                  multiline={true}
                  rows={10}  // Adjust the number of rows to match the desired height
                  onChange={handleInputChange}
                  value={data.description}
                  height={"360px"}
                  error={errors.description}
                  name={"description"}
                />
              </Box>

              {/* {errors.description && (
            <Typography
              sx={{
                background: "whitesmoke",
                p: "10px",
                color: "red",
                mt: "8px",
                wordBreak: "break-word"
              }}
            >
              {errors.description}
            </Typography>
          )} */}

              {/* {
            errors.description && <Typography sx={{
              background: "whitesmoke",
              p: "10px",
              color: "red",
              mt: "8px",
              wordBreak: "break-word"
            }}>{errors.description}</Typography>
          } */}
            </Box>
            <Box
              sx={{
                mt: "20px"
              }}
            >
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "500",
                  lineHeight: "33px"
                }}
              >
                Search Terms (Backend keywords)
              </Typography>
              <Box>
                <CustomTextField
                  handleKeyDown={() => { }}
                  onChange={hanldeInput}
                  name="keywords"
                  value={data?.keywords}
                  error={errors?.keywords}
                  placeholder=""
                  border=""
                  boxShadow={true}
                />
              </Box>
            </Box>

            <Box sx={{ marginTop: "40px", display: isAnyFieldFilled() ? "block" : "none" }}>
              {!isLoading ? (
                <CustomButton
                  border="2px solid #1A0049"
                  borderRadius="10px"
                  background="#1A0049"
                  hoverBg="white"
                  hovercolor="#1A0049"
                  buttonTextStyle={{}}
                  buttonStyle={{ padding: { lg: "12px 20px" } }}
                  ButtonText="Analyze (3 Credits)"
                  fontSize
                  color="white"
                  fontWeight
                  fullWidth={true}
                  variant="contained"
                  padding
                  onClick={handleAnalyze}
                />
              ) : (
                <div style={{
                  border: "2px solid #1A0049",
                  borderRadius: "10px",
                  background: "#1A0049",
                  hoverBg: "white",
                  hovercolor: "#1A0049",
                  color: "white",
                  width: "100%",
                  padding: "19px 20px",
                  display: "flex",
                  justifyContent: "center"
                }}>
                  <div className="loader" />
                </div>
              )}
            </Box>



            <SnackAlert
              message={snackAlertData.message}
              severity={snackAlertData.severity}
              open={snackAlertData.open}
              handleClose={() => { setSnackAlertData(prev => ({ ...prev, open: false })) }}
            />
          </Box>
        </Box>
      )}
    </>
  )
}

export default Analyze;
