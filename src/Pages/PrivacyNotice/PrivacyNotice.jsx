import React from 'react';
import Heading from '../../Components/Heading/Heading';
import { Typography, Box } from '@mui/material';

const PrivacyNotice = () => {
  return (
    <Box  sx={{
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
      }}>
      

      <Typography
        sx={{
          fontSize: { xs: '14px', sm: '16px' },
          fontWeight: '400',
          color: 'black',
          mt: '0px',
          lineHeight: 1.8
        }}
      >
        <strong>Effective Date:</strong> January, 01, 2025
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: '14px', sm: '16px' },
          fontWeight: '400',
          color: 'black',
          mt: '17px',
          lineHeight: 1.8
        }}
      >
        <strong>Introduction:</strong><br />
        At ScanZilla, we value your privacy and are committed to safeguarding your personal information. This Privacy Notice explains how we collect, use, store, and protect your data when you use our website and services. By using ScanZilla, you agree to the practices outlined in this notice.
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: '14px', sm: '16px' },
          fontWeight: '400',
          color: 'black',
          mt: '17px',
          lineHeight: 1.8
        }}
      >
        <strong>1. Information We Collect:</strong><br />
        We collect both personal information and usage data to provide a seamless and personalized experience. The types of information we collect are as follows:
        <ul>
          <li><strong>Personal Information:</strong> Information you provide directly to us, such as your name, email address, and account details when you register or interact with our service.</li>
          <li><strong>Usage Data:</strong> Data about how you interact with ScanZilla, such as session logs, interactions, and analytics related to your use of the app.</li>
          <li><strong>Amazon Data:</strong> Product details like titles, descriptions, bullet points, and ASINs which you provide or we automatically fetch based on your input.</li>
        </ul>
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: '14px', sm: '16px' },
          fontWeight: '400',
          color: 'black',
          mt: '17px',
          lineHeight: 1.8
        }}
      >
        <strong>2. How We Use Your Information:</strong><br />
        The information we collect is used for the following purposes:
        <ul>
          <li><strong>Provide Services:</strong> To offer and improve ScanZilla, analyze product details, and ensure you have a smooth user experience.</li>
          <li><strong>Customer Support:</strong> To respond to your inquiries, troubleshoot issues, and provide support.</li>
          <li><strong>Service Improvement:</strong> To enhance and optimize the platform’s functionality, security, and features based on user interaction and feedback.</li>
          <li><strong>Communication:</strong> To send you updates, newsletters, or important notices about the service, and to notify you about new features or changes.</li>
        </ul>
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: '14px', sm: '16px' },
          fontWeight: '400',
          color: 'black',
          mt: '17px',
          lineHeight: 1.8
        }}
      >
        <strong>3. Data Sharing and Disclosure:</strong><br />
        We do not sell, rent, or trade your personal information to third parties. However, we may share your data in the following situations:
        <ul>
          <li><strong>Service Providers:</strong> Trusted third-party providers who help us operate and improve our services (e.g., payment processors, cloud hosting, and analytics providers).</li>
          <li><strong>Legal Compliance:</strong> If required by law, we may disclose your data to comply with legal processes, regulations, or court orders.</li>
          <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your data may be transferred as part of the transaction, subject to applicable privacy regulations.</li>
        </ul>
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: '14px', sm: '16px' },
          fontWeight: '400',
          color: 'black',
          mt: '17px',
          lineHeight: 1.8
        }}
      >
        <strong>4. Data Retention:</strong><br />
        We retain your personal data only for as long as necessary to fulfill the purposes outlined in this Privacy Notice or as required by law. If you wish to delete your account or request the removal of your data, please contact us at [insert contact email].
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: '14px', sm: '16px' },
          fontWeight: '400',
          color: 'black',
          mt: '17px',
          lineHeight: 1.8
        }}
      >
        <strong>5. Data Security:</strong><br />
        We implement a variety of security measures to safeguard your personal information from unauthorized access, alteration, or disclosure. These include encryption, secure servers, and access control. However, please understand that no method of data transmission over the internet is 100% secure, and we cannot guarantee absolute security.
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: '14px', sm: '16px' },
          fontWeight: '400',
          color: 'black',
          mt: '17px',
          lineHeight: 1.8
        }}
      >
        <strong>6. Your Rights and Choices:</strong><br />
        As a user, you have several rights regarding your personal information, including:
        <ul>
          <li><strong>Access:</strong> You can request access to the personal data we hold about you.</li>
          <li><strong>Correction:</strong> You can update or correct your information at any time.</li>
          <li><strong>Deletion:</strong> You can request the deletion of your account or personal data.</li>
          <li><strong>Opt-Out:</strong> You can opt-out of receiving marketing communications by following the unsubscribe link in our emails or contacting us directly.</li>
        </ul>
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: '14px', sm: '16px' },
          fontWeight: '400',
          color: 'black',
          mt: '17px',
          lineHeight: 1.8
        }}
      >
        <strong>7. Cookies and Tracking Technologies:</strong><br />
        We use cookies and similar technologies to enhance your experience with ScanZilla. These technologies allow us to personalize content, analyze usage patterns, and improve the service. You can control cookies through your browser settings, but disabling them may impact your experience.
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: '14px', sm: '16px' },
          fontWeight: '400',
          color: 'black',
          mt: '17px',
          lineHeight: 1.8
        }}
      >
        <strong>8. Third-Party Links:</strong><br />
        Our website and services may contain links to third-party websites. We are not responsible for the privacy practices or content of these sites. We recommend reviewing their privacy policies before providing any personal information.
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: '14px', sm: '16px' },
          fontWeight: '400',
          color: 'black',
          mt: '17px',
          lineHeight: 1.8
        }}
      >
        <strong>9. Changes to This Privacy Notice:</strong><br />
        ScanZilla reserves the right to update or modify this Privacy Notice at any time. When changes are made, the "Effective Date" at the top of this page will be updated. We encourage you to review this page periodically for any updates.
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: '14px', sm: '16px' },
          fontWeight: '400',
          color: 'black',
          mt: '17px',
          lineHeight: 1.8
        }}
      >
        <strong>10. Contact Information:</strong><br />
        If you have any questions or concerns regarding this Privacy Notice or your personal data, please contact us at [insert contact email]. We are happy to assist you with any privacy-related requests.
      </Typography>
    </Box>
  );
}

export default PrivacyNotice;
