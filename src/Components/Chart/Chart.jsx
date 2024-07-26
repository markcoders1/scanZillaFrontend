import React, { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const CustomTooltip = ({ active, payload, label, yFormatter, setHoveredValue }) => {
    if (active && payload && payload.length) {
        const value = yFormatter ? yFormatter(payload[0].value) : payload[0].value;
        setHoveredValue(value);
        return (
            <div className="custom-tooltip" style={{ backgroundColor: '#fff', padding: '10px', border: '1px solid #ccc' }}>
                <p className="label">{`${label}`}</p>
                <p className="intro">{`Value: ${value}`}</p>
            </div>
        );
    }

    return null;
};

const Chart = ({ data, xKey, yKey, yFormatter, setHoveredValue }) => {
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

    // Apply yFormatter to the data if provided
    const formattedData = yFormatter ? data.map(item => ({ ...item, [yKey]: yFormatter(item[yKey]) })) : data;

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
                <XAxis dataKey={xKey} />
                <YAxis />
                <Tooltip content={<CustomTooltip yFormatter={yFormatter} setHoveredValue={setHoveredValue} />} />
                <Area type="monotone" dataKey={yKey} stroke="#3D0166" fillOpacity={0.1} fill="#EBDBF6" />
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default Chart;
