import React from "react";
import Heading from "../../Components/Heading/Heading";
import { Typography, Box, Tooltip } from "@mui/material";
import whatsappIcon from '../../assets/images/contact.png'


const TermOfServices = () => {
  return (
    <Box
      sx={{
        padding: { xs: "16px", sm: "32px" },
        maxWidth: "1200px",
        margin: "0 auto",
        overflow: "hidden",
        height: "70vh",
        width: "100%",
        marginTop: "15px",
        display: "flex",

        height: "70vh",

        flexDirection: {
          lg: "column",
          xs: "column",
        },
        overflowY: "auto",
        // overflowX: "hidden",
        padding: { sm: "20px 25px", xs: "5px 8px" },
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
          fontSize: { xs: "14px", sm: "16px" },
          fontWeight: "400",
          color: "black",
          mt: "0px",
          lineHeight: 1.8,
        }}
      >
        <strong>Effective Date:</strong> January, 01, 2025
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: "14px", sm: "16px" },
          fontWeight: "400",
          color: "black",
          mt: "17px",
          lineHeight: 1.8,
        }}
      >
        <strong>Acceptance of Terms:</strong>
        <br />
        By accessing and using ScanZilla, you agree to abide by these Terms of
        Service. If you do not agree to these terms, please refrain from using
        our service.
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: "14px", sm: "16px" },
          fontWeight: "400",
          color: "black",
          mt: "17px",
          lineHeight: 1.8,
        }}
      >
        <strong>License to Use:</strong>
        <br />
        ScanZilla grants you a non-transferable, non-exclusive license to use
        the web app solely for personal or business purposes. All rights not
        explicitly granted are reserved by ScanZilla.
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: "14px", sm: "16px" },
          fontWeight: "400",
          color: "black",
          mt: "17px",
          lineHeight: 1.8,
        }}
      >
        <strong>User Responsibilities:</strong>
        <br />
        You are responsible for ensuring the accuracy and legality of the
        information you input, including Amazon ASINs and product details. You
        agree not to misuse the service, including but not limited to:
        <ul>
          <li>Engaging in illegal activities</li>
          <li>Submitting inaccurate, misleading, or fraudulent data</li>
          <li>Attempting to gain unauthorized access to any system or data</li>
        </ul>
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: "14px", sm: "16px" },
          fontWeight: "400",
          color: "black",
          mt: "17px",
          lineHeight: 1.8,
        }}
      >
        <strong>Limitation of Liability:</strong>
        <br />
        In no event shall ScanZilla or its affiliates be liable for any damages,
        including direct, indirect, incidental, special, or consequential
        damages arising from the use of or inability to use the service.
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: "14px", sm: "16px" },
          fontWeight: "400",
          color: "black",
          mt: "17px",
          lineHeight: 1.8,
        }}
      >
        <strong>Termination:</strong>
        <br />
        We may suspend or terminate your access to ScanZilla if we believe you
        have violated these Terms of Service or engaged in any unlawful
        activities. Termination does not relieve you of any obligations or
        liabilities incurred prior to termination.
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: "14px", sm: "16px" },
          fontWeight: "400",
          color: "black",
          mt: "17px",
          lineHeight: 1.8,
        }}
      >
        <strong>Modifications:</strong>
        <br />
        ScanZilla reserves the right to modify, update, or discontinue the
        service at any time, with or without notice. Continued use of the
        service after such changes constitutes acceptance of the modified terms.
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: "14px", sm: "16px" },
          fontWeight: "400",
          color: "black",
          mt: "17px",
          lineHeight: 1.8,
        }}
      >
        <strong>Governing Law:</strong>
        <br />
        These Terms are governed by the laws of [Your Jurisdiction]. Any
        disputes arising under or in connection with these Terms of Service will
        be resolved in the courts of [Your Jurisdiction].
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: "14px", sm: "16px" },
          fontWeight: "400",
          color: "black",
          mt: "17px",
          lineHeight: 1.8,
        }}
      >
        <strong>Privacy Terms:</strong>
        <br />
        We take your privacy seriously. Please refer to our Privacy Policy for
        details on how we collect, use, and protect your personal data. By using
        ScanZilla, you consent to our data practices as outlined in our Privacy
        Policy.
        <br />
        <br />
        <strong>Data Collection:</strong>
        <br />
        We collect personal information such as your name, email address, and
        any other data you provide during registration or interaction with
        ScanZilla. Additionally, we may collect usage data, including your
        interactions with the web app and product data via Amazon ASINs.
        <br />
        <br />
        <strong>Use of Data:</strong>
        <br />
        We use your data to provide, maintain, and improve our services. This
        may include sending you updates, analyzing your inputs, and enhancing
        user experience.
        <br />
        <br />
        <strong>Data Protection:</strong>
        <br />
        We implement security measures to protect your data, but cannot
        guarantee absolute security. You are responsible for maintaining the
        confidentiality of your account and any personal information you share.
        <br />
        <br />
        <strong>Third-Party Sharing:</strong>
        <br />
        We do not sell, trade, or rent your personal data to third parties.
        However, we may share your information with trusted service providers
        who assist us in operating our service, subject to strict
        confidentiality agreements.
        <br />
        <br />
        <strong>Retention of Data:</strong>
        <br />
        We retain your personal data for as long as necessary to fulfill the
        purposes outlined in this Privacy Policy or as required by law.
        <br />
        <br />
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: "14px", sm: "16px" },
          fontWeight: "400",
          color: "black",
          mt: "17px",
          lineHeight: 1.8,
        }}
      >
        <strong>Contact Information:</strong>
        <br />
        If you have any questions or concerns regarding these Terms of Service
        or our Privacy Terms, please contact us at{" "}
        <a href="https://wa.link/54in2r" target="_blank">
          <Tooltip title="Whatsapp Support">
            <Box
              sx={{
                mt: "10px",
                cursor: "pointer",
                textDecoration: "underline",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                color: "black",
              }}
            >
              <img src={whatsappIcon} style={{ width: "20px" }} alt="" /> Or
              Contact Us Through Whatsapp
            </Box>
          </Tooltip>
        </a>
            .
      </Typography>
    </Box>
  );
};

export default TermOfServices;
