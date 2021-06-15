import Project1R from '../assets/images/project1_representation.jpg'
import Project2R from '../assets/images/project2_representation.jpg'
import Project3R from '../assets/images/project3_representation.jpg'
import Project4R from '../assets/images/project4_representation.jpg'

const Projects = () => {
  return (
    <section className="container-sm" id="projects">
        <hr />
        <h2 className="text-center">Projects</h2>
        <div className="row g-3 justify-content-center py-3">
          <section className="card col-12 border-0">
            <div className="card-img-top">
                <img src={Project1R} className="d-block w-100" alt="cocktails" />
            </div>
            <div className="project-description text-center">
              <h3 className="card-title">Lazy Mixology</h3>
              <p className="card-text mb-2">Cocktail Recipes By Ingredient</p>
              <a href="https://jlamonade.github.io/cocktail-maker/" className="btn btn-dark btn-sm mx-1" target="_blank" rel="noreferrer">Live</a>
              <a href="https://github.com/jlamonade/cocktail-maker" className="btn btn-dark btn-sm mx-1" target="_blank" rel="noreferrer">Repo</a>
            </div>
          </section>
          <section className="card col-lg-4 col-md-4 col-sm-12 border-0">
            <div className="secondary-project-image">
              <div className="lead-project-image">
                <img src={Project2R} className="d-block w-100" alt="cocktails" />
              </div>
            </div>
            <div className="project-description text-center">
              <h3 className="card-title fs-5">AccuCastDash</h3>
              <p className="card-text fs-6">Weather Dashboard</p>
              <a href="https://jlamonade.github.io/AccuCastDash/" className="btn btn-dark btn-sm mx-1" target="_blank" rel="noreferrer">Live</a>
              <a href="https://github.com/jlamonade/AccuCastDash" className="btn btn-dark btn-sm mx-1" target="_blank" rel="noreferrer">Repo</a>
            </div>
          </section>
          <section className="card col-lg-4 col-md-4 col-sm-12 border-0">
            <div className="secondary-project-image">
              <img src={Project3R} className="d-block w-100" alt="lazy mixology preview" />
            </div>
            <div className="project-description text-center">
              <h3 className="card-title fs-5">Quiz App</h3>
              <p className="card-text fs-6">Test Your Knowledge</p>
              <a href="https://jlamonade.github.io/Quiz-App/" className="btn btn-dark btn-sm mx-1" target="_blank" rel="noreferrer">Live</a>
              <a href="https://github.com/jlamonade/Quiz-App" className="btn btn-dark btn-sm mx-1" target="_blank" rel="noreferrer">Repo</a>
            </div>
          </section>
          <section className="card col-lg-4 col-md-4 col-sm-12 border-0">
            <div className="secondary-project-image">
              <img src={Project4R} className="d-block w-100" alt="lazy mixology preview" />
            </div>
            <div className="project-description text-center">
              <h3 className="card-title fs-5">Splitteroni</h3>
              <p className="card-text fs-6">Bill Splitter</p>
              <a href="https://www.splitter.cash/" className="btn btn-dark btn-sm mx-1" target="_blank" rel="noreferrer">Live</a>
              <a href="https://github.com/jlamonade/splitteroni" className="btn btn-dark btn-sm mx-1" target="_blank" rel="noreferrer">Repo</a>
            </div>
          </section>
        </div>
      </section>
  )
}

export default Projects