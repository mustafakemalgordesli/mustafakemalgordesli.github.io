export default function Projects() {
  return (
    <section id="projects" className="Projects mt-2 pt-2">
      <div className="container">
        <div className="project-wrapper">
          <h2 className="section-title dark-blue-text" style={{
             textAlign: "center",
          }}>Projects</h2>
          <div className="row project-detail">
            <div className="col-lg-6 col-sm-12">
              <div className="project-wrapper__text load-hidden">
                <h3 className="project-wrapper__text-title" style={{ fontSize: "20px"}}>Python Malware</h3>
                <div>
                  <p className="mb-4">
                    This project was developed for python training purposes and was prepared to examine how malware analysis can be done.
                  </p>
                </div>
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="cta-btn cta-btn--hero"
                  href="https://github.com/mustafakemalgordesli/python-malware"
                >
                  See Live
                </a>
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="cta-btn text-color-main"
                  href="https://github.com/mustafakemalgordesli/python-malware"
                >
                  Source Code
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="project-wrapper__image load-hidden">
                <a rel="noreferrer" href="#!" target="_blank">
                  <div
                    data-tilt
                    data-tilt-max="4"
                    data-tilt-glare="true"
                    data-tilt-max-glare="0.5"
                    className="thumbnail rounded js-tilt"
                  >
                    <img
                      alt="Project Image"
                      className="img-fluid"
                      src="/malware-header.jpg"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
