import React, { PureComponent } from 'react';
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
    height=200,
    width=500
}) => {
    return (
        <><ResponsiveContainer width="100%" height={"100%"}>
            <AreaChart
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
                style={{
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