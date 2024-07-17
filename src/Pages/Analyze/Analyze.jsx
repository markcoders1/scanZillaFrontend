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
import { useNavigate } from "react-router-dom";

const appUrl = import.meta.env.VITE_REACT_APP_API_URL
const tinyMCEAPIKey = import.meta.env.VITE_TINYMCEAPIKEY

const Analyze = () => {
  const [category, setCategory] = useState(["Food", "Gadgets", "OutFits"]);
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
  const dispatch = useDispatch();

  const handleData = (errorsData) => {
    // const errors = errorsData.message.map(error => (setErrors(prev => ({ ...prev, [error.path[0]]: error.message }))));]
    const generatedErrors = errorsData?.error
    // console.log(generatedErrors)
    // console.log(errorsData)
    setErrors(prev=>({...prev,
      title: generatedErrors.TE,
      bulletpoints:generatedErrors.BE ,
      description: generatedErrors.DE,
      keywords: generatedErrors.KE,
      category: generatedErrors.CE
    }))
  };

  const hanldeInput = (e) => {
    setData((prev) => ({ ...prev, [e?.target?.name]: e?.target?.value }));
  };

  const handleAnalyze = async () => {
    // setIsLoading(true);
    setErrors({ title: "", bulletpoints: "", description: "", keywords: "" });

    try {
      setIsLoading(true);
      const response = await axiosInstance({
        url: appUrl + "/verifyText",
        method: "post",
        data: data,
      });
      console.log(response)
      setIsLoading(false);
     
      handleData(response.data);
      dispatch(
        handleSnackAlert({
          open: true,
          message: response?.message,
          severity: "success",
        })
      );
    } catch (error) {
      const errorData = error?.response?.data;
      setIsLoading(false);
      return dispatch(
        handleSnackAlert({
          open: true,
          message: errorData?.message,
          severity: "error",
        })
      );
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

  useEffect(() => { console.log(data) }, [data]);
  // <Box
  //   sx={{
  //     boxSizing: "border-box",
  //     m: {
  //       md: "auto",
  //     },
  //     width: {
  //       xs: "90vw",
  //       sm: "60vw",
  //       md: "80vw",
  //     },
  //     height: {
  //       xs: "auto",
  //       md: "auto",
  //     },
  //     // p: {
  //     //   sm: "80px 30px 30px 30px",
  //     //   md: "60px",
  //     //   xs: "80px 20px 20px 20px",
  //     // },,

  //     maxWidth: "1200px",
  //     margin: "0 auto",
  //     background: "white",
  //     borderRadius: {
  //       sm: "30px",
  //       md: "50px",
  //       xs: "20px",
  //     },
  //     gap: "50px",
  //     display: "flex",
  //     flexDirection: {
  //       md: "row",
  //       xs: "column",
  //     },
  //     position: "relative",
  //   }}
  // >
  //   <Box sx={{ position: "absolute", top: "30px", right: "30px" }}>
  //     <Logout />
  //   </Box>
  //   <Box
  //     sx={{
  //       flexBasis: {
  //         md: "50%",
  //         xs: "100%",
  //       },
  //       flexGrow: "0",
  //       flexShrink: "1",
  //     }}
  //   >
  //     <Box
  //       sx={{
  //         display: "flex",
  //         flexDirection: "column",
  //         justifyContent: "center",
  //         gap: {
  //           md: "20px",
  //           xs: "5px",
  //         },
  //       }}
  //     >
  //       <CustomTextField
  //       handleKeyDown={handleKeyDown}
  //         mb="20px"
  //         error={errors?.title}
  //         onChange={hanldeInput}
  //         name={"title"}
  //         value={data.title}
  //         rows={1}
  //         label="Add Title"
  //       />
  //       <CustomTextField
  //       handleKeyDown={handleKeyDown}
  //         mb="20px"
  //     multiline={true}

  //         error={errors?.bulletpoints}
  //         onChange={hanldeInput}
  //         name={"bulletpoints"}
  //         value={data?.bulletpoints}
  //         label="Add Bullet Points"
  //       />
  //       <CustomTextField
  //     multiline={true}

  //       handleKeyDown={handleKeyDown}
  //         mb="20px"
  //         error={errors?.description}
  //         onChange={hanldeInput}
  //         name={"description"}
  //         value={data?.description}
  //         rows={8}
  //         label="Add Description"
  //       />
  //       <Box sx={{
  //         position:"relative"
  //       }}>

  //      { isLoading?<Box sx={{
  //         position:"absolute",
  //         background:"black",

  //         height:"100%",
  //         width:"100%",
  //         display:"grid",
  //         placeContent:"center",
  //         borderRadius: "10px",
  //         zIndex:2
  //       }}>
  //       <Loader/>
  //       </Box>:null}

  //       <Button
  //         sx={{
  //           p: "15px 20px",
  //           borderRadius: "10px",
  //           background: "#010115",
  //           fontSize: "18px",
  //           fontWeight: "500",
  //           width:"100%",
  //           "&:hover": {
  //             background: "#1e1e20",
  //           },
  //         }}
  //         variant="contained"
  //         onClick={handleAnalyze}
  //       >
  //         Analyze{" "}
  //       </Button>
  //       </Box>
  //     </Box>
  //   </Box>
  //   <Box
  //     sx={{
  //       flexBasis: {
  //         xs: "50%",
  //       },
  //       flexShrink: "1",
  //       display: {
  //         xs: "none",
  //         md: "flex",
  //       },
  //       flexDirection: "column",
  //       justifyContent: "center",
  //       alignItems: "center",
  //       gap: "30px",
  //     }}
  //   >
  //     <Box
  //       sx={{
  //         background: `url(${backgrund})`,
  //         backgroundSize: "cover",
  //         backgroundPosition: "center",
  //         backgroundRepeat: "no-repeat",
  //         width: "300px",
  //         height: "200px",
  //       }}
  //     ></Box>
  //     <Typography
  //       sx={{
  //         fontFamily: "clashdisplay",
  //         color: "#010115",
  //         lineHeight: "30.75px",
  //         fontSize: "25px",
  //         fontWeight: "600",
  //         textAlign: "center",
  //       }}
  //     >
  //       ScanZilla AI
  //     </Typography>
  //     <Typography
  //       sx={{
  //         fontFamily: "Segoe",
  //         color: "#808285",
  //         textAlign: "center",
  //         lineHeight: "30.75px",
  //         fontSize: "20px",
  //         fontWeight: "400",
  //       }}
  //     >
  //       EBC A+ brakes deliver exceptional durability, reliable performance, and superior safety for confident driving in all conditions.
  //     </Typography>
  //   </Box>
  // </Box>
  // <Box 
  //sx={{
  //   maxHeight: "680px",
  //   display: "flex",
  //   gap: "20px",
  //   flexDirection: "column",
  //   overflow: "auto",
  //   padding: "20px 0", // Add padding to prevent shadow clipping
  //   "&::-webkit-scrollbar": {
  //     width: "8px"
  //   },
  //   "&::-webkit-scrollbar-track": {
  //     background: "#DFDFDF",
  //     borderRadius: "10px"
  //   },
  //   "&::-webkit-scrollbar-thumb": {
  //     background: "black",
  //     borderRadius: "10px"
  //   },
  //   "&::-webkit-scrollbar-thumb:hover": {
  //     background: "#b30000"
  //   }
  // }}>
  //   <Box
  // sx={{
  //     display: "flex",
  //     padding: "22px 26px",
  //     alignItems: "center",
  //     justifyContent: "space-between",
  //     borderRadius: "10px",
  //     boxShadow: "0px 8px 26px -4px rgba(0, 0, 0, 0.1)",
  //     margin: "10px" // Add margin to inner box
  //   }}
  //>
  //     hello
  //   </Box>

  // </Box>

  // <Box    
  //  sx={{
  //     maxHeight: "680px",
  //     display: "flex",
  //     gap: "20px",
  //     flexDirection: "column",
  //     overflow: "auto",
  //     padding: "20px 0", // Add padding to prevent shadow clipping
  //     "&::-webkit-scrollbar": {
  //       width: "8px"
  //     },
  //     "&::-webkit-scrollbar-track": {
  //       background: "#DFDFDF",
  //       borderRadius: "10px"
  //     },
  //     "&::-webkit-scrollbar-thumb": {
  //       background: "black",
  //       borderRadius: "10px"
  //     },
  //     "&::-webkit-scrollbar-thumb:hover": {
  //       background: "#b30000"
  //     }
  //   }}

  //   >
  //   <FormControl
  //   sx={{
  //     display: "flex",
  //     padding: "22px 26px",
  //     alignItems: "center",
  //     justifyContent: "space-between",
  //     borderRadius: "10px",
  //     boxShadow: "0px 8px 26px -4px rgba(0, 0, 0, 0.1)",
  //     margin: "10px",
  //      mb: 2, width: '100%'
  //   }}
  //   variant="outlined" >
  //     <InputLabel id="demo-simple-select-label">Select Category</InputLabel>
  //     <Select
  //       labelId="demo-simple-select-label"
  //       id="demo-simple-select"
  //       value=""
  //       label="Select Category"
  //     >
  //       <MenuItem value={10}>Category 1</MenuItem>
  //       <MenuItem value={20}>Category 2</MenuItem>
  //       <MenuItem value={30}>Category 3</MenuItem>
  //     </Select>
  //   </FormControl>
  //   <FormControl
  //   sx={{
  //     display: "flex",
  //     padding: "22px 26px",
  //     alignItems: "center",
  //     justifyContent: "space-between",
  //     borderRadius: "10px",
  //     boxShadow: "0px 8px 26px -4px rgba(0, 0, 0, 0.1)",
  //     margin: "10px",
  //      mb: 2, width: '100%'
  //   }}
  //   variant="outlined" >
  //     <InputLabel id="demo-simple-select-label">Select Category</InputLabel>
  //     <Select
  //       labelId="demo-simple-select-label"
  //       id="demo-simple-select"
  //       value=""
  //       label="Select Category"
  //     >
  //       <MenuItem value={10}>Category 1</MenuItem>
  //       <MenuItem value={20}>Category 2</MenuItem>
  //       <MenuItem value={30}>Category 3</MenuItem>
  //     </Select>
  //   </FormControl>
  // </Box>
  return (
    <Box
      sx={{
        maxHeight: "680px",
        display: "flex",
        gap: "20px",
        flexDirection: "column",
        overflowY: "auto",
        overflowX: "hidden",
        padding: "20px 5px",
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
          padding: "0px 10px",
          display:"flex",
          flexDirection:"column",
          gap:".7rem"
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
            <Heading Heading="Title" />
            <CustomTextField
              handleKeyDown={() => { }}
              onChange={hanldeInput}
              name="title"
              value={data?.title}
              error={errors?.title}
              placeholder="Add Title"
              border=""
              boxShadow={true}
            />
          </Box>
        </Box>
        <Box>
          <Heading Heading="Bullet Points" />
          {data.bulletpoints.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "15px"
              }}
            >
              <CustomTextField
                handleKeyDown={() => { }}
                onChange={(e) => handleBulletPointChange(index, e.target.value)}
                name={""}
                value={item.value}
                error={errors?.title}
                placeholder="Bullet Text"
                border=""
                boxShadow={true}
              />
            </Box>
          ))}
          <Box sx={{
            display: 'flex',
            gap: "20px",
            justifyContent: "end",
            flexDirection: {
              sm: "row",
              xs: "column-reverse"
            },
            mt: "20px"
          }}>
            
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
                  ButtonText="Remove Bullet"
                  fontSize
                  color="#1A0049"
                  fontWeight
                  fullWidth={false}
                  variant="outlined"
                  padding
                  onClick={removeBullet}
                  hoverBg="#1A0049"
                  hovercolor="white"
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
                ButtonText="Add Bullet"
                fontSize
                color="white"
                fontWeight
                fullWidth={false}
                variant="contained"
                padding
                onClick={addBullet}
              />
            </Box>
          </Box>
        </Box>
        <Box>
          <Heading Heading="Product Description" />
          <Editor
            apiKey={tinyMCEAPIKey}
            init={{
              plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown',
              toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
              tinycomments_mode: 'embedded',
              tinycomments_author: 'Author name',
              mergetags_list: [
                { value: 'First.Name', title: 'First Name' },
                { value: 'Email', title: 'Email' },
              ],
              ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
            }}
            initialValue=""
            onEditorChange={(content, editor) => {
              const plainText = editor.getContent({ format: 'text' });
              setData(prev => ({ ...prev, description: plainText }));
            }}
          />

{
      errors.description&& <Typography  sx={{
        background: "whitesmoke",
        p: "10px",
        color: "red",
        mt: "8px",
        wordBreak: "break-word"
      }}>{ errors.description}</Typography>
    }
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

        <Box
          sx={{
            marginTop: "40px"
          }}
        >
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
            ButtonText="Analyze"
            fontSize
            color="white"
            fontWeight
            fullWidth={true}
            variant="contained"
            padding
            onClick={handleAnalyze}
          />
        </Box>

      </Box>
    </Box>
  )
}

export default Analyze;