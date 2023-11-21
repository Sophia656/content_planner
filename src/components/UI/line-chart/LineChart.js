import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

function LineChart({chartData, dataOptions}) {
    return <Bar data={chartData} options={dataOptions} />
}

export default LineChart;