import { Box, Typography } from '@mui/material'
import React from 'react'
import ProfileCard from '../../Components/ProfileCard/ProfileCard'
import Heading from '../../Components/Heading/Heading'
import DetailedCard from '../../Components/DetailedCard/DetailedCard'
import Customcard from '../../Components/Customcard/Customcard'
import { useNavigate } from 'react-router-dom'

const Profile = () => {


  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/card-details")
  }

  return (
    <Box sx={{
      display: "flex",
      gap: "50px"
    }}>

      <Box sx={{
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        flexBasis: {
          md: "606px",
          xs: "100%"
        },
        flexGrow: 1,
      }}>
        <Box sx={{
          display: "flex",
          gap: "40px",
          flexDirection: {
            md: "row",
            xs: "column"
          }


        }}>
          <Box sx={{
            flexBasis: {
              md: "250px",
              xs: "100%"
            }
          }}>
            <ProfileCard title='Edit Name' name="Samanta" action="Edit Name" />
          </Box>
          <Box sx={{
            flexBasis: {
              md: "390px",
              xs: "100%"
            }, flexGrow: 1
          }}>
            <ProfileCard title='Edit Email' name="samantha@email.com" action="Edit Email" />
          </Box>
        </Box>

        <Box sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}>
          <Heading Heading="Password" />
          <Box sx={{
            display: "flex",
            gap: "20px",
            boxShadow: "4px 5px 15px rgba(200, 200, 200, 0.61)",
            padding: "22px 26px",
            alignItems: "center",
            justifyContent: "space-between"
          }}>
            <Box sx={{
              display: "flex",
              gap: "8px",
            }}>
              {Array.from({ length: 8 }).map((_, index) => (
                <Box
                  key={index}

                  sx={{
                    width: {
                      sm: "10px",
                      xs: "10px"
                    },
                    height: {
                      sm: "10px",
                      xs: "10px"
                    },
                    background: "#333333",
                    borderRadius: "50%"
                  }}></Box>
              ))}
            </Box>
            <Box><Typography
              onClick={() => alert("change password")}
              sx={{
                color: "#190247",
                cursor: "pointer",
                fontWeight: "500",
                fontSize: {
                  sm: "15px",
                  xs: "12px"
                },
                lineHeight: "22.5px",
                textDecoration: "underline"
              }}>Change password</Typography></Box>

          </Box>
        </Box>

        <Box sx={{
          display: "flex",
          flexDirection: "column",
          flexBasis: "190px",
          flexGrow: 1,
          gap: "10px",
          // border: "2px solid red"
        }}>
          <Heading Heading="Debit Card Detail" />
          <Box

            sx={{
              display: "flex",
              gap: "33px",
              flexDirection: {
                md: "row",
                xs: "column",

              }
            }}>
            <Box sx={{
              flexGrow: 3,
              // border: "2px solid red"
            }}
              onClick={handleNavigate}
            >
              <Customcard />
              <Typography
                sx={{
                  color: "#333333",
                  fontWeight: "500",
                  fontSize: "15px",
                  letterSpacing: "0.34px",
                  marginTop: "11px",
                  // border:"2px solid blue",
                  textAlign: "end",
                  cursor:"pointer"
                }}
              >
                Add new Card+
              </Typography>
            </Box>
            <Box sx={{
              flexGrow: 1,

            }}

            >
              <DetailedCard title='Total Analyze' name="50" action="View Detail" />
            </Box>

          </Box>
        </Box>
      </Box>



      <Box sx={{
        display: {
          xs: "none",
          xl: "unset"
        },
        background: "#D99DFD",
        borderRadius: "10px",
        flexBasis: "190px",
        flexShrink: 0,
        boxShadow: "4px 5px 15px rgba(200, 200, 200, 0.61)",

      }}>

      </Box>
    </Box>
  )
}

export default Profile