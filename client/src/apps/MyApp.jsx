import React from "react";
import { Layout } from "antd";
import Navigation from "./Navigation/NavigationContainer";
import { Route, Routes } from "react-router-dom";
import People from "../pages/People";

const MyApp = () => {
  const { Content } = Layout;
  return (
    <Layout hasSider style={{ flexDirection: "row" }}>
      <Navigation />
      <Layout>
        <Content
          // style={{
          //   margin: "40px auto 30px",
          //   overflow: "initial",
          //   width: "100%",
          //   padding: "0 50px",
          //   maxWidth: 1400,
          // }}
          className="mt-[40px] mx-auto overflow-initial w-[100%] py-0 md:px-[50px]"
        >
          <Routes>
          <Route element={<People />} path="/" />
          </Routes>  
        </Content>
      </Layout>
    </Layout>
  );
};

export default MyApp;
