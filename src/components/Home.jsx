import { Fade } from "react-reveal";
import Typed from "react-typed";

const Home = () => {
  return (
    <section className="home" id="home">
      <Fade top distance="100px" duration={2000}>
        <div className="home-bio">
          <h3>This is</h3>
          <Fade left distance="100px" duration={2000}>
            <h1>Roberto Carlos</h1>
          </Fade>
          <h3>
            I am a 
            <Typed
              className="animated-text"
              strings={[
                "Full Stack Developer",
                "Technology Lover",
                "Passionate Learner",
                "Sports Lover",
              ]}
              typeSpeed={50}
              backSpeed={50}
              backDelay={900}
              loop
            >
              {/* <span className="animated-text">Web Developer</span> */}
            </Typed>
          </h3>
          <Fade right distance="100px" duration={2000}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              ipsam incidunt eaque in, nam officia sit earum facilis voluptatum
              omnis! Magnam vitae eligendi pariatur, cum aliquid ipsam nulla
              aspernatur est.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur rerum neque excepturi dicta, est fugiat, commodi sint
              facilis amet veritatis?
            </p>
          </Fade>
          <div className="social-media">
            <a href="#">
              <i className="bx bxl-linkedin"></i>
            </a>
            <a href="#">
              <i className="bx bxl-github"></i>
            </a>
          </div>
          <a href="#contact" className="btn">
            Let's talk
          </a>
        </div>
      </Fade>
      <Fade bottom distance="100px" duration={2000}>
        <div className="profile-pic">
          <img src="/img/foto.png" alt="" />
        </div>
      </Fade>
    </section>
  );
};
export default Home;
