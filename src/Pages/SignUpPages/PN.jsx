import React, { useState, useRef } from "react";
import Heading from "../../Components/Heading/Heading";
import { Typography, Box, Tooltip } from "@mui/material";
import whatsappIcon from "../../assets/images/contact.png";
import TOSSection from "../../Components/TOS/TOS";
import "./PN.css";
import { Link } from "react-router-dom";
import CustomButton from "../../Components/CustomButton/CustomButton";
import CustomButton2 from "../../Components/CustomButton/CustomButton2";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";
import { Element } from "react-scroll";
import logo from "../../assets/images/sample.webp";
import Footer1 from "../../Components/Footer/Footer1";

const PN = () => {
  const [isScroll, setScroll] = useState(false);
  const scrollBoxRef = useRef(null);
  const navigate = useNavigate();

  const handleTop = () => {
    scroller.scrollTo("top-section", {
      duration: 800,
      smooth: "easeInOutQuad",
    });
  };

  const tableData = [
    {
      firstColumn: 'When you fill out a "contact us" form on the Website',
      secondColumn: "Name, email address,  content of your message.",
      thirdColumn:
        "To contact you in relation to your message to send you marketing communications regarding our Services (Subject to your consent, if required under applicable law,) to send newsletters and updates, subject to applicable laws",
      fourthColumn: "You consent",
    },
    {
      firstColumn: 'When you click on "schedule a meeting"',
      secondColumn:
        "Your name, email address, and title of the requested meeting ",
      thirdColumn:
        "To allow you to choose your preferred time for a meeting with us based on our availability",
      fourthColumn: "Our legitimate business interest",
    },
    {
      firstColumn: "When you sign up for our marketing communications",
      secondColumn: "Email address",
      thirdColumn:
        "to send you marketing communications regarding our Services (Subject to your consent, if required under applicable law,), to send newsletters and updates, subject to applicable laws. ",
      fourthColumn: "Your consent",
    },
    {
      firstColumn: "When you make a purchase of our Services",
      secondColumn:
        "First and last name, email address, shipping address, billing address, phone no., any data you may provide in free text (optional) We won't have access to your credit card or bank account information.",
      thirdColumn:
        "To process your purchase in our accounting and inventory systems To handle warranty issues or returns/replacements To record your consent to our terms and conditions of engagement.To provide you with technical support and resolve issues. To send you updates or other transactional messages regarding our services ",
      fourthColumn: "You consent",
    },
    {
      firstColumn: "",
      secondColumn: "",
      thirdColumn:
        "To contact you occasionally with marketing communications regarding our Services, to send promotions, newsletters and event invitations subject to applicable laws (for example, where required, subject to your consent). ",
      fourthColumn: "",
    },
    {
      firstColumn:
        "When you sign up and login to our Service and when you edit your profile and/or top up your credits  ",
      secondColumn: "email address first and last name, payment method details",
      thirdColumn:
        "To sign you up to our services and set you up in our back end systems. To allow your use of the Service To process payments for credits and to  connect your Credits to your user in the Service To allow the functionality of our Service",
      fourthColumn: "",
    },
  ];
  const Data2 = [
    {
      count: "2.1",
      content:
        "No Sale to Third Parties. We do not, and will not, sell any of your Personal Data to any third party for advertising, marketing or any other purpose. ",
    },
    {
      count: "2.2",
      content:
        "Service Providers: we employ other companies and people to perform tasks on our behalf and need to share your information with them in order to provide the services to us. The categories of third party recipients of the Personal Data from us are as follows: cloud hosting services, web page building tools, payment gateway and management services, messaging platforms. ",
    },
    {
      count: "2.3",
      content:
        "Our service providers do not have any right to use your Personal Data collected from our Website and Service beyond what is necessary for the purpose of facilitating the functionality thereof. ",
    },
    {
      count: "2.4",
      content:
        "Compliance with the Law: We may disclose your Personal Data if we believe it’s necessary in order to comply with the law, such as to comply with a subpoena, regulation or legal request, respond to a government request, to address fraud or security issues, to protect the safety of any person, to enforce our agreements with you; to investigate, prevent, or take other action regarding illegal activity, suspected fraud or other wrongdoing or to protect our own rights or property. This includes sharing such information with our legal counsels. If you are located in the EU, we may only do so based on legal requirements specified above of EU authorities. ",
    },
    {
      count: "2.5",
      content:
        "Business Transfers: If we are in a bankruptcy, merger, acquisition, reorganization or sale of assets, your information may be transferred as part of that transaction to a successor in interest and may be accessed and reviewed by the applicable legal authorities as well as legal counsels and other professional counsels involved such as accountants, and other officers of the government or of the applicable judiciary instance. In addition, your information may be provided for review in the course of due diligence for an investment or other financing of our Company.",
    },
    {
      count: "2.6",
      content:
        "Anonymized Information: We may provide third parties with aggregated but anonymized information and analytics about our customers however, before we do so, we will make sure that it does not identify you.",
    },
  ];

  const Data3 = [
    {
      count: "3.1",
      content:
        "The Website and the Service provided may be operated in countries other than your own location, and your Personal Data may be accessed and/or processed from and/or transferred to countries other than your own location. We may do this where data is accessed/processed:",
    },
    {
      count: "3.1.1",
      content:
        "By Company and its affiliated entities for operational, administrative, compliance purposes or customer support teams in our various locations; ",
    },
    {
      count: "3.1.2",
      content:
        "By our service providers, for the purposes we specified under section 2.2, “Service Providers”. ",
    },
  ];

  const Data1 = [
    {
      count: "1.1",
      content:
        "The following table describes what personal data we collect through the Website and Service, and for what purposes it may be processed: ",
    },
  ];
  const Data1Con = [
    {
      count: "1.2",
      content:
        "You are not obliged under any applicable law to provide us any of the above information and you may be able to opt not to disclose your personal data to Company. However, not providing Company with certain data may mean that we cannot provide you with certain functionalities or process any requests or in some cases provide the Service altogether. It is your responsibility to ensure that all personal data submitted to Company is correct.",
    },
    {
      count: "1.3",
      content:
        "In addition to the above uses of your personal data, we will also process your personal data for the following purposes: ",
    },
    {
      count: "1.3.1",
      content:
        "We use all the above Personal Data to operate, maintain, and provide to you the Website and Service and to provide you with the support and services as requested by you.",
    },
    {
      count: "1.3.2",
      content:
        "To prevent, detect and fight fraud or other illegal or unauthorized activities.",
    },
    {
      count: "1.3.3",
      content:
        "To ensure legal compliance – from our side (to legal requirements that apply to us and to our obligations under the Terms of Use) and from your side (Compliance with legal requirements applicable to you and with the Terms of Use).",
    },
    {
      count: "1.4",
      content:
        "We will not use your Personal Data for any personal profiling and automated decision making regarding you based on such profiling. ",
    },
    {
      count: "1.5",
      content:
        "We limit access by our employees to your information only to those who were specifically authorized by the Company to access your information, as part of their job. ",
    },
    {
      count: "1.6",
      content:
        "We use anonymized, aggregate data, in order to gain insight on how you and other users use the Website and Service and try and improve them, as well as to assess, plan and monitor our marketing and advertisements activities.",
    },
  ];

  const Data4 = [
    {
      count: "4.1",
      content:
        "**Depending on your location and on the laws that are applicable to you,** you may be entitled to various rights in relation to your Personal Data, as follows:",
    },
    {
      count: "4.2",
      content:
        "The right to access – You have the right to request Company for copies of your personal data, which includes the right to obtain confirmation as to whether or not personal data concerning you are being processed and, where that is the case, access to the Personal Data and the purposes of the processing; categories of Personal Data concerned; recipients or categories of recipient to whom the Personal Data have been or will be disclosed; where possible, the envisaged period for which the Personal Data will be stored; the existence of the right to request rectification or erasure of Personal Data or restriction of processing of Personal Data or to object to such processing; the right to lodge a complaint with a supervisory authority; where the Personal Data are not collected from the data subject, any available information as to their source; the existence of automated decision-making, including profiling; the appropriate safeguards relating to the transfer of your personal data outside the EEA. We may charge you a small fee for this service under certain conditions.",
    },
    {
      count: "4.3",
      content:
        "The right to rectification – You have the right to request that Company correct any information you believe is inaccurate. You also have the right to request Company to complete the information you believe is incomplete.",
    },
    {
      count: "4.4",
      content:
        "The right to erasure – You have the right to request that Company erase your Personal Data, under certain conditions.",
    },
    {
      count: "4.5",
      content:
        "The right to restrict processing – You have the right to request that Company restrict the processing of your Personal Data, when: (a) you contest the accuracy of your Personal Data, for a period allowing Company to verify the accuracy of said data; (b) if you believe Personal Data has been unlawfully processed and you wish to restrict processing rather than delete it; (c) Company no longer needs the Personal Data but you require to keep it in order to establish, exercise or defend a legal claim; or (d) you have exercised your right to object the processing (below) for a period allowing Company to consider whether your legitimate grounds override those of Company.  ",
    },
    {
      count: "4.6",
      content:
        "The right to object to processing – You have the right to object to the processing of your Personal Data at any time – this means you have the right to stop or prevent Company from processing your Personal Data (it could be in relation to part or all of your Personal Data, and for part or all of the processing purposes). When relating to processing for marketing purposes, you have an absolute right to object; while for other purposes, the existence of the right depends on what lawful basis the processing relies on.",
    },
    {
      count: "4.7",
      content:
        "The right to data portability – You have the right to request that Company transfer the data that we have collected to another organization, or directly to you, under certain conditions.",
    },
    {
      count: "4.8",
      content:
        "If allowed by applicable laws, you have the right to withdraw your consent at any time when Company processes your Personal Data based on your consent on any of these rights. However, withdrawal does not affect the legitimacy and effectiveness of how we process your personal data based on your consent before the withdrawal is made; nor does it affect any data processing based on another lawful basis other than your consent.",
    },
  ];
  const Data5 = [
    {
      count: "5.1",
      content:
        "We use appropriate physical, management, and technical measures to protect your data from unauthorized access, disclosure, use, modification, damage, or loss. We also provide training on security and privacy protection for employees to raise their awareness of Personal Data protection. However, please note that no security measure is perfect, therefore, you should take special care in deciding what information you disclose.",
    },
  ];
  const Data6 = [
    {
      count: "6.1",
      content:
        "We will retain your Personal Data for no longer than is necessary for the purposes stated in this Policy, unless otherwise extending the retention period is required or permitted by law or subject to our retention policies as may be in place from time to time. ",
    },

    {
      count: "6.2",
      content:
        "The standards Company uses to determine the retention period are as follows: the time required to retain Personal Data to fulfill business purposes, including providing the Service; maintaining corresponding transaction and business records; controlling and improving the performance and quality of the Website and Service; handling possible user queries or complaints and locating problems; whether the user agrees to a longer retention period; and whether the laws, contracts, and other equivalencies have special requirements for data retention.",
    },
  ];
  const Data7 = [
    {
      count: "7.1",
      content:
        "We may update our Privacy Notice from time to time. We may notify you through different channels, for example, posting a notice on our Website or sending you direct notification. Regardless of the manner of notification, the binding Privacy Notice  version shall be the most updated version published on the Website. ",
    },
    {
      count: "7.1.1",
      content:
        "You are advised to review this Privacy Notice periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.",
    },
  ];

  const Data9 = [
    {
      count: "9.1",
      content:
        "If you have any questions or suggestions, to exercise any of your rights, or if you have any other questions or complaints about our use of your PERSONAL Data and your privacy please contact us at amz@blazecopywriting.com. ",
    },
    {
      count: "9.2",
      content:
        "Where your personal data is processed by Company in accordance with this Privacy Notice, Company is the controller of the related personal data and may be contacted via amz@blazecopywriting.com.",
    },
  ];

  const scrollToTop = () => {
    const topElement = document.getElementById("top");
    if (topElement) {
      topElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Box>
      <Element name="top-section"></Element>

      <Box
        id="top"
        ref={scrollBoxRef}
        sx={{
          // padding: { xs: "16px", sm: "32px" },
          maxWidth: "1200px",
          margin: "0 auto",

          width: "100%",
          // marginTop: "15px",
          display: "flex",

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
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <CustomButton2
            border="2px solid #1A0049"
            borderRadius="10px"
            background="#1A0049"
            hoverBg="white"
            hovercolor="#1A0049"
            buttonTextStyle={{}}
            buttonStyle={{
              padding: {
                xs: "7px 20px",
              },
            }}
            ButtonText="Sign in"
            color={"white"}
            fullWidth={false}
            variant="contained"
            padding
            onClick={() => navigate("/")}
          />
          <Box
            sx={{
              // border:"2px solid red",
              width: "90px",
              
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#333333",
              cursor: "pointer",
              transition: ".3s ease-in",
              ":hover": {
                color: "white",
                bgcolor: "#1A0049",
              },
            }}
            //  onClick={()=>navigate('/')}
          >
            <img
              src={logo}
              style={{ objectFit: "cover", width: "90px" }}
              alt="logo"
            />
            
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: "20px",
          }}
        >
          <Typography
            sx={{
              color: "#333333",
              fontWeight: "600",
              fontSize: {
                sm: "40px",
                xs: "26px",
              },
            }}
          >
            Privacy Notice
          </Typography>
          
        </Box>
        <Typography
          sx={{
            fontSize: { xs: "14px", sm: "16px" },
            fontWeight: "400",
            color: "black",
            mt: "0px",
            lineHeight: 1.8,
          }}
        >
          <strong>Effective date:</strong> February, 6th 2025
        </Typography>
        {/* <Typography
        sx={{
          fontSize: { xs: "14px", sm: "16px" },
          fontWeight: "400",
          color: "black",
          mt: "17px", 
          lineHeight: 1.8,
        }}
      >
        <strong>Acceptance of Terms:</strong> By accessing and using ScanZilla, you agree to abide by these Terms of
        Service. If you do not agree to these terms, please refrain from using
        our service.
      </Typography> */}
        <Box
          sx={{
            display: "flex",
            gap: "10px",
            mt: "17px",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "14px", sm: "16px" },
              fontWeight: "400",
              color: "black",
              //   mt: '17px',
              lineHeight: 1.8,
            }}
          >
            This Privacy Notice states our policy and provides information
            regarding how we process Personal Data collected through the Service
            and our Website (“<strong>this Notice</strong>“). Capitalized terms
            not otherwise defined herein, shall have the meaning assigned to
            them in the Scanzilla Terms of Use available here{" "}
            <Link
              style={{
                textDecoration: "underline",
                fontWeight: "400",
                color: "blue",
              }}
              to={"/terms-of-service"}
            >
              {" "}
              https://scanzilla.blazecopywriting.com/terms-of-service
            </Link>
            . This Privacy Notice is hereby incorporated into our Terms of Use
            and is an integral part thereof.
          </Typography>
        </Box>
        <br />
        <h2>Contents:</h2>
        <TOSSection
          content={
            "What Personal Data we collect, how, and how is it being processed"
          }
          count={"1."}
          sx={{
            ml: "15px",
          }}
        />
        <TOSSection
          content={"How we share your Personal Data"}
          count={"2."}
          sx={{
            ml: "15px",
          }}
        />
        <TOSSection
          content={"Data transfers and global processing"}
          count={"3."}
          sx={{
            ml: "15px",
          }}
        />
        <TOSSection
          content={"Data subject rights"}
          count={"4."}
          sx={{
            ml: "15px",
          }}
        />
        <TOSSection
          content={"Cookies and similar technologies"}
          count={"5."}
          sx={{
            ml: "15px",
          }}
        />
        <TOSSection
          content={"Security of processing"}
          count={"6."}
          sx={{
            ml: "15px",
          }}
        />
        <TOSSection
          content={"Data retention"}
          count={"7."}
          sx={{
            ml: "15px",
          }}
        />
        <TOSSection
          content={"Changes to this privacy notice"}
          count={"8."}
          sx={{
            ml: "15px",
          }}
        />
        <TOSSection
          content={"General"}
          count={"9."}
          sx={{
            ml: "15px",
          }}
        />

        <TOSSection
          heading="What Personal Data We Collect, How, and How is it Being Processed"
          count={"1."}
          sx={{
            mt: "17px",
          }}
          row={true}
          children={Data1}
        />
        <br />
        <table>
          <thead>
            <tr>
              <th style={{ border: "1px solid black" }}>
                Instance in which personal data is collected
              </th>
              <th style={{ border: "1px solid black" }}>
                Categories of personal data that are processed
              </th>
              <th style={{ border: "1px solid black" }}>
                Purposes of processing{" "}
              </th>
              <th style={{ border: "1px solid black" }}>
                Lawful Basis under GPDR
              </th>
            </tr>
          </thead>
          <tbody style={{ borderCollapse: "hidden" }}>
            {tableData.map((item, ind) => (
              <tr>
                <td style={{ border: "1px solid black" }}>
                  {item.firstColumn}
                </td>
                <td style={{ border: "1px solid black" }}>
                  {item.secondColumn}
                </td>

                <td style={{ border: "1px solid black" }}>
                  {item.thirdColumn}
                </td>

                <td style={{ border: "1px solid black" }}>
                  {item.fourthColumn}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <TOSSection
          heading=""
          count={""}
          sx={{
            mt: "17px",
            ml: "20px",
          }}
          row={true}
          children={Data1Con}
        />
        <TOSSection
          heading="How we Share Your Personal Data"
          content={""}
          count={"2."}
          sx={{
            mt: "17px",
          }}
          row={true}
          children={Data2}
        />
        <TOSSection
          heading="Data Transfers and Global Processing"
          content={""}
          count={"3."}
          sx={{
            mt: "17px",
          }}
          row={true}
          children={Data3}
        />
        <TOSSection
          heading="Data Subject Rights"
          count={"4."}
          sx={{
            mt: "17px",
          }}
          row={true}
          children={Data4}
        />

        <Box
          sx={{
            display: "flex",
            gap: "10px",
            mt: "17px",
            ml: "30px",
          }}
        >
          <Typography
            sx={{
              lineHeight: 1.8,
              fontSize: { xs: "14px", sm: "16px" },
              fontWeight: "400 !important",
            }}
          >
            4.9
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", sm: "16px" },
              fontWeight: "400",
              color: "black",
              //   mt: '17px',
              lineHeight: 1.8,
            }}
          >
            You may exercise these rights to the extent these rights apply to
            you by emailing Company to:
            <Link
              style={{
                textDecoration: "underline",
                fontWeight: "400",
                color: "blue",
              }}
              to={"https://mailto:amz@blazecopywriting.com"}
            >
              {" "}
              amz@blazecopywriting.com
            </Link>{" "}
            We will undertake to respond to your request within the applicable
            time frame prescribed by applicable law. Although we will make
            reasonable efforts to accommodate your requests, in some
            circumstances we may deem your request unfounded or not eligible
            under applicable law. In such instances we reserve the right to
            refuse your request. We shall require, as pre-requisite to
            fulfilling any request, to verify your identity which we may do by
            asking you to provide certain information or identification to
            ensure that all data subjects’ privacy is protected.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "10px",
            mt: "17px",
            ml: "30px",
          }}
        >
          <Typography
            sx={{
              lineHeight: 1.8,
              fontSize: { xs: "14px", sm: "16px" },
              fontWeight: "400 !important",
            }}
          >
            4.10
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", sm: "16px" },
              fontWeight: "400",
              color: "black",
              //   mt: '17px',
              lineHeight: 1.8,
            }}
          >
            If you think that the way we process your Personal Data does not
            comply with applicable data protection laws, you are invited to
            contact us and we will consider your request, but in any event you
            may contact the relevant competent data protection authority.
          </Typography>
        </Box>

        <TOSSection
          heading="Security of Processing"
          count={"5."}
          sx={{
            mt: "17px",
          }}
          row={true}
          children={Data5}
        />
        <TOSSection
          heading="Data retention"
          count={"6."}
          sx={{
            mt: "17px",
          }}
          row={true}
          children={Data6}
        />

        <TOSSection
          heading="Changes to This Privacy Notice"
          count={"7."}
          sx={{
            mt: "17px",
          }}
          row={true}
          children={Data7}
        />
        <TOSSection
          heading="California and Delaware “do not track” Disclosures"
          count={"8."}
          sx={{
            mt: "17px",
          }}
          content="We do not monitor or respond to Do Not Track browser requests. Hence please ensure to change any settings of your browser and/or our Services, whenever you wish cookies to cease."
          row={false}
        />

        <TOSSection
          heading="General"
          content=" Without derogating from any other restrictions and limitations set forth herein, You hereby represent and warrant that You will not, nor will You authorize anyone on Your behalf, to:"
          count={"9."}
          sx={{
            mt: "17px",
          }}
          row={false}
          children={Data9}
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: "40px",
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
                xs: "7px 40px",
              },
              marginBottom: "25px",
            }}
            ButtonText="Back to Top"
            color={"white"}
            fullWidth={false}
            variant="contained"
            padding
            onClick={() => handleTop()}
          />
        </Box>
      </Box>
     
    </Box>
  );
};

export default PN;
