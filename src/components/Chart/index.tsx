import './styles.scss'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
)

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      display: false,
    },
    y: {
      display: false,
    },
  },
}

const labels = ['', '', '', '', '']

const data = {
  labels,
  datasets: [
    {
      label: 'Variation',
      data: [1, 5, 4, 7, 2],
      borderColor: '#AD721A',
      backgroundColor: '#FFE1B5',
      tension: 0.3,
      //   fill: true,
    },
  ],
}

export function Chart() {
  return (
    <div className="chart__container">
      <Line options={options} data={data} />
    </div>
  )
}
