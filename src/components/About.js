import Photo from "../assets/images/profile.jpg"

const About = () => {
  return (
    <section className="container-sm" id="about">
      <hr />
      <div className="row justify-content-center align-items-center">
        <h2 className="text-center">About</h2>
        <figure className="profile-picture col-8 col-lg-3 col-md-4 col-sm-8 col-xs-6 py-3">
          <img src={Photo} className="img-fluid" alt="jason lam" />
        </figure>
        <p className="col-lg-9 col-md-8 text-justify fs-6 lh-sm fw-light">
          Full Stack Web Developer with a hospitality background. Leveraging
          skills acquired in hospitality, can effectively communicate with
          customers and deliver products that meet their specifications by
          understanding their needs. Has a penchant for building web-pages that
          are well-designed and visually appealing. Recently earned a Full Stack
          Web Development Certificate from Columbia Engineering Boot Camps and
          using newfound skills in JavaScript, HTML, CSS, and jQuery, seeks a
          full-time position building products that are fun, engaging,
          intuitive, and efficient.
        </p>
      </div>
    </section>
  );
};

export default About;
