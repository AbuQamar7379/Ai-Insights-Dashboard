import React, { useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../types";
import { fetchAiData } from "../actions/dataActions";
import { AppDispatch } from "../app/store";
import "./css/styles.css";

/**
 * Functional component representing a bar chart to display category distribution data.
 * @returns JSX.Element
 */

const BarChartComponent: React.FC = () => {
  // useDispatch hook to dipatch fetched aiData
  const dispatch = useDispatch<AppDispatch>();
  // Get category distribution from Redux state
  const categoryData = useSelector(
    (state: RootState) => state.data.aiData?.category_distribution
  );

  // Fetch AI data on component mount
  useEffect(() => {
    dispatch(fetchAiData());
  }, [dispatch]);

  return (
    <div className="chartParent">
      {categoryData && (
        <>
          <h2>Category Distribution (BarChart)</h2>
          <BarChart
            width={600}
            height={400}
            data={Object.entries(categoryData).map(([category, queries]) => ({
              category,
              queries,
            }))}
          >
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="queries" fill="#adc178" />
          </BarChart>
        </>
      )}
    </div>
  );
};

export default BarChartComponent;
