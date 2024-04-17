import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  DashboardOutlined,
  UserOutlined,
  FileOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import Modal from "antd/es/modal/Modal";
const { Sider } = Layout;
const Navigation = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  
  const items = [
    {
      key: "people",
      icon: <UserOutlined />,
      label: <Link to={"/people"} onClick={() => setOpen(false)}>peoples</Link>,
    },
    {
      key: "dashboard",
      icon: <DashboardOutlined />,
      label: <Link to={"/people"} onClick={() => setOpen(false)}>dashboard</Link>,
    },
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
          onClick={() => navigate("/people")}
          style={{
            cursor: "pointer",
          }}
        >
          <h1 style={{ height: "40px" }} className="font-extrabold">CHURCH</h1>
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
            onClick={() => navigate("/people")}
            style={{
              cursor: "pointer",
            }}
          >
            <h1 style={{ height: "40px" }} className="font-extrabold">CHURCH</h1>
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
