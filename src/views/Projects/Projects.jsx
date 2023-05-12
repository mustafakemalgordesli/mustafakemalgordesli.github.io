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
                <h3 className="project-wrapper__text-title" style={{ fontSize: "20px"}}>Project Title 0</h3>
                <div>
                  <p className="mb-4">
                    Describe the project being very specific, you can use the
                    Twitter standard: no more than 280 characters: complement
                    the information: the skills learned or reinforced in its
                    realization and how you faced it, prove to be proactive in
                    the search for solutions.
                  </p>
                </div>
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="cta-btn cta-btn--hero"
                  href="#!"
                >
                  See Live
                </a>
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="cta-btn text-color-main"
                  href="#!"
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
                      src="assets/project.jpg"
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
