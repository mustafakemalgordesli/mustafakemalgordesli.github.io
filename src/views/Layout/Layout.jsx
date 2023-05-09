import { useState, useEffect } from "react";
import {
  HomeOutlined,
  ContactsOutlined,
  UserOutlined,
  GithubFilled,
  LinkedinFilled,
  InstagramFilled,
  ProjectOutlined,
  BranchesOutlined,
  MailFilled,
  TwitterCircleFilled,
} from "@ant-design/icons";
import { Outlet } from "react-router-dom";
import { Layout, Menu, Image } from "antd";
import { useLocation } from "react-router-dom";
const { Content, Sider, Footer } = Layout;
import "./layout.css";

const Layouts = () => {
  const [collapsed, setCollapsed] = useState(false);

  let location = useLocation();

  const [activeMenuItem, setActiveMenuItem] = useState(location.pathname + location.hash);

  useEffect(() => {
    console.log(location)
    setActiveMenuItem(location.pathname + location.hash);
  }, [location]);

  const handleScroll = () => {
    const homeElement = document.getElementById('home');
    const aboutElement = document.getElementById('about');
    const contactElement = document.getElementById('contact');


      if (homeElement && window.pageYOffset >= homeElement.offsetTop && window.pageYOffset < aboutElement.offsetTop) {
        setActiveMenuItem("/");
      }
      else if (aboutElement && window.pageYOffset >= aboutElement.offsetTop && window.pageYOffset < contactElement.offsetTop) {
        setActiveMenuItem('/#about');
      } 
      else if(contactElement && window.pageYOffset >= contactElement.offsetTop) {
        setActiveMenuItem("/#contact");
      }

  };



  return (
    <Layout style={{ minHeight: "100vh"}}>

      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{ 
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
      }}
      >
        <a href="#" rel="noreferrer">
          <div
            className={`logo${collapsed}` + " logo"}
            style={{ marginTop: 10 }}
          >
            <Image
              style={{
                borderRadius: "50%",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              className={`logoimage${collapsed}`}
              preview={false}
              width={"100%"}
              height={"100%"}
              src="/profilephoto.jpg"
            />
          </div>
        </a>

        {!collapsed && (
          <div>
            {/* <div
                className="logoText"
                style={{
                  width: "100%",
                  textAlign: "center",
                  color: "#fff",
                  fontSize: 22,
                }}
              >
                Mustafa Kemal Gordesli
              </div> */}
            <div
              style={{
                width: "100%",
                height: 30,
                paddingLeft: 10,
                paddingRight: 10,
                marginTop: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <a
                href="https://github.com/mustafakemalgordesli"
                target="_blank"
                rel="noreferrer"
              >
                <GithubFilled style={{ fontSize: 25, color: "#fff" }} />
              </a>
              <a
                href="https://www.linkedin.com/in/mustafakemalgordesli/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedinFilled style={{ fontSize: 25, color: "#fff" }} />
              </a>
              <a
                href="https://www.instagram.com/mustafa_gordesli/"
                target="_blank"
                rel="noreferrer"
              >
                <InstagramFilled style={{ fontSize: 25, color: "#fff" }} />
              </a>
              <a
                href="mailto:m.kemalgordesli@gmail.com?body=My mail adress"
                target="_blank"
                rel="noreferrer"
              >
                <MailFilled style={{ fontSize: 25, color: "#fff" }} />
              </a>
              <a
                href="https://twitter.com/KemalGordesli"
                target="_blank"
                rel="noreferrer"
              >
                <TwitterCircleFilled style={{ fontSize: 25, color: "#fff" }} />
              </a>
            </div>
          </div>
        )}

        <Menu
          theme="dark"
          selectedKeys={[activeMenuItem]}
          mode="inline"
          className={`menu${collapsed}`}
        >
          <Menu.Item key="/" icon={<HomeOutlined style={{ fontSize: 15 }} />}>
            <a href="#" rel="noreferrer" style={{ fontSize: 15 }}>
              Home
            </a>
          </Menu.Item>
          <Menu.Item
            key="/#about"
            icon={<UserOutlined style={{ fontSize: 15 }} />}
          >
            <a  href="#about" rel="noreferrer" style={{ fontSize: 15 }}>
              About
            </a>
          </Menu.Item>
          <Menu.Item
            key="/#resume"
            icon={<BranchesOutlined style={{ fontSize: 15 }} />}
          >
            <a href="#resume" rel="noreferrer" style={{ fontSize: 15 }}>
              Resume
            </a>
          </Menu.Item>
          <Menu.Item
            key="/#projects"
            icon={<ProjectOutlined style={{ fontSize: 15 }} />}
          >
            <a href="#projects" rel="noreferrer" style={{ fontSize: 15 }}>
              Projects
            </a>
          </Menu.Item>
          <Menu.Item
            key="/#contact"
            icon={<ContactsOutlined style={{ fontSize: 15 }} />}
          >
            <a href="#contact" rel="noreferrer" style={{ fontSize: 15 }}>
              Contact
            </a>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className={`content${collapsed}` + " site-layout"}>
        <Content style={{ margin: "0px" }}>
          <div
            style={{
              height: "100%",
            }}
            onWheel={handleScroll}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ backgroundColor: "#f4f4f4", border: "1px solid grey", textAlign: "center", maxHeight: 50, display: "flex", justifyContent: "center", alignItems: "center" }}>
          ©{new Date().getFullYear()} Created by Mustafa Kemal Gordesli
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Layouts;
