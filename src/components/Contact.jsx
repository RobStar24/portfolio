const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="heading">
        <h2>
          Contact <span>Me</span>
        </h2>
      </div>

      <form action="#" className="form">
        <input type="text" placeholder="Your Name" />
        <input type="text" placeholder="Your Email" />
        <textarea
          name=""
          id=""
          cols="30"
          rows="6"
          placeholder="Your Message"
        ></textarea>
        <input type="submit" className="btn" value="Send Message" />
      </form>
    </section>
  );
};
export default Contact;
