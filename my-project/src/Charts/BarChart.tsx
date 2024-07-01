"use client";
import Chart from "react-apexcharts";
const BarChart = () => {
  const options = {
    chart: {
      height: 350,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: "28px",
          },
          value: {
            fontSize: "16px",
          },
          total: {
            show: true,
            label: "Total",
            formatter: function (w: { w: `Object` }) {
              console.log(w);
              return 249;
            },
          },
        },
      },
    },
  };
  const series = [44, 55, 67, 83];
  return (
    <div className="max-w-sm border-2 py-5 h-full max-h-[450px] px-3 rounded-sm shadow">
      <Chart options={options} height={350} series={series} type="radialBar" />
    </div>
  );
};

export default BarChart;
