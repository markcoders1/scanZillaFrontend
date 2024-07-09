import { Box, Typography } from '@mui/material';
import React from 'react';
import GiftCard from '../../Components/GiftCard/GiftCard';
import CreditsHistory from '../../Components/CreditsHistory/CreditsHistory';

const History = () => {
    return (
        <Box
            sx={{
                marginTop: "15px",
                display: "flex",
                gap: "2.2rem",
                flexDirection:{
                 lg: "row",
                 xs: 'column',
                },
            }}
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
                    maxHeight:"680px",
                    overflow:"auto",
                    boxShadow: "4px 5px 15px rgba(200, 200, 200, 0.61)",
                    "&::-webkit-scrollbar": {
                        width: "8px" // Adjust the width of the scrollbar here
                      },
                      "&::-webkit-scrollbar-track": {
                        background:"#DFDFDF",
                        borderRadius: "10px"
                      },
                      "&::-webkit-scrollbar-thumb": {
                        background: "black", // Change this for different scrollbar thumb color
                        borderRadius: "10px"
                      },
                      "&::-webkit-scrollbar-thumb:hover": {
                        background: "#b30000" // Change this for scrollbar thumb color on hover
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
                    
                {Array.from({ length: 60 }).map((_, index) => (
                    <GiftCard key={index} index={index} />
                ))}

            </Box>
            <Box
                sx={{
                    marginTop: "15px",
                    display: "flex",
                    gap: "1.8rem",
                    flexBasis: "50%",
                    padding: "24px 30px",
                    borderRadius: "10px",
                    flexDirection: "column",
                    maxHeight:"680px",
                    overflow:"auto",
                    boxShadow: "4px 5px 15px rgba(200, 200, 200, 0.61)",
                    "&::-webkit-scrollbar": {
                        width: "8px" // Adjust the width of the scrollbar here
                      },
                      "&::-webkit-scrollbar-track": {
                        background:"#DFDFDF",
                        borderRadius: "10px"
                      },
                      "&::-webkit-scrollbar-thumb": {
                        background: "black", // Change this for different scrollbar thumb color
                        borderRadius: "10px"
                      },
                      "&::-webkit-scrollbar-thumb:hover": {
                        background: "#b30000" // Change this for scrollbar thumb color on hover
                      }
                }}
            >
                <Typography
                    sx={{
                        fontSize: "27px",
                        fontWeight: "600",
                        color: "#333333",
                       
                    }}
                >
                    
                    Credits History
                </Typography>
                {Array.from({ length: 60 }).map((_, index) => (
                    <CreditsHistory key={index} index={index} />
                ))}
              

            </Box>
        </Box>
    );
};

export default History;
