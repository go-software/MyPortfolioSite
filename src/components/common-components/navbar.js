import React from "react";
import HeaderLogo from "../../assets/img/g1.jpg";

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      isNavOpen: false,
    };
  }
  btnClicked() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="#home">
            <img className="header-logo" src={HeaderLogo} alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={this.btnClicked.bind(this)}>Menu
            <i className="navbar-toggle-icon"></i>
          </button>
          <div
            className="navbar-collapse"
            style={{ display: this.state.isNavOpen ? "block" : "none" }}
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#services">
                  Size Özel
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#portfolio">
                  Projelerle
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#about">
                  Ben
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#team">
                  Ve Yardımcılarım
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#contact">
                  İletişim
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
