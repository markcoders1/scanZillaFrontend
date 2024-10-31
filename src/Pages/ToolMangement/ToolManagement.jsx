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
import { useDispatch } from "react-redux";
import LoaderMain from "../../Components/Loader/LoaderMain";
import CustomSelectTool from "../../Components/CustomSelectTool/CustomSelectTool";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const appUrl = import.meta.env.VITE_REACT_APP_API_URL;

const ToolManagement = () => {
  const [categoryList] = useState([
    "Appliances",
    "Arts, Crafts & Sewing",
    "Automotive",
    "Baby",
    "Beauty & Personal Care",
    "Books",
    "Camera & Photo Products",
    "Cell Phones & Accessories",
    "Clothing, Shoes & Jewelry",
    "Computers & Accessories",
    "Electronics",
    "Grocery & Gourmet Food",
    "Handmade Products",
    "Health & Household",
    "Home & Kitchen",
    "Industrial & Scientific",
    "Kitchen & Dining",
    "Musical Instruments",
    "Office Products",
    "Patio, Lawn & Garden",
    "Pet Supplies",
    "Sports & Outdoors",
    "Tools & Home Improvement",
    "Toys & Games",
  ]);

  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      titleCharacters: "",
      totalBullets: "",
      descriptionCharacters: "",
      bulletcharacters: "",
      newKeyword: "",
      totalBulletsLength: "",
      category: "",
      searchTerms: "",
      newAbbrevation: ""
    },
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [searchTermAbb, setSearchTermAbb] = useState("");


  // Fetch Rules Data
  const {
    data: rulesData,
    isLoading: rulesLoading,
    isError: rulesError,
  } = useQuery({
    queryKey: ["rules"],
    queryFn: async () => {
      const response = await axiosInstance.get(`${appUrl}/rules`);
      return response.data;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 10 * 60 * 1000, // 10 minutes
  });

  // Fetch Restricted Keywords
  const {
    data: keywordsData,
    isLoading: keywordsLoading,
    isError: keywordsError,
  } = useQuery({
    queryKey: ["restrictedKeywords"],
    queryFn: async () => {
      const response = await axiosInstance.get(`${appUrl}/words`);
      return response.data;
    },
    staleTime: 5 * 60 * 1000,
    cacheTime: 10 * 60 * 1000,
  });

  // Populate Form Fields with Fetched Data
  useEffect(() => {
    if (rulesData) {
      reset({
        titleCharacters: rulesData.titleCharacters || "",
        totalBullets: rulesData.bulletNum || "",
        descriptionCharacters: rulesData.descriptionCharacters || "",
        bulletcharacters: rulesData.bulletCharacters || "",
        totalBulletsLength: rulesData.totalBulletsLength || "",
        searchTerms: rulesData.searchTerms || "",
        category: rulesData.category || "",
      });
    }
  }, [rulesData, reset]);

  // Filtered Keywords
  const filteredKeywords = React.useMemo(() => {
    if (!keywordsData) return [];
    return keywordsData.filter((keyword) =>
      keyword.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [keywordsData, searchTerm]);

  // Mutations
  const addKeywordMutation = useMutation({
    mutationFn: async (newKeyword) => {
      const response = await axiosInstance.post(`${appUrl}/words`, {
        word: newKeyword,
      });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["restrictedKeywords"]);
      dispatch(
        handleSnackAlert({
          open: true,
          message: "Keyword added successfully",
          severity: "success",
        })
      );
    },
    onError: (error) => {
      dispatch(
        handleSnackAlert({
          open: true,
          message: error.response?.data?.message || "An error occurred",
          severity: "error",
        })
      );
    },
  });

  const removeKeywordMutation = useMutation({
    mutationFn: async (keyword) => {
      const response = await axiosInstance.delete(`${appUrl}/words`, {
        params: { word: keyword },
      });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["restrictedKeywords"]);
      dispatch(
        handleSnackAlert({
          open: true,
          message: "Keyword removed successfully",
          severity: "success",
        })
      );
    },
    onError: (error) => {
      dispatch(
        handleSnackAlert({
          open: true,
          message: error.response?.data?.message || "An error occurred",
          severity: "error",
        })
      );
    },
  });

  const updateRulesMutation = useMutation({
    mutationFn: async (data) => {
      const response = await axiosInstance.post(`${appUrl}/rules`, {
        titleCharacters: Number(data.titleCharacters),
        bulletNum: Number(data.totalBullets),
        bulletCharacters: Number(data.bulletcharacters),
        descriptionCharacters: Number(data.descriptionCharacters),
        category: data.category,
        totalBulletsLength: Number(data.totalBulletsLength),
        searchTerms: Number(data.searchTerms),
      });
      return response.data;
    },
    onSuccess: (data) => {
      dispatch(
        handleSnackAlert({
          open: true,
          message: data.message,
          severity: "success",
        })
      );
      queryClient.invalidateQueries(["rules"]);
      reset({
        titleCharacters: "",
        totalBullets: "",
        bulletcharacters: "",
        descriptionCharacters: "",
        category: "",
        totalBulletsLength: "",
        searchTerms: "",
      });
    },
    onError: (error) => {
      dispatch(
        handleSnackAlert({
          open: true,
          message: error.response?.data?.message || "An error occurred",
          severity: "error",
        })
      );
    },
  });

  // Event Handlers
  const handleAddKeyword = (data) => {
    if (data.newKeyword.trim() === "") {
      dispatch(
        handleSnackAlert({
          open: true,
          message: "Keyword cannot be empty",
          severity: "error",
        })
      );
    } else {
      addKeywordMutation.mutate(data.newKeyword);
      reset({ newKeyword: "" });
    }
  };

  const handleRemoveKeyword = (keyword) => {
    removeKeywordMutation.mutate(keyword);
  };

  const onSubmit = (data) => {
    if (
      !data.titleCharacters &&
      !data.totalBullets &&
      !data.bulletcharacters &&
      !data.descriptionCharacters &&
      !data.totalBulletsLength &&
      !data.searchTerms
    ) {
      dispatch(
        handleSnackAlert({
          open: true,
          message: "At least one field must be filled",
          severity: "error",
        })
      );
    } else {
      updateRulesMutation.mutate(data);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      uploadCsvMutation.mutate(file);
    }
  };

  const uploadCsvMutation = useMutation({
    mutationFn: async (file) => {
      const formData = new FormData();
      formData.append("file", file);

      const response = await axiosInstance.post(`${appUrl}/csv`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    },
    onSuccess: (data) => {
      dispatch(
        handleSnackAlert({
          open: true,
          message: data.message,
          severity: "success",
        })
      );
      queryClient.invalidateQueries(["restrictedKeywords"]);
    },
    onError: (error) => {
      console.error("Error uploading the file:", error);
      dispatch(
        handleSnackAlert({
          open: true,
          message: error.response?.data?.message || "An error occurred",
          severity: "error",
        })
      );
    },
  });

  const downloadCsv = async () => {
    try {
      const response = await axiosInstance({
        url: `${appUrl}/csv`,
        method: "get",
        responseType: "blob",
      });

      const url = window.URL.createObjectURL(
        new Blob([response.data], { type: "text/csv" })
      );
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "data.csv");
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    } catch (error) {
      console.error("Error downloading the CSV file:", error);
    }
  };

  // Allowed Keywords

    // Fetch Allowed Abb
    const {
      data: abbData,
      isLoading: abLoading,
      isError: abbError,
    } = useQuery({
      queryKey: ["allowedAbbrevation"],
      queryFn: async () => {
        const response = await axiosInstance.get(`${appUrl}/abbwords`);
        console.log("abbWords",response);
        return response.data;
      },
      staleTime: 5 * 60 * 1000,
      cacheTime: 10 * 60 * 1000,
    });

      // Filtered Keywords
  const filteredAbbrevation = React.useMemo(() => {
    if (!keywordsData) return [];
    return abbData.filter((keyword) =>
      keyword.toLowerCase().includes(searchTermAbb.toLowerCase())
    );
  }, [abbData, searchTermAbb]);

  const removeAbbrevationMutation = useMutation({
    mutationFn: async (keyword) => {
      const response = await axiosInstance.delete(`${appUrl}/abbwords`, {
        params: { word: keyword },
      });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["allowedAbbrevation"]);
      dispatch(
        handleSnackAlert({
          open: true,
          message: "Allowed Abbrevation removed successfully",
          severity: "success",
        })
      );
    },
    onError: (error) => {
      dispatch(
        handleSnackAlert({
          open: true,
          message: error.response?.data?.message || "An error occurred",
          severity: "error",
        })
      );
    },
  });


  const handleRemoveAbbrevation = (keyword) => {
    console.log(keyword)
    removeAbbrevationMutation.mutate(keyword);
  };

    // Mutations
    const addAbbrevationMutation = useMutation({
      mutationFn: async (newAbbrevation) => {
        const response = await axiosInstance.post(`${appUrl}/abbwords`, {
          word: newAbbrevation,
        });
        return response.data;
      },
      onSuccess: () => {
        queryClient.invalidateQueries(["allowedAbbrevation"]);
        dispatch(
          handleSnackAlert({
            open: true,
            message: "Allowed Abbrevation added successfully",
            severity: "success",
          })
        );
      },
      onError: (error) => {
        dispatch(
          handleSnackAlert({
            open: true,
            message: error.response?.data?.message || "An error occurred",
            severity: "error",
          })
        );
      },
    });
    // Event Handlers
    const handleAddAbbrevation = (data) => {
      console.log("add abb", data.newAbbrevation);
      if (data.newAbbrevation.trim() === "") {
        dispatch(
          handleSnackAlert({
            open: true,
            message: "Keyword cannot be empty",
            severity: "error",
          })
        );
      } else {
        addAbbrevationMutation.mutate(data.newAbbrevation);
        reset({ newAbbrevation: "" });
      }
    };
  


  const downloadAbbCsv = async () => {
    console.log("abb CSv func");
    try {
      const response = await axiosInstance({
        url: `${appUrl}/abbcsv`,
        method: "get",
        responseType: "blob",
      });

      const url = window.URL.createObjectURL(
        new Blob([response.data], { type: "text/csv" })
      );
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "data.csv");
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    } catch (error) {
      console.error("Error downloading the CSV file:", error);
    }
  };

  const uploadCsvMutationAbb = useMutation({
    mutationFn: async (file) => {
      const formData = new FormData();
      formData.append("file", file);

      const response = await axiosInstance.post(`${appUrl}/abbcsv`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    },
    onSuccess: (data) => {
      dispatch(
        handleSnackAlert({
          open: true,
          message: data.message,
          severity: "success",
        })
      );
      queryClient.invalidateQueries(["restrictedKeywords"]);
    },
    onError: (error) => {
      console.error("Error uploading the file:", error);
      dispatch(
        handleSnackAlert({
          open: true,
          message: error.response?.data?.message || "An error occurred",
          severity: "error",
        })
      );
    },
  });

  const handleFileChangeAbb = (event) => {
    console.log(event.target.files[0]);
    console.log("function for select file");
    const file = event.target.files[0];

    if (file) {
      uploadCsvMutationAbb.mutate(file);
    }
  };


  // Handle Loading and Error States
  if (rulesLoading || keywordsLoading) {
    return (
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
    );
  }

  if (rulesError || keywordsError) {
    return (
      <Box
        sx={{
          display: "flex",
          height: "70vh",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography color="error">Error fetching data.</Typography>
      </Box>
    );
  }

  // JSX Rendering
  return (
    <Box
      sx={{
        display: "flex",
        gap: "3rem",
        flexDirection: {
          md: "row",
          xs: "column",
        },
        height: "70vh",
        overflowY: "auto",
        overflowX: "hidden",
        padding: "20px 15px",
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
        // zIndex:"-1"
      }}
    >
      {/* Left Side (Form Fields) */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          flexBasis: "50%",
        }}
      >
        {/* Category */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
          <Heading Heading="Categories" />
          <Controller
            name="category"
            control={control}
            render={({ field }) => (
              <CustomSelectTool
                data={categoryList}
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
        </Box>

        {/* Total Bullets Length */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
          <Heading Heading="Total Bullets Length" />
          <Controller
            name="totalBulletsLength"
            control={control}
            render={({ field }) => (
              <CustomInputShadow
                {...field}
                placeholder={rulesData?.totalBulletsLength || ""}
                onChange={(e) => field.onChange(e.target.value)}
                type={"number"}
              />
            )}
          />
        </Box>

        {/* Title Characters */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
          <Heading Heading="Title Characters" />
          <Controller
            name="titleCharacters"
            control={control}
            render={({ field }) => (
              <CustomInputShadow
                {...field}
                placeholder={rulesData?.titleCharacters || ""}
                onChange={(e) => field.onChange(e.target.value)}
                type={"number"}
              />
            )}
          />
        </Box>

        {/* Total Bullets */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
          <Heading Heading="Total Bullets" />
          <Controller
            name="totalBullets"
            control={control}
            render={({ field }) => (
              <CustomInputShadow
                {...field}
                placeholder={rulesData?.bulletNum || ""}
                onChange={(e) => field.onChange(e.target.value)}
                type={"number"}
              />
            )}
          />
        </Box>

        {/* Bullet Characters */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
          <Heading Heading="Bullet Characters" />
          <Controller
            name="bulletcharacters"
            control={control}
            render={({ field }) => (
              <CustomInputShadow
                {...field}
                placeholder={rulesData?.bulletCharacters || ""}
                onChange={(e) => field.onChange(e.target.value)}
                type={"number"}
              />
            )}
          />
        </Box>

        {/* Description Characters */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
          <Heading Heading="Description Characters" />
          <Controller
            name="descriptionCharacters"
            control={control}
            render={({ field }) => (
              <CustomInputShadow
                {...field}
                placeholder={rulesData?.descriptionCharacters || ""}
                onChange={(e) => field.onChange(e.target.value)}
                type={"number"}
              />
            )}
          />
        </Box>

        {/* Search Terms Length */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
          <Heading Heading="Search Terms Length" />
          <Controller
            name="searchTerms"
            control={control}
            render={({ field }) => (
              <CustomInputShadow
                {...field}
                placeholder={rulesData?.searchTerms || ""}
                onChange={(e) => field.onChange(e.target.value)}
                type={"number"}
              />
            )}
          />
        </Box>

        {/* Save Button */}
        <Box
          sx={{
            display: "flex",
            mt: "15px",
            justifyContent: {
              md: "end",
              xs: "end",
            },
          }}
        >
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

      {/* Right Side (Restricted Keywords) */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1.3rem",
          flexBasis: "50%",
          mt: {
            xs: "0px",
            md: "0px",
          },
        }}
      >
        <Box>
          {/* Restricted Keywords Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1.3rem",
              padding: "24px 30px",
              boxShadow: "4px 5px 15px 0px #C8C8C8 ",
              borderRadius: "10px",
            }}
          >
            <Heading Heading="Restricted Keywords" />
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: "1.3rem" }}
            >
              <Box sx={{ position: "relative" }}>
                <input
                  type="search"
                  name="search"
                  id="search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
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
                  height: "200px",
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
              <Box sx={{ position: "relative", marginTop: "30px" }}>
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
                    top: {
                      sm: "7px",
                      xs: "6px",
                    },
                    right: {
                      xs: "05px",
                      sm: "20px",
                    },
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
          {/* Download and Upload Buttons */}
          <Box
            sx={{
              display: "flex",
              mt: "20px",
              gap: "1rem",
              justifyContent: {
                md: "end",
                xs: "end",
              },
            }}
          >
            <CustomButton
              borderRadius="12px"
              padding="12px 0px"
              fontSize="14px"
              ButtonText="Download CSV"
              width={"143px"}
              color="white"
              background="linear-gradient(to right, #1A0049, #3F016A)"
              onClick={downloadCsv}
            />
            <div>
              <input
                type="file"
                id="fileInput"
                onChange={handleFileChange}
                style={{
                  display: "none",
                }}
              />
              <label
                htmlFor="fileInput"
                style={{
                  display: "inline-block",
                  padding: "12px 20px",
                  borderRadius: "12px",
                  background: "linear-gradient(to right, #1A0049, #3F016A)",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Select CSV File
              </label>
            </div>
          </Box>
        </Box>

        {/* Abbrevation Keyword section  */}

        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1.3rem",
              padding: "24px 30px",
              boxShadow: "4px 5px 15px 0px #C8C8C8 ",
              borderRadius: "10px",
            }}
          >
            <Heading Heading="Allowed Abbreviations" />
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: "1.3rem" }}
            >
              <Box sx={{ position: "relative" }}>
                <input
                  type="search"
                  name="search"
                  id="search"
                  value={searchTermAbb}
                  onChange={(e) => setSearchTermAbb(e.target.value)}
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
                  height: "200px",
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
                  {filteredAbbrevation.map((keyword, index) => (
                    <RestrictedKeyword
                      key={index}
                      content={keyword}
                      onRemove={() => handleRemoveAbbrevation(keyword)}
                    />
                  ))}
                </Box>
              </Box>
              <Box sx={{ position: "relative", marginTop: "30px" }}>
                <Controller
                  name="newAbbrevation"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      name="newAbbrevation"
                      id="newAbbrevation"
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
                      placeholder="Add new Abbrevation"
                    />
                  )}
                />
                <Typography
                  sx={{
                    position: "absolute",
                    top: {
                      sm: "7px",
                      xs: "6px",
                    },
                    right: {
                      xs: "05px",
                      sm: "20px",
                    },
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
                    onClick={handleSubmit(handleAddAbbrevation)}
                  />
                </Typography>
              </Box>
            </Box>
          </Box>
          {/* Download and Upload Buttons */}
          <Box
            sx={{
              display: "flex",
              mt: "20px",
              gap: "1rem",
              justifyContent: {
                md: "end",
                xs: "end",
              },
            }}
          >
            <CustomButton
              borderRadius="12px"
              padding="12px 0px"
              fontSize="14px"
              ButtonText="Download CSV"
              width={"143px"}
              color="white"
              background="linear-gradient(to right, #1A0049, #3F016A)"
              onClick={downloadAbbCsv}
            />
            <div>
              <input
                type="file"
                id="fileInput"
                onChange={handleFileChangeAbb}
                style={{
                  display: "none",
                }}
              />
              <label
                htmlFor="fileInput"
                style={{
                  display: "inline-block",
                  padding: "12px 20px",
                  borderRadius: "12px",
                  background: "linear-gradient(to right, #1A0049, #3F016A)",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Select CSV File
              </label>
            </div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ToolManagement;
