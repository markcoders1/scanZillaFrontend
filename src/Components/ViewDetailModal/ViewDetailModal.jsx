import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Heading from "../Heading/Heading";
import CustomButton from "../CustomButton/CustomButton";
import { Paper } from "@mui/material";
import { transform } from "lodash";
import Alert from "@mui/material/Alert";

export const ViewDetailModal = ({
  open,
  handleClose,
  title,
  bullets,
  description,
  keywords,
  error,
  reccomendations,
}) => {
  React.useEffect(() => {
    console.log(error);
    console.log(title);
  }, []);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)", // Correctly centers the modal
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: "20px",
    maxHeight: "90vh",
    maxWidth: { md: "50vw", xs: "90%" },
    overflow: "auto",
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
  };

  const renderBold = (desc) => {
    const parts = desc.split(/(['"])(.*?)\1/); // Match quotes and their content
    if (parts.length > 1) {
      return (
        <>
          {parts.map((part, index) =>
            index % 3 === 0 ? (
              part // Regular text
            ) : index % 3 === 1 ? (
              <strong key={index}>{`${parts[index]}${parts[index + 1]}${
                parts[index]
              }`}</strong>
            ) : null
          )}
        </>
      );
    }
    return desc;
  };

  const TextWithBlacklist = (text, length, i, item, prirority) => {
    // Split the input text at '||||'
    const [beforeDelimiter, afterDelimiter] = text.split("||||");

    // If there is content after '||||', split it by '||' to create an array of blacklisted words
    const blacklistWords = afterDelimiter ? afterDelimiter.split("||") : [];

    return (
      <>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          
            
          }}
        >
          <Typography
            sx={{
              width: "70%",
            }}
          >
            {length > 0 && prirority !== "none" && "● "}
            {renderBold(beforeDelimiter)}
          </Typography>
          &nbsp;
          {prirority == "high" ||
          prirority == "medium" ||
          prirority == "low" ? (
            <Alert
              variant="outlined"
              sx={{
                width: "fit-content",
                fontSize: {
                  md: "16px",
                  xs: "9px",
                },
                padding: {
                  md: "0px 10px",
                  xs: "0px 4px",
                },
                margin: "10px 0px 10px 0px",
              }}
              severity={
                prirority == "low"
                  ? "info"
                  : prirority == "medium"
                  ? "warning"
                  : "error"
              }
            >
              Severity : {prirority}
            </Alert>
          ) : (
            ""
          )}
        </Box>
        {/* <br /> */}
        {blacklistWords.length > 0 && (
          <ul style={{ marginLeft: "30px" }}>
            {blacklistWords.map((word, index) => (
              <li key={index}> {word.trim()}</li>
            ))}
          </ul>
        )}

        {i < text.split("|-|").length - 1 && <br />}
      </>
    );
  };
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
      style={{
        position: "absolute",
        overflow: "auto",
        display: "block",
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          {(title !== "" || (error?.TE?.length > 0 && error?.TE[0] !== "")) && (
            <Paper
              sx={{
                padding: "20px",
                margin: "10px 0",
                boxShadow: "0px 8px 26px -4px rgba(0, 0, 0, 0.2)",
                borderRadius: "12px",
              }}
            >
              {title && (
                <Box>
                  <Heading Heading="Title" />
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "400",
                      color: "black",
                      mt:"17px"
                    }}
                  >
                    {title}
                  </Typography>
                </Box>
              )}
              {error?.TE?.length > 0 && error?.TE[0] !== "" && (
                <Box sx={{ mt: "20px" }}>
                  <Heading Heading="Title Errors" />
                  {error?.TE?.map((item, index) => (
                    <Typography
                      sx={{
                        padding: "0px 0",
                      }}
                      key={index}
                    >
                      {TextWithBlacklist(
                        item.error,
                        error.TE.length,
                        index,
                        item.error,
                        item.priority
                      )}
                    </Typography>
                  ))}
                </Box>
              )}
            </Paper>
          )}

          <Box sx={{}}>
            {error?.BE?.length > 0 && (
              <Paper
                sx={{
                  padding: "20px",
                  margin: "20px 0",
                  boxShadow: "0px 8px 26px -4px rgba(0, 0, 0, 0.2)",
                  borderRadius: "10px",
                }}
              >
                <Heading Heading="Bullet Points" />

                {Array.isArray(bullets) ? (
                  bullets.map((bullet, index) => (
                    <Typography
                      sx={{
                        marginBottom: "10px",
                        fontWeight: "400",
                        color: "black",
                      mt:"17px"

                      }}
                      key={index}
                    >
                      {/* <br /> */}
                      <Typography
                          sx={{
                            fontWeight: "600",
                            marginBottom: "0px",
                          }}
                        >
                          Bullet {index + 1}
                        </Typography> {bullet}
                    </Typography>
                  ))
                ) : (
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: "400",
                        color: "black",
                      mt:"17px"

                        
                      }}
                    >
                      {bullets}
                    </Typography>
                  </Box>
                )}
                 <Box
                 sx={{
                    mt:"20px"
                 }}
                 >
                <Heading Heading="Bullet Point Errors" />

                 </Box>
               

                {Object.entries(
                  [...error.BE].reduce((acc, item) => {
                    acc[item.point] = acc[item.point] || [];
                    acc[item.point].push(item); // Push the entire item to access 'priority'
                    return acc;
                  }, {})
                )
                  .sort((a, b) => a[0] - b[0]) // Sort by the point number
                  .map(([point, errors]) => (
                    <div key={point} style={{ marginBottom: "15px", marginTop:"15px" }}>
                      {point == "-1" || point == "null" ? (
                        ""
                      ) : (
                        <Typography
                          sx={{
                            fontWeight: "600",
                            marginBottom: "0px",
                          }}
                        >
                          Bullet {point}
                        </Typography>
                      )}
                      <div >
                        {errors.map((item, index) => (
                          <Typography
                            key={index}
                            sx={{
                              marginLeft: "20px",
                              listStyleType: "none",
                              
                            }}
                          >
                            {TextWithBlacklist(
                              item.error, // Pass the 'error' text
                              errors.length,
                              index,
                              item.error,
                              item.priority
                            )}
                          </Typography>
                        ))}
                      </div>
                    </div>
                  ))}
              </Paper>
            )}

            
          </Box>

          <Box>
          {(description !== "" || (error?.DE?.length > 0 && error?.DE[0] !== "")) && (
            <Paper
              sx={{
                padding: "20px",
                margin: "10px 0",
                boxShadow: "0px 8px 26px -4px rgba(0, 0, 0, 0.2)",
                borderRadius: "12px",
              }}
            >
              {description && (
                <Box>
                  <Heading Heading="Description" />
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "400",
                      color: "black",
                      mt:"17px"

                    }}
                  >
                    {description}
                  </Typography>
                </Box>
              )}
              {error?.DE?.length > 0 && error?.DE[0] !== "" && (
                <Box sx={{ mt: "20px" }}>
                  <Heading Heading="Description Errors" />
                  {error?.DE?.map((item, index) => (
                    <Typography
                      sx={{
                        padding: "05px 0px",
                      }}
                      key={index}
                    >
                      {TextWithBlacklist(
                        item.error,
                        error.DE.length,
                        index,
                        item.error,
                        item.priority
                      )}
                    </Typography>
                  ))}
                </Box>
              )}
            </Paper>
          )}
          </Box>
          <Box>
          {(keywords !== "" || (error?.KE?.length > 0 && error?.KE[0] !== "")) && (
            <Paper
              sx={{
                padding: "20px",
                margin: "10px 0",
                boxShadow: "0px 8px 26px -4px rgba(0, 0, 0, 0.2)",
                borderRadius: "12px",
              }}
            >
              {keywords && (
                <Box>
                  <Heading Heading="Keywords" />
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "400",
                      color: "black",
                      mt:"17px"

                    }}
                  >
                    {keywords}
                  </Typography>
                </Box>
              )}
              {error?.KE?.length > 0 && error?.KE[0] !== "" && (
                <Box sx={{ mt: "20px" }}>
                  <Heading Heading="Search Terms (Generic Keywords) Errors " />
                  {error?.KE?.map((item, index) => (
                    <Typography
                      sx={{
                        padding: "5px 0",
                      }}
                      key={index}
                    >
                      {TextWithBlacklist(
                        item.error,
                        error.KE.length,
                        index,
                        item.error,
                        item.priority
                      )}
                    </Typography>
                  ))}
                </Box>
              )}
            </Paper>
          )}
          </Box>

          
          {reccomendations?.length > 0 ? (
            <Paper
              elevation={10}
              sx={{ padding: "10px 25px", margin: "10px 0" }}
            >
              <Box>
                <Typography>
                  <Heading Heading="Recommendation" />
                </Typography>
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "black",
                    mt:"20px"
                  }}
                >
                  {reccomendations.length >= 1
                    ? reccomendations.map((e) => {
                        return (
                          < Box
                          sx={{
                            mt:"10px"
                          }}
                          >

                           <Box sx={{display:"flex",  gap:"10px"}} >  ● <Typography
                            sx={{
                              fontSize: "16px",
                              fontWeight: "400",
                              color: "black",
                              
                            }}
                          >
                         {e}
                          </Typography>
                          </Box>
                          </ Box>
                        );
                      })
                    : "No Error"}
                </Typography>
              </Box>
            </Paper>
          ) : null}

          <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
            <CustomButton
              border="2px solid #1A0049"
              borderRadius="10px"
              background="#1A0049"
              hoverBg="white"
              hovercolor="#1A0049"
              buttonTextStyle={{}}
              buttonStyle={{
                padding: {
                  // lg: "12px 20px",
                  xs: "10px 40px",
                },
              }}
              ButtonText="close"
              fontSize="14px"
              color={"white"}
              fontWeight
              fullWidth={false}
              variant="contained"
              onClick={handleClose}
            />
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};
