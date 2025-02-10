import React, { useState, useRef } from "react";
import Heading from "../../Components/Heading/Heading";
import { Typography, Box, Tooltip } from "@mui/material";
import whatsappIcon from "../../assets/images/contact.png";
import TOSSection from "../../Components/TOS/TOS";

import { Link } from "react-router-dom";
import CustomButton from "../../Components/CustomButton/CustomButton";
const TermOfServices = () => {
      const [isScroll, setScroll] = useState(false);
      const scrollBoxRef = useRef(null);
  

    const handleTop = () => {
      scrollBoxRef.current.scrollTo({
        top: document.getElementById("top"),
        behavior: "smooth",
    });
    }
  
  const Data3 = [
    {
      count: "3.1",
      content:
        "In order to use the Service, You need to purchase credits, and there are multiple credit packages available for Your choice, including the option to request for a custom scan solution. Payments for the Service are processed by third-party payment processors (the “**Payment Gateway**”). Payments processing with respect to the credit purchases will be subject to the terms, conditions and privacy policies of the applicable Payment Gateway. We are not responsible for any error by the Payment Gateway. ",
    },
    {
      count: "3.2",
      content:
        "Any taxes applicable to You regarding transactions made in accordance with these Terms and according to applicable law will be borne by You exclusively. ",
    },
    {
      count: "3.3",
      content:
        "Refunds. Any credits purchased are non-refundable, unless the Service has been discontinued by the Company at its sole discretion. Credits may be top-upped by the Use within the Service User account. for any inquiries please contact our sales or support teams at amz@blazecopywriting.com",
    },
    {
      count: "3.4",
      content:
        "**Changes to the Service and Pricing**. Company reserves the right to change, without prior notice, any feature of the Service and the pricing method or prices related to the Service at any time and without prior notice.",
    },
  ];

  const Data4 = [
    {
      count: "4.1",
      content:
        'We hereby grant You, the User, a limited, revocable, non-exclusive, non-transferable and non-sublicensable license to use the Service, solely for Your internal business purposes as an Amazon Seller, in relation to Your listings, to support Your own internal business needs (the "**Intended Purpose**"). The use of the Service is subject to Your compliance with any and all applicable laws, these Terms and the AI Platforms Terms. Users shall not, nor shall assist others or attempt, directly or indirectly, to (i) modify or create derivative works based on the Service; (ii) copy, frame or mirror any part of the Service, other than copying Outputs for Your own Intended Purpose ; (iii) compile or create any digests, manuals or otherwise use the Service and/or Content (as defined below) other than for Your own Intended Purpose; or (iv) reverse engineer the Service or any of its features.',
    },
    {
      count: "4.2",
      content:
        "The license granted herein is solely for personal, non-commercial use. Users are expressly prohibited from reselling, leasing, renting, or otherwise making available for commercial use, whether as a managed service or service bureau, any aspect of the Service, the Content or the AI Platforms technology powering the Service. Commercial use in this context refers to any use with the primary purpose of generating revenue, directly or indirectly. Any such commercial exploitation is strictly forbidden and constitutes a breach of these Terms.",
    },
  ];
  const Data7 = [
    {
      count: "7.1",
      content:
        "The Service has limitations and may not cover all possible scenarios or requests.",
    },
    {
      count: "7.2",
      content:
        "The Service is not intended to provide or replace any professional advice, such as professional marketing advice, keyword research, legal advice etc. Users should consult with appropriate professionals for specific concerns, especially when intending to rely on the Output (as defined below) to make any type of decisions or taking any commercial decisions or legal positions. ",
    },
    {
      count: "7.3",
      content:
        "Given the probabilistic nature of machine learning and AI, use of the Service may in some situations result in incorrect Output. It is User's responsibility to evaluate the accuracy of any Output. Users shall have no claim against the Company or any of the AI Platforms in this regard.",
    },
    {
      count: "7.4",
      content:
        "Due to the nature of machine learning, Output may not be unique across users and the Service may generate the same or similar Output for third parties; User shall have no claim against Us or any of the AI Platforms in this regard.",
    },
  ];

  const Data8 = [
    {
      count: "8.1",
      content:
        "You may provide or make available input to the Service, which may include text, prompt or any other content (for example, texts You intend to publish as part of Your listing) (“**Input**”) and receive responses generated by the Service(“**Output**”). The Output shall take the form of text generated by the Service, referring to issues detected and recommendations. The Input and Output shall collectively be referred herein as the Service “**Content**”.",
    },
    {
      count: "8.2",
      content:
        "As between You and Us, and to the extent permitted by applicable law, You retain all ownership rights in the Input.  All intellectual property rights and interests in and to the Output shall be owned by Us. You may use the Output in accordance with the terms of the License set forth in Section 2 hereunder. ",
    },
    {
      count: "8.3",
      content:
        "You acknowledge that due to the nature of machine learning, other Users may use the Service in a manner which may generate identical or similar Output. ",
    },
    {
      count: "8.4",
      content:
        "We will only use the Input as necessary to provide You with the Service, comply with applicable law, develop and improve the Services and enforce these Terms or AI Platform Terms. ",
    },
    {
      count: "8.5",
      content:
        "You are responsible for all Input and represent and warrant that You have all rights, licenses, and permissions required to provide such Input to the Service; without derogation from the foregoing, You warrant that the Input You provide through the Service complies with applicable laws, these Terms and the AI Platforms Terms . You are solely responsible for the use of the Outputs and evaluating the Output for accuracy and appropriateness for Your use case, including by utilizing human review as appropriate.",
    },
    {
      count: "8.6",
      content:
        "Users may not make any commercial use nor publish any Output.  ",
    },
  ];
  const Data10 = [
    {
      count1: "10.1",
      content:
        "Use the Service in any manner that supports, promotes or encourages any illegal or immoral activities or discrimination or misuses personal data.",
    },
    {
      count1: "10.2",
      content:
        "Use any malware, ransomware, viruses, or other malicious software in relation to the Service.",
    },
    {
      count1: "10.3",
      content: "Use the Service for providing third party with any advice.",
    },
    {
      count1: "10.4",
      content:
        "Challenging or otherwise commencing or conducting any proceedings against Us or the AI Platform.",
    },
    {
      count1: "10.5",
      content:
        "Use the Service in a way that infringes, misappropriates or violates any third party rights.",
    },
    {
      count1: "10.6",
      content:
        "Reverse assemble, reverse compile, decompile, translate or otherwise attempt to discover the source code or underlying components of AI Models, algorithms, and systems of the Service (except to the extent such restrictions are contrary to applicable law or to the specific license terms of a component). ",
    },
    {
      count1: "10.7",
      content: "Use any method to extract data from the Service.",
    },
    {
      count1: "10.8",
      content:
        "Use the Service or the Output in a manner that violates any applicable laws or AI Platform Terms.",
    },
    {
      count1: "10.9",
      content:
        "Use the Service or the Output in a manner that infringes, misappropriates, or otherwise violates any third party’s rights.",
    },
    {
      count1: "10.10",
      content:
        "Provide any personal information that is sensitive or special category personal information under applicable privacy protection laws, or personal information of children under 13 or the applicable age of digital consent or allow minors to use our Service without consent from their parent or guardian.",
    },
    {
      count1: "10.11",
      content:
        "Use Output to develop any artificial intelligence models that compete with the Service or AI Platform's products and services.",
    },
  ];

  const Data16 = [
    {
      count: "16.1",
      content:
        "NEITHER THE COMPANY NOR ANY OF ITS AFFILIATES OR LICENSORS WILL BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR EXEMPLARY DAMAGES, INCLUDING DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, OR DATA OR OTHER LOSSES, EVEN IF THE COMPANY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. ",
    },
    {
      count: "16.2",
      content:
        "THE AGGREGATE LIABILITY OF THE COMPANY, ITS AFFILATES OR LICENSOR UNDER THESE TERMS FOR ALL AGGREGATE USES BY A USER HEREUNDER SHALL NOT EXCEED ​​ ONE HUNDRED DOLLARS ($100). THE LIMITATIONS IN THIS SECTION APPLY ONLY TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW.",
    },
    {
      count: "16.3",
      content:
        "THE LIMITATIONS ON LIABILITY PROVIDED HEREIN REPRESENT FUNDAMENTAL AND MATERIAL CONDITION OF THESE TERMS. USER EXPLICITLY RECOGNIZES THAT THE COMPANY'S PROVISION OF THE SERVICE IS EXPRESSLY CONTINGENT UPON THE MUTUAL ACCEPTANCE AND INCORPORATION OF THESE SPECIFIED LIMITATIONS..",
    },
  ];
  const scrollToTop = () => {
    const topElement = document.getElementById("top");
    if (topElement) {
      topElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Box
    id="top"
    ref={scrollBoxRef}
      sx={{
        // padding: { xs: "16px", sm: "32px" },
        maxWidth: "1200px",
        margin: "0 auto",
        overflow: "hidden",
        height: "70vh",
        width: "100%",
        // marginTop: "15px",
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
        <strong>Last Updated:</strong> February, 6th 2025
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

      <TOSSection
        content={
          'These terms and conditions govern the use of Scanzilla (the “*Service*”) which is powered by artificial intelligence technology licensed to us by certain AI technology providers (the "*AI Platforms*"),and serves as a binding contract between you, a user using the Service (the "*User*" or "*You*"), and Tomer Levin (the "*Company*", "*Us*", "*We*" or similar wording), Who owns and operates the Service, available to You through our website scanzilla.blazecopywriting.com (the "*Website*"). '
        }
        sx={{
          mt:"17px"
        }}
      />

      <TOSSection
        content={
          'BY ACCESSING OR USING THE SERVICE, YOU HEREBY ACKNOWLEDGE YOU HAVE READ AND UNDERSTOOD THESE SERVICE TERMS OF USE (THE "*TERMS*") AND AGREE TO BE BOUND BY THEM.  IF YOU DO NOT AGREE TO THESE TERMS, YOU MAY NOT USE THE SERVICE. '
        }
        sx={{
          mt:"17px"
        }}
      />

      <TOSSection
        content={
          "NOTWITHSTANDING ANYTHING TO THE CONTRARY HEREIN, IN CASE ANY TERM OF THESE TERMS IS IN CONFLICT WITH MANDATORY TERMS OF AMAZON AND/OR ANY APPLICABLE AI PLATFORMS (AS DEFINED HEREIN), THE LATTER SHALL PREVAIL, AS BETWEEN YOU AND US."
        }
        sx={{
          mt:"17px"
        }}
      />
      <br />
      <h2>PART 1: Some information about the Service </h2>
      <TOSSection
        heading="The Service."
        content={
          "We created the Service as a tool for Merchants, available through the following link *scanzilla.blazecopywriting.com* to assist in identifying potential Amazon TOS violations and evaluating indexing performance within Amazon listings in a way that will help You get quick pointers related to Your listings, using our vast professional knowledge and experience, including based on resources mostly not available publicly, and  without having to browse through enormous amounts of information made available by Amazon. The Service is currently available for US listings, in English. *Please note however that although intended to help You get information conveniently, the Service is not a substitute for professional advice and keyword research and analysis, and We encourage You to review the official policies and seek professional advice for specific counseling tailored to Your needs.* "
        }
        count={"1."}
      />

      <TOSSection
        heading="Access to the Service:"
        content={
          "to Access the Service and receive the Outputs (defined below) You are required to register to the Service using Your email address. You may use Your Google account to sign in. "
        }
        count={"2."}
        sx={{
          mt: "17px",
        }}
      />

      <TOSSection
        heading="Payment."
        content={""}
        count={"3."}
        sx={{
          mt: "17px",
        }}
        row={true}
        children={Data3}
      />

      <TOSSection
        heading="License Grant and Limitations. "
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
        }}
      >
        <Typography
          sx={{
            lineHeight: 1.8,
            fontSize: { xs: "14px", sm: "16px" },
            fontWeight: "600 !important",
          }}
        >
          5.
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
          As an exception to section 4 above, some components or libraries of
          the Service, as detailed in the
          <Link
            style={{
              textDecoration: "underline",
              fontWeight: "400",
              color: "blue",
            }}
            to={"/OS-Library-List"}
          >
            {" "}
            OS Library List
          </Link>{" "}
          appended to these Terms, are subject to open-source licenses as
          applicable according to the list provided in the link.
        </Typography>
      </Box>

      <br />
      <h2>PART 2: Some important notifications about the Service underlying AI technology</h2>
      <Box
        sx={{
          display: "flex",
          gap: "10px",
          mt: "17px",
        }}
      >
        <Typography
          sx={{
            lineHeight: 1.8,
            fontSize: { xs: "14px", sm: "16px" },
            fontWeight: "600 !important",
          }}
        >
          6.
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
          <strong>AI Platform.</strong> The Service is powered AI models made
          available by Open AI, L.L.C ("<strong>Open AI</strong>") (the "
          <strong>AI Model</strong>"). Your use of the Service is also governed
          by OpenAI's{" "}
          <a
            style={{
              textDecoration: "underline",
              fontWeight: "400",
              color: "blue",
            }}
            href="https://openai.com/policies/service-terms/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Service Terms
          </a>
          ,{" "}
          <a
            style={{
              textDecoration: "underline",
              fontWeight: "400",
              color: "blue",
            }}
            href="https://openai.com/policies/sharing-publication-policy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sharing & Publication Policy
          </a>
          ,&nbsp;
          <a
            style={{
              textDecoration: "underline",
              fontWeight: "400",
              color: "blue",
            }}
            href="https://openai.com/policies/sharing-publication-policy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Usage Policies
          </a>
          , and any other guidelines or policies OpenAI may provide in writing
          (collectively, the "<strong>AI Platform Terms</strong>"). Please
          familiarize yourself with the AI Platform Terms to ensure compliance.
        </Typography>
      </Box>

      <TOSSection
        heading="Limitations of the Service."
        count={"7."}
        sx={{
          mt: "17px",
        }}
        row={true}
        children={Data7}
      />

      <br />
      <h2>PART 3: the Service Content and Ownership of IP </h2>

      <TOSSection
        heading="Content. "
        count={"8."}
        sx={{
          mt: "17px",
        }}
        row={true}
        children={Data8}
      />

      <TOSSection
        heading="Feedback:"
        count={"9."}
        sx={{
          mt: "17px",
        }}
        content="You may provide feedback regarding the Service to: amz@blazecopywriting.com (“*Feedback*”). The Feedback may include insights or comments regarding the performance, features that may be missing, bugs encountered during the use of the Service or other suggestions for modifications or improvements of the Service. By providing any Feedback You hereby grant Us a perpetual, irrevocable, non-exclusive, worldwide, fully paid, sub-licensable, assignable license to incorporate into the Service or otherwise use Your Feedback. You irrevocably waive any rights in such Feedback or any outcomes of such Feedback including any moral rights therein pursuant to applicable copyright law. We acknowledge that any Feedback is provided on an “as-is” basis with no warranties of any kind."
        row={false}
      />

      <br />
      <h2>PART 4: Do's and Don'ts </h2>

      <TOSSection
        heading="Acceptable Use Policy “AUP”:"
        content=" Without derogating from any other restrictions and limitations set forth herein, You hereby represent and warrant that You will not, nor will You authorize anyone on Your behalf, to:"
        count={"10."}
        sx={{
          mt: "17px",
        }}
        row={false}
        children={Data10}
      />

      <TOSSection
        heading="Eligibility."
        count={"11."}
        sx={{
          mt: "17px",
        }}
        content="You may not use the Service and may not accept these Terms if You are less than legal age to form a binding contract in the territory where You reside or at least 16 years old, if such legal age in Your territory is lower."
        row={false}
      />

      <br />
      <h2>PART 5: Privacy matters. For more info see our privacy notice.</h2>

      <TOSSection
        // heading="Eligibility."

        count={"12."}
        sx={{
          mt: "17px",
        }}
        content="You may be requested to provide certain personal information in relation to Your use of the Service. Any personal information that You provide will be processed by us in accordance with our https://scanzilla.blazecopywriting.com/privacy-notice and OpenAI's data usage policies as found in the AI Platform Terms."
        row={false}
      />

      <br />
      <h2>
        PART 6: Legal notices related to warranties, disclaimers, and risk
        allocation.{" "}
      </h2>

      <TOSSection
        heading="Disclaimer on Accuracy:"
        count={"13."}
        sx={{
          mt: "17px",
        }}
        content="While we strive to provide accurate and up-to-date information through the Service, we cannot guarantee the accuracy or completeness of the Service including any Output. Use the information at Your own risk and refer to professional advice and the official documentation available Through Your Seller Account."
        row={false}
      />

      <Box
        sx={{
          display: "flex",
          gap: "10px",
          mt: "17px",
        }}
      >
        <Typography
          sx={{
            lineHeight: 1.8,
            fontSize: { xs: "14px", sm: "16px" },
            fontWeight: "600 !important",
          }}
        >
          14.
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
          <strong>Restrictions and Trade Controls:</strong> The Service may
          solely be used in the jurisdictions that allow use of the AI Platform,
          as provided{" "}
          <a
            style={{
              textDecoration: "underline",
              fontWeight: "400",
              color: "blue",
            }}
            href="https://platform.openai.com/docs/supported-countries"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          . The Service may not be used in or for the benefit of (a) any U.S.
          embargoed country or territory by the US or Israeli government; or (b)
          any individual or entity with whom dealings are prohibited or
          restricted under applicable trade laws. The Service may not be used
          for any purpose prohibited by applicable trade laws, and Your Input
          may not include material or information that requires a government
          license for release or export.
        </Typography>
      </Box>

      <TOSSection
        heading="Warranty Disclaimers: "
        count={"15."}
        sx={{
          mt: "17px",
        }}
        content="Except for any express warranties and in addition to any other disclaimers provided herein these Terms, the Service is provided “as is”, and We and our affiliates and licensors hereby disclaim all warranties, express or implied, as to the operation of the Service, or the information, text, and Content thereof, or the use of the Output, including without limitation, all implied warranties of merchantability, fitness for a particular purpose and title, noninfringement, or quiet enjoyment, and any warranties arising out of course of dealing or trade usage. In addition and despite anything to the contrary that may be included or inferred in these Terms, we make no representations or warranties  (a) that use of the Service will be uninterrupted, error free, or secure, (b) that defects will be corrected, (c) that the Service and the Content will be accurate, or (d) that any position, act or omission You take or conduct, based on the Service and/or any Content will be acceptable to any third party and that it will not be challenged by such third party or by applicable law enforcement authorities."
        row={false}
      />

      <TOSSection
        heading="Limitations on Liability:"
        content=" Without derogating from any other restrictions and limitations set forth herein, You hereby represent and warrant that You will not, nor will You authorize anyone on Your behalf, to:"
        count={"16."}
        sx={{
          mt: "17px",
        }}
        row={false}
        children={Data16}
      />

      <TOSSection
        content="The Service may contain links to or be linked from other websites or pages which are not maintained by the Company. Links to third party websites are provided for Your convenience and information only. Third party websites are not under Company’s control and Company is not responsible for the content or accuracy of those sites or the products or services offered on or through those sites. The inclusion of a link through the Service or our Website or the reference from third party's website or pages to our Service does not imply Company’s endorsement of the third-party website, content, or the offerings included therein, nor that Company is affiliated with the third-party website’s owners or sponsors."
        count={"17."}
        sx={{
          mt: "17px",
        }}
        row={false}
      />
      <TOSSection
        content="You acknowledge and agree that we are not liable for any loss or damage which may be incurred by You as a result of the availability of those external sites, resources or advertisements, or as a result of any reliance placed by You on the completeness, accuracy or existence of any advertising, products or other materials on, or available from, such websites or resources. We recommend that You be aware when You leave our Service pages or our Website and read the terms and conditions and privacy policy of each website that You visit."
        count={"18."}
        sx={{
          mt: "17px",
        }}
        row={false}
      />

      <br />
      <h2>PART 6: General terms </h2>

      <TOSSection
        content="Changes to Terms: We reserve the right to update these Terms at any time. Any changes will be effective immediately upon posting on this page. Your continued use of the Service after the changes constitute acceptance of the revised terms."
        count={"19."}
        sx={{
          mt: "17px",
        }}
        row={false}
      />
      <TOSSection
        content="Termination of Access: We reserve the right to terminate or suspend User's access to the Service at our discretion, with or without notice, for any reason, including violation of these Terms of Use or the AI Platform's terms."
        count={"20."}
        sx={{
          mt: "17px",
        }}
        row={false}
      />

      <TOSSection
        content="Discontinuation of the Service. We may decide to discontinue the Service, with or without advance notice, at our sole discretion. If You have any unused credits at the time of our voluntary discontinuation of the Service, You are eligible to receive a refund accordingly."
        count={"21."}
        sx={{
          mt: "17px",
        }}
        row={false}
      />

      <TOSSection
        content="Miscellaneous. These Terms constitute the entire agreement between the parties concerning the subject matter hereof. These Terms shall be governed by the laws of the State of Israel without giving effect to any principles of conflicts of laws thereof, and the eligible courts in Tel Aviv, Israel shall have exclusive jurisdiction over all disputes between the parties related to these Terms and/or any dispute in relation thereto or the use of the Service. Company expressly reserves its right to assign or transfer these Terms and to delegate any of its obligations hereunder at its sole discretion. If any part of these Terms is found void and/or unenforceable, it will not affect the validity of the remainder of the Terms, which shall remain valid and enforceable according to its terms. The failure of Company to act with respect to a breach of these Terms by You or others shall not constitute a waiver and shall not limit Company’s rights with respect to such breach or any subsequent breaches."
        count={"22."}
        sx={{
          mt: "17px",
        }}
        row={false}
      />
      <TOSSection
        content="Contact Information: If You have any questions or concerns about these Terms of Use or the Service, please contact us at *amz@blazecopywriting.com*.  "
        count={"23."}
        sx={{
          mt: "17px",
        }}
        row={false}
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
          }}
          ButtonText="Back to Top"
          color={"white"}
          fullWidth={false}
          variant="contained"
          padding
          onClick={handleTop}
        />
      </Box>
    </Box>
  );
};

export default TermOfServices;
