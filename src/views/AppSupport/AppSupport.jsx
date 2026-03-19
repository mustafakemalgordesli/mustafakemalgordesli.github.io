import { Layout } from "antd";
import "./appSupport.scss";

const { Content } = Layout;

const AppSupport = () => {
  return (
    <Content id="app-support" className="support-section">
      <div className="support-container">
        <h1 className="support-title">App Support</h1>
        <p className="support-text">If you need help, contact us:</p>
        <a href="mailto:m.kemalgordesli@gmail.com" className="support-email">
          m.kemalgordesli@gmail.com
        </a>
        <p className="support-response">We usually respond within 24 hours.</p>
      </div>
    </Content>
  );
};

export default AppSupport;
