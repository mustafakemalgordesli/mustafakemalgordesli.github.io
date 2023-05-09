export default function About() {
  return (
    <div id="about" className="About">
      <section id="about">
        <div className="container" style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
          <h2 className="section-title load-hidden">About me</h2>
          <div className="row about-wrapper">
            <div className="col-md-6 col-sm-12" style={{
              marginLeft: "auto",
              marginRight: "auto"
            }}>
              <div className="about-wrapper__info load-hidden">
                <p className="about-wrapper__info-text">
                  I am a third-year computer engineering student at
                  Balıkesir University. I have an investigative personality,
                  and I am open to improvement. I&apos;m a beginner at
                  English, and I&apos;m still learning. I&apos;m currently working on
                  back-end development using C#, .Net Core, Javascript,
                  Node.js and SQL Server. I mostly develop my projects
                  using Javascript.
                </p>
                {/* <p className="about-wrapper__info-text">
                  Extra Information about you! like hobbies and your goals.
                </p> */}
                <span className="d-flex mt-3">
                  <a
                    rel="noreferrer"
                    className="cta-btn cta-btn--resume"
                    href="#resume"
                  >
                    View Resume
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
