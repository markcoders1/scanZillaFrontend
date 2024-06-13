import { POST } from "./Request";

export const LoginUser = (data)=>POST("/login", data).catch((error)=>{throw new Error(error)})
// export const authStatus = ()=>Get("/login")