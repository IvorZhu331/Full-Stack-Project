import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

const ChartComponent = ({ data }) => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);
    const [chartType, setChartType] = useState('line');

    useEffect(() => {
        if (chartRef && chartRef.current) {
          if (chartInstance.current) {
              chartInstance.current.destroy(); // Destroy previous chart instance
          }

          const labels = data[0].slice(1); // Extracting month labels
          const datasets = data.slice(1).map((row, index) => {
              const color = '#' + Math.floor(Math.random() * 16777215).toString(16); // Random color for each dataset
              return {
                  label: row[0],
                  data: row.slice(1),
                  fill: chartType !== 'line',
                  borderColor: color, // Set border color
                  backgroundColor: color,
                  pointStyle: 'circle',
                  pointBackgroundColor: color, // Set point color
                  pointBorderColor: '#ffffff', // White border for points
                  pointBorderWidth: 1, // Border width for points
                  pointRadius: 5, // Radius of points
                  pointHoverRadius: 7, // Hover radius of points
                  hidden: index > 0, // Hide all datasets except the first one
              };
          });

          chartInstance.current = new Chart(chartRef.current, {
              type: chartType,
              data: {
                  labels: labels,
                  datasets: datasets,
              },
              options: {
                  responsive: true,
                  plugins: {
                      title: {
                          display: false,
                      },
                      legend: {
                          display: true,
                          position: 'bottom',
                          labels: {
                            generateLabels: function(chart) {
                              const datasets = chart.data.datasets;
                              return datasets.map((dataset, i) => {
                                return {
                                  text: dataset.label,
                                  fillStyle: dataset.borderColor,
                                  strokeStyle: dataset.borderColor,
                                  lineWidth: dataset.borderWidth,
                                  hidden: !chart.isDatasetVisible(i),
                                  // Custom property to hold the index of the dataset
                                  index: i 
                                };
                              });
                            },
                          },
                          // Custom onClick function to show/hide a dataset
                          onClick: function(e, legendItem, legend) {
                            const index = legendItem.index;
                            const chart = legend.chart;
                            const isHidden = chart.isDatasetVisible(index);
                            if (isHidden) {
                              chart.hide(index);
                            } else {
                              chart.show(index);
                            }
                            chart.update();
                          }
                        },
                  },
                  scales: {
                      y: {
                          suggestedMin: 0, // Ensure the y-axis starts from 0
                          suggestedMax: null, // Let Chart.js determine the maximum value
                      },
                  },
              },
          });
      }

      return () => {
        if (chartInstance.current) {
            chartInstance.current.destroy(); // Clean up chart instance on component unmount
        }
      };
    }, [data, chartType]); // Include chartType in dependencies array

    return (
      <div>
          <canvas ref={chartRef} />
          <select value={chartType} onChange={(e) => setChartType(e.target.value)}>
              <option value="bar">Bar</option>
              <option value="line">Line</option>
          </select>
      </div>
  );
};

export default ChartComponent;
