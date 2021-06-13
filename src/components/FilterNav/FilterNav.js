import React, { useContext } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { dashboardContext } from "../../helper/context";
import { options } from "./constants";
import style from "./filterNavstyle.module.css";

function FilterNav() {
  const { setSelected } = useContext(dashboardContext);

  const onChange = (params) => {
    setSelected(params.value);
  };

  const defaultOption = options[0];

  return (
    <div className={style.filterBox}>
      <div className={style.dropdown}>
        <Dropdown options={options} onChange={onChange} value={defaultOption} />
      </div>
    </div>
  );
}

export default FilterNav;
