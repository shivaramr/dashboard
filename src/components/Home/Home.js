import React, { useState } from "react";
import CenterPage from "../CenterPage/CenterPage";
import FilterNav from "../FilterNav/FilterNav";
import TopNav from "../TopNav/TopNav";
import { dashboardContext } from "../../helper/context";
import style from "./homeStyle.module.css";

function Home() {
  const { Provider } = dashboardContext;

  const [selected, setSelected] = useState("All");

  const contextValues = { selected, setSelected };

  return (
    <Provider value={contextValues}>
      <div className={style.home}>
        <TopNav />
        <div className={style.body}>
          <h2>Activities Summary</h2>
          <FilterNav />
          <CenterPage />
        </div>
      </div>
    </Provider>
  );
}

export default Home;
