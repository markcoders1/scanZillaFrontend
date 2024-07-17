import { Box } from '@mui/material';
import React, { useState } from 'react';
import Heading from '../../Components/Heading/Heading';
import CustomInputShadow from '../../Components/CustomInputShadow/CustomInputShadow';
import CustomButton from '../../Components/CustomButton/CustomButton';

const ToolManagement = () => {
  const [inputs, setInputs] = useState({
    titleCharacters: '',
    totalBullets: '',
    descriptionCharacters: '',
    searchTerms: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSave = () => {
    console.log('Input Data:', inputs);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        gap: '1.5rem',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          flexBasis: '50%',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          <Heading Heading='Title Characters' />
          <CustomInputShadow
            name="titleCharacters"
            placeholder="30 / 50"
            value={inputs.titleCharacters}
            onChange={handleChange}
          />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          <Heading Heading='Total Bullets' />
          <CustomInputShadow
            name="totalBullets"
            placeholder="30 / 50"
            value={inputs.totalBullets}
            onChange={handleChange}
          />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          <Heading Heading='Description Characters' />
          <CustomInputShadow
            name="descriptionCharacters"
            placeholder="30 / 50"
            value={inputs.descriptionCharacters}
            onChange={handleChange}
          />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          <Heading Heading='Search Terms' />
          <CustomInputShadow
            name="searchTerms"
            placeholder="Enter search terms"
            value={inputs.searchTerms}
            onChange={handleChange}
          />
        </Box>
        <Box>
          <CustomButton
            borderRadius='12px'
            padding='12px 0px'
            fontSize='14px'
            ButtonText='Save'
            width={"143px"}
            color='white'
            background="linear-gradient(to right, #1A0049, #3F016A)"
            onClick={handleSave}
          />
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: 'blue',
          display: 'flex',
          gap: '1.5rem',
          flexBasis: '50%',
        }}
      />
    </Box>
  );
};

export default ToolManagement;
