import React, { useEffect } from "react";
import style from "./Dasboard.module.css";

import { Layout } from "antd";

import { Icon } from "@iconify/react";
import axios from "axios";

const Dasboard = () => {
  // useEffect(() => {
  //   axios.get();
  // }, []);

  return (
    <Layout>
      <div className={style.mainbox}>
        <div className={style.image}>
          <img
            src="https://dmd-wordpress-assets.s3.amazonaws.com/wp-content/uploads/2016/10/dashboard.png"
            alt="Graph"
            className={style.img1}
          />
          <img
            src="https://clipground.com/images/excited-man-clipart-3.png"
            alt=""
            className={style.img2}
          />
        </div>
        <div className={style.footer}>
          <div className={style.box1}>
            <Icon
              icon="dashicons:products"
              style={{ fontSize: "4rem", textAlign: "center" }}
            />
            11111 <br />
            <div style={{ color: "black", fontSize: "1rem" }}>Products</div>
          </div>
          <div className={style.box2}>
            <Icon
              icon="el:shopping-cart"
              style={{ fontSize: "4rem", textAlign: "center" }}
            />
            1197 <br />
            <div style={{ color: "black", fontSize: "1rem" }}>Orders</div>
          </div>
        </div>
        <div className={style.footer2}>
          <div className={style.box3}>
            <Icon
              icon="mdi:tag-multiple"
              style={{ fontSize: "4rem", textAlign: "center" }}
            />
            9 <br />
            <div style={{ color: "black", fontSize: "1rem" }}>Customers</div>
          </div>
          <div className={style.box4}>
            <Icon
              icon="mdi:currency-rupee"
              style={{ fontSize: "4rem", textAlign: "center" }}
            />
            1197 <br />
            <div style={{ color: "black", fontSize: "1rem" }}>Sales</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dasboard;
