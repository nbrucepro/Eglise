import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  DashboardOutlined,
  UserOutlined,
  FileOutlined,
  AppstoreOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import Modal from "antd/es/modal/Modal";
const { Sider } = Layout;
const Navigation = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  const items = [
    {
      key: "people",
      icon: <UserOutlined />,
      label: <Link to={"/"} onClick={() => setOpen(false)}>Abakristo bose</Link>,
    },
    getItem('Chorale', 'sub2', <AppstoreOutlined />, [
      getItem('Umucyo', '1'),
      getItem('Emmaus', '2'),
      getItem('Abayisenga', '3'),
      getItem('Abahamagawe', '4'),
      getItem('Elayono', '5'),
      getItem('Umunezero', '6'),
      // getItem(<Link to={"/people"} onClick={() => setOpen(false)}>Chorale</Link>, '6'),
    ]),
  ];
  return (
    <>
      <MenuOutlined
        style={{
          // overflow: "auto",
          height: "100%",
          position: "relative",
          bottom: "20px",
          background: "none",
          top: "20px",

          borderRadius: "8px",
        }}
        onClick={() => setOpen(true)}
        className="md:hidden"
      />
      <Sider
        style={{
          // overflow: "auto",
          height: "99vh",
          position: "relative",
          // bottom: '20px',
          // background: 'none',
          // top: '20px',
          borderRadius: "8px",
        }}
        theme={"light"}
        className="md:block hidden"
      >
        <div
          className="logo"
          onClick={() => navigate("/")}
          style={{
            cursor: "pointer",
          }}
        >
          <h1 style={{ height: "40px" }} className="font-extrabold">ADEPR CYURU</h1>
        </div>
        <Menu
          items={items}
          mode="inline"
          theme="light"
          style={{
            background: "none",
            border: "none",
            // width: 256,
          }}
        />
      </Sider>
      <Modal centered open={open} footer={null} onCancel={() => setOpen(false)}>
        <Sider
          style={{
            position: "relative",
            borderRadius: "8px",
          }}
          theme={"light"}
        >
          <div
            className="ml-8"
            onClick={() => navigate("/")}
            style={{
              cursor: "pointer",
            }}
          >
            <h1 style={{ height: "40px" }} className="font-extrabold">ADEPR CYURU</h1>
          </div>
          <Menu
            items={items}
            mode="inline"
            theme="light"
            style={{
              background: "none",
              border: "none",
              // width: 256,
            }}
          />
        </Sider>
      </Modal>
    </>
  );
};

export default Navigation;
