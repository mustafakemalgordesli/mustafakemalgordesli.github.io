import { Layout } from "antd";
import "./privacy.scss";

const { Content } = Layout;

const WordyPuffPrivacy = () => {
  return (
    <Content id="wordypuff-privacy" className="privacy-section">
      <div className="privacy-container">
        <h1 className="privacy-title">WordyPuff Privacy Policy</h1>
        <p className="last-updated-top">Last Updated: 02/22/2026</p>

        <div className="privacy-content">
          <p className="intro-text">
            This Privacy Policy explains how WordyPuff handles your data. We are
            committed to protecting your privacy and ensuring you have full
            control over your information.
          </p>

          <section className="privacy-section-item">
            <h2>1. Data Collection and Storage</h2>
            <div className="highlight-box">
              <strong>✓ 100% Offline - Your Privacy is Guaranteed</strong>
            </div>
            <p>
              WordyPuff does <strong>NOT</strong> collect, transmit, or store
              any data on external servers. All your data remains exclusively on
              your device.
            </p>

            <h3>1.1 Information Stored Locally (localStorage)</h3>
            <ul>
              <li>Your learning progress and statistics</li>
              <li>Vocabulary lists and word collections</li>
              <li>Game scores and achievements</li>
              <li>App preferences and settings</li>
              <li>Language learning history</li>
            </ul>
            <p>
              This data is stored only in your device&apos;s local storage
              (localStorage) and is <strong>never</strong> sent anywhere over
              the internet.
            </p>
          </section>

          <section className="privacy-section-item">
            <h2>2. No Data Transmission</h2>
            <div className="highlight-box">
              <strong>🔒 Zero Network Communication</strong>
            </div>
            <p>WordyPuff operates entirely offline. The app does not:</p>
            <ul>
              <li>Send any data to servers</li>
              <li>Connect to the internet for data synchronization</li>
              <li>Share information with third parties</li>
              <li>Use analytics or tracking services</li>
              <li>Display advertisements</li>
            </ul>
          </section>

          <section className="privacy-section-item">
            <h2>3. Data Usage</h2>
            <p>
              The locally stored data is used solely for the following purposes:
            </p>
            <ul>
              <li>Save your learning progress</li>
              <li>Remember your preferences and settings</li>
              <li>Display your statistics and achievements</li>
              <li>Provide a personalized learning experience</li>
            </ul>
            <p>
              <strong>Important:</strong> Your data never leaves your device and
              is used only to enhance your app experience.
            </p>
          </section>

          <section className="privacy-section-item">
            <h2>4. Third-Party Services</h2>
            <div className="highlight-box">
              <strong>🛡️ No Third-Party Integration</strong>
            </div>
            <p>WordyPuff does not integrate with any third-party services:</p>
            <ul>
              <li>No advertising networks</li>
              <li>No analytics platforms</li>
              <li>No social media tracking</li>
              <li>No data brokers or marketing services</li>
            </ul>
          </section>

          <section className="privacy-section-item">
            <h2>5. Data Security</h2>
            <p>Since all data is stored locally on your device:</p>
            <ul>
              <li>
                Your data security depends on your device&apos;s security
                settings
              </li>
              <li>No internet connection means no risk of data interception</li>
              <li>No server breaches can affect your data</li>
              <li>
                We recommend using device lock (PIN, password, biometrics) for
                additional security
              </li>
            </ul>
          </section>

          <section className="privacy-section-item">
            <h2>6. Data Retention and Deletion</h2>
            <ul>
              <li>Your data remains on your device until you delete it</li>
              <li>
                Clearing app data or uninstalling the app will permanently
                delete all stored information
              </li>
              <li>
                You can reset your progress at any time through app settings
              </li>
              <li>No backups are made to external servers</li>
            </ul>
          </section>

          <section className="privacy-section-item">
            <h2>7. Children&apos;s Privacy</h2>
            <p>
              WordyPuff is designed to be safe for users of all ages. Since we
              do not collect any personal information or transmit any data, the
              app is compliant with children&apos;s privacy regulations
              including COPPA (Children&apos;s Online Privacy Protection Act).
            </p>
          </section>

          <section className="privacy-section-item">
            <h2>8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be reflected in the &quot;Last Updated&quot; date at the top
              of this page. We encourage you to review this policy periodically.
            </p>
          </section>

          <section className="privacy-section-item">
            <h2>9. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or
              WordyPuff&apos;s data practices, please contact us at:
            </p>
            <p>
              <strong>Email:</strong> mustafakemalgordesli@gmail.com
            </p>
          </section>

          <div className="privacy-footer">
            <p>
              <strong>Summary:</strong> WordyPuff respects your privacy. All
              your data stays on your device. We don&apos;t collect, transmit,
              or share any information. Your learning experience is completely
              private.
            </p>
          </div>
        </div>
      </div>
    </Content>
  );
};

export default WordyPuffPrivacy;
