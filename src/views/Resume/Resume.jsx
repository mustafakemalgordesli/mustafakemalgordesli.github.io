import "./resume.scss";

export default function Projects() {
  return (
    <div
      id="resume"
      className="Resume"
      style={{
        width: "100%",
        // border: "1px solid black"
      }}
    >
      <div className="container">
        <h2
          className="section-title load-hidden m-0"
          style={{ textAlign: "center" }}
        >
          Resume
        </h2>
        <div className="row mt-2">
          <div
            className="col btns"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span className="btn-span">
              <a href="#education" className="btn btn-text" rel="noreferrer">
                EDUCATION
              </a>
            </span>
            <span className="btn-span">
              <a href="#experience" className="btn btn-text" rel="noreferrer">
                EXPERIENCE
              </a>
            </span>
            <span className="btn-span">
              <a className="btn btn-text" rel="noreferrer">SKILLS</a>
            </span>
          </div>
        </div>
      </div>

      <div className="container mt-4" id="education">
        <div className="row">
          <div className="col col-lg-6 col-md-4 col-sm-4 col-xs-2">
            <h3 className="title-text">EDUCATION</h3>
            <div style={{ marginBottom: 10, paddingTop: 10 }}>
              <p className="content-text">
                Bachelor of Science in Computer Engineering
              </p>
              <p className="content-text">
                <a
                  rel="noreferrer"
                  href="https://www.balikesir.edu.tr"
                  target="_blank"
                  className="edu-link"
                >
                  Balıkesir University
                </a>
                , 2020 -{" "}
              </p>
            </div>
            <div style={{ marginBottom: 10 }}>
              <p className="content-text">High School</p>
              <p className="content-text">
                <a
                  rel="noreferrer"
                  href="https://kirazal.meb.k12.tr/"
                  target="_blank"
                  className="edu-link"
                >
                  Kiraz Anatolian High School
                </a>
                , 2016 - 2020
              </p>
            </div>
          </div>
          <div className="col col-lg-6 col-md-8 col-sm-8 col-xs-10"></div>
        </div>
      </div>

      <div className="container mt-4" id="experience">
        <div className="row">
          <div className="col col-lg-6 col-md-4 col-sm-4 col-xs-2">
            <h3 className="title-text">EXPERIENCE</h3>
            <div style={{ marginBottom: 10, paddingTop: 10 }}>
              <p className="content-title-text">
                <a
                  rel="noreferrer"
                  href="https://www.loscart.com/"
                  target="_blank"
                  className="company-link"
                >
                  Loscart
                </a>{" "}
                - Backend Developer Intern
              </p>
              <p className="content-text">September 2022 - February 2023</p>
            </div>
            <div style={{ marginBottom: 10, paddingTop: 10 }}>
              <p className="content-title-text">
                <a
                  rel="noreferrer"
                  href="https://www.vbt.com.tr/en"
                  target="_blank"
                  className="company-link"
                >
                  VBT Software Inc.
                </a>{" "}
                - Software Engineering Intern
              </p>
              <p className="content-text">June 2022 - August 2022</p>
            </div>
          </div>
          <div className="col col-lg-6 col-md-8 col-sm-8 col-xs-10"></div>
        </div>
      </div>
    </div>
  );
}
