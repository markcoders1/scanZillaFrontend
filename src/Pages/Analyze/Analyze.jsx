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
  const [snackAlertData, setSnackAlertData] = useState({
    message: "",
    severity: "success",
    open: false,
  });
  const [editorLoading, setEditorLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setEditorLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleData = (errorsData) => {
    const generatedErrors = errorsData?.error
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
      if(response.data.error){
        handleData(response.data);
      }
      setSnackAlertData({
        open: true,
        message: response.data.message,
        severity: "success",
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
          padding: "0px 0px",
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
                error={errors?.bulletpoints}
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

          {editorLoading ? (
            <Box
            sx={{
                // border:"2px solid red",
                height:"300px",
                boxShadow:"4px 5px 15px 0px #C8C8C8",
                borderRadius:"10px",
                display:"flex",
                justifyContent:"center",
                alignItems:"center"
            }}
            >

              <LoaderMain />

            </Box>
          ) : (
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
          )}

          {
            errors.description && <Typography sx={{
              background: "whitesmoke",
              p: "10px",
              color: "red",
              mt: "8px",
              wordBreak: "break-word"
            }}>{errors.description}</Typography>
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
          {!isLoading?<CustomButton
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
          />:<div style={{border:"2px solid #1A0049",
            borderRadius:"10px",
            background:"#1A0049",
            hoverBg:"white",
            hovercolor:"#1A0049",
            color:"white",
            width:"100%",
            padding:"19px 20px",
            display:"flex",
            justifyContent:"center"
            }}><div className="loader"/></div>}
        </Box>

        

      <SnackAlert
            message={snackAlertData.message}
            severity={snackAlertData.severity}
            open={snackAlertData.open}
            handleClose={() => { setSnackAlertData(prev => ({ ...prev, open: false })) }}
          />
      </Box>
    </Box>
  )
}

export default Analyze;
