import React from "react";

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
      <nav className="navbar navbar-expand-lg  fixed-top" id="mainNav">
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="#home">
            <svg
              id="header-logo"
              width="220"
              height="52"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <text
                  fontStyle="normal"
                  fontWeight="bold"
                  xmlSpace="preserve"
                  textAnchor="start"
                  fontFamily="Oswald, sans-serif"
                  fontSize="40"
                  id="svg_3"
                  y="40"
                  x="0"
                  strokeWidth="2"
                  stroke="#ffffff"
                  fill="none"
                >
                  Gokhan Okay
                </text>
              </g>
            </svg>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={this.btnClicked.bind(this)}
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <div
            className="navbar-collapse"
            style={{ display: this.state.isNavOpen ? "block" : "none" }}
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a
                  className="nav-link js-scroll-trigger"
                  href="#services"
                  onClick={this.btnClicked.bind(this)}
                >
                  Size Özel
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link js-scroll-trigger"
                  href="#portfolio"
                  onClick={this.btnClicked.bind(this)}
                >
                  Projelerle
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link js-scroll-trigger"
                  href="#about"
                  onClick={this.btnClicked.bind(this)}
                >
                  Ben
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link js-scroll-trigger"
                  href="#team"
                  onClick={this.btnClicked.bind(this)}
                >
                  Ve Yardımcılarım
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link js-scroll-trigger"
                  href="#contact"
                  onClick={this.btnClicked.bind(this)}
                >
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
