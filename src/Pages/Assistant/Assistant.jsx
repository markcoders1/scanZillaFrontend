import { Box, Tabs, Tab, TextField } from "@mui/material";
import Heading from "../../Components/Heading/Heading";
import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import axiosInstance from "../../Hooks/useQueryGallery/AuthHook/AuthHook";
import CustomInputShadow from "../../Components/CustomInputShadow/CustomInputShadow";
import { useSelector, useDispatch } from "react-redux";
import LoaderMain from "../../Components/Loader/LoaderMain";
import CustomButton from "../../Components/CustomButton/CustomButton";
import { handleSnackAlert } from "../../Redux/Slice/SnackAlertSlice/SnackAlertSlice";
import SnackAlert from "../../Components/SnackAlert/SnackAlert";

const appUrl = import.meta.env.VITE_REACT_APP_API_URL;

const Assistant = () => {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const [page, setPage] = useState("title");
    const [pointers, setPointers] = useState({
        titleDo: [""],
        titleDont: [""],
        descriptionDo: [""],
        descriptionDont: [""],
        bulletsDo: [""],
        bulletsDont: [""],
    });

    const divideString = (string) =>{
        return string
    }

    const joinArray = (array) => {
        return array.map(item => ` -${item}`).join('');
    }

    const handlePageChange = (event, newValue) => {
        setPage(newValue);
    };

    const handleChange = (tab, type, index, value) => {
        const newData = { ...pointers };
        newData[`${tab}${type}`][index] = value;
        setPointers(newData);
    };

    const addField = (tab, type) => {
        const newData = { ...pointers };
        newData[`${tab}${type}`].push("");
        setPointers(newData);
    };

    const removeField = (tab, type, index) => {
        const newData = { ...pointers };
        newData[`${tab}${type}`].splice(index, 1);
        setPointers(newData);
    };


    const handleSubmit = async () => {
        const payload = {
            titleDo: pointers.titleDo,
            titleDont: pointers.titleDont,
            descriptionDo: pointers.descriptionDo,
            descriptionDont: pointers.descriptionDont,
            bulletsDo: pointers.bulletsDo,
            bulletsDont: pointers.bulletsDont,
        };
        
        

        try {
            const response = await axiosInstance({
                url: `${appUrl}/assistant`,
                method: "post",
                data: payload
            });
            dispatch(
                handleSnackAlert({
                    open: true,
                    message: "Intructions updated Successfully",
                    severity: "success",
                })
            );
            console.log(response);
        } catch (error) {
            console.error("Error when changing Rules:", error);
            console.log("hello");
        }


        console.log(payload);
    };


    const fetchAnalysis = async () => {
        try {
            setLoading(true);
            const response = await axiosInstance({
                url: `${appUrl}/assistant`,
                method: "get",
            });
            setLoading(false);
           
            setPointers({
                titleDo: divideString(response.data.title.Dos),
                titleDont: divideString(response.data.title.Donts),
                descriptionDo: divideString(response.data.description.Dos),
                descriptionDont: divideString(response.data.description.Donts),
                bulletsDo: divideString(response.data.bullets.Dos),
                bulletsDont: divideString(response.data.bullets.Donts),
            });
        } catch (error) {
            console.error("Error fetching analysis data:", error);
        }
    };

    useEffect(() => {
        fetchAnalysis();
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
                    }}>
                    <LoaderMain />
                </Box>
            ) : (
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: ".7rem",
                    }}>
                    <Tabs
                        value={page}
                        onChange={handlePageChange}
                        centered
                        indicatorColor="secondary"
                        textColor="secondary">
                        <Tab label="Title" value="title" />
                        <Tab label="Description" value="description" />
                        <Tab label="Bullet Points" value="bullets" />
                    </Tabs>

                    {["title", "description", "bullets"].map(
                        (tab) =>
                            page === tab && (
                                <div key={tab}>
                                    <Box>
                                        <h3>Dos</h3>
                                        {pointers[`${tab}Do`].map((item, index) => (
                                            <div key={index}>
                                                <TextField
                                                    value={item}
                                                    onChange={(e) =>
                                                        handleChange(
                                                            tab,
                                                            "Do",
                                                            index,
                                                            e.target.value
                                                        )
                                                    }
                                                    style={{
                                                        width:"100%",
                                                        margin:"10px 0"
                                                    }}
                                                />
                                            </div>
                                        ))}
                                        <Box sx={{display:"flex", width:"100%", justifyContent:"end", gap:"10px"}}>
                                            <CustomButton
                                                borderRadius="12px"
                                                padding="12px 0px"
                                                fontSize="14px"
                                                ButtonText="Add Dos"
                                                width="143px"
                                                color="white"
                                                background="linear-gradient(to right, #1A0049, #3F016A)"
                                                onClick={() => addField(tab, "Do")}
                                            />
                                            <CustomButton
                                                borderRadius="12px"
                                                padding="12px 0px"
                                                fontSize="14px"
                                                ButtonText="Remove Last"
                                                width="143px"
                                                color="white"
                                                background="linear-gradient(to right, #1A0049, #3F016A)"
                                                onClick={()=>removeField(tab, "Do", pointers[`${tab}Do`].length-1)}
                                            />
                                        </Box>
                                    </Box>
                                        
                                    <Box margin={"20px 0"}>
                                        <h3>Donts</h3>

                                        
                                        {pointers[`${tab}Dont`].map((item, index) => (
                                            <div key={index}>
                                                <TextField
                                                    style={{
                                                    width:"100%",
                                                    margin:"10px 0"
                                                    }}
                                                    value={item}
                                                    onChange={(e) =>
                                                        handleChange(
                                                            tab,
                                                            "Dont",
                                                            index,
                                                            e.target.value
                                                        )
                                                    }
                                                />

                                            </div>
                                        ))}

                                        <Box sx={{display:"flex", width:"100%", justifyContent:"end", gap:"10px"}}>
                                            <CustomButton
                                                borderRadius="12px"
                                                padding="12px 0px"
                                                fontSize="14px"
                                                ButtonText="Add Don't"
                                                width="143px"
                                                color="white"
                                                background="linear-gradient(to right, #1A0049, #3F016A)"
                                                onClick={() => addField(tab, "Dont")}
                                            />
                                            <CustomButton
                                                borderRadius="12px"
                                                padding="12px 0px"
                                                fontSize="14px"
                                                ButtonText="Remove Last"
                                                width="143px"
                                                color="white"
                                                background="linear-gradient(to right, #1A0049, #3F016A)"
                                                onClick={()=>removeField(tab, "Dont", pointers[`${tab}Dont`].length-1)}
                                            />
                                        </Box>
                                    </Box>
                                </div>
                            )
                    )}

                    {/* <Box>
                        <Heading Heading="Title (Dos)" />
                        <Box sx={{ mt: "10px" }}>
                            <Controller
                                name="titledoes"
                                control={control}
                                render={({ field }) => (
                                    <CustomInputShadow
                                        {...field}
                                        height="272px"
                                        multiline={true}
                                        type="text"
                                        rows="10"
                                    />
                                )}
                            />
                        </Box>
                    </Box>
                    <Box>
                        <Heading Heading="Title (Dont's)" />
                        <Box sx={{ mt: "10px" }}>
                            <Controller
                                name="titledont"
                                control={control}
                                render={({ field }) => (
                                    <CustomInputShadow
                                        {...field}
                                        height="272px"
                                        multiline={true}
                                        type="text"
                                        rows="10"
                                    />
                                )}
                            />
                        </Box>
                    </Box>
                    <Box>
                        <Heading Heading="Description (Dos)" />
                        <Box sx={{ mt: "10px" }}>
                            <Controller
                                name="descriptiondoes"
                                control={control}
                                render={({ field }) => (
                                    <CustomInputShadow
                                        {...field}
                                        height="180px"
                                        multiline={true}
                                        type="text"
                                        rows="6"
                                    />
                                )}
                            />
                        </Box>
                    </Box>
                    <Box>
                        <Heading Heading="Description (Dont's)" />
                        <Box sx={{ mt: "10px" }}>
                            <Controller
                                name="descriptiondont"
                                control={control}
                                render={({ field }) => (
                                    <CustomInputShadow
                                        {...field}
                                        height="180px"
                                        multiline={true}
                                        type="text"
                                        rows="6"
                                    />
                                )}
                            />
                        </Box>
                    </Box>
                    <Box>
                        <Heading Heading="Bullet (Dos)" />
                        <Box sx={{ mt: "10px" }}>
                            <Controller
                                name="bulletdoes"
                                control={control}
                                render={({ field }) => (
                                    <CustomInputShadow
                                        {...field}
                                        height="180px"
                                        multiline={true}
                                        type="text"
                                        rows="6"
                                    />
                                )}
                            />
                        </Box>
                    </Box>
                    <Box>
                        <Heading Heading="Bullet (Dont's)" />
                        <Box sx={{ mt: "10px" }}>
                            <Controller
                                name="bulletdont"
                                control={control}
                                render={({ field }) => (
                                    <CustomInputShadow
                                        {...field}
                                        height="272px"
                                        multiline={true}
                                        type="text"
                                        rows="10"
                                    />
                                )}
                            />
                        </Box>
                    </Box> */}
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "end",
                            mt: "10px",
                        }}>
                        <CustomButton
                            borderRadius="12px"
                            padding="12px 0px"
                            fontSize="14px"
                            ButtonText="Save"
                            width="143px"
                            color="white"
                            background="linear-gradient(to right, #1A0049, #3F016A)"
                            onClick={handleSubmit}
                        />
                    </Box>
                </Box>
            )}
        </>
    );
};

export default Assistant;
