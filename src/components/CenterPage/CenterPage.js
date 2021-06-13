import React, { useContext, useEffect, useState } from "react";
import PieChart from "./subComponents/PieChart/PieChart";
import ProgressBar from "./subComponents/ProgressBar/ProgressBar";
import Device from "./subComponents/Devices/Device";
import { url } from "../../helper/API";
import { dashboardContext } from "../../helper/context";
import style from "./cpg.module.css";

function CenterPage() {
  const { selected } = useContext(dashboardContext);

  const [chart, setChart] = useState({});
  const [deviceUsage, setDeviceUsage] = useState({});
  const [free, setFree] = useState("");
  const [err, setErr] = useState("");

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.status !== 200)
          throw new Error("Server responds with error");
        return response.json();
      })
      .then(
        (data) => {
          setChart(data[0].chartData);
          setDeviceUsage(data[0].deviceUsage);
          setFree(data[0].freeTimeMaxUsage);
        },
        (err) => setErr(err)
      );
  }, []);

  return (
    <>
      {!err && (
        <div className={style.body}>
          <PieChart chart={chart} />
          {selected === "All" && (<ProgressBar free={free} used={deviceUsage.freeTime} />)}
          <Device deviceUsage={deviceUsage} selected={selected} />
        </div>
      )}
    </>
  );
}

export default CenterPage;
