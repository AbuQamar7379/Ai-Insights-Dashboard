import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { useSelector } from "react-redux";
import { RootState } from "../types";
import "./css/styles.css";

/**
 * Functional component representing a line chart to display daily and weekly response times.
 * @returns JSX.Element
 */
const LineChartComponent: React.FC = () => {
  // Get daily and weekly response times from Redux state
  const dailyResponseTimes = useSelector(
    (state: RootState) => state.data.aiData?.response_times.day_wise
  );
  const weeklyResponseTimes = useSelector(
    (state: RootState) => state.data.aiData?.response_times.week_wise
  );

  return (
    <div className="chartParent">
      <h2>Response Times</h2>
      <div className={"times"}>
        <div>
          <h4 className={"text"}>Daily Response Times</h4>
          <LineChart
            width={600}
            height={300}
            data={dailyResponseTimes}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="date" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="average_time" stroke="#8884d8" />
          </LineChart>
        </div>
        <div>
          <h4 className={"text"}>Weekly Response Times</h4>
          <LineChart
            width={600}
            height={300}
            data={weeklyResponseTimes}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="week" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="average_time" stroke="#82ca9d" />
          </LineChart>
        </div>
      </div>
    </div>
  );
};

export default LineChartComponent;
