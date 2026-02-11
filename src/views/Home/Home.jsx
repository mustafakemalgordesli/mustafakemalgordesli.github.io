import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <section id="home" className="Home jumbotron">
      <div className="container">
        <h1 className="home-title load-hidden">
          Hi, my name is <span className="text-color-main">Mustafa Kemal</span>
          <br />
          I&apos;m the &nbsp;
          <TypeAnimation
            sequence={[
              "Software Developer",
              2000,
              "Student of Computer Engineering",
              2000,
              "Web Designer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
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
