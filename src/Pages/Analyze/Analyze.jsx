// import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import backgrund from "./../../assets/images/robot.svg";
import Logout from "../../Components/Logout/Logout";
import axiosInstance from "../../Hooks/useQueryGallery/AuthHook/AuthHook";
import { handleSnackAlert } from "../../Redux/Slice/SnackAlertSlice/SnackAlertSlice";
import { useDispatch } from "react-redux";
import Loader from "../../Components/Loader/Loader";
import CustomTextField from "../../Components/CustomInputField/CustomInputField";
import { Box, TextField, Button, Select, MenuItem, FormControl, InputLabel, IconButton, Typography } from '@mui/material';
import CustomSelect from "../../Components/CustomSelect/CustomSelect";
import Heading from "../../Components/Heading/Heading";
import CustomButton from "../../Components/CustomButton/CustomButton";

import { Editor } from '@tinymce/tinymce-react';

const appUrl = import.meta.env.VITE_REACT_APP_API_URL
const tinyMCEAPIKey = import.meta.env.VITE_TINYMCEAPIKEY

const Analyze = () => {
 
  const [categories, setCategories] = useState(["Food", "Gadgets", "OutFits"])
  const [bullets, setBullets] = useState([{index:0,value:""}])
  const [data, setData] = useState({
    title: "",
    bulletpoints: [{index:1,value:""}],
    description: "",
  });
  const [errors, setErrors] = useState({
    title: "",
    bulletpoints: "",
    description: "",
  });
  const [isLoading, setIsLoading] = useState(false)
  const handleData = (errorsData) => {
    const errors = errorsData.message.map(error => (setErrors(prev => ({ ...prev, [error.path[0]]: error.message }))))


  }
  const dispatch = useDispatch()
  const hanldeInput = (e) => {
    setData((prev) => ({ ...prev, [e?.target?.name]: e?.target?.value }));
  };

  const handleBullet = (e) => {
    // const newData = { ...bullets };
    setData((prev) => ({ ...prev, [e?.target?.name]: e?.target?.value }));
  };

  const handleAnalyze = async () => {
    setIsLoading(true)
    setErrors({ title: "", bulletpoints: "", description: "" });
    try {
      const response = await axiosInstance({
        url: appUrl + "/verifyText",
        method: "post",
        data: data,
      });
      setIsLoading(false)
      handleData(response.data)
      dispatch(
        handleSnackAlert({
          open: true,
          message: response?.message,
          severity: "success",
        })
      );

    } catch (error) {
      const errorData = error?.response?.data;
      setIsLoading(false)

      return dispatch(
        handleSnackAlert({
          open: true,
          message: errorData?.message,
          severity: "error",
        })
      );
    }
    setIsLoading(false)

  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAnalyze();
    }
  };


  const addBullet = (index) => {
    if (bullets.length < 10) {
      setBullets([...bullets, {index,value:""}]);
    }
  };

  const removeBullet = () => {
    if (bullets.length > 1) {
      const newList = bullets.slice(0, -1);
      setBullets(newList);
    }
  };

  const handleBulletPointChange = (index, value) => {
    setBullets(current =>
      current.map((item, idx) => (idx === index ? { ...item, value: value } : item))
    );
  };

  useEffect(()=>{console.log(data)},[ data])
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
      padding: "20px 5px", // Add padding to prevent shadow clipping
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
      }
    }}

  >
    <CustomSelect data={categories} />
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      gap: "20"
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
          placeholder="Bullet Text"
        />
      </Box>
    </Box>
    <Box>

      {bullets.map((item, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "15px"
          }}>
          <Heading Heading="Bullet Points" />
          <CustomTextField
            handleKeyDown={() => { }}
            onChange={(e)=>handleBulletPointChange(index, e.target.value)}
            name={""}
            value={item.value}
            error={errors?.title}
            placeholder="Bullet Text"

          />
        </Box>
      ))}
      <Box sx={{
        display:'flex',
        gap:"20px",
        justifyContent:"space-between",
        mt:"20px"
      }}>
        <Typography style={{
           fontSize: {
            lg: "20px"
          },
          lineHeight: {
            lg: "30px"
          },
          fontWeight: {
            lg: "500"
          },
          color: "#A0A4A9"
        }}>
          Add More (Up to 10 in Total)
        </Typography>
        <Box sx={{
          display:"flex",
          gap:"20px"
        }}>   
         <CustomButton 
      border = "2px solid #1A0049"
      borderRadius="10px"
      buttonTextStyle = {{}}
      buttonStyle = {{padding:{
        lg:"12px 20px"
      }}}
      ButtonText="Remove Bullet"
      fontSize
      color="#1A0049"
      fontWeight
      fullWidth = {false}
      variant = "outlined"
      padding
      onClick={removeBullet}
      hoverBg="#1A0049"
      hovercolor="white"
      />

<CustomButton 
           border = "2px solid #1A0049"
           borderRadius="10px"
           background="#1A0049"
           hoverBg="white"
           hovercolor="#1A0049"

           buttonTextStyle = {{

           }}
           buttonStyle = {{
            padding:{
             lg:"12px 20px"
           }, 
        }}
      ButtonText="Add Bullet"
      fontSize
      color="white"
      fontWeight
      fullWidth = {false}
      variant = "contained"
      padding
      onClick={()=>addBullet(bullets.length-1)}
      /></Box>
  
      </Box>

    </Box>
    <Box>
      <Heading Heading="Product Descrition"/>
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
    onEditorChange={(e)=>setData(prev=>({...prev, description:e?.replace(/^\<p\>/,"").replace(/\<\/p\>$/,"")}))}
  />
    </Box>

  </Box>

  )
}

export default Analyze