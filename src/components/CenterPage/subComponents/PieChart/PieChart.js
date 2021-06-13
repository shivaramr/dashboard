import React, { useContext } from "react";
import { Doughnut } from "react-chartjs-2";
import { dashboardContext } from "../../../../helper/context";
import { chartData, options } from "./chartFiles";
import style from "./piestyle.module.css";

function PieChart(props) {
  const { selected } = useContext(dashboardContext);

  const { chart } = props;

  let data = {};
  data = chartData({chart, selected})

  return (
    <div className={style.body}>
      <h2 className={style.heading}>All Screen Time</h2>
      <div className={style.chart}>
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
}

export default PieChart;
