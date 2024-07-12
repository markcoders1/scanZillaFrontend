import { initializeApp } from "firebase/app";

import { getAuth, signInWithPopup, GoogleAuthProvider, getIdToken } from "firebase/auth";
import axiosInstance from "./src/Hooks/useQueryGallery/AuthHook/AuthHook";


const firebaseConfig = {
    apiKey: "AIzaSyBAAVcCnPLvHe-81R6u2bnkCGW7qhWZJZM",
    authDomain: "scanzilla-53a4d.firebaseapp.com",
    projectId: "scanzilla-53a4d",
    storageBucket: "scanzilla-53a4d.appspot.com",
    messagingSenderId: "393747405017",
    appId: "1:393747405017:web:0e064325f14e44a60906c8",
    measurementId: "G-702ZZNRMGQ"
};

export const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

const appUrl = import.meta.env.VITE_REACT_APP_API_URL;
export const auth = getAuth();

export const signInWithGooglePopup = async () => {
    const result = await signInWithPopup(auth, provider)
    const idToken = await getIdToken(result.user)

    const response = await axiosInstance({
        method: "post",
        url: `${appUrl}/oauth`,
        data: {
            idToken
        }
    })

     const responseData = response

     return responseData
   
    // const accessToken = response.data.accessToken;
    // const refreshToken = response.data.refreshToken;
    // const userId = result.user.uid; 

    // console.log("Access Token:", accessToken);
    // console.log("Refresh Token:", refreshToken);
    // console.log("User ID:", userId);

    // return { accessToken, refreshToken, userId };
};