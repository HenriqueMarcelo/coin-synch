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

type Props = {
  history: number[]
}

export function Chart({ history }: Props) {
  const data = {
    labels,
    datasets: [
      {
        label: 'Variation',
        data: history,
        borderColor: '#AD721A',
        backgroundColor: '#FFE1B5',
        tension: 0.3,
      },
    ],
  }
  return (
    <div className="chart__container">
      <Line options={options} data={data} />
    </div>
  )
}
