import React from "react";
import style from "./Dashboard.module.scss";
import img from "../../../Asset/image/logo1.png";
import Header from "../../../component/Header";
import HeaderTop from "../../../component/Header-top";
import Headerbutton from "../../../component/Header-button";

const Dashboard = () => {
  return (
    <>
      <div className={`row`}>
        <div className="col-md-2">
          <Header />
        </div>
        <div className="col-md-10">
          <div>
            <HeaderTop />
          </div>
          <div className={style.Dash}>
            <img src={img} />
          </div>
          <div>
            <Headerbutton />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
