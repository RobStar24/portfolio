import { Fade } from "react-reveal";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="heading">
        <h2>
          About <span>Me</span>
        </h2>
      </div>

      <div className="about-items">
        <div className="about-resume">
          <Fade left fraction={0.8} distance="100px" duration={2000}>
            <h3>Front-End & Back-End Web Developer</h3>
            <a href="#" className="btn">
              Download Resume
            </a>
          </Fade>
        </div>

        <Fade bottom distance="100px" duration={2000}>
        <div className="about-text">
          <p>
            Hello, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            aperiam id commodi distinctio delectus nesciunt
          </p>{" "}
          <p>
            soluta beatae similique voluptates corrupti voluptas vel quos sint
            ad quia ab iste, error doloremque!
          </p>
        </div>
        </Fade>
      </div>
    </section>
  );
};
export default About;
