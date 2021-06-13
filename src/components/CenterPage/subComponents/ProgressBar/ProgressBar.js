import React from "react";
import CustomizedProgressBars from "./bar";
import style from "./progBarstyle.module.css";

function ProgressBar(props) {
  const { free, used } = props;

  const progress = used && (( parseInt(used.mobile) + parseInt(used.laptop) )/120)*100;

  return (
    <div className={style.body}>
      <h2 className={style.heading}>Free-Time Usage</h2>
      <div className={style.bar}>
        <div className={style.label}>
          <h3 className={style.text}>Used</h3>
          <h3 className={style.text}>Max</h3>
        </div>
        <div className={style.label1}>
          <h3 className={style.text1}>{used && (parseInt(used.mobile) + parseInt(used.laptop))}m</h3>
          <h3 className={style.text}>{free/60}h</h3>
        </div>
        <CustomizedProgressBars progress={progress}/>
      </div>
      <button className={style.button}>Extend Free Time</button>
      <label className={style.foot}>Change Time Restrictions</label>
    </div>
  );
}

export default ProgressBar;
