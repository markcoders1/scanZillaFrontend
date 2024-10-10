import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Paper } from '@mui/material';
import CustomSelect from "../../Components/CustomSelect/CustomSelect";
import Heading from "../../Components/Heading/Heading";
import CustomTextField from "../../Components/CustomInputField/CustomInputField";
import CustomButton from "../../Components/CustomButton/CustomButton";

import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "../../Hooks/useQueryGallery/AuthHook/AuthHook";
import { handleSnackAlert } from "../../Redux/Slice/SnackAlertSlice/SnackAlertSlice";
import SnackAlert from "../../Components/SnackAlert/SnackAlert";
import { useNavigate } from "react-router-dom";
// this is the loader here 
import LoaderMain from "../../Components/Loader/LoaderMain";
import CustomInputShadow from "../../Components/CustomInputShadow/CustomInputShadow";
import { handleAnalyzeErrors } from '../../Redux/Slice/AnalyzeSlice/AnalyzeSlice';
import Uiverse from "../../Components/Uiverse/Uiverse";

const appUrl = import.meta.env.VITE_REACT_APP_API_URL
const tinyMCEAPIKey = import.meta.env.VITE_TINYMCEAPIKEY


function hasValues(obj) {
  return Object.values(obj).some(arr => arr.length > 0 && !(arr.length === 1 && arr[0] === ""));
}

