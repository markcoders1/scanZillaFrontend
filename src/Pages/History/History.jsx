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
                 md: 'column'
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
                    boxShadow: "4px 5px 15px 0px #C8C8C8 ",
                    flexDirection: "column",
                   
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

                {Array.from({ length: 10 }).map((_, index) => (
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
                    boxShadow: "4px 5px 15px 0px #C8C8C8 ",
                    flexDirection: "column",
                    
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
                {Array.from({ length: 10 }).map((_, index) => (
                    <CreditsHistory key={index} index={index} />
                ))}
              

            </Box>
        </Box>
    );
};

export default History;
