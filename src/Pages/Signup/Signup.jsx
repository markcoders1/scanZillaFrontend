import { Box, Button, FormControl, TextField, Typography, Checkbox } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { handleSnackAlert } from "../../Redux/Slice/SnackAlertSlice/SnackAlertSlice";
import CustomTextField from "../../Components/CustomInputField/CustomInputField";
import { LoginUser } from "../../Endpoints/Endpoints";
import { handleAuth } from "../../Redux/Slice/UserSlice/UserSlice";
import axiosInstance from "./../../Hooks/useQueryGallery/AuthHook/AuthHook";
import LoaderW from "../../Components/Loader/LoaderW";
import GoogleIcon from '../../assets/images/googleIcon.png';
import { blue } from '@mui/material/colors';
import { NavLink } from "react-router-dom";
import SnackAlert from "../../Components/SnackAlert/SnackAlert";
const appUrl = import.meta.env.VITE_REACT_APP_API_URL

const Signup = () => {
  const [data, setData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const auth = useSelector((state) => state.auth);
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [snackAlertData, setSnackAlertData] = useState({
    open: false,
    message: "",
    severity: "success"
  })

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    setData((prev) => ({ ...prev, [e?.target?.name]: e?.target?.value }));
  };

  const handleSignup = async () => {
    setIsLoading(true);

    setErrors({ fullName: "", email: "", password: "", });
    if (data?.fullName === "" && data?.password === "", data?.email === "") {
      setIsLoading(false);
      return setErrors({ fullName: "Full name can not be empty", password: "Password can not be empty", email: "Email can not be empty" });
    }
    if (data?.email === "") {
      setIsLoading(false);
      return setErrors({ fullName: "", password: "", email: "Email can not be empty" });
    }
    if (data?.fullName === "") {
      setIsLoading(false);
      return setErrors({ fullName: "Password can not be empty", email: "", password: "" });
    }
    if (data?.password === "") {
      setIsLoading(false);
      return setErrors({ password: "Password can not be empty", email: "", fullName: "" });
    }

    try {
      await axiosInstance({ url: appUrl + "/createUser", method: "post", data: { email: data?.email, password: data?.password, userName: data?.fullName } }).then(response => {
        if (response) {
          response = response?.data
          const responseData = response
          dispatch(handleAuth({ ...responseData, authenticated: true }));
          setSnackAlertData({
            open: true,
            message: response.message,
            severity: "success",
          })
          setIsLoading(false)
          console.log("hanhan")

          sessionStorage.setItem("accessToken", response?.accessToken);
          sessionStorage.setItem("refreshToken", response?.refreshToken);
          setData({
            email: "",
            password: "",
            fullName: ""
          });
          console.log("agya")
          navigate("/dashboard");
          console.log("hmm")
        }
      }).catch(error => {
        if (error && error?.response && error?.response?.data && error?.response?.data.message) {
          console.log("error.data.message", error.response.data.message)
          setIsLoading(false)
          setSnackAlertData({
            open: true,
            message: error?.response?.data?.message,
            severity: "error",
          })

        }
      })
    } catch (error) {
      setIsLoading(false)
    }
  };

  const handlekeydown = (e) => {
    if (e.key === "Enter") {
      handleSignup();
    }
  };

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  return (
    <Box>
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <Typography sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Typography sx={{ color: "#1B004D", lineHeight: "36.9px", fontSize: "40px", fontWeight: "600" }}>
            Sign up
          </Typography>
          <Typography sx={{ color: "#A0A4A9", fontSize: "1rem", fontWeight: "400" }}>
            Sign up now to unlock exclusive benefits!
          </Typography>
        </Typography>
        {/* <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Typography sx={{ display: "flex", gap: "5px", flexDirection: "column", marginTop: "50px" }}>
            <label style={{ color: "#666666", fontWeight: "400" }}>Full Name</label>
            <CustomTextField
              border={true}
              ref={inputRef}
              handlekeydown={handlekeydown}
              error={errors?.fullName}
              onChange={handleInput}
              name={"fullName"}
              value={data.fullName}
              rows={1}
            />
          </Typography>
          <Typography sx={{ display: "flex", gap: "5px", flexDirection: "column" }}>
            <label style={{ color: "#666666", fontWeight: "400" }}>Email</label>
            <CustomTextField
              border={true}
              handlekeydown={handlekeydown}
              error={errors?.email}
              onChange={handleInput}
              name={"email"}
              type="email"
              value={data.email}
              rows={1}
            />
          </Typography>
          <Typography sx={{ display: "flex", gap: "5px", flexDirection: "column" }}>
            <label style={{ color: "#666666", fontWeight: "400" }}>Password</label>
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
        <Box sx={{ position: "relative", marginTop: "65px", display: "flex", flexDirection: "column", gap: "1.56rem" }}>
          {/* <Button
            sx={{
              p: "15px 20px",
              background: "linear-gradient(to right, #1A0049, #41016C)",
              width: "100%",
              height: "56px",
              borderRadius: "32px",
              fontSize: { xs: "14px", sm: "18px" },
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
            onClick={handleSignup}
          >
            {isLoading ? <LoaderW /> : "Sign up"}
          </Button> */}
          <Button
            sx={{
              p: "15px 20px",
              background: "white",
              width: "100%",
              height: "56px",
              borderRadius: "32px",
              fontSize: { xs: "14px", sm: "18px" },
              fontWeight: "500",
              textTransform: "none",
              transition: "background 0.9s ease, color 0.4s ease",
              "&:hover": {
                background: "linear-gradient(to right, #1A0049, #41016C)",
                color: "white"
              },
              boxShadow: "none",
              border: "1px solid grey",
              color: "black",
              mt: "100px"
            }}
            variant="contained"
            onClick={handleSignup}
          >
            <span style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <img src={GoogleIcon} alt="Google Icon" style={{ height: "40px" }} />
              <span>Sign up With Google</span>
            </span>
          </Button>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "4px", justifyContent: "center", marginTop: "40px", marginTop: "260px" }}>
          <Typography sx={{ fontSize: { xs: "12px", sm: "18px" }, color: "#A0A4A9" }}>
            Don’t have an account?
          </Typography>
          <Typography sx={{ color: "#1E004D", textDecoration: "underline" }}>
            <NavLink to='/' style={{ color: "#1E004D", fontWeight: "600" }}>
              Sign in
            </NavLink>
          </Typography>
        </Box>
      </Box>
      <SnackAlert
        severity={snackAlertData.severity}
        message={snackAlertData.message}
        open={snackAlertData.open}
        handleClose={() => { setSnackAlertData(prev => ({ ...prev, open: false })) }}


      />
    </Box>
  );
}

export default Signup;
