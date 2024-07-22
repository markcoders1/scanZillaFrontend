import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import Heading from "../../Components/Heading/Heading";
import CustomInputShadow from "../../Components/CustomInputShadow/CustomInputShadow";
import CustomButton from "../../Components/CustomButton/CustomButton";
import SearchIcon from "../../assets/images/searchIcon.png";
import RestrictedKeyword from "../../Components/RestrictedKeyword/RestrictedKeyword";
import axiosInstance from "../../Hooks/useQueryGallery/AuthHook/AuthHook";

import { handleSnackAlert } from "../../Redux/Slice/SnackAlertSlice/SnackAlertSlice";
import { useSelector, useDispatch } from "react-redux";
import LoaderMain from "../../Components/Loader/LoaderMain";

const appUrl = import.meta.env.VITE_REACT_APP_API_URL;

const ToolManagement = () => {
  const [titleCharacters, setTitleCharacters] = useState(null);
  const [totalBullets, setTotalBullets] = useState(null);
  const [descriptionCharacters, setDescriptionCharacters] = useState(null);
  const [bulletcharacters, setBulletcharacters] = useState(null);

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  // console.log(auth);

  const { control, handleSubmit, reset, getValues } = useForm({
    defaultValues: {
      titleCharacters: "",
      totalBullets: "",
      descriptionCharacters: "",
      bulletcharacters: "",
      newKeyword: "",
    },
  });
  const [restrictedKeywords, setRestrictedKeywords] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredKeywords, setFilteredKeywords] = useState([]);
  const [loading, setLoading] = useState();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    const term = e.target.value.toLowerCase();
    const filtered = restrictedKeywords.filter((keyword) =>
      keyword.toLowerCase().includes(term)
    );
    setFilteredKeywords(filtered);
  };

  const handleAddKeyword = async (data) => {
    console.log("New Keyword:", data.newKeyword);
    try {
      const response = await axiosInstance({
        url: `${appUrl}/words`,
        method: "post",
        data: { word: data.newKeyword },
      });
      console.log(response);
      if (response.status === 200) {
        const updatedKeywords = [...restrictedKeywords, data.newKeyword];
        setRestrictedKeywords(updatedKeywords);
        setFilteredKeywords(
          updatedKeywords.filter((keyword) =>
            keyword.toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
        reset({ newKeyword: "" });
      }
      dispatch(
        handleSnackAlert({
          open: true,
          message: response.data.message,
          severity: "success",
        })
      );
    } catch (error) {
      console.error("Error adding keyword:", error);
    }
  };

  const onSubmit = async (data) => {
    console.log("Input Data:", data);
    try {
      const response = await axiosInstance({
        url: `${appUrl}/rules`,
        method: "post",
        data: {
          titleCharacters: data.titleCharacters,
          bulletNum: data.totalBullets,
          bulletcharacters: data.bulletcharacters,
          descriptionCharacters: data.descriptionCharacters,
        },
      });
      reset({ newKeyword: "" });
      console.log(response);

      reset({
        bulletNum: "",
        titleCharacters: "",
        bulletcharacters: "",
        descriptionCharacters: "",
      });
    } catch (error) {
      console.error("Error when changing Rules:", error);
    }
  };
  const fetchRules = async (data) => {
    try {
      const response = await axiosInstance({
        url: `${appUrl}/rules`,
        method: "get",
      });

      console.log(response);
      setBulletcharacters(response.data.bulletCharacters);
      setDescriptionCharacters(response.data.descriptionCharacters);
      setTotalBullets(response.data.bulletNum);
      setTitleCharacters(response.data.titleCharacters);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchRestrictedKeywords = async () => {
    try {
      setLoading(true);
      let response = await axiosInstance({
        url: `${appUrl}/words`,
        method: "get",
      });
      // console.log(response.data);
      setRestrictedKeywords(response.data);
      setFilteredKeywords(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching restricted keywords:", error);
    }
  };

  const handleRemoveKeyword = async (keyword) => {
    try {
      const response = await axiosInstance({
        url: `${appUrl}/words`,
        method: "delete",
        params: { word: keyword },
      });
      console.log(response);
      if (response.status === 200) {
        const updatedKeywords = restrictedKeywords.filter(
          (kw) => kw !== keyword
        );
        setRestrictedKeywords(updatedKeywords);
        setFilteredKeywords(
          updatedKeywords.filter((kw) =>
            kw.toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
      }
    } catch (error) {
      console.error("Error removing keyword:", error);
    }
  };

  useEffect(() => {
    fetchRestrictedKeywords();
    fetchRules();
  }, []);

  return (
    <>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            height: "70vh",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LoaderMain />
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            gap: "3rem",
            flexDirection: {
              md: "row",
              xs: "column",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              flexBasis: "50%",
            }}
          >
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}
            >
              <Heading Heading="Title Characters" />
              <Controller
                name="titleCharacters"
                control={control}
                render={({ field }) => (
                  <CustomInputShadow
                    {...field}
                    placeholder={titleCharacters}
                    onChange={(e) => field.onChange(e.target.value)}
                    type={"number"}
                  />
                )}
              />
            </Box>
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}
            >
              <Heading Heading="Total Bullets" />
              <Controller
                name="totalBullets"
                control={control}
                render={({ field }) => (
                  <CustomInputShadow
                    {...field}
                    placeholder={totalBullets}
                    onChange={(e) => field.onChange(e.target.value)}
                    type={"number"}
                  />
                )}
              />
            </Box>
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}
            >
              <Heading Heading="Bullet Characters" />
              <Controller
                name="bulletcharacters"
                control={control}
                render={({ field }) => (
                  <CustomInputShadow
                    {...field}
                    placeholder={bulletcharacters}
                    onChange={(e) => field.onChange(e.target.value)}
                    type={"number"}
                  />
                )}
              />
            </Box>
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}
            >
              <Heading Heading="Description Characters" />
              <Controller
                name="descriptionCharacters"
                control={control}
                render={({ field }) => (
                  <CustomInputShadow
                    {...field}
                    placeholder={descriptionCharacters}
                    onChange={(e) => field.onChange(e.target.value)}
                    type={"number"}
                  />
                )}
              />
            </Box>

            <Box>
              <CustomButton
                borderRadius="12px"
                padding="12px 0px"
                fontSize="14px"
                ButtonText="Save"
                width={"143px"}
                color="white"
                background="linear-gradient(to right, #1A0049, #3F016A)"
                onClick={handleSubmit(onSubmit)}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1.3rem",
              flexBasis: "50%",
              padding: "24px 30px",
              boxShadow: "4px 5px 15px 0px #C8C8C8 ",
              borderRadius: "10px",
            }}
          >
            <Heading Heading="Restricted Keywords" />

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1.3rem",
              }}
            >
              <Box
                sx={{
                  position: "relative",
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
                    position: "relative",
                  }}
                  placeholder="Search"
                />
                <img
                  src={SearchIcon}
                  alt=""
                  style={{
                    position: "absolute",
                    top: "14px",
                    right: "20px",
                  }}
                />
              </Box>

              <Box
                sx={{
                  overflowY: "auto",
                  "&::-webkit-scrollbar": {
                    width: "8px",
                  },
                  "&::-webkit-scrollbar-track": {
                    background: "#DFDFDF",
                    borderRadius: "10px",
                  },
                  "&::-webkit-scrollbar-thumb": {
                    background: "black",
                    borderRadius: "10px",
                  },
                  "&::-webkit-scrollbar-thumb:hover": {
                    background: "#b30000",
                  },
                  borderRadius: "10px",
                  marginTop: "10px",
                  height: "300px",
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
                    <RestrictedKeyword
                      key={index}
                      content={keyword}
                      onRemove={() => handleRemoveKeyword(keyword)}
                    />
                  ))}
                </Box>
              </Box>

              <Box
                sx={{
                  position: "relative",
                  marginTop: "30px",
                }}
              >
                <Controller
                  name="newKeyword"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      name="newKeyword"
                      id="newKeyword"
                      style={{
                        color: "#A0A4A9",
                        fontSize: "18px",
                        padding: "9px 27px",
                        borderRadius: "44px",
                        boxShadow: "0px 8px 26px -4px rgba(0, 0, 0, 0.2)",
                        border: "none",
                        outline: "none",
                        width: "100%",
                        position: "relative",
                      }}
                      placeholder="Add new keyword"
                    />
                  )}
                />
                <Typography
                  sx={{
                    position: "absolute",
                    top: "7px",
                    right: "20px",
                  }}
                >
                  <CustomButton
                    borderRadius="44px"
                    padding="3px 0px"
                    fontSize="14px"
                    ButtonText="Add +"
                    width={"90px"}
                    color="white"
                    background="linear-gradient(to right, #1A0049, #3F016A)"
                    onClick={handleSubmit(handleAddKeyword)}
                  />
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default ToolManagement;
