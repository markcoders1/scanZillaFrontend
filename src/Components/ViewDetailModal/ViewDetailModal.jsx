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



export const ViewDetailModal = ({ open, handleClose, title, bullets, description, keywords, error, reccomendations }) => {

    console.log("modal",reccomendations);
    React.useEffect(()=>{
        console.log(reccomendations)
    },[])

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)', // Correctly centers the modal
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        borderRadius: "20px",
        maxHeight: "90vh",
        maxWidth: "50vw",
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
                position: 'absolute',
                overflow: "auto",
                display: 'block',
            }}
        >
            <Fade in={open}>
                <Box sx={style}>

                    {title ?
                        <Paper elevation={10} sx={{ padding: "10px 25px", margin: "10px 0", overflowX: "hidden" }} >
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
                                    {
                                        console.log(error?.TE)
                                    }
                                    {error?.TE?.length > 0 ? error?.TE.map((e) => {
                                        return (
                                            <>
                                                <span>{e}</span><br />
                                            </>
                                        )
                                    }) : "No Error"}
                                </Typography>
                            </Box>
                        </Paper>
                        : null}


                    {(Array.isArray(bullets) ? bullets[0] : bullets) ?
                        <Paper elevation={10} sx={{ padding: "10px 25px", margin: "10px 0" }}>
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
                                        <li key={index} style={{ wordWrap: "break-word", hyphens: "auto" }}>{bullet}</li>
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

                                    {error?.joi == true ?
                                        error?.BE?.map((item, index) => {
                                            if (item.message.includes("|-|")) {
                                                const messages = item.message.split("|-|")
                                                return (
                                                    <Typography sx={{ padding: "10px 0" }} key={index}>
                                                        {item.point}.
                                                        <br />
                                                        <Box sx={{ paddingLeft: "10px" }}>
                                                            {messages.map((el, ind) => {
                                                                return (
                                                                    <>
                                                                        <span key={ind}> • {el.replace(/"bulletpoints\[\d+\]"/g, "")}</span>
                                                                        {ind < messages.length - 1 && <br />}
                                                                    </>
                                                                )
                                                            })}
                                                        </Box>
                                                    </Typography>
                                                )
                                            }
                                            if (item.point == -10) {
                                                return (<Typography sx={{ padding: "10px 0" }} key={index}>
                                                    • {item.message.replace(/"bulletpoints\[\d+\]"/g, "")}
                                                </Typography>)
                                            }
                                            return (
                                                <Typography sx={{ padding: "10px 0" }} key={index}>
                                                    {item.point}. <br />
                                                    <span style={{ paddingLeft: "10px" }}>• {item.message.replace(/"bulletpoints\[\d+\]"/g, "")}</span>
                                                </Typography>
                                            )
                                        })
                                        :
                                        error?.BE?.map((item, index) =>
                                            <Typography sx={{ padding: "10px 0" }} key={index}>
                                                {item.split("|-|").map((el, i) => {
                                                    return (
                                                        <>
                                                            • {el}
                                                            {i < item.split("|-|").length - 1 && <br />}
                                                        </>
                                                    )
                                                })}
                                            </Typography>
                                        )
                                    }
                                </Typography>
                            </Box>
                        </Paper>
                        :
                        null
                    }

                    {description ?
                        <Paper elevation={10} sx={{ padding: "10px 25px", margin: "10px 0" }}>
                            <Box>
                                <Typography>
                                    <Heading Heading="Description" />
                                </Typography>
                                <Typography sx={{
                                    fontSize: "17px",
                                    fontWeight: "500",
                                    color: "#A0A4A9",
                                    wordWrap: "break-word",
                                    hyphens: "auto"

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
                                    {error?.DE?.length > 0 ?
                                        error?.DE.map((e) => {
                                            return (
                                                <>
                                                    <span>{e}</span><br />
                                                </>
                                            )
                                        }) :
                                         "No Error"}
                                </Typography>
                            </Box>
                        </Paper>
                        : null}

                    {keywords ?
                        <Paper elevation={10} sx={{ padding: "10px 25px", margin: "10px 0" }}>
                            <Box>
                                <Typography>
                                    <Heading Heading="Search Term (Generic Keyword)" />
                                </Typography>
                                <Typography sx={{
                                    fontSize: "17px",
                                    fontWeight: "500",
                                    color: "#A0A4A9",
                                    wordWrap: "break-word",
                                    hyphens: "auto"

                                }}>
                                    {keywords}
                                </Typography>
                            </Box>

                            <Box>
                              
                                        <Typography>

                                            <Heading Heading="Search Term (Generic Keyword) Error" />
                                        </Typography>
                                 

                                <Typography sx={{
                                    fontSize: "17px",
                                    fontWeight: "500",
                                    color: "#A0A4A9"

                                }}>
                                    {
                                        console.log(error.KE)
                                    }
                                    {error?.KE.length >=1 ?
                                        error?.KE.map((e) => {
                                            return (
                                                <>
                                                    <span>{e}</span><br />
                                                </>
                                            )
                                        }) :
                                         "No Error"}
                                </Typography>
                            </Box>
                        </Paper>
                        : null}

                    {reccomendations?.length > 0 ?
                        <Paper elevation={10} sx={{ padding: "10px 25px", margin: "10px 0" }}>
                            <Box>
                                <Typography>
                                    <Heading Heading="Recommendation" />
                                </Typography>
                            </Box>

                            <Box>
                              

                                <Typography sx={{
                                    fontSize: "17px",
                                    fontWeight: "500",
                                    color: "#A0A4A9"

                                }}>
                                    {reccomendations.length >=1 ?
                                        reccomendations.map((e) => {
                                            return (
                                                <>
                                                    <span>{e}</span><br />
                                                </>
                                            )
                                        }) :
                                         "No Error"}
                                </Typography>
                            </Box>
                        </Paper>
                        : null}


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
                                    xs: "20px 40px"

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