const Analyze = () => {
  const [category, setCategory] = useState([
  "Appliances",
  "Arts, Crafts & Sewing",
  "Automotive",
  "Baby",
  "Beauty & Personal Care",
  "Books",
  "Camera & Photo Products",
  "Cell Phones & Accessories",
  "Clothing, Shoes & Jewelry",
  "Computers & Accessories",
  "Electronics",
  "Grocery & Gourmet Food",
  "Handmade Products",
  "Health & Household",
  "Home & Kitchen",
  "Industrial & Scientific",
  "Kitchen & Dining",
  "Musical Instruments",
  "Office Products",
  "Patio, Lawn & Garden",
  "Pet Supplies",
  "Sports & Outdoors",
  "Tools & Home Improvement",
  "Toys & Games",
  ]);
  const navigate = useNavigate();
  const scrollBoxRef = useRef(null);
  const [rules, setRules] = useState([]);
  const [result, setResult] =  useState("")
  const [data, setData] = useState({
    title: "",
    bulletpoints: [{ index: 0, value: "" }],
    description: "",
    keywords: "",
    category: "",
    subtitle:""
  });
  const [errors, setErrors] = useState({
    title: [],
    bulletpoints: [],
    description: [],
    keywords: [],
    category: []
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isScroll, setScroll] = useState(false);

  const [snackAlertData, setSnackAlertData] = useState({
    message: "",
    severity: "success",
    open: false,
  });
  const [creditDynamic , setCreditDynamic] = useState(0)
  const [editorLoading, setEditorLoading] = useState(true);
  const [loaderState,setLoaderState] = useState(0)
  const dispatch = useDispatch()
  const AnalyzeErrros = useSelector(state=>state.analyze)


  function hasValues(obj) {
    return Object.values(obj).some(arr => arr.length > 0 && !(arr.length === 1 && arr[0] === ""));
  }

  // useEffect(() => {


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

    /*
    
    this will happen on these conditions

    category must be books                                               data.category==="Books"
    either I'm editing title or subtitle                                 e.target.name==="title" || e.target.name ==="subtitle"

    if I'm editing title, I cant add more title after limit
    if I'm editing subtitle, I cant add more subtitle after limit        e.target.value.length+data[e.target.name==="title"?"subtitle":"title"].length>=rules["Books"]

    limit is rules["Books"]
    
    
    */

    if((e.target.name==="title" || e.target.name ==="subtitle")&&(data.category==="Books")&&(e.target.value.length+data[e.target.name==="title"?"subtitle":"title"].length>=rules["Books"])){


      setData((prev) => ({ ...prev, [e?.target?.name]: e?.target?.value.slice(0, 500-data[e.target.name==="title"?"subtitle":"title"].length) }))


    }else if(e.target.name==="description" && e.target.value.length >= 5000){
    
      setData((prev) => ({ ...prev, [e?.target?.name]: e?.target?.value.slice(0,5000) }));
    
    }else if(e.target.name==="keywords" && e.target.value.length >= 500){
      setData((prev) => ({ ...prev, [e?.target?.name]: e?.target?.value.slice(0,500) }));
    }else{

      console.log(e.target.name)
      setData((prev) => ({ ...prev, [e?.target?.name]: e?.target?.value }));


    }


    if(data.category!=="Books"){
      setData((prev)=>({...prev,subtitle:''}))
    }

  };

  const handleAnalyze = async () => {
    setErrors({ title: "", bulletpoints: "", description: "", keywords: "" });

    let titleToSend = data.subtitle?`${data.title} ${data.subtitle}`:data.title

    const dataToSend = {
      title:titleToSend,
      description:data.description,
      bulletpoints:data.bulletpoints,
      keywords:data.keywords,
      category:data.category
    }

    try {
      setIsLoading(true);
      console.log(data)
      setLoaderState(0)

      const interval = setInterval(() => {
        setLoaderState(prevState => {
          
          if (prevState >= 90) {
            clearInterval(interval); // Clear interval if state is 100 or more
            if(prevState>=100){
              return 100
            }
            else return 90
          }else{
            const increment = Math.floor(Math.random() * 15) ; // Generates a random number between 5 and 15
            return prevState + increment;
          }

        });
      }, 1000);
      
      const response = await axiosInstance({
        url: appUrl + "/verifyText",
        method: "post",
        data: dataToSend,
      });
      console.log(response.data.error);


      setSnackAlertData({
        open: true,
        message: "Analysis Completed",
        severity: "success",
      })
      setScroll(true)  ;
      setResult("Results")
    
      dispatch(handleAnalyzeErrors(response.data.error))
      setLoaderState(100)
      await new Promise(resolve => setTimeout(resolve, 1200));
      setIsLoading(false);
      if (response.data.error) {
        handleData(response.data);
      }
      !hasValues(response.data.error)?
      setSnackAlertData({
        open: true,
        message: "Text Analyzed",
        severity: "success",
      }):null
    } catch (error) {
      const errorData = error?.response?.data;
      console.log(error)
      setIsLoading(false);

      setSnackAlertData({
        open: true,
        message: errorData.message,
        severity: "error",
      })
    }
    setIsLoading(false);
  };

  useEffect(() => {
  if (isScroll && scrollBoxRef.current) {
    scrollBoxRef.current.scrollTo({
      top: scrollBoxRef.current.scrollHeight, // Scroll to bottom
      behavior: "smooth", // Optional smooth scroll
    });
    setScroll(false)
  }
}, [setScroll, handleAnalyze]);

  const getLimits = async () => {
    const response = await axiosInstance({
      url: appUrl + "/rules",
      method: "get",

    })
    setRules(response.data)
  
  }

  const addBullet = () => {
    if (data.bulletpoints.length < rules.bulletNum) {
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
    let trimmedValue = value.slice(0, 500);

    setData(prev => {
        // const combinedLength = prev.bulletpoints.reduce((acc, bullet, idx) => {
        //     return acc + (idx === index ? trimmedValue.length : bullet.value.length);
        // }, 0);

        // if (combinedLength > rules.totalBulletsLength) {
        //     const allowedLength = rules.totalBulletsLength - (combinedLength - trimmedValue.length);
        //     trimmedValue = trimmedValue.slice(0, allowedLength);
        // }

        return {
            ...prev,
            bulletpoints: prev.bulletpoints.map((bullet, idx) => 
                idx === index ? { ...bullet, value: trimmedValue } : bullet
            )
        };
    });
};



  const handleCategoryChange = (category) => {
    setData(prev => ({ ...prev, category }));
  };


  const isAnyFieldFilled = () => {
    const { title, bulletpoints, description, keywords, category } = data;
    const isTextFieldFilled = [title, description, keywords].some(field => field !== "") || bulletpoints.some(bullet => bullet.value !== "");
    return category !== "" && isTextFieldFilled;
  };

  const calcStringCost = (stringToCalc) => {
    if(stringToCalc==""){
      return 0
    }
    const fullChunks = Math.floor(stringToCalc.length / rules.characterCost);
    const partialChunk = stringToCalc.length % rules.characterCost;
    const valtosend = Math.ceil((fullChunks * rules.creditCost) + (partialChunk > 0 ? (partialChunk / rules.characterCost) * rules.creditCost : 0))
    return valtosend;
  }


  useEffect(()=>{
    
    let tempbullets = data.bulletpoints.map(e=>e.value);

    // console.log(calcStringCost(tempbullets.join('')))
    setCreditDynamic(calcStringCost(data.title) + calcStringCost(data.description) + calcStringCost(tempbullets.join('')) + calcStringCost(data.keywords))
  },[data, setData])

  

  
  useEffect(() => {
    getLimits()
    // getRules()
  }, []);

  const handleClear = () => {
    setData({
      title: "",
      bulletpoints: [{ index: 0, value: "" }],
      description: "",
      keywords: "",
      category: "",
      subtitle: "",
    });
    setResult("")

    console.log("data",data)
    
    setErrors({ title: [], bulletpoints: [], description: [], keywords: [] });
    
    dispatch(handleAnalyzeErrors({TE:[],BE:[],DE:[],CE:[],KE:[]}))
  }

  return (

    <>
      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            height: "69vh",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor:"white"
          }}
        >
          <Uiverse progress={loaderState}/>

        </Box>
      ) : (
        <>
        <Box
          ref={scrollBoxRef}
          sx={{
            height: "70vh",
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
            <div
            style={{
              padding:"15px 15px",
              backgroundColor:"#1A0049",
              color:"white",
              borderRadius:"5px",
              marginBottom:"10px"

            }}
            >
           Disclaimer : This tool is designed to assist in identifying potential TOS violations and evaluating indexing performance within Amazon listings. While it is regularly updated, it may not capture every TOS violation. Please note that thorough keyword research is essential for achieving optimal ranking and visibility. Personal review and discretion are advised for best results.

            </div>
            
            <CustomSelect
            categoryError={errors?.category}
            data={category}
            handleChange={handleCategoryChange}
            value={data.category} 
            placeHolder={"Select Category"}
            />
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
                <Heading Heading="Title" characterText="Character Count" count={`${data.title.length+data?.subtitle?.length}${data.category?` / ${rules[`${data.category}`]}`:''}`} />
                <CustomTextField
                  handleKeyDown={() => {}}
                  onChange={hanldeInput}
                  name="title"
                  value={data?.title}
                  error={errors?.title}
                  placeholder="Insert Title Here"
                  border=""
                  boxShadow={true}
                  maxLength={500}
                />
                {data.category=="Books"?
                <>
                <Heading Heading="Sub-title"/>
                <CustomTextField
                  handleKeyDown={() => {}}
                  onChange={hanldeInput}
                  name="subtitle"
                  value={data?.subtitle}
                  placeholder="Insert Sub-title Here"
                  border=""
                  boxShadow={true}
                  maxLength={500}
                />
                </>
                :null}
                {/* {
                  rules.titleCharacters ? console.log(rules.titleCharacters) : ""
                } */}
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
              {data.bulletpoints.map((item, index) => (<>
              <Heading characterText="Character Count:" count={`${item.value.length} / 500`}/>
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0px",
                    // mt: "10px"
                  }}
                >
                  <Box sx={{
                    display:"flex",
                    alignItems:"center",
                    gap:"10px",
                    

                  }}>
                    <h4
                    style={{height:"100%", display:"flex", width:"3%",fontSize:"1.5rem", paddingBottom:"0rem", justifyContent:"center", alignItems:"center" }}
                    >{index+1}.</h4>
                    <CustomTextField
                      handleKeyDown={() => {}}
                      onChange={(e) => handleBulletPointChange(index, e.target.value)}
                      name={""}
                      value={item.value}
                      // error={errors?.bulletpoints}
                      placeholder="Bullet Point"
                      border=""
                      boxShadow={true}
                      maxLength={500}
                      sx={{width:"97%"}}
                    />
                  </Box>


                </Box> 
                </>
              ))}
              {/* errors */}

              {/* {errors.bulletpoints && (
                <Typography sx={{
                  background: "white",
                  p: "10px",
                  color: "#3d0168",
                  mt: "8px",
                  wordBreak: "break-word",
                }}>
                  {errors.bulletpoints.map((line, index) => (
                <React.Fragment key={index}>
                  {line.split("|-|").map((el,i)=>{
                    return(
                      <>
                        {el}
                        {i < line.split("|-|").length - 1 && <br />}
                      </>
                    )
                  })}
                  {index < errors.bulletpoints.length - 1 && <br />}
                </React.Fragment>
              ))}
                </Typography>
              )} */}

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
                    color: "#A0A4A9",
                    marginBottom:"auto"
                  }}
                >
                  Add More (up to {rules.bulletNum} in total)
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
                      width={"225px"}
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
                  width={"183px"}

                  />
                </Box>
              </Box>
            </Box>
            <Box sx={{marginTop:"1rem"}}>
              <Heading Heading="Product Description" characterText="Character Count" count={data.description.length} />
              <Box
                sx={{
                  mt: "10px"
                }}
              >
                <CustomInputShadow
                  type="text"
                  multiline={true}
                  rows={10}  // Adjust the number of rows to match the desired height
                  onChange={hanldeInput}
                  value={data.description}
                  height={"360px"}
                  error={errors.description}
                  name={"description"}
                  maxLength={5000}
                />
              </Box>

      
            </Box>
            <Box
              sx={{
                mt: "20px"
              }}
            >
            
              <Box sx={{marginBottom:"1rem"}}> 
                <Heading count={data.keywords.length} Heading="Search Terms (Generic Keywords)" characterText="Character Count"/>
              </Box>
            <Box>
                <CustomTextField
                  handleKeyDown={() => { }}
                  onChange={hanldeInput}
                  name="keywords"
                  value={data?.keywords}
                  error={errors?.keywords}
                  placeholder="Search Terms (Generic Keywords)"
                  border=""
                  boxShadow={true}
                  maxLength={500}
                />
              </Box>
            </Box>


          
 
             

            <Box sx={{ marginTop: "40px",}}>
              {!isLoading ? (
                <div style={{display:"flex", gap:"10px"}}>
                <CustomButton
                  border="2px solid #1A0049"
                  borderRadius="10px"
                  background="#1A0049"
                  hoverBg="white"
                  hovercolor="#1A0049"
                  buttonTextStyle={{}}
                  buttonStyle={{ padding: { lg: "12px 20px" } }}
                  ButtonText={`Analyze (${creditDynamic} Credits)`}
                  fontSize
                  color="white"
                  fontWeight
                  // fullWidth={true}
                  width="75%"
                  variant="contained"
                  padding
                  onClick={handleAnalyze}
                />
                <CustomButton
                  border="2px solid #1A0049"
                  borderRadius="10px"
                  background="white"
                  hoverBg="white"
                  hovercolor="#1A0049"
                  buttonTextStyle={{}}
                  buttonStyle={{ padding: { lg: "12px 20px" } }}
                  ButtonText={`Clear All  `}
                  fontSize
                  color="#1A0049"
                  fontWeight
                  width={"25%"}
                  variant="contained"
                  padding
                  onClick={handleClear}
                />
                </div>
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

            {
                hasValues(AnalyzeErrros) ?

                <Box sx={{mt:"50px"}} >
                <Typography sx={{fontSize:"40px", fontWeight:"600", color:"#333333"}}>{result}</Typography>
                <Box>
                  {(AnalyzeErrros.TE.length>0 && AnalyzeErrros.TE[0]!=="")?
                    <Paper sx={{
                      padding:"20px",
                      margin:"10px 0",
                      boxShadow:"0px 8px 26px -4px rgba(0, 0, 0, 0.2)",
                      borderRadius:"12px"
                    }}>
                      <Heading Heading="Title Errors" />
                      {AnalyzeErrros?.TE?.map((item, index)=><Typography sx={{padding:"10px 0"}} key={index}>
                      {item.split("|-|").map((el,i)=>{
                          return (
                            <>
                              • {el}
                              {i < item.split("|-|").length - 1 && <br />}
                            </>
                          )
                      })}
                      </Typography>)}
                    </Paper>
                    :
                    null
                  }
                  {AnalyzeErrros.BE.length>0  && AnalyzeErrros.BE[0]!=="" ?
                    <Paper sx={{
                      padding:"20px",
                      margin:"20px 0",
                      boxShadow:"0px 8px 26px -4px rgba(0, 0, 0, 0.2)",
                      borderRadius:"10px"
                    }}>
                      <Heading Heading="Bullet Point Errors" />

                    

                      {AnalyzeErrros.joi==true?
                        AnalyzeErrros?.BE?.map((item,index)=>{

                          if(typeof item !== "object"){
                            return(
                              <Typography key={index} sx={{padding:"10px 0"}}>• {item}</Typography>
                            )
                          }

                          if(item.message.includes("|-|")){

                            const messages = item.message.split("|-|")

                            return(
                              <Typography sx={{padding:"10px 0"}} key={index}>
                                {item.point}.
                                <br />
                                <Box sx={{paddingLeft:"10px"}}>
                                  {messages.map((el,ind)=>{
                                    return (
                                      <>
                                        <span key={ind}> {el.replace(/"bulletpoints\[\d+\]"/g, "")}</span>
                                        {ind < messages.length - 1 && <br />}
                                      </>
                                    )
                                  })}
                                </Box>
                              </Typography>
                            )
                          }

                          console.log(item)

                          if(item.point==-10){
                            return (<Typography sx={{padding:"10px 0"}} key={index}>
                              • {item.message.replace(/"bulletpoints\[\d+\]"/g, "")}
                            </Typography>)
                          }

                          return(
                            <Typography sx={{padding:"10px 0"}} key={index}>
                              {item.point}. <br />
                              <span style={{paddingLeft:"10px"}}>• {item.message.replace(/"bulletpoints\[\d+\]"/g, "")}</span>
                            </Typography>
                          )


                        })
                        :
                        AnalyzeErrros?.BE?.map((item, index)=>
                          <Typography sx={{padding:"10px 0"}} key={index}>
                            {item.split("|-|").map((el,i)=>{
                                return (
                                  <>
                                    • {el}
                                    {i < item.split("|-|").length - 1 && <br />}
                                  </>
                                )
                            })}
                          </Typography>
                        )  
                      }


                    </Paper>
                    :
                    null
                  }
                  {AnalyzeErrros.DE.length>0 && AnalyzeErrros.DE[0]!==""?
                    <Paper sx={{
                      padding:"20px",
                      margin:"20px 0",
                      boxShadow:"0px 8px 26px -4px rgba(0, 0, 0, 0.2)",
                      borderRadius:"10px"
                    }}>
                      <Heading Heading="Description Errors" />
                      {AnalyzeErrros?.DE?.map((item, index)=><Typography sx={{padding:"10px 0"}} key={index}>
                      {item.split("|-|").map((el,i)=>{
                          return (
                            <>
                              • {el}
                              {i < item.split("|-|").length - 1 && <br />}
                            </>
                          )
                      })}
                      </Typography>)}
                    </Paper>
                    :
                    null
                  }
                  {AnalyzeErrros.KE.length>0 && AnalyzeErrros.KE[0]!==""?
                    <Paper  sx={{
                      padding:"20px",
                      margin:"20px 0",
                      boxShadow:"0px 8px 26px -4px rgba(0, 0, 0, 0.2)",
                      borderRadius:"10px"
                    }}>
                      <Heading Heading="Keyword Errors" />
                      {AnalyzeErrros?.KE?.map((item, index)=><Typography sx={{padding:"10px 0"}} key={index}>
                      {item.split("|-|").map((el,i)=>{
                          return (
                            <>
                              • {el}
                              {i < item.split("|-|").length - 1 && <br />}
                            </>
                          )
                      })}
                      </Typography>)}
                    </Paper>
                    :
                    null
                  }
                  {AnalyzeErrros.CE.length>0 && AnalyzeErrros.CE[0]!==""?
                    <Paper  sx={{
                      padding:"20px",
                      margin:"20px 0",
                      boxShadow:"0px 8px 26px -4px rgba(0, 0, 0, 0.2)",
                      borderRadius:"10px"
                    }}>
                      <Heading Heading="Category Errors" />
                      {AnalyzeErrros?.CE?.map((item, index)=><Typography sx={{padding:"10px 0"}} key={index}>
                        {item.split("|-|").map((el,i)=>{
                          return (
                            <>
                              • {el}
                              {i < item.split("|-|").length - 1 && <br />}
                            </>
                          )
                        })}
                      </Typography>)}
                    </Paper>
                    :
                    null
                  }
                </Box>
                </Box>
                :
                null
              }


            <SnackAlert
              message={snackAlertData.message}
              severity={snackAlertData.severity}
              open={snackAlertData.open}
              handleClose={() => { setSnackAlertData(prev => ({ ...prev, open: false })) }}
            />
          </Box>
        </Box>
        </>
      )}
    </>
  )
}

export default Analyze;



// {errors && (
//   <Typography sx={{
//     display: errors.bulletpoints ? "flex" : "none",
//     background: "white",
//     p: "10px",
//     color: "#3d0168",
//     mt: "8px",
//     wordBreak: "break-word"
//   }}>
//     {/* {errors.bulletpoints} */}
//     {errors.bulletpoints.split('|-|').map((line, index) => (
// <React.Fragment key={index}>
// {line}
// {index < errors.bulletpoints.split('|-|').length - 1 && <br />}
// </React.Fragment>
// ))}
//   </Typography>
// )}