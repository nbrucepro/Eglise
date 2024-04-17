import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  SettingOutlined,
  CustomerServiceOutlined,
  ContainerOutlined,
  FileSyncOutlined,
  DashboardOutlined,
  TagOutlined,
  TagsOutlined,
  UserOutlined,
  CreditCardOutlined,
  MenuOutlined,
  FileOutlined,
  ShopOutlined,
  FilterOutlined,
  WalletOutlined,
  ReconciliationOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
const { Sider } = Layout;
const Navigation = () => {
  
  const navigate = useNavigate();  
  const items = [
    {
      key: "dashboard",
      icon: <DashboardOutlined />,
      label: <Link to={"/"}>dashboard</Link>,
    },
    {
      key: "customer",
      icon: <FileOutlined />,
      label: <Link to={"/customer"}>customers</Link>,
    },
    {
      key: "people",
      icon: <UserOutlined />,
      label: <Link to={"/people"}>peoples</Link>,
    },
  ];
  return (
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
    >
      <div
        className="logo"
        onClick={() => navigate("/")}
        style={{
          cursor: "pointer",
        }}
      >
        <h1 style={{ marginLeft: "-15px", height: "40px" }}>CHURCH</h1>
      </div>
      <Menu
        items={items}
        mode="inline"
        theme="light"
        style={{
          background: "none",
          border: "none",
          width: 256,
        }}
      />
    </Sider>
  );
};

export default Navigation;