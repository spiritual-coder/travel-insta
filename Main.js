import React from "react";
import { Layout } from "antd";

import AppHeader from "./Components/header";
import AppFooter from "./Components/footer";
import AppHome from "./Components/home";

const { Header, Content, Footer } = Layout;

export default function Main() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader />
      </Header>
      <Content>
        <AppHome />
      </Content>
      <Footer>
        <AppFooter />
      </Footer>
    </Layout>
  );
}
