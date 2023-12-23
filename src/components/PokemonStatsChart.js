import React from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
const PokemonStatsChart = ({ stats }) => {
  // Extracting stat names and base stats from the provided data
  const labels = stats.map((stat) => stat.stat.name);
  const baseStats = stats.map((stat) => stat.base_stat);

  // Setting up the data for the bar chart
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Base Stats',
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.6)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: baseStats,
      },
    ],
  };

  // Setting up options for the bar chart
  const options = {
    scales: {
      yAxis: {
        beginAtZero: true,
        max: 150,
      },
    },
  };

  return (
    <div>
      <h2 className='font-semibold'>Pokemon Stats Bar Chart</h2>
      <Bar data={data} options={options}  />
    </div>
  );
};

export default PokemonStatsChart;
