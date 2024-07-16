import { Box, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import ProfileCard from '../../Components/ProfileCard/ProfileCard'
import Heading from '../../Components/Heading/Heading'
import DetailedCard from '../../Components/DetailedCard/DetailedCard'
import Customcard from '../../Components/Customcard/Customcard'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ChangePasswordModal from '../../Components/ChangePasswordModal/ChangePasswordModal'

const Profile = () => {

  const [username, setUsername] = useState()
  const [email, setEmail] = useState()
  const [open,setOpen] = useState(false)


  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(auth)

    console.log(auth.email)
    console.log(auth.username)

    setUsername(auth.username)
    setEmail(auth.email)

  }, [])

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
            <ProfileCard title=' Name' name={username} action="Edit Name" />
          </Box>
          <Box sx={{
            flexBasis: {
              md: "390px",
              xs: "100%"
            }, flexGrow: 1
          }}>
            <ProfileCard title='Email' name={email}/>
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
              onClick={() =>setOpen(true)}
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
              <Customcard name={username} />
              <Typography
                sx={{
                  color: "#333333",
                  fontWeight: "500",
                  fontSize: "15px",
                  letterSpacing: "0.34px",
                  marginTop: "11px",
                  // border:"2px solid blue",
                  textAlign: "end",
                  cursor: "pointer"
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
      <ChangePasswordModal 
      
      open={open}
      handleClose={()=>{setOpen(false)}}
      
      />
    </Box>
  )
}

export default Profile