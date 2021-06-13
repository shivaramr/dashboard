import React from "react";
import AddToQueueIcon from "@material-ui/icons/AddToQueue";
import style from "./addStyle.module.css";

function AddDevice() {
  return (
    <>
      <button className={style.button}>
        <AddToQueueIcon />
        Add Device
      </button>
    </>
  );
}

export default AddDevice;
