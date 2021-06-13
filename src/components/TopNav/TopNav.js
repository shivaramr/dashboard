import React from "react";
import AddDevice from "./subComponents/addDevice/AddDevice";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";
import styles from "./topNav.module.css";

function TopNav() {
  return (
    <div className={styles.topNav}>
      <div className={styles.user}>
        <AccountCircleIcon className={styles.icon} />
        <h4>Aditya Prasad</h4>
      </div>
      <AddDevice />
      <MoreHorizOutlinedIcon className={styles.menu} />
    </div>
  );
}

export default TopNav;
