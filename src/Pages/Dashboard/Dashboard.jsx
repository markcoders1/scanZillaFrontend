import { Box, Typography } from "@mui/material";
import DetailedCard from "../../Components/DetailedCard/DetailedCard";
import Customcard from "../../Components/Customcard/Customcard";
import CardIWithImageBackground from "../../Components/CardIWithImageBackground/CardIWithImageBackground";
import bg from "./../../assets/images/bg.png"
import CreditsHistory from "../../Components/CreditsHistory/CreditsHistory";
import GiftCard from "../../Components/GiftCard/GiftCard";
import CustomButton from "../../Components/CustomButton/CustomButton";
import CustomChart from "../../Components/CustomChart/CustomChart";

const Home = () => {

  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      gap: "40px"
    }}>
      <Box sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: {
          xs: "column",
          md: "row"
        },
        gap: "40px",

      }}>
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          gap: "40px",
          flexGrow: 1,
          flexBasis: {
            md: "45%"
          },
          flexShrink: 0
        }}>
          <Box
            sx={{
              display: "flex",
              gap: "40px",
              flexBasis: {
                xl: "45%"
              },
              flexGrow: 1,
              justifyContent: "space-between"
            }}>
            <Box sx={{
              flexBasis: {
                xl: "243px"
              },
              flexGrow: 3
            }}>
              <CardIWithImageBackground
                text="Samatha"
                title="Hello,"
              />
            </Box>
            <Box sx={{
              flexBasis: {
                xl: "164px"
              },
              flexGrow: 1,
            }}>

              <Box sx={{
                boxShadow: "4px 5px 15px rgba(200, 200, 200, 0.61)",
                padding: "22px 26px",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "100%",
                justifyContent: "center"
              }}>

                <Typography sx={{
                  color: "#A0A4A9",
                  fontWeight: "500",
                  fontSize: "20px",
                  lineHeight: "30px"
                }}>
                  Credits
                </Typography>

                <Typography sx={{
                  fontWeight: "600",
                  fontSize: "50px",
                  lineHeight: "65px",
                  color: "#190247"
                }}>
                  50
                </Typography>

              </Box>
            </Box>

          </Box>
          <Box sx={{
            maxHeight: "400px",
            minHeight: "350px",
            boxSizing: "border-box",
            boxShadow: "4px 5px 15px rgba(200, 200, 200, 0.61)",
            padding: "20px", borderRadius: "10px"
          }}>
            <CustomChart height={350} />
          </Box>

        </Box>



        <Box
        sx={{
          flexBasis: {
            md: "45%",
          },
          flexShrink: 0,
          flexGrow: 1,
          maxHeight: "550px",
          p: "30px 0px 30px 30px",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
          boxShadow: "4px 5px 15px rgba(200, 200, 200, 0.61)",
          borderRadius: "10px",
          position: "relative"

        }}
        >

          <Typography
            sx={{
              fontSize: "27px",
              fontWeight: "600",
              color: "#333333"
            }}
          >
            Analysis History
          </Typography>
          <Box sx={{
           
            overflowY: "auto",
            "&::-webkit-scrollbar": {
              width: "8px"
            },
            "&::-webkit-scrollbar-track": {
              background: "#DFDFDF",
              borderRadius: "10px"
            },
            "&::-webkit-scrollbar-thumb": {
              background: "black",
              borderRadius: "10px"
            },
            "&::-webkit-scrollbar-thumb:hover": {
              background: "#b30000"
            },
           paddingRight:"30px",
            display: "flex",
            flexDirection: "column",
            gap: "40px",
            borderRadius: "10px",

          }}>
            {Array.from({ length: 60 }).map((_, index) => (
              <GiftCard key={index} index={index} />
            ))}
          </Box>
          <Box sx={{
            // position: "sticky",
            // bottom: "0px",
          }}>
            <CustomButton
              fullWidth={true}
              border="2px solid #333333"
              borderRadius="10px"
              buttonTextStyle={{}}
              buttonStyle={{
                padding: {
                  lg: "12px 20px"
                }
              }}
              ButtonText="History"
              fontSize
              color="white"
              fontWeight
              variant="contained"
              padding
              onClick={() => alert("view history")}
              hoverBg="#1A0049"
              hovercolor="white"
              background="#1A0049"
            />

          </Box>
        </Box>
      </Box>

      <Box sx={{
        display: "flex",
        gap: "40px",
        flexDirection: {
          xs: "column",
          md: "row"
        }
      }}>

        <Box sx={{ flexBasis: "45%", flexGrow: 1, display: "flex", gap: "20px", flexDirection: "column", boxShadow: "4px 5px 15px rgba(200, 200, 200, 0.61)", padding: "20px", borderRadius: "10px" }}>

          <Typography sx={{
            fontSize: "20px",
            fontWeight: "500",
            lineHeight: "30px",
            color: "#A0A4A9"
          }}>
            Total Analyzed
          </Typography>
          <Typography sx={{
            color: "#190247",
            fontSize: "40px",
            lineHeight: "50px",
            fontWeight: "600"
          }}>
            50 Analyzed
          </Typography>

        </Box>


        <Box
          onClick={() => alert("Lets analyze")}
          sx={{
            flexBasis: "45%", cursor: "pointer", flexGrow: 1, justifyContent: "center", display: "flex", gap: "20px", flexDirection: "column",

            background: `linear-gradient(rgba(27, 2, 75, .1), rgba(27, 2, 75, .1)), url(${bg})`,
            boxShadow: "4px 5px 15px rgba(200, 200, 200, 0.61)", padding: "20px", borderRadius: "10px"
          }}>

          <Typography sx={{
            fontSize: "30px",
            fontWeight: "600",
            lineHeight: "45px",
            color: "white",
            textAlign: "center"
          }}>
            Let’s Analyze
          </Typography>


        </Box>
      </Box>
    </Box>
  );
};

export default Home;
