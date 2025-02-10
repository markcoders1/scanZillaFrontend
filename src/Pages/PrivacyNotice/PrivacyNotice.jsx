import React, { useState, useRef } from "react";
import Heading from "../../Components/Heading/Heading";
import { Typography, Box, Tooltip } from "@mui/material";
import whatsappIcon from "../../assets/images/contact.png";
import TOSSection from "../../Components/TOS/TOS";
import "./PrivacyNotice.css";
import { Link } from "react-router-dom";
import CustomButton from "../../Components/CustomButton/CustomButton";
const PrivacyNotice = () => {
  const [isScroll, setScroll] = useState(false);
  const scrollBoxRef = useRef(null);

  const handleTop = () => {
    scrollBoxRef.current.scrollTo({
      top: document.getElementById("top"),
      behavior: "smooth",
    });
  };

  const tableData = [
    {
      firstColumn : 'When you fill out a "contact us" form on the Website',
      secondColumn : 'Name, email address,  content of your message.',
      thirdColumn : 'To contact you in relation to your message to send you marketing communications regarding our Services (Subject to your consent, if required under applicable law,) to send newsletters and updates, subject to applicable laws',
      fourthColumn : 'You consent',
    } ,
    {
      firstColumn : 'When you click on "schedule a meeting"',
      secondColumn : 'Your name, email address, and title of the requested meeting ',
      thirdColumn : 'To allow you to choose your preferred time for a meeting with us based on our availability',
      fourthColumn : 'Our legitimate business interest',
    } ,
    {
      firstColumn : 'When you sign up for our marketing communications',
      secondColumn : 'Email address',
      thirdColumn : 'to send you marketing communications regarding our Services (Subject to your consent, if required under applicable law,), to send newsletters and updates, subject to applicable laws. ',
      fourthColumn : 'Your consent',
    } ,
    {
      firstColumn : 'When you make a purchase of our Services',
      secondColumn : 'First and last name, email address, shipping address, billing address, phone no., any data you may provide in free text (optional) We won\'t have access to your credit card or bank account information.',
      thirdColumn : 'To process your purchase in our accounting and inventory systems To handle warranty issues or returns/replacements To record your consent to our terms and conditions of engagement.To provide you with technical support and resolve issues. To send you updates or other transactional messages regarding our services ',
      fourthColumn : 'You consent',
    } ,
    {
      firstColumn : '',
      secondColumn : '',
      thirdColumn : 'To contact you occasionally with marketing communications regarding our Services, to send promotions, newsletters and event invitations subject to applicable laws (for example, where required, subject to your consent). ',
      fourthColumn : '',
    } ,
    {
      firstColumn : 'When you sign up and login to our Service and when you edit your profile and/or top up your credits  ',
      secondColumn : 'email address first and last name, payment method details',
      thirdColumn : 'To sign you up to our services and set you up in our back end systems. To allow your use of the Service To process payments for credits and to  connect your Credits to your user in the Service To allow the functionality of our Service',
      fourthColumn : '',
    } ,
    
  ]
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
        'The following table describes what personal data we collect through the Website and Service, and for what purposes it may be processed: ',
    },
 
  ];
  const Data1Con = [
    {
      count: "1.2",
      content:
        'You are not obliged under any applicable law to provide us any of the above information and you may be able to opt not to disclose your personal data to Company. However, not providing Company with certain data may mean that we cannot provide you with certain functionalities or process any requests or in some cases provide the Service altogether. It is your responsibility to ensure that all personal data submitted to Company is correct.',
    },
    {
      count: "1.3",
      content:
        'In addition to the above uses of your personal data, we will also process your personal data for the following purposes: ',
    },
    {
      count: "1.3.1",
      content:
        'We use all the above Personal Data to operate, maintain, and provide to you the Website and Service and to provide you with the support and services as requested by you.',
    },
    {
      count: "1.3.2",
      content:
        'To prevent, detect and fight fraud or other illegal or unauthorized activities.',
    },
    {
      count: "1.3.3",
      content:
        'To ensure legal compliance – from our side (to legal requirements that apply to us and to our obligations under the Terms of Use) and from your side (Compliance with legal requirements applicable to you and with the Terms of Use).',
    },
    {
      count: "1.4",
      content:
        'We will not use your Personal Data for any personal profiling and automated decision making regarding you based on such profiling. ',
    },
    {
      count: "1.5",
      content:
        'We limit access by our employees to your information only to those who were specifically authorized by the Company to access your information, as part of their job. ',
    },
    {
      count: "1.6",
      content:
        'We use anonymized, aggregate data, in order to gain insight on how you and other users use the Website and Service and try and improve them, as well as to assess, plan and monitor our marketing and advertisements activities.',
    },
  ];


  const Data4 = [
    {
      count: "4.1",
      content:
        '**Depending on your location and on the laws that are applicable to you,** you may be entitled to various rights in relation to your Personal Data, as follows:',
    },
    {
      count: "4.2",
      content:
        'The right to access – You have the right to request Company for copies of your personal data, which includes the right to obtain confirmation as to whether or not personal data concerning you are being processed and, where that is the case, access to the Personal Data and the purposes of the processing; categories of Personal Data concerned; recipients or categories of recipient to whom the Personal Data have been or will be disclosed; where possible, the envisaged period for which the Personal Data will be stored; the existence of the right to request rectification or erasure of Personal Data or restriction of processing of Personal Data or to object to such processing; the right to lodge a complaint with a supervisory authority; where the Personal Data are not collected from the data subject, any available information as to their source; the existence of automated decision-making, including profiling; the appropriate safeguards relating to the transfer of your personal data outside the EEA. We may charge you a small fee for this service under certain conditions.',
    },
    {
      count: "4.3",
      content:
        'The right to rectification – You have the right to request that Company correct any information you believe is inaccurate. You also have the right to request Company to complete the information you believe is incomplete.',
    },
    {
      count: "4.4",
      content:
        'The right to erasure – You have the right to request that Company erase your Personal Data, under certain conditions.',
    },
    {
      count: "4.5",
      content:
        'The right to restrict processing – You have the right to request that Company restrict the processing of your Personal Data, when: (a) you contest the accuracy of your Personal Data, for a period allowing Company to verify the accuracy of said data; (b) if you believe Personal Data has been unlawfully processed and you wish to restrict processing rather than delete it; (c) Company no longer needs the Personal Data but you require to keep it in order to establish, exercise or defend a legal claim; or (d) you have exercised your right to object the processing (below) for a period allowing Company to consider whether your legitimate grounds override those of Company.  ',
    },
    {
      count: "4.6",
      content:
        'The right to object to processing – You have the right to object to the processing of your Personal Data at any time – this means you have the right to stop or prevent Company from processing your Personal Data (it could be in relation to part or all of your Personal Data, and for part or all of the processing purposes). When relating to processing for marketing purposes, you have an absolute right to object; while for other purposes, the existence of the right depends on what lawful basis the processing relies on.',
    },
    {
      count: "4.7",
      content:
        'The right to data portability – You have the right to request that Company transfer the data that we have collected to another organization, or directly to you, under certain conditions.',
    },
    {
      count: "4.8",
      content:
        'If allowed by applicable laws, you have the right to withdraw your consent at any time when Company processes your Personal Data based on your consent on any of these rights. However, withdrawal does not affect the legitimacy and effectiveness of how we process your personal data based on your consent before the withdrawal is made; nor does it affect any data processing based on another lawful basis other than your consent.',
    },

  ]
  const Data5 = [
    {
      count: "5.1",
      content:
        'We use appropriate physical, management, and technical measures to protect your data from unauthorized access, disclosure, use, modification, damage, or loss. We also provide training on security and privacy protection for employees to raise their awareness of Personal Data protection. However, please note that no security measure is perfect, therefore, you should take special care in deciding what information you disclose.',
    },

  ]
  const Data6 = [
    {
      count: "6.1",
      content:
        'We will retain your Personal Data for no longer than is necessary for the purposes stated in this Policy, unless otherwise extending the retention period is required or permitted by law or subject to our retention policies as may be in place from time to time. ',
    },

    {
      count: "6.2",
      content:
        'The standards Company uses to determine the retention period are as follows: the time required to retain Personal Data to fulfill business purposes, including providing the Service; maintaining corresponding transaction and business records; controlling and improving the performance and quality of the Website and Service; handling possible user queries or complaints and locating problems; whether the user agrees to a longer retention period; and whether the laws, contracts, and other equivalencies have special requirements for data retention.',
    },


  ]
  const Data7 = [
    {
      count: "7.1",
      content:
        "The Service has limitations and may not cover all possible scenarios or requests.",
    },
    {
      count: "7.3",
      content:
        "The Service is not intended to provide or replace any professional advice, such as professional marketing advice, keyword research, legal advice etc. Users should consult with appropriate professionals for specific concerns, especially when intending to rely on the Output (as defined below) to make any type of decisions or taking any commercial decisions or legal positions. ",
    },
    {
      count: "7.4",
      content:
        "Given the probabilistic nature of machine learning and AI, use of the Service may in some situations result in incorrect Output. It is User's responsibility to evaluate the accuracy of any Output. Users shall have no claim against the Company or any of the AI Platforms in this regard.",
    },
    {
      count: "7.2",
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
      count: "10.1",
      content:
        "Use the Service in any manner that supports, promotes or encourages any illegal or immoral activities or discrimination or misuses personal data.",
    },
    {
      count: "10.2",
      content:
        "Use any malware, ransomware, viruses, or other malicious software in relation to the Service.",
    },
    {
      count: "10.3",
      content: "Use the Service for providing third party with any advice.",
    },
    {
      count: "10.4",
      content:
        "Challenging or otherwise commencing or conducting any proceedings against Us or the AI Platform.",
    },
    {
      count: "10.5",
      content:
        "Use the Service in a way that infringes, misappropriates or violates any third party rights.",
    },
    {
      count: "10.6",
      content:
        "Reverse assemble, reverse compile, decompile, translate or otherwise attempt to discover the source code or underlying components of AI Models, algorithms, and systems of the Service (except to the extent such restrictions are contrary to applicable law or to the specific license terms of a component). ",
    },
    {
      count: "10.7",
      content: "Use any method to extract data from the Service.",
    },
    {
      count: "10.8",
      content:
        "Use the Service or the Output in a manner that violates any applicable laws or AI Platform Terms.",
    },
    {
      count: "10.9",
      content:
        "Use the Service or the Output in a manner that infringes, misappropriates, or otherwise violates any third party’s rights.",
    },
    {
      count: "10.10",
      content:
        "Provide any personal information that is sensitive or special category personal information under applicable privacy protection laws, or personal information of children under 13 or the applicable age of digital consent or allow minors to use our Service without consent from their parent or guardian.",
    },
    {
      count: "10.11",
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
          not otherwise defined herein, shall have the meaning assigned to them
          in the Scanzilla Terms of Use available here{" "}
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
          </Link>{" "}
          . This Privacy Notice is hereby incorporated into our Terms of Use and
          is an integral part thereof. appended to these Terms, are subject to
          open-source licenses as applicable according to the list provided in
          the link.
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
        heading="hat Personal Data We Collect, How, and How is it Being Processed"
        count={"1."}
        sx={{
          mt: "17px",
        }}
        row={true}
        children={Data1}

      />
  <br />
      <table >
        <thead>
          <tr>
            <th>Instance in which personal data is collected</th>
            <th>Categories of personal data that are processed</th>
            <th>Purposes of processing </th>
            <th>Lawful Basis under GPDR</th>
          </tr>
        </thead>
        <tbody style={{ borderCollapse: "hidden" }}>

          {
            tableData.map((item, ind) => (
              <tr>
              <td>{item.firstColumn}</td>
              <td>{item.secondColumn}</td>

              <td>{item.thirdColumn}</td>

              <td>{item.fourthColumn}</td>

            </tr>
            ))
          }
         
        </tbody>
      </table>

      <TOSSection
        heading=""
        count={""}
        sx={{
          mt: "17px",
          ml:"20px"
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
          ml:"30px"
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
          You may exercise these rights to the extent these rights apply to you by emailing Company to: 
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
          We will undertake to respond to your request within the applicable time frame prescribed by applicable law. Although we will make reasonable efforts to accommodate your requests, in some circumstances we may deem your request unfounded or not eligible under applicable law. In such instances we reserve the right to refuse your request. We shall require, as pre-requisite to fulfilling any request, to verify your identity which we may do by asking you to provide certain information or identification to ensure that all data subjects’ privacy is protected. 
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "10px",
          mt: "17px",
          ml:"30px"
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
         If you think that the way we process your Personal Data does not comply with applicable data protection laws, you are invited to contact us and we will consider your request, but in any event you may contact the relevant competent data protection authority.
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

export default PrivacyNotice;
