import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
import { useSelector } from "react-redux";
import { RootState } from "../types";
import "./css/styles.css";

/**
 * Functional component representing a bar chart to display platform-wise usage statistics.
 * @returns JSX.Element
 */
const PlatformChartComponent: React.FC = () => {
  // Get platform-wise usage statistics from Redux state
  const platformData = useSelector((state: RootState) => {
    const data = state.data.aiData?.usage_statistics.by_platform;
    return data
      ? Object.entries(data).map(([platform, count]) => ({ platform, count }))
      : [];
  });

  return (
    <div className="chartParent">
      <h2>Usage Statistics</h2>
      <BarChart width={600} height={400} data={platformData}>
        <XAxis dataKey="platform" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#3a5a40" />
      </BarChart>
    </div>
  );
};

export default PlatformChartComponent;
