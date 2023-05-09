import { Row, Col } from "antd";
import "./about.scss";

export default function About() {
    return (
        <div id="about" className="About">
            <Row>
                <Col span={24} style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "34px", color: "white"}}>ABOUT ME</Col>
            </Row>
        </div>
    );
}