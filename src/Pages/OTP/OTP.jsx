import React, { useState, useRef, useEffect } from "react";
import { Box, Button, Typography, TextField } from "@mui/material";
import axiosInstance from "../../Hooks/useQueryGallery/AuthHook/AuthHook";
import { useSelector, useDispatch } from "react-redux";
import { handleAuth } from "../../Redux/Slice/UserSlice/UserSlice";
import { useNavigate } from "react-router-dom";

const OTP = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [error, setError] = useState("");
  const inputsRef = useRef([]);
  const submitButtonRef = useRef(null);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleChange = (element, index) => {
    const value = element.value;
    if (
      /^[a-zA-Z0-9!@#$%^&*()_+\[\]{};':"\\|,.<>\/?`~]$/.test(value) ||
      value === ""
    ) {
      let newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      setError(""); // Clear error when user starts typing

      // Move to next input field if a valid character is entered
      if (value !== "" && index < 5) {
        inputsRef.current[index + 1].focus();
        setError("");
      }
    }
  };

  const handlePaste = (e) => {
    const paste = e.clipboardData.getData("text");
    const validPaste = paste.match(
      /^[a-zA-Z0-9!@#$%^&*()_+\[\]{};':"\\|,.<>\/?`~]{6}$/
    );
    if (validPaste) {
      setError("");
      const newOtp = paste.split("");
      setOtp(newOtp);
      newOtp.forEach((value, index) => {
        if (inputsRef.current[index]) {
          inputsRef.current[index].value = value;
        }
      });
      if (inputsRef.current[5]) {
        inputsRef.current[5].focus(); // Move focus to the last input
      }
    }
    e.preventDefault();
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "ArrowRight" && index < 5) {
      inputsRef.current[index + 1].focus();
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputsRef.current[index - 1].focus();
    } else if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    const otpValue = otp.join("");
    if (otp.includes("")) {
      setError("OTP Fields cannot be empty");
    } else {
      console.log("OTP Value: ", otpValue);
      dispatch(handleAuth({ otp: otpValue }));
      navigate("/setpassword")
    }
  };

  useEffect(() => {
    console.log(auth);
  }, [auth]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      <Typography
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Typography
          sx={{
            color: "#1B004D",
            lineHeight: "36.9px",
            fontSize: "40px",
            fontWeight: "600",
          }}
        >
          OTP
        </Typography>
        <Typography
          sx={{
            color: "#A0A4A9",
            fontSize: "1rem",
            fontWeight: "400",
          }}
        >
          Please enter the OTP sent to your Email.
        </Typography>
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexGrow: "1",
          justifyContent: {
            md: "space-between",
          },
          gap: {
            lg: "1rem",
            md: "0.3rem",
            xs: "0.6rem",
          },
          marginTop: "70px",
        }}
        onPaste={handlePaste}
      >
        {otp.map((data, index) => (
          <TextField
            key={index}
            value={data}
            onChange={(e) => handleChange(e.target, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            inputRef={(el) => (inputsRef.current[index] = el)}
            variant="outlined"
            inputProps={{
              maxLength: 1,
              style: { textAlign: "center" },
            }}
            sx={{
              "& .MuiInputBase-input": {
                textAlign: "center",
                borderRadius: "12px",
                height: {
                  lg: "56px",
                  md: "30px",
                },
                width: {
                  lg: "50.46px",
                  md: "25px",
                },
              },
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
              },
            }}
          />
        ))}
      </Box>
      {error && (
        <Typography
          sx={{
            color: "red",
            marginTop: "10px",
            textAlign: "center",
          }}
        >
          {error}
        </Typography>
      )}
      <Box
        sx={{
          position: "relative",
          marginTop: "80px",
        }}
      >
        <Button
          ref={submitButtonRef}
          sx={{
            marginTop: "90px",
            p: "15px 20px",
            background: "linear-gradient(to right, #1A0049, #41016C)",
            width: "100%",
            height: "56px",
            borderRadius: "32px",
            fontSize: {
              xs: "14px",
              sm: "18px",
            },
            fontWeight: "500",
            textTransform: "none",
            transition: "background 0.9s ease, color 0.4s ease",
            "&:hover": {
              background: "linear-gradient(to right, #1G1947, #41016C)",
              color: "white",
            },
            boxShadow: "none",
          }}
          variant="contained"
          onClick={handleSubmit}
        >
          Submit OTP
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "4px",
          justifyContent: "center",
          marginTop: "120px",
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: "12px",
              sm: "18px",
            },
            color: "#A0A4A9",
          }}
        >
          Didn’t receive an OTP?
        </Typography>
        <Typography
          sx={{
            color: "#1E004D",
            textDecoration: "underline",
            cursor: "pointer",
          }}
          // onClick={() => {  }}
        >
          Resend OTP
        </Typography>
      </Box>
    </Box>
  );
};

export default OTP;
