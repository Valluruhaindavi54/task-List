 'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import styles from '../styles/day7.module.css';

// Dummy data
const dummyTraffic = [
  { time: 'Jan', visits: 400 },
  { time: 'Feb', visits: 300 },
  { time: 'Mar', visits: 500 },
  { time: 'Apr', visits: 600 },
  { time: 'May', visits: 350 },
];

const dummyActivity = [
  { user: 'Alice', actions: 10 },
  { user: 'Bob', actions: 15 },
  { user: 'Charlie', actions: 7 },
  { user: 'David', actions: 12 },
];

const dummyStatus = [
  { status: 'Active', value: 40 },
  { status: 'Inactive', value: 20 },
  { status: 'Pending', value: 10 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function Day7Page() {
  const router = useRouter();
  const [trafficData] = useState(dummyTraffic);
  const [activityData] = useState(dummyActivity);
  const [statusData] = useState(dummyStatus);

  const goHome = () => {
    router.push('/');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Day 7: Charts & Visualization</h1>

      {/* Home Button */}
      <button
        className="mb-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
        onClick={goHome}
      >
        Home
      </button>

      {/* Line Chart */}
      <div className={styles.chartContainer}>
        <h2>Traffic Over Time (Line Chart)</h2>
        <LineChart width={600} height={300} data={trafficData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="visits" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </div>

      {/* Bar Chart */}
      <div className={styles.chartContainer}>
        <h2>User Activity (Bar Chart)</h2>
        <BarChart width={600} height={300} data={activityData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="user" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="actions" fill="#82ca9d" />
        </BarChart>
      </div>

      {/* Pie Chart */}
      <div className={styles.chartContainer}>
        <h2>Status Distribution (Pie Chart)</h2>
        <PieChart width={400} height={400}>
          <Pie
            data={statusData}
            dataKey="value"
            nameKey="status"
            cx="50%"
            cy="50%"
            outerRadius={120}
            fill="#8884d8"
            label
          >
            {statusData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
}
