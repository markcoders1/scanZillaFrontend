import React from "react";
import { Typography, Box } from "@mui/material";

const TOSSection = ({
  heading = "",
  content = "",
  count = null,
  sx,
  row = false,
  children,
}) => {
  // Replace *text* with <strong>text</strong> to make it bold
  const formattedContent = content.replace(/\*(.*?)\*/g, "<strong>$1</strong>");

  const formattedContent2 = content.replace(
    /\*(.*?)\*/g,
    "<strong>$1</strong>"
  );

  return (
    <Box
      sx={{
        display: "flex",
        gap: "10px",
        ...sx,
      }}
    >
      {count ? (
        <Typography
          sx={{
            lineHeight: 1.8,
            fontSize: { xs: "14px", sm: "16px" },
            fontWeight: "600 !important",
          }}
        >
          {count}
        </Typography>
      ) : null}
      <Typography
        sx={{
          fontSize: { xs: "14px", sm: "16px" },
          fontWeight: "400",
          color: "black",
          //   mt: '17px',
          lineHeight: 1.8,
        }}
      >
        {heading && (
          <>
            {" "}
            <strong>{heading}</strong>&nbsp;{" "}
          </>
        )}{" "}
        {row && (
          <>
            {" "}
            <br />
          </>
        )}
        {content && (
          <>
            <span dangerouslySetInnerHTML={{ __html: formattedContent }} />
            <br />
          </>
        )}
        {children &&
          children.map((child, index) => (
            <Box key={index} sx={{ ml: "0px", display: "flex", gap: "5px" }}>
              <Typography
                sx={{
                  fontSize: { xs: "14px", sm: "16px" },
                  fontWeight: "400",
                  color: "black",
                  //   mt: '17px',
                  lineHeight: 1.8,
                }}
              >
                {child.count}.
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
                <span
                  dangerouslySetInnerHTML={{
                    __html: child?.content?.replace(
                      /\*\*(.*?)\*\*/g,
                      "<strong>$1</strong>"
                    ),
                  }}
                />
              </Typography>
            </Box>
          ))}
      </Typography>
    </Box>
  );
};

export default TOSSection;
