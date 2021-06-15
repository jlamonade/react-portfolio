import Email from "../assets/images/email.png"
import Github from "../assets/images/github.png"
import Linkedin from "../assets/images/linkedin.png"

const Contact = () => {
  return (
    <section className="container-sm mb-5" id="contact">
      <hr />
      <h2 className="text-center">Contact</h2>
      <ul className="navbar-nav d-flex flex-row row">
        <li className="nav-item col-4">
          <a
            href="mailto:nyjasonlam@gmail.com"
            className="nav-link"
            target="_blank" rel="noreferrer"
          >
            <img
              src={Email}
              className="img-fluid mx-auto d-block"
              alt="email link"
            />
          </a>
        </li>
        <li className="nav-item col-4 mx-auto">
          <a
            href="https://github.com/jlamonade"
            className="nav-link"
            target="_blank" rel="noreferrer"
          >
            <img
              src={Github}
              className="img-fluid mx-auto d-block"
              alt="github link"
            />
          </a>
        </li>
        <li className="nav-item col-4 mx-auto">
          <a
            href="https://www.linkedin.com/in/jason-lam-9bb8b21a9/"
            className="nav-link"
            target="_blank" rel="noreferrer"
          >
            <img
              src={Linkedin}
              className="img-fluid mx-auto d-block"
              alt="linkedin link"
            />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contact
