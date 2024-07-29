import React from 'react';
import { Box, Typography } from '@mui/material';
import CustomButton from '../../Components/CustomButton/CustomButton';

const CustomCreditCard = ({ title, price, credits, handleNavigate, variant, planName, key }) => {
  return (
    <Box
    key={key}
      sx={{
        flexBasis: {
          md: '218px',
        },
        padding: '15px 16px 0px 16px',
        boxShadow: '4px 5px 15px 0px #C8C8C8',
        borderRadius: '10px',
        height: '322px',
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
          marginTop: '50px',
          width: '100%',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          gap: '2px',
        }}
      >
        <Typography
          sx={{
            fontSize: '60px',
            fontWeight: '600',
            color: '#1E004D',
            lineHeight: '40px',
          }}
        >
          ${price}
        </Typography>
        <Typography
          sx={{
            fontSize: '22.46px',
            fontWeight: '500',
            color: '#333333',
            mt: '13px',
          }}
        >
          {credits} Credits
        </Typography>
      </Box>
      <Box
        sx={{
          margin: 'auto',
          marginTop: '50PX',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <CustomButton
          border={'1px solid #333333'}
          borderRadius={'10px'}
          ButtonText={'Get Credits'}
          fontSize={'12px'}
          fontWeight={'500'}
          color={'#333333'}
          margin={'auto'}
          onClick={() => {
            handleNavigate(variant, price, planName);
          }}
        />
      </Box>
    </Box>
  );
};

export default CustomCreditCard;
