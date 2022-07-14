import React, { useEffect, useState } from "react";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
  UserAddOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
// import * as firebase from "firebase";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { logout } from "../../slices/authSlice";

const { SubMenu, Item } = Menu;

const Header = () => {
  const [current, setCurrent] = useState("home");
  const [update, setupdate] = useState(false);
  let dispatch = useDispatch();
  let { authSlice } = useSelector((state) => ({ ...state }));

  const history = useNavigate();

  const handleClick = (e) => {
    // console.log(e.key);
    setCurrent(e.key);
  };

  const logoutbtn = () => {
    // firebase.auth().signOut();
    signOut(auth);
    // Sign-out successful.
    dispatch(logout(""));
    history("/login");
    setupdate(!update);
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      {authSlice.email && (
        <Item key="home" icon={<AppstoreOutlined />}>
          <Link to="/">Home</Link>
        </Item>
      )}

      {!authSlice.email && (
        <Item
          key="register"
          icon={<UserAddOutlined />}
          style={{ marginLeft: "80%" }}
        >
          <Link to="/register">Register</Link>
        </Item>
      )}

      {!authSlice.email && (
        <Item key="login" icon={<UserOutlined />} className="float-right">
          <Link to="/login">Login</Link>
        </Item>
      )}

      {authSlice.email && (
        <SubMenu
          icon={<SettingOutlined />}
          title={authSlice.email && authSlice.email.split("@")[0]}
          style={{ marginLeft: "70%" }}
        >
          <Item key="setting:1">Option 1</Item>
          <Item key="setting:2">Option 2</Item>
          <Item icon={<LogoutOutlined />} onClick={logoutbtn}>
            Logout
          </Item>
        </SubMenu>
      )}
    </Menu>
  );
};

export default Header;
