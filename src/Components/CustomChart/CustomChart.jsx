import React, { PureComponent, useEffect, useState } from 'react';
import { TbBackground } from 'react-icons/tb';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const CustomChart = ({
    data= [
        {
          name: 'jan',
          credits: 0,
       
        },
        {
          name: 'feb',
          credits: 3000,
          
         
        },
        {
          name: 'mar',
          credits: 2000,
          
        
        },
        {
          name: 'april',
          credits: 2780,
          
          
        },
        {
          name: 'may',
          credits: 1890,
         
       
        },
        {
          name: 'june',
          credits: 2390,
         
          
        },
        {
          name: 'july',
          credits: 3490,
      
        },
      ],
    // height="100%",
    width="100%"
}) => {
  const [dynamicWidth, setDynamicWidth] = useState("100%")
  const [dynamicheight, setDynamicHeight] = useState("100%")

const getAutomaticHeightAndWidth =()=>{
  console.log("window.innerWidth", window.innerWidth)
  console.log("window.innerHeight", window.innerHeight)
  if(window.innerWidth<=300){
    setDynamicWidth(200)
    setDynamicHeight("350px")
  }
  return {width:window.innerWidth, height:window.innerHeight}

}

  useEffect(()=>{
    window.addEventListener("resize", getAutomaticHeightAndWidth)
    return ()=> window.removeEventListener("resize", getAutomaticHeightAndWidth)
  },[])
    return (
        <><ResponsiveContainer width="100%" height={dynamicheight}>
            <AreaChart
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
                style={{
                  height:dynamicheight,
                  width:dynamicWidth,
                }}
            >
                <CartesianGrid strokeDasharray="3 8" />
                <XAxis dataKey="name" />
                <YAxis  />
                <Tooltip />
                <Area type="bumpX" dataKey="credits" stroke="#3D0166" fillOpacity = {0.1} fill="#EBDBF6" />
            </AreaChart>
        </ResponsiveContainer></>
    )
}

export default CustomChart