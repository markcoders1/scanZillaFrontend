import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../../Hooks/useQueryGallery/AuthHook/AuthHook';
import { Box, Typography, CircularProgress } from '@mui/material';
import ProfileCard from '../../Components/ProfileCard/ProfileCard';
import GiftCard from '../../Components/GiftCard/GiftCard';

const appUrl = import.meta.env.VITE_REACT_APP_API_URL;

const Details = () => {
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //   useEffect(() => {
  //     const fetchDetails = async () => {
  //       try {
  //         const response = await axiosInstance({
  //           url: `${appUrl}/getdetails/${id}`,
  //           method: 'get',
  //         });
  //         setDetails(response.data);
  //       } catch (error) {
  //         setError(error.toString());
  //       } finally {
  //         setLoading(false);
  //       }
  //     };

  //     fetchDetails();
  //   }, [id]);

  //   if (loading) {
  //     return (
  //       <Box
  //         sx={{
  //           display: 'flex',
  //           justifyContent: 'center',
  //           alignItems: 'center',
  //           height: '100vh',
  //         }}
  //       >
  //         <CircularProgress />
  //       </Box>
  //     );
  //   }

  //   if (error) {
  //     return (
  //       <Box
  //         sx={{
  //           display: 'flex',
  //           justifyContent: 'center',
  //           alignItems: 'center',
  //           height: '100vh',
  //         }}
  //       >
  //         <Typography variant="h6" color="error">
  //           {error}
  //         </Typography>
  //       </Box>
  //     );
  //   }

  return (

    <Box>
      <Box
        sx={{

          position: "relative"
        }}
      >
        <Typography
          sx={{
            fontSize: {
              sm: "40px",
              xs: "28px"
            },
            fontWeight: "600",
            position: "absolute",
            top: "-70px",
          }}
        >
          Samantha Profile
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: "2rem",

            marginTop: {
              sm: "50px",
              xs: "65px",
            },
            flexDirection: {
              lg: "row",
              xs: "column"
            },
            // border: "2px solid red"

          }}
        >
          <Box
            sx={{
              flexBasis: "28%",
              flexGrow: "1"
            }}
          >
            <ProfileCard title='Name' name='Samantha' />
          </Box>
          <Box
            sx={{
              flexBasis: "44%",
              flexGrow: "1"
            }}
          >
            <ProfileCard title='Email' name='Samantha@email.com' />
          </Box>
          <Box
            sx={{
              flexBasis: "28%",
              flexGrow: "1"
            }}
          >
            <ProfileCard title='Package' name='Pro' />
          </Box>

        </Box>
      </Box>

      <Box

      >
        <Box
          sx={{
            marginTop: "15px",
            display: "flex",
            gap: "1.8rem",
            flexBasis: "50%",
            padding: "24px 30px",
            borderRadius: "10px",
            flexDirection: "column",
            maxHeight: "680px",
            overflow: "auto",
            boxShadow: "4px 5px 15px rgba(200, 200, 200, 0.61)",
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
            }
          }}
        >
          <Typography
            sx={{
              fontSize: "27px",
              fontWeight: "600",
              color: "#333333"
            }}
          >
            Analyze History
          </Typography>

         
            <GiftCard
              // key={item._id}
              // id={item._id}
              title={"title"}
              description={"description"}
              // bullets={item.bullets}
              // index={index}
              // openModal={openModal}
            />
         
        </Box>
      </Box>
    </Box>
  );
};

export default Details;
