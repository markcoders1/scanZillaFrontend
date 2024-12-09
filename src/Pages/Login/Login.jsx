import { Box, Button, FormControl, TextField, Typography, Checkbox } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import background from "../../assets/images/LoginImg.png";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { handleSnackAlert } from "../../Redux/Slice/SnackAlertSlice/SnackAlertSlice";
import CustomTextField from "../../Components/CustomInputField/CustomInputField";
import { LoginUser } from "../../Endpoints/Endpoints";
import { handleAuth } from "../../Redux/Slice/UserSlice/UserSlice";
import axiosInstance from "./../../Hooks/useQueryGallery/AuthHook/AuthHook";
import Loader from "../../Components/Loader/Loader";
import LoaderW from "../../Components/Loader/LoaderW";
import GoogleIcon from '../../assets/images/googleIcon.png'
import { blue } from '@mui/material/colors';
import { NavLink } from "react-router-dom";
import { signInWithGooglePopup } from "../../../firebase.config";
const appUrl = import.meta.env.VITE_REACT_APP_API_URL
// import SnackAlert from '../SnackAlert/SnackAlert';
import SnackAlert from "../../Components/SnackAlert/SnackAlert";
import logo from '../../assets/images/sample.webp'


const Login = () => {

  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [snackAlertData, setSnackAlertData] = useState({
    message: "",
    severity: "success",
    open: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const auth = useSelector((state) => state.auth);

  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignIn = async () => {
    dispatch(handleAuth({}));
    console.log(auth)
    try {
      const responseData = await signInWithGooglePopup();
    
      const data = responseData.data;
      console.log(data);
      data.authenticated = true;
      
      dispatch(handleAuth(data));
      console.log(auth)
      console.log(responseData)
    
      setSnackAlertData({
        open: true,
        message: "Logged in successfully.",
        severity: "success", 
      });
  
      if (data.role === "admin") {
        navigate("/dashboard-admin");
      } else if (data.role === "user") {
        navigate("/dashboard");
      }
      console.log(responseData)
  
  
      dispatch(handleSnackAlert({ open: true, message: "Logged in successfully.", severity: "success" }));
  
    } catch (error) {
      console.log(error);
      if (error.code === "auth/popup-closed-by-user") {
        setSnackAlertData({
          open: true,
          message: "Sign-in process was cancelled by the user.",
          severity: "info",
        });
        return; 
      }
      
      if (error.response) {
        setSnackAlertData({
          open: true,
          message: error.response.data.message || "An error occurred during sign-in.",
          severity: "error",
        });
      } 
      // Handle network errors, such as server being down
      else if (error.request) {
        setSnackAlertData({
          open: true,
          message: "Server is currently under maintenance",
          severity: "error",
        });
      }
      // Handle any other unknown errors
      else {
        setSnackAlertData({
          open: true,
          message: "Server is currently under maintenance",
          severity: "error",
        });
      }
      
    
    }
  };
  

  useEffect(() => {
    const refreshToken = auth?.refreshToken;
    console.log("...................", refreshToken)
    if (refreshToken) {
      
      if (auth.role === "admin") {
        navigate("/dashboard-admin");
      } else if (auth.role === "user") {
        navigate("/dashboard");
      }
    }
 
  }, [])

  const handleInput = (e) => {
    setData((prev) => ({ ...prev, [e?.target?.name]: e?.target?.value }));
  };

  // const handleLogin = async () => {
  //   setIsLoading(true);
  //   setErrors({ password: "", email: "" });

  //   if (data?.email === "" && data?.password === "") {
  //     setIsLoading(false);
  //     return setErrors({ password: "Password can not be empty", email: "Email can not be empty" });
  //   }
  //   if (data?.email === "") {
  //     setIsLoading(false);
  //     return setErrors({ password: "", email: "Email can not be empty" });
  //   }
  //   if (data?.password === "") {
  //     setIsLoading(false);
  //     return setErrors({ password: "Password can not be empty", email: "" });
  //   }

  //   try {
  //     let response = await axiosInstance({ url: appUrl + "/login", method: "post", data: data });
  //     console.log(response)
  //     response = response?.data;
  //     const responseData = response;
  //     dispatch(handleAuth({ ...responseData, authenticated: true }));

  //     dispatch(handleSnackAlert({
  //       open: true,
  //       message: response.message,
  //       severity: "success",
  //     }));

  //     setIsLoading(false);
  //     sessionStorage.setItem("accessToken", response?.accessToken);
  //     sessionStorage.setItem("refreshToken", response?.refreshToken);
  //     setData({
  //       email: "",
  //       password: "",
  //     });

  //     navigate("/dashboard");
  //   } catch (error) {
  //     console.log(error)
  //     const errorData = error.response.data;
  //     if (error?.response?.data?.errorType?.includes("email")) {
  //       setErrors({ password: "", email: error.response.data.message });
  //     }
  //     if (error?.response?.data?.errorType?.includes("password")) {
  //       setErrors({ email: "", password: error.response.data.message });
  //     }
  //     setIsLoading(false);

  //     dispatch(handleSnackAlert({
  //       open: true,
  //       message: errorData?.message,
  //       severity: "error",
  //     }));
  //   }
  // };

  // const handleInput = (e) => {
  //   setData((prev) => ({ ...prev, [e?.target?.name]: e?.target?.value }));
  // };

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  useEffect(() => {
    if (auth.authenticated) {
      if (auth.role === "admin") {
        navigate("/dashboard-admin");
      } else if (auth.role === "user") {
        navigate("/dashboard");
      }
    }
  }, [auth, navigate]);


  const handlekeydown = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };
  useEffect(() => {
    inputRef?.current?.focus()
  }, [])
  return (

    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "0px",
          
         
        }}
      >
       
       <Box
        sx={{
          display:{lg:"none", xs:"flex"},
          justifyContent:"center",
          alignItems:"center",
        }}
        >
        <img src={logo} style={{width:"80px"}} alt="" />

        </Box>
        <Typography
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "25px",
            mt:"20px",
            textAlign:{lg:"start", xs:"center"}
          }}
        >
          <Typography
            sx={{

              color: "#1B004D",
              lineHeight: "36.9px",
              fontSize: {md:"50px", xs:"40px"},
              fontWeight: "600",
            }}
          >
            Sign in
          </Typography>
          <Typography
            sx={{
              color: "#A0A4A9",
              fontSize: "1rem",
              fontWeight: "400",
            }}
          >
            Welcome back! Please enter your details.
          </Typography>
        </Typography>

        {/* <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px"
          }}
        >
          <Typography
            sx={{
              display: "flex",
              gap: "5px",
              flexDirection: "column",
              marginTop: "30px"
            }}
          >

            <label
              style={{
                color: "#666666",
                fontWeight: "400"
              }}
            >Email</label>
            <CustomTextField
              border={true}
              ref={inputRef}
              handlekeydown={handlekeydown}
              error={errors?.email}
              onChange={handleInput}
              name={"email"}
              value={data.email}
              rows={1}
            />
          </Typography>
          <Typography
            sx={{
              display: "flex",
              gap: "5px",
              flexDirection: "column",
            }}
          >
            <label
              style={{
                color: "#666666",
                fontWeight: "400"
              }}
            >Password</label>
            <CustomTextField
              border={true}
              handlekeydown={handlekeydown}
              error={errors?.password}
              onChange={handleInput}
              name={"password"}
              type="password"
              value={data.password}
              rows={1}
              showPasswordToggle={true} // Add this prop
            />
          </Typography>
        </Box> */}
        {/* <Box
          sx={{
            // display: "flex",
            display: "flex  ",
            alignItems: "center",
            justifyContent: "space-between",

          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Checkbox
              sx={{
                color: blue[800], // set the color of the checkbox
                '&.Mui-checked': {
                  color: blue[900], // set the color when checked
                },
              }}
              onChange={(e) => { console.log(e) }}
            />


            <Typography
              sx={{
                color: "#333333",
                fontWeight: "400",
                fontSize: "16px",
                "&:hover": { // move hover styles here
                  color: "red",
                },
              }}
            >
              Remember Me
            </Typography>

          </Box>
          <Typography
            sx={{
              color: "#333333",
              fontWeight: "400",
              cursor: "pointer",

            }}
          ><NavLink to="submit-email-for-otp" >Forgot Password</NavLink></Typography>
        </Box> */}
        <Box sx={{
          // position: "relative",
          marginTop: {xl:"70px", xs:"0px"},
          display: "flex",
          flexDirection: "column",
          gap: "1.56rem",
          // border:"2px solid red"
        }}>
          {/* <Button
            sx={{
              p: "15px 20px",
              background: "linear-gradient(to right, #1A0049, #41016C)",
              width: "100%",
              height: "56px",
              borderRadius: "32px",
              fontSize: {
                xs: "14px",
                sm: "18px"
              },
              fontWeight: "500",
              textTransform: "none",
              transition: "background 0.9s ease, color 0.4s ease",
              "&:hover": {
                background: "linear-gradient(to right, #1G1947, #41016C)",
                color: "white"
              },
              boxShadow: "none"
            }}
            variant="contained"
            onClick={handleLogin}
          >
            {isLoading ? <LoaderW /> : "Sign in"}
          </Button> */}

          <Button
            sx={{
              p: "15px 20px",
              background: "white",
              width: "100%",
              height: "56px",
              borderRadius: "32px",
              fontSize: {
                xs: "14px",
                sm: "18px"
              },
              fontWeight: "500",
              textTransform: "none",
              transition: "background 0.9s ease, color 0.4s ease",
              "&:hover": {
                background: "linear-gradient(to right, #1A0049, #41016C)",
                color: "white",
              },
              boxShadow: "none",
              border: "1px solid grey",
              color: "black",
              mt: "150px"
            }}
            variant="contained"
            onClick={handleSignIn}

          >
            <span style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <img src={GoogleIcon} alt="Google Icon" style={{ height: "40px" }} />
              <span>Continue with Google</span>
            </span>
          </Button>
        </Box>
      

      </Box>
      <SnackAlert
                message={snackAlertData.message}
                severity={snackAlertData.severity}
                open={snackAlertData.open}
                handleClose={() => {
                  setSnackAlertData((prev) => ({message:"",severity:"", open: false }));
                }}
              />
    </Box>

  );
};

export default Login;
