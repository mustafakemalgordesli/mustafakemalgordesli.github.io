import { HomeFilled, MailFilled } from "@ant-design/icons";

export default function Contact() {
  return (
    <section id="contact" className="Contact">
      <div className="container">
        <h2 className="section-title" style={{ textAlign: "center" }}>Contact</h2>
        <div className="row" style={{ display: "flex", justifyContent: "center" }}>
          <div className="col-md-3 col-sm-12 info-card">
            <HomeFilled style={{ fontSize: 40, marginBottom: 3 }} />
            <h4 style={{ textAlign: "center", fontSize: 18, marginBottom: 3 }}>Izmir, Turkey</h4>
            <p style={{ textAlign: "center", marginBottom: 0 }}>Ödemis, TR</p>
          </div>
          <div className="col-md-3 col-sm-12 info-card">
            <MailFilled style={{ fontSize: 40, marginBottom: 3 }} />
            <h4 style={{ textAlign: "center", fontSize: 18, marginBottom: 3 }}>Mail me from:</h4>
            <a href="mailto:m.kemalgordesli@gmail.com" rel="noreferrer" className="mail-link" style={{ textAlign: "center", marginBottom: 0 }}>m.kemalgordesli@gmail.com</a>
          </div>
        </div>
      </div>
    </section>
  );
}
