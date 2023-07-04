const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-bio">
        <h3>This is</h3>
        <h1>Roberto Carlos</h1>
        <h3>
          I am a <span className="animated-text">Web Developer</span>
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ipsam
          incidunt eaque in, nam officia sit earum facilis voluptatum omnis!
          Magnam vitae eligendi pariatur, cum aliquid ipsam nulla aspernatur
          est.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          rerum neque  excepturi dicta, est fugiat, commodi sint
          facilis amet veritatis?
        </p>
        <div className="social-media">
            <a href="#"><i className='bx bxl-linkedin'></i></a>
            <a href="#"><i className='bx bxl-github'></i></a>
        </div>
        <a href="#contact" className="btn">Let's talk</a>
      </div>
      <div className="profile-pic">
        <img src="/img/foto.png" alt="" />
      </div>
    </section>
  );
};
export default Home;
