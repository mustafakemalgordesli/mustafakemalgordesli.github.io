import { Layout } from "antd";
import "./privacy.scss";

const { Content } = Layout;

const Privacy = () => {
  return (
    <Content id="privacy" className="privacy-section">
      <div className="privacy-container">
        <h1 className="privacy-title">Privacy Policy</h1>
        <p className="last-updated-top">Last Updated: 02/07/2026</p>

        <div className="privacy-content">
          <p className="intro-text">
            This Privacy Policy explains how your data is collected, used, and
            protected when you use our habit tracking application.
          </p>

          <section className="privacy-section-item">
            <h2>1. Data Collection and Storage</h2>
            <div className="highlight-box">
              <strong>✓ Your Privacy is Our Priority</strong>
            </div>
            <p>
              Our application does not send any data to our servers or
              third-party servers. All your data is stored only on your device
              and is under your control only.
            </p>

            <h3>1.1 Information Stored on Your Device (localStorage)</h3>
            <ul>
              <li>Water drinking habit records (amount consumed, times)</li>
              <li>Sleep schedule tracking (bedtime and wake-up times)</li>
              <li>Sports activities (exercise types, durations, dates)</li>
              <li>Your personal goals and preferences</li>
              <li>Habit statistics and progress records</li>
            </ul>
            <p>
              This data is stored only in your device's local storage
              (localStorage) and is never sent anywhere over the internet.
            </p>

            <h3>1.2 Notifications (Local Notifications)</h3>
            <ul>
              <li>Water drinking reminders</li>
              <li>Sleep time notifications</li>
              <li>Sports activity reminders</li>
            </ul>
            <p>
              All notifications are generated entirely on your device. No server
              is used to send notifications.
            </p>
          </section>

          <section className="privacy-section-item">
            <h2>2. Data Usage</h2>
            <p>The data we collect is used only for the following purposes:</p>
            <ul>
              <li>Help you track your habits</li>
              <li>Display progress statistics</li>
              <li>Send reminder notifications at times you set</li>
              <li>Personalize your app experience</li>
            </ul>
            <p>
              <strong>Important:</strong> Your data is not used for any other
              purpose and is never shared in any way.
            </p>
          </section>

          <section className="privacy-section-item">
            <h2>3. Data Sharing and Third Parties</h2>
            <div className="highlight-box">
              <strong>🔒 Zero Data Sharing</strong>
            </div>
            <p>
              Our application does not use any third-party services and your
              data is never shared, sold, or rented. No analytics, advertising,
              or tracking services are integrated.
            </p>
          </section>

          <section className="privacy-section-item">
            <h2>4. Data Security</h2>
            <p>Since your data is stored in your device's local storage:</p>
            <ul>
              <li>
                Your data security depends on your device's security settings
              </li>
              <li>
                No internet connection required, providing additional security
              </li>
              <li>Data breach risk is minimal since no servers are used</li>
              <li>Device lock and PIN/password usage is recommended</li>
            </ul>
          </section>

          <section className="privacy-section-item">
            <h2>5. Data Retention and Deletion</h2>
            <ul>
              <li>
                Your data is stored only on your device and remains until you
                delete it
              </li>
              <li>
                When you delete the app or clear data, all your data is
                permanently deleted
              </li>
              <li>
                Since there is no backup or server record, deleted data cannot
                be recovered
              </li>
              <li>
                You can delete all your data at any time from within the app
              </li>
            </ul>
          </section>

          <section className="privacy-section-item">
            <h2>6. Children's Privacy</h2>
            <p>
              Since our app does not collect any data, it is safe for users of
              all ages. However, it is recommended that children under 13 use
              the app under parental supervision.
            </p>
          </section>

          <section className="privacy-section-item">
            <h2>7. App Permissions</h2>
            <p>Our app uses only the following permissions:</p>
            <ul>
              <li>
                <strong>Notifications:</strong> To display reminder
                notifications (entirely local)
              </li>
              <li>
                <strong>Local Storage:</strong> To store your data on your
                device
              </li>
            </ul>
            <p>
              Sensitive permissions such as Internet, location, camera,
              microphone, contacts are not requested.
            </p>
          </section>

          <section className="privacy-section-item">
            <h2>8. User Rights</h2>
            <p>Your data is entirely under your control:</p>
            <ul>
              <li>You can view your data at any time</li>
              <li>You can edit or delete it at any time</li>
              <li>You can delete the app to stop data collection</li>
              <li>
                Since no data is stored on servers, data portability requests
                are not necessary
              </li>
            </ul>
          </section>

          <section className="privacy-section-item">
            <h2>9. Policy Changes</h2>
            <p>
              We may update this Privacy Policy from time to time. When
              significant changes occur, you will be notified within the app.
              The latest version of the policy will always be accessible from
              within the app.
            </p>
          </section>

          <section className="privacy-section-item">
            <h2>10. Contact</h2>
            <p>
              If you have any questions about this Privacy Policy, you can
              contact us:
            </p>
            <p className="contact-email">
              📧{" "}
              <a href="mailto:m.kemalgordesli@gmail.com">
                m.kemalgordesli@gmail.com
              </a>
            </p>
          </section>

          <section className="privacy-section-item summary-section">
            <h2>📋 Privacy Summary</h2>
            <ul className="summary-list">
              <li>✅ All data is stored only on your device</li>
              <li>✅ No data is sent over the internet</li>
              <li>✅ No third-party services are used</li>
              <li>✅ No advertising or tracking systems</li>
              <li>✅ Your data is never shared or sold</li>
              <li>✅ Full data control is yours</li>
            </ul>
          </section>
        </div>
      </div>
    </Content>
  );
};

export default Privacy;
