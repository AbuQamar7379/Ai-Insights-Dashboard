import "./App.css";
import { Provider } from "react-redux";
import store from "./app/store";
import BarChartComponent from "./components/CategoryDistribution";
import LineChartComponent from "./components/ResponseTimes";
import PieChartComponent from "./components/UserSatisfaction";
import PlatformChartComponent from "./components/UsageStatistics";

function App() {
  return (
    <Provider store={store}>
      <BarChartComponent />
      <hr />
      <LineChartComponent />
      <hr />
      <PieChartComponent />
      <hr />
      <PlatformChartComponent />
    </Provider>
  );
}

export default App;
