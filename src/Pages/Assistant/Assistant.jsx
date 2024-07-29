import { Box, Typography } from '@mui/material'
import Heading from '../../Components/Heading/Heading'
import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import axiosInstance from "../../Hooks/useQueryGallery/AuthHook/AuthHook";
import CustomInputShadow from '../../Components/CustomInputShadow/CustomInputShadow'
import { useSelector, useDispatch } from "react-redux";
import LoaderMain from "../../Components/Loader/LoaderMain";
import CustomButton from '../../Components/CustomButton/CustomButton';
import { handleSnackAlert } from "../../Redux/Slice/SnackAlertSlice/SnackAlertSlice";


const appUrl = import.meta.env.VITE_REACT_APP_API_URL;

const Assistant = () => {
    const [analysisData, setAnalysisData] = useState(null);
    const dispatch = useDispatch();

    const { control, handleSubmit, reset, getValues } = useForm({
        defaultValues: {
            titledoes: "",
            titledont: "",
            descriptiondoes: "",
            descriptiondont: "",
            bulletdoes: "",
            bulletdont: ""
        },
    });

    const fetchAnalysis = async () => {
        try {
            const response = await axiosInstance({
                url: `${appUrl}/assistant`,
                method: "get",
            });
            setAnalysisData(response.data);
            reset({
                titledoes: response.data.title.Dos,
                titledont: response.data.title.Donts,
                descriptiondoes: response.data.description.Dos,
                descriptiondont: response.data.description.Donts,
                bulletdoes: response.data.bullets.Dos,
                bulletdont: response.data.bullets.Donts
            });
            console.log(response.data);
            dispatch(handleSnackAlert({ open: true, message: "Intructions updated Successfully", severity: "success" }))
        } catch (error) {
            console.error("Error fetching analysis data:", error);
        }
    };

    const onSubmit = async (data) => {
        console.log("Input Data:", data);
        try {
            // console.log("hello")
            const response = await axiosInstance({
                url: `${appUrl}/assistant`,
                method: "post",
                data: {
                    titleDo: data.titledoes,
                    titleDont: data.titledont,
                    descriptionDo: data.descriptiondoes,
                    descriptionDont: data.descriptiondont,
                    bulletsDo: data.bulletdoes,
                    bulletsDont: data.bulletdont,
                },
            });
            dispatch(handleSnackAlert({ open: true, message: "Intructions updated Successfully", severity: "success" }))
            console.log("hello")
            console.log(response);
        } catch (error) {
            console.error("Error when changing Rules:", error);
            console.log("hello")
        }
    };

    useEffect(() => {
        fetchAnalysis();
    }, []);

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: ".7rem"
            }}
        >
            <Box>
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
            </Box>
            <Box sx={{ display: "flex", justifyContent: "end", mt: "10px" }}>
                <CustomButton
                    borderRadius="12px"
                    padding="12px 0px"
                    fontSize="14px"
                    ButtonText="Save"
                    width="143px"
                    color="white"
                    background="linear-gradient(to right, #1A0049, #3F016A)"
                    onClick={handleSubmit(onSubmit)}
                />
            </Box>
        </Box>
    );
};

export default Assistant;
