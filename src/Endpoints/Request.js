import axiosInstance from "../Hooks/useQueryGallery/AuthHook/AuthHook";

const appUrl= import.meta.env.VITE_REACT_APP_API_URL

export const POST = async(endpint, data)=>{
try{
    const response = await axiosInstance({url:appUrl+endpint, method:"post", data:data})
    return response.data
}
catch(error){
    throw new Error(error.response.data.message)
}
}


export const Get = async(endpint, data)=>{
    try{
        const response = await axiosInstance.get(endpint, {
            params:data
        })
        return response.data
    }
    catch(error){
        return error
    }
    }