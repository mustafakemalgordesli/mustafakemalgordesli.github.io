import { Col, Row } from "antd";
import "./home.css";
import { useEffect } from "react";
import Typed from "react-typed";

export default function Home() {
  useEffect(() => {
    setInterval(() => {}, 2000);
  }, []);

  return (
    <div className="Home" style={{ height: "100%", backgroundColor: "#f4f4f4" }}>
      <Row style={{ height: "100%" }}>
        <Row style={{ width: "100%", height: "30%" }}>
          <Col
            span={24}
            style={{
              display: "flex",
              alignItems: "center",
              // justifyContent: "center",
              marginTop: "10px",
              flexDirection: "column",
            }}
          >
            <div className="titleText" style={{ color: "#061178"}}>Mustafa Kemal Gordesli</div>
            <div className="contentText">
              I&apos;m{" "}
              <Typed
                strings={[
                  "Software Developer",
                  "Student of Computer Engineering",
                  "Web Designer",
                ]}
                typeSpeed={60}
                backSpeed={80}
                loop
              />
            </div>
          </Col>
        </Row>
        <Row>deneme</Row>
      </Row>
    </div>
  );
}
