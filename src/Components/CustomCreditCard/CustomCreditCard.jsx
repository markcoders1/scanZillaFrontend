import React from 'react';
import { Box, Typography } from '@mui/material';
import CustomButton from '../../Components/CustomButton/CustomButton';
import { PiSuitcaseSimpleBold } from 'react-icons/pi';

const CustomCreditCard = ({
  title,
  price,
  credits,
  handleNavigate,
  variant,
  planName,
  buttonText,
  key,
  desc,
  visibility = "",
}) => {
  // Function to render the description with strong tags around the first and second "*"
  const renderDesc = (desc) => {
    const parts = desc.split('*');
    if (parts.length > 2) {
      return (
        <>
          {parts[0]}
          <strong>{parts[1]}</strong>
          {parts[2]}
        </>
      );
    }
    return desc; // If there's no "*" to split, return the description as is.
  };

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
        height: '350px',
        flexGrow: '1',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography
        sx={{
          fontSize: '23px',
          color: '#333333',
          fontWeight: '600',
          textAlign: 'center',
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
        {visibility === 'hidden' ? (
          <PiSuitcaseSimpleBold
            style={{ fontSize: '80px', margin: 'auto', color: 'navy' }}
          />
        ) : (
          <>
            <Typography
              sx={{
                fontSize: '50px',
                fontWeight: '600',
                color: '#1E004D',
                lineHeight: '40px',
                visibility: visibility ? visibility : 'visible',
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
                visibility: visibility ? visibility : 'visible',
              }}
            >
              {credits} Credits
            </Typography>
          </>
        )}
      </Box>

      {/* This Box will take up the remaining space */}
      <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
        <Typography
          sx={{
            fontSize: '14.46px',
            fontWeight: '500',
            m: 'auto',
            color: '#333333',
            mt: '20px',
            textAlign: 'center',
            maxWidth: '270px',
          }}
        >
          {renderDesc(desc)}
        </Typography>
      </Box>

      {/* Button positioned 30px above the bottom */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: 'auto',
          mb: '30px',
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
