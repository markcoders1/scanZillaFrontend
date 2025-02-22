import React, { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import dayjs from 'dayjs';

const CustomTooltip = ({ active, payload, label, setHoveredValue }) => {
    if (active && payload && payload.length) {
        const value = payload[0].value;
        const formattedLabel = dayjs(label).format('DD/MM/YY'); // Format label date
        setHoveredValue(value);

        return (
            <div className="custom-tooltip" style={{ backgroundColor: '#fff', padding: '10px', border: '1px solid #ccc' }}>
                <p className="label">{formattedLabel}</p>
                <p className="intro">{`Credits Used: ${value}`}</p>
            </div>
        );
    }

    return null;
};

const Chart = ({ data, setHoveredValue }) => {
    const [dynamicWidth, setDynamicWidth] = useState("100%");
    const [dynamicHeight, setDynamicHeight] = useState(350); // Default height

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

    // Map API data structure to chart-friendly format
    const formattedData = data.map(item => ({
        date: dayjs(item.date).format('DD/MM/YY'), // Format date
        creditsUsed: item.creditsUsed
    }));

    return (
        <ResponsiveContainer width={dynamicWidth} height={dynamicHeight}>
            <AreaChart
                data={formattedData}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="3 8" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip content={<CustomTooltip setHoveredValue={setHoveredValue} />} />
                <Area type="monotone" dataKey="creditsUsed" stroke="#3D0166" fillOpacity={0.1} fill="#EBDBF6" />
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default Chart;
