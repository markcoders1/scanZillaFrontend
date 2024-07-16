import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {
        xs: "90%",
        md: "600px"
    },
    bgcolor: 'background.paper',
    boxShadow: 24,
    outline: "none",
    borderRadius: "20px",
    p: 4,
};

export const ViewDetailModal = ({ open, handleClose, title, bullets, description }) => {
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
        >
            <Fade in={open}>
                <Box sx={style}>
                    <Typography variant="h6" component="h2">
                        {title}
                    </Typography>
                    <Typography sx={{ mt: 2 }}>
                        {bullets && bullets.map((bullet, index) => (
                            <li key={index}>{bullet}</li>
                        ))}
                    </Typography>
                    <Typography sx={{ mt: 2 }}>
                        {description}
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
                        <Button variant="contained" onClick={handleClose}>Close</Button>
                    </Box>
                </Box>
            </Fade>
        </Modal>
    );
};
