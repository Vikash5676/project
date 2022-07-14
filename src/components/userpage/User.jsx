import React, { useEffect, useState } from "react";
import {
  DownCircleOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../thunks/userThunks";
import { Button, Input, Dropdown, Menu, Space, Table, Modal } from "antd";
import style from "./User.module.css";
import axios from "axios";
import config from "../config";

const { Search } = Input;

const User = () => {
  const onSearch = () => {};
  const datas = useSelector((state) => state.userSlice);
  const [values, setValues] = useState([]);
  const [isModalVisible, setIsModelVisible] = useState(false);
  const [isModalVisible1, setIsModalVisible1] = useState(false);

  // const [data1, setdata1] = useState({});
  const [editValues, setEditValues] = useState({
    id: "",
    name: "",
    email: "",
  });
  const dispatch = useDispatch();

  const edit = (rec) => {
    setEditValues({
      id: rec._id,
      name: rec.name,
      email: rec.email,
    });
    setIsModelVisible(true);
  };
  const fn = () => {
    dispatch(fetchUser());
    setValues(datas.users.users);
    setIsModalVisible1(!isModalVisible1);
  };
  useEffect(() => {
    fn();
  }, [isModalVisible, isModalVisible1]);

  const handleOk = () => {
    axios
      .put(`${config.URL}/api/user/update`, editValues, {})
      .then((response) => {
        setIsModelVisible(false); // will hide the model
        setIsModalVisible1(!isModalVisible1);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleCancel = () => {
    setIsModelVisible(false);
    console.log(editValues);
  };
  const handleChange = (e) => {
    setEditValues({ ...editValues, [e.target.name]: e.target.value });
  };

  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.antgroup.com"
            >
              1st menu item
            </a>
          ),
        },
      ]}
    />
  );

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (_, record) => (
        <h5>
          <img src={record.avatar.url} alt="" style={{ width: "3rem" }} />
          {record.name}
        </h5>
      ),
    },
    {
      title: "Email Id",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },

    {
      title: "Action",
      key: "action",
      render: (record) => (
        <Space size="middle">
          <Button
            type="primary"
            style={{ borderRadius: "50%" }}
            onClick={() => edit(record)}
          >
            <EditOutlined />
          </Button>
          <Button type="danger" style={{ borderRadius: "50%" }}>
            <DeleteOutlined />
          </Button>
        </Space>
      ),
    },
  ];
  // const aaa = [
  //   {
  //     key: "1",
  //     name: "vikash",
  //     email: "vikash@gmail.com",
  //     role: "user",
  //     img: "jfj",
  //   },
  // ];

  return (
    <div>
      <div className={style.mainbox}>
        <div className={style.header}>
          <h1 style={{ width: "20rem" }}>Buyers & Suppliers</h1>
          <Search
            placeholder="search for a company"
            onSearch={onSearch}
            enterButton
            style={{ width: "15rem", marginLeft: "35rem" }}
          />

          <Dropdown overlay={menu} className={style.dropdn}>
            <Button onClick={(e) => e.preventDefault()}>
              <Space>
                Add Comapny
                <DownCircleOutlined />
              </Space>
            </Button>
          </Dropdown>
        </div>
        <div className={style.form}>
          <Dropdown overlay={menu} className={style.dropdns}>
            <Button onClick={(e) => e.preventDefault()}>
              <Space>
                Add Comapny
                <DownCircleOutlined style={{ marginLeft: "10rem" }} />
              </Space>
            </Button>
          </Dropdown>
          <Dropdown overlay={menu} className={style.dropdns}>
            <Button onClick={(e) => e.preventDefault()}>
              <Space>
                Add Comapny
                <DownCircleOutlined style={{ marginLeft: "10rem" }} />
              </Space>
            </Button>
          </Dropdown>
          <Search
            placeholder="search for a company"
            onSearch={onSearch}
            style={{ width: "20rem" }}
          />
        </div>
        <div className={style.lists}>
          <Table columns={columns} dataSource={values} />
          <Modal
            title="Update User"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <div style={{ textAlign: "center", margin: "1rem" }}>
              Name:
              <input
                type="text"
                name="name"
                value={editValues.name}
                onChange={handleChange}
                className={style.modelinput}
              />
            </div>
            <div style={{ textAlign: "center" }}>
              Email:
              <input
                type="text"
                name="email"
                value={editValues.email}
                onChange={handleChange}
                className={style.modelinput}
              />
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default User;
