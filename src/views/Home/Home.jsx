import Typed from "react-typed";
export default function Home() {
  return (
    <section id="home" className="Home jumbotron">
      <div className="container">
        <h1 className="home-title load-hidden">
          Hi, my name is <span className="text-color-main">Mustafa Kemal</span>
          <br />
          I&apos;m the &nbsp;
          <Typed
                strings={[
                  "Software Developer",
                  "Student of Computer Engineering",
                  "Web Designer",
                ]}
                style={{ width: "100%"}}
                typeSpeed={60}
                backSpeed={80}
                loop
              />
        </h1>
        <p className="hero-cta load-hidden">
          <a rel="noreferrer" className="cta-btn cta-btn--hero" href="#about">
            Know more
          </a>
        </p>
      </div>
    </section>
  );
}
