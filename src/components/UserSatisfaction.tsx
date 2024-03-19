import React from "react";
import { PieChart, Pie, Tooltip, Cell } from "recharts";
import { useSelector } from "react-redux";
import { RootState } from "../types";
import "./css/styles.css";

/**
 * Functional component representing a pie chart to display user satisfaction ratings.
 * @returns JSX.Element
 */
const PieChartComponent: React.FC = () => {
  // Get user satisfaction data from Redux state
  const userSatisfactionData = useSelector(
    (state: RootState) => state.data.aiData?.user_satisfaction.ratings
  );

  // Define color palette for pie chart sectors
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#FF0000"];

  return (
    <div className="chartParent">
      <h2>User Satisfaction</h2>
      <PieChart width={400} height={300}>
        <Pie
          data={userSatisfactionData}
          dataKey="count"
          nameKey="rating"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          label
        >
          {userSatisfactionData?.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default PieChartComponent;
