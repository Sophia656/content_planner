import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

function PieChart({chartData, dataOptions}) {
    return <Doughnut data={chartData} options={dataOptions} />
}

export default PieChart;