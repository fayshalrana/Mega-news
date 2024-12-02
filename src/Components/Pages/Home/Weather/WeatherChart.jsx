import React from 'react';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis } from 'recharts';

class CustomizedLabel extends React.PureComponent {
  render() {
    const { x, y, stroke, value } = this.props;

    return (
      <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
        {value}
      </text>
    );
  }
}

const WeatherChart = () => {
  const data = [
    { name: '6 AM', Tmp: 27 },
    { name: '8 AM', Tmp: 19 },
    { name: '11 AM', Tmp: 25 },
    { name: '2 PM', Tmp: 21 },
    { name: '5 PM', Tmp: 28 },
    { name: '8 PM', Tmp: 29 },
    { name: '11 PM', Tmp: 21 }
  ];

  return (
    <LineChart width={580} height={200} data={data}>
      {/* Line chart with temperature data and customized labels */}
      <Line
        type="monotone"
        dataKey="Tmp"
        stroke="#fcc54c"
        strokeWidth={3}
        label={<CustomizedLabel />}
      />
      
      {/* X-axis with time labels */}
      <XAxis axisLine={false} interval="preserveStartEnd" dataKey="name" />
      
      {/* Tooltip for data points */}
      <Tooltip />
    </LineChart>
  );
};

export default WeatherChart;
