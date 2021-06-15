const Nav = () => {
  return (
    <nav className="navbar navbar-light mb-4">
      <div className="container-sm d-flex flex-column justify-content-center align-items-start">
        <div className="navbar-brand">
          <span className="name"><h1 className="display-1 p-0 m-0">Jason Lam</h1></span>
          <span className="description"><h2 className="display-5 p-0 m-0">Full Stack Web Developer</h2></span>
        </div>
        <div className="navbar p-0 my-0" id="navbarSupportedContent">
          <ul className="navbar-nav d-flex flex-row flex-nowrap display-6">
            <li className="nav-item me-3">
              <a className="nav-link p-0 m-0" href="#about">About</a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link p-0 m-0" href="#projects">Projects</a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link p-0 m-0" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav