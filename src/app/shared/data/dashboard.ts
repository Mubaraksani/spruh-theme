import { ChartConfiguration, ChartType } from 'chart.js';

//Chart js
export let lineChartOptions: ChartConfiguration['options'] = {
  maintainAspectRatio: false,
  responsive: true,

  hover: {
    mode: 'nearest',
    intersect: true,
  },
  scales: {
    x: {
      ticks: {
        color: '#c8ccdb',
      },
      display: true,
      grid: {
        color: 'rgba(119, 119, 142, 0.2)',
      },
    },
    y: {
      ticks: {
        color: '#77778e',
        stepSize: 150,
      },
      display: true,
      grid: {
        color: 'rgba(119, 119, 142, 0.2)',
      },
    },
  },
  plugins: {
    tooltip: {
      enabled: true,
      mode: 'index',
      intersect: false,
    },
    legend: {
      display: true,
      labels: {
        color: '#77778e',
      },
    },
  },
};

export let lineChartType: ChartType = 'line';
export let lineChartLegend = true;
export let lineChartData: ChartConfiguration['data'] = {
  datasets: [
    {
      label: 'TOTAL BUDGET',
      data: [100, 210, 180, 454, 454, 230, 230, 656, 656, 350, 350, 210, 410],
      borderWidth: 3,
      backgroundColor: 'transparent',
      borderColor: '#6259ca',
      pointBackgroundColor: '#ffffff',
      pointRadius: 0,
      tension: 0.5
    },
    {
      label: 'AMOUNT USED',
      data: [200, 530, 110, 110, 480, 520, 780, 435, 475, 738, 454, 454, 230],
      borderWidth: 3,
      backgroundColor: 'transparent',
      borderColor: 'rgb(183, 179, 220,0.5)',
      pointBackgroundColor: '#ffffff',
      pointRadius: 0,
      borderDash: [7, 3],
      tension: 0.5
    },
  ],
  labels: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Aug',
    'Sep',
    'Oct',
  ],
};

//Bar Charts

export let barChartOptions: ChartConfiguration['options'] = {
  maintainAspectRatio: false,
  aspectRatio: 6,
  responsive: true,
  scales: {
    grid: {
      display: false,
    },
    x: {
      stacked: true,
      grid:{
        display: false,
        borderColor: 'transparent'
      }
    },
    y: {
      stacked: true,
      display: false,
      grid: {
        display: false,
        borderColor: 'transparent'
      },
      type: 'linear',
    },
  },
  plugins:{
    legend: {
      position: 'bottom',
      display: false,
    },
  }
};
export let barChartType: ChartType = 'bar';
export let barChartData: ChartConfiguration['data'] = {
  datasets: [
    {
      label: 'Total Project',
      backgroundColor: '#6259ca',
      borderColor: '#6259ca',
      data: [89, 59, 76, 56, 58, 73, 59, 87, 45, 54, 59, 76, 56],
      barThickness: 6,
      barPercentage: 4,
      categoryPercentage: 4,
      borderRadius: 50
    },
    {
      label: 'On Going',
      backgroundColor: 'rgba(204, 204, 204,0.2)',
      borderColor: 'rgba(204, 204, 204,0.2)',
      data: [66, 59, 76, 56, 58, 65, 59, 85, 23, 32, 59, 76, 56],
      barThickness: 6,
      barPercentage: 4,
      categoryPercentage: 4,
      borderRadius: 50
    },
  ],
  labels: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
  ],
};
// export let barChartColors: Color[] = [
//     {
//         backgroundColor: '#6259ca',
//         borderColor: '#6259ca',
//     },
//     {
//         backgroundColor: "rgba(204, 204, 204,0.2)",
// 		borderColor: "rgba(204, 204, 204,0.2)",
//     }

// ]
