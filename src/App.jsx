import { useState } from "react";
import {
  HomeOutlined,
  ContactsOutlined,
  UserOutlined,
  GithubFilled,
  LinkedinFilled,
  InstagramFilled,
  MailFilled,
  TwitterCircleFilled
} from "@ant-design/icons";

import {
  Link,
} from "react-router-dom";


import { Layout, Menu, Image} from "antd";

const { Content, Sider, Footer } = Layout;

import logo from "./assets/logo.jpg";

import "./App.css"

import { useLocation } from 'react-router-dom';

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  let location = useLocation();

  console.log(location)

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <Link to='/' style={{ }}>
          <div className={`logo${collapsed}` + " logo"} style={{ marginTop: 10}}>
            <Image
              style={{ borderRadius: "50%", marginLeft: "auto", marginRight: "auto" }}
              preview={false}
              width={"100%"}
              height={"100%"}
              src={logo}
            />
          </div>
        </Link>
        
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
          selectedKeys={[location.pathname]}
          mode="inline"
        >
          <Menu.Item key="/" icon={<HomeOutlined style={{ fontSize: 20 }}/>}>
              <Link to='/' style={{ fontSize: 20 }}>Home</Link>
          </Menu.Item>
          <Menu.Item key="/about" icon={<UserOutlined style={{ fontSize: 20 }} />}>
              <Link to='/about' style={{ fontSize: 20 }} >About</Link>
          </Menu.Item>
          <Menu.Item key="/contact" icon={<ContactsOutlined style={{ fontSize: 20 }} />}>
              <Link to='/contact' style={{ fontSize: 20 }}>Contact</Link>
          </Menu.Item>
    
       </Menu>
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
