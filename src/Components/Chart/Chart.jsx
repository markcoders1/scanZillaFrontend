import React, { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Chart = () => {
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

    const dummyData = [
        { name: 'Jan', credits: 400 },
        { name: 'Feb', credits: 300 },
        { name: 'Mar', credits: 200 },
        { name: 'Apr', credits: 278 },
        { name: 'May', credits: 189 },
        { name: 'Jun', credits: 239 },
        { name: 'Jul', credits: 349 },
        { name: 'Aug', credits: 200 },
        { name: 'Sep', credits: 300 },
        { name: 'Oct', credits: 400 },
        { name: 'Nov', credits: 200 },
        { name: 'Dec', credits: 300 },
    ];

    return (
        <ResponsiveContainer width={dynamicWidth} height={dynamicHeight}>
            <AreaChart
                data={dummyData}
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

export default Chart;
