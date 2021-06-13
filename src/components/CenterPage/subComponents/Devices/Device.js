import React from "react";
import phone from "./images/mobile.png";
import laptop from "./images/laptop.png";
import style from "./style.module.css";

function Device(props) {
  const { selected, deviceUsage } = props;

  let data = {};

  if (selected === "All") data = deviceUsage.totalTime;
  if (selected === "Class-time only") data = deviceUsage.classTime;
  if (selected === "Study-time only") data = deviceUsage.studyTime;
  if (selected === "Free-time only") data = deviceUsage.freeTime;

  if (data && data.mobile < 60) data.mobile = data.mobile + "m";
  if (data && data.laptop < 60) data.laptop = data.laptop + "m";

  function timeConvert(num) {
    var hours = Math.floor(num / 60);
    var minutes = num % 60;
    return hours + "h " + +minutes + "m";
  }

  if (data && data.mobile > 60) data.mobile = timeConvert(data.mobile);
  if (data && data.laptop > 60) data.laptop = timeConvert(data.laptop);

  return (
    <div className={style.body}>
      <h2 className={style.heading}>By Devices</h2>
      <div className={style.icons}>
        <div className={style.phone}>
          <img
            src={phone}
            style={{ height: "6vw", marginBottom: "2vw" }}
            alt="MobilePhone.img"
          />
          <div className={style.descrp}>
            <h3 className={style.labelHead}>Adi's Phone</h3>
            <label className={style.blue}>{data && data.mobile}</label>
          </div>
        </div>
        <div className={style.phone}>
          <img src={laptop} style={{ height: "8vw" }} alt="LaptopImage.img" />
          <div className={style.descrp}>
            <h3 className={style.labelHead}>Adi's Laptop</h3>
            <label className={style.blue}>{data && data.laptop}</label>
          </div>
        </div>
      </div>
      <label className={style.foot}>See all devices</label>
    </div>
  );
}

export default Device;
