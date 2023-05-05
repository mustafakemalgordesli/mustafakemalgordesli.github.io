import { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  HomeOutlined,
  TeamOutlined,
  UserOutlined,
  GithubFilled,
  LinkedinFilled,
  InstagramFilled,
  MailFilled,
  TwitterCircleFilled
} from "@ant-design/icons";

import { Layout, Menu, Image } from "antd";

const { Content, Sider, Footer } = Layout;

import logo from "./assets/logo.jpg";

import "./App.css"

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("Home", "1", <HomeOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className={`logo${collapsed}` + " logo"} style={{ marginTop: 10}}>
          <Image
            style={{ borderRadius: "50%", marginLeft: "auto", marginRight: "auto" }}
            preview={false}
            width={"100%"}
            height={"100%"}
            src={logo}
          />
        </div>
        {
          !collapsed && (
            <div style={{ width: "100%", height: 30, paddingLeft: 10, paddingRight: 10, marginBottom: 5, marginTop: 5, display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
              <a href="https://github.com/mustafakemalgordesli" target='_blank' rel="noreferrer"><GithubFilled style={{ fontSize: 30, color:"#fff"}}/></a>
              <a href="https://www.linkedin.com/in/mustafakemalgordesli/" target='_blank' rel="noreferrer"><LinkedinFilled style={{ fontSize: 30, color:"#fff"}}/></a>
              <a href="https://www.instagram.com/mustafa_gordesli/" target='_blank' rel="noreferrer"><InstagramFilled style={{ fontSize: 30, color:"#fff"}}/></a>
              <a href="mailto:m.kemalgordesli@gmail.com?body=My mail adress" target='_blank' rel="noreferrer"><MailFilled style={{ fontSize: 30, color:"#fff"}}/></a>
              <a href="https://twitter.com/KemalGordesli" target='_blank' rel="noreferrer"><TwitterCircleFilled style={{ fontSize: 30, color:"#fff"}}/></a>
            </div>
          )
        }
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Content style={{ margin: "0 16px" }}>
          <div
            style={{
              height: "100%",
              background: "red",
            }}
          >
            Bill is a cat.
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
           ©{new Date().getFullYear()} Created by Mustafa Kemal Gördesli
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
