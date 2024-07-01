import BarChart from "./Charts/BarChart";
import ChartOfPie from "./Charts/Pie";

const App = () => {
  return (
    <div className="my-5 container mx-auto">
      <div className="grid grid-cols-1 gap-6 ">
        <ChartOfPie />
        <BarChart />
      </div>
    </div>
  );
};

export default App;
