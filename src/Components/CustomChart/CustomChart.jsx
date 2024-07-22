import React, { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const CustomChart = ({data}) => {
    const [dynamicWidth, setDynamicWidth] = useState("100%");
    const [dynamicHeight, setDynamicHeight] = useState(400); // Default height

    const getAutomaticHeightAndWidth = () => {
        if (window.innerWidth <= 300) {
            setDynamicWidth(200);
            
        } else {
            setDynamicWidth("100%");
            setDynamicHeight("100%"); // You can set any default height here
        }

        if (window.innerWidth <= 500) {
          
          setDynamicHeight(350);
      }

    };

    useEffect(() => {
        getAutomaticHeightAndWidth(); // Set initial size
        window.addEventListener("resize", getAutomaticHeightAndWidth);
        return () => window.removeEventListener("resize", getAutomaticHeightAndWidth);
    }, []);

    return (
        <ResponsiveContainer width={dynamicWidth} height={dynamicHeight}>
            <AreaChart
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="3 8" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="credits" stroke="#3D0166" fillOpacity={0.1} fill="#EBDBF6" />
            </AreaChart>
        </ResponsiveContainer>
    );
}

export default CustomChart;
