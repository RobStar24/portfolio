import { Fade } from "react-reveal";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="heading">
        <h2>
          Completed <span>Projects</span>
        </h2>
      </div>

      <Fade bottom distance="100px" duration={2000}>
      <div className="projects-items">
        <div className="project-card">
          <img src="\img\e-commerce_react.png" alt="" />
          <div className="card-overlay">
            <a href="#">
              <i className="bx bx-link-alt"></i>
            </a>
          </div>
        </div>

        <div className="project-card">
          <img src="/img/Pokedex.png" alt="" />
          <div className="card-overlay">
            <a href="#">
              <i className="bx bx-link-alt"></i>
            </a>
          </div>
        </div>

        <div className="project-card">
          <img src="/img/Weather.png" alt="" />
          <div className="card-overlay">
            <a href="#">
              <i className="bx bx-link-alt"></i>
            </a>
          </div>
        </div>

        <div className="project-card">
          <img src="\img\Blog-mascotas.png" alt="" />
          <div className="card-overlay">
            <a href="#">
              <i className="bx bx-link-alt"></i>
            </a>
          </div>
        </div>
      </div>
      </Fade>
    </section>
  );
};
export default Projects;
