import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, ReferenceLine, Tooltip, XAxis } from 'recharts';
import './ProfleChart.css'

const ProfileChart = () => {
    const data = [
        { name: "March 2022", view: 40 },
        { name: "April 2022", view: 30 },
        { name: "May 2022", view: 15 },
        { name: "June 2022", view: 55 },
        { name: "July 2022", view: 20 },
        { name: "Aug 2022", view: 75 },
        { name: "Sept 2022", view: 95 },
        { name: "Oct 2022", view: 60 },
    ];

    return (
        <LineChart width={900} height={300} data={data}>
            <CartesianGrid strokeWidth={8} vertical horizontal={false} stroke='#f5f3f1'/>
            <Line type='monotone' dataKey='view' stroke='#fcc54c' strokeWidth={3} />
            <XAxis axisline={false} interval="preserveStartEnd"   dataKey='name' />
            <Tooltip />
        </LineChart>
    );
};

export default ProfileChart;
