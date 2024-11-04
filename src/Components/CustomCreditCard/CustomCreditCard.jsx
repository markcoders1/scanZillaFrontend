import React from 'react';
import { Box, Typography } from '@mui/material';
import CustomButton from '../../Components/CustomButton/CustomButton';

const CustomCreditCard = ({ title, price, credits, handleNavigate, variant, planName, buttonText, key, desc, visibility= "" }) => {
  return (
    <Box
    key={key}
      sx={{
        flexBasis: {
          md: '290px',
        },
        padding: '30px 16px 0px 16px',
        boxShadow: '4px 5px 15px 0px #C8C8C8',
        borderRadius: '10px',
        height: '342px',
        flexGrow: '1',
   
      }}
    >
      <Typography
        sx={{
          fontSize: '23px',
          color: '#333333',
          fontWeight: '600',
          textAlign:"center",
          margin: 'auto',
          mt: '5px',
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          marginTop: '20px',
          width: '100%',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          gap: '0px',
        }}
      >
        <Typography
          sx={{
            fontSize: '50px',
            fontWeight: '600',
            color: '#1E004D',
            lineHeight: '40px',
            visibility: visibility ? visibility : "visible",

          }}
        >
          ${price}
        </Typography>
        <Typography
          sx={{
            fontSize: '17.46px',
            fontWeight: '500',
            color: '#333333',
            mt: '13px',
            visibility: visibility ? visibility : "visible",
          }}
        >
          {credits} Credits
        </Typography>
      </Box>
      <Typography
          sx={{
            fontSize: '14.46px',
            fontWeight: '500',
            m:"auto",
            color: '#333333',
            mt: '20px',
            textAlign:"center",
            maxWidth:"250px",
          }}
        >
          {desc}
        </Typography>
      <Box
        sx={{
          margin: 'auto',
          marginTop: '25PX',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <CustomButton
          border={'1px solid #333333'}
          borderRadius={'10px'}
          ButtonText={buttonText}
          fontSize={'12px'}
          fontWeight={'500'}
          color={'#333333'}
          margin={'auto'}
          onClick={() => {
            handleNavigate(variant, price, credits);
          }}
        />
      </Box>
    </Box>
  );
};

export default CustomCreditCard;
