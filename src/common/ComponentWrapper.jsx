import React from "react";
import { Button, Flex, Layout, Menu } from "antd";
import Logo from "../assets/images/logo.svg";

const { Header, Content, Footer } = Layout;
const items = ["Gallery", "Book Now", "FAQ's"].map((name, index) => ({
  key: String(index + 1),
  label: name,
}));

const ComponentWrapper = (ChildComponent) => {
  const WrapperComponent = () => (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          position: "sticky",
          alignItems: "center",
          background: "#57585833",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{
            alignItems: "center",
            display: "inline-flex",
            justifyContent: "center",
          }}
        >
          <img src={Logo} alt="login page" height={50} width={50} />
        </div>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={items}
          style={{
            background: "#57585833",
          }}
        />

        <Flex gap="small" wrap="wrap">
          <Button type="dashed">Sign In</Button>
          <Button type="primary">Get Started</Button>
        </Flex>
      </Header>
      <Content
        style={{
          padding: "0 48px",
        }}
      >
        <div
          style={{
            padding: 8,
            minHeight: "85vh",
            borderRadius: "10px",
            background: "#FFFFFF",
          }}
        >
          <ChildComponent />
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Zain Photography ©{new Date().getFullYear()} Created by Sajid Ali
      </Footer>
    </Layout>
  );

  return WrapperComponent;
};

export default ComponentWrapper;
