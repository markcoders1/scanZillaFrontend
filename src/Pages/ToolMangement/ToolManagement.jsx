import { Box, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Heading from '../../Components/Heading/Heading';
import CustomInputShadow from '../../Components/CustomInputShadow/CustomInputShadow';
import CustomButton from '../../Components/CustomButton/CustomButton';
import SearchIcon from '../../assets/images/searchIcon.png';
import RestrictedKeyword from '../../Components/RestrictedKeyword/RestrictedKeyword';
import axiosInstance from '../../Hooks/useQueryGallery/AuthHook/AuthHook';

const appUrl = import.meta.env.VITE_REACT_APP_API_URL;

const ToolManagement = () => {
  const [inputs, setInputs] = useState({
    titleCharacters: '',
    totalBullets: '',
    descriptionCharacters: '',
    searchTerms: '',
  });
  const [restrictedKeywords, setRestrictedKeywords] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

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

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const fetchRestrictedKeywords = async () => {
    try {
      let response = await axiosInstance({ url: appUrl + "/words", method: "get" });
      console.log(response.data);
      setRestrictedKeywords(response.data);
    } catch (error) {
      console.error('Error fetching restricted keywords:', error);
    }
  }

  const handleRemoveKeyword = async (keyword) => {
    try {
      const response = await axiosInstance({ url: appUrl + "/words", method: "delete", body: { word: keyword } });
      console.log(response)
      setRestrictedKeywords(prevKeywords => prevKeywords.filter(kw => kw !== keyword));
    } catch (error) {
      console.error('Error removing keyword:', error);
    }
  };

  useEffect(() => {
    fetchRestrictedKeywords();
  }, []);

  const filteredKeywords = restrictedKeywords.filter(keyword =>
    keyword.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box
      sx={{
        display: 'flex',
        gap: '3rem',
        flexDirection: {
          md: "row",
          xs: "column"
        }
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
          display: 'flex',
          flexDirection: "column",
          gap: '1.3rem',
          flexBasis: '50%',
          padding: "24px 30px",
          boxShadow: "4px 5px 15px 0px #C8C8C8 ",
          borderRadius: "10px"
        }}
      >
        <Heading Heading='Restricted Keywords' />

        <Box
          sx={{
            display: 'flex',
            flexDirection: "column",
            gap: '1.3rem',
          }}
        >
          <Box
            sx={{
              position: "relative"
            }}
          >
            <input
              type="search"
              name="search"
              id="search"
              value={searchTerm}
              onChange={handleSearchChange}
              style={{
                color: "#A0A4A9",
                fontSize: "18px",
                padding: "9px 45px 9px 27px",
                borderRadius: "44px",
                boxShadow: "4px 5px 15px 0px #C8C8C8 inset",
                border: "none",
                outline: "none",
                width: "100%",
                position: "relative"
              }}
              placeholder='Search'
            />
            <img src={SearchIcon} alt=""
              style={{
                position: "absolute",
                top: "14px",
                right: "20px"
              }}
            />
          </Box>

          <Box
            sx={{
              overflowY: "auto",
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
              },
              borderRadius: "10px",
              marginTop: "10px",
              height: "300px"
            }}
          >
            <Box
              sx={{
                paddingRight: "15px",
                display: "flex",
                flexDirection: "column",
                gap: "35px",
              }}
            >
              {filteredKeywords.map((keyword, index) => (
                <RestrictedKeyword key={index} content={keyword} onRemove={() => handleRemoveKeyword(keyword)} />
              ))}
            </Box>
          </Box>

          <Box
            sx={{
              position: "relative",
              marginTop: "30px"
            }}
          >
            <input type="search" name="search" id="search"
              style={{
                color: "#A0A4A9",
                fontSize: "18px",
                padding: "9px 27px",
                borderRadius: "44px",
                boxShadow: "0px 8px 26px -4px rgba(0, 0, 0, 0.2)",
                border: "none",
                outline: "none",
                width: "100%",
                position: "relative"
              }}
              placeholder='Search'
            />
            <Typography
              sx={{
                position: "absolute",
                top: "7px",
                right: "20px"
              }}
            >
              <CustomButton
                borderRadius='44px'
                padding='3px 0px'
                fontSize='14px'
                ButtonText='Add +'
                width={"90px"}
                color='white'
                background="linear-gradient(to right, #1A0049, #3F016A)"
              // onClick={handleSave}
              />
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ToolManagement;
