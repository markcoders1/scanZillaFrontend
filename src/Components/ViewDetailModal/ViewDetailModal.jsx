import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Heading from '../Heading/Heading';
import CustomButton from '../CustomButton/CustomButton';
import { Paper } from '@mui/material';
import { transform } from 'lodash';



export const ViewDetailModal = ({ open, handleClose, title, bullets, description,error }) => {



    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)', // Correctly centers the modal
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        borderRadius: "20px",
        maxHeight:"90vh",
        overflow: "auto",
        "&::-webkit-scrollbar": {
                width: "8px",
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
    };
    console.log(error)
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
                position:'absolute',
                overflow:"auto",
                display:'block',
            }}
        >
            <Fade in={open}>
                <Box sx={style}>

                    {title?
                    
                    <Paper elevation={10} sx={{padding:"10px 25px",margin:"10px 0"}} >
                        <Box>
                        <Heading Heading="Title" />

                        <Typography sx={{
                            fontSize: "17px",
                            fontWeight: "500",
                            color: "#A0A4A9"

                        }}>
                            {title}
                        </Typography>
                    </Box>

                    <Box>
                        <Typography>
                            <Heading Heading="Title Error" />
                        </Typography>
                        <Typography sx={{
                            fontSize: "17px",
                            fontWeight: "500",
                            color: "#A0A4A9"

                        }}>
                            {Array.isArray(error?.TE)?error?.TE.map((e)=>{
                                return(
                                    <>
                                    <span>{e}</span><br />
                                    </>
                                ) 
                            }):error?.TE || "No Error"}
                        </Typography>
                    </Box>
                    </Paper>
                    :null}


                    {(Array.isArray(bullets)?bullets[0]:bullets)?
                <Paper elevation={10} sx={{padding:"10px 25px",margin:"10px 0"}}>
                    <Box>
                        <Typography>
                            <Heading Heading="Bullets" />
                        </Typography>
                        <Typography sx={{
                            fontSize: "17px",
                            fontWeight: "500",
                            color: "#A0A4A9"

                        }}>
                            {bullets && bullets.length >= 1 ? bullets.map((bullet, index) => (
                                <li key={index}>{bullet}</li>
                            )) : ""}
                        </Typography>

                    </Box>

                    <Box>
                        <Typography>
                            <Heading Heading="Bullet Error" />
                        </Typography>
                        <Typography sx={{
                            fontSize: "17px",
                            fontWeight: "500",
                            color: "#A0A4A9"

                        }}>
                            {Array.isArray(error?.BE)?error?.BE.map((e)=>{
                                return(
                                    <>
                                    <span>{e}</span><br />
                                    </>
                                ) 
                            }):error?.BE || "No Error"}
                        </Typography>
                    </Box>
                </Paper>
                :
                null
                }

                    {description?
                    <Paper elevation={10} sx={{padding:"10px 25px",margin:"10px 0"}}>
                        <Box>
                        <Typography>
                            <Heading Heading="Description" />
                        </Typography>
                        <Typography sx={{
                            fontSize: "17px",
                            fontWeight: "500",
                            color: "#A0A4A9"

                        }}>
                            {description}
                        </Typography>
                    </Box>

                    <Box>
                        <Typography>
                            <Heading Heading="Description Error" />
                        </Typography>
                        <Typography sx={{
                            fontSize: "17px",
                            fontWeight: "500",
                            color: "#A0A4A9"

                        }}>
                            {Array.isArray(error?.DE)?
                            error?.DE.map((e)=>{
                                return(
                                    <>
                                    <span>{e}</span><br />
                                    </>
                                ) 
                            }):
                            error?.DE || "No Error"}
                        </Typography>
                    </Box>
                    </Paper>
                    :null}


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
                    xs:"20px 40px"

                  },
                }}
                ButtonText="close"
                fontSize
                color={"white"}
                fontWeight
                fullWidth={false}
                variant="contained"
                padding
                onClick={handleClose}
              />
                      
                    </Box>
                </Box>
            </Fade>
        </Modal>
    );
};
