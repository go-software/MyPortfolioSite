import React from 'react';


const Header = () => {
    return (
      <header className="masthead" id="home">
        <div className="container">
          <div className="intro-text">
            <div className="intro-heading">Gökhan Okay</div>
            <div className="intro-lead-in">Portfolio Sitesi</div>
            <a
              className="btn btn-primary btn-md js-scroll-trigger"
              href="#portfolio"
            >
              Devamı...
            </a>
          </div>
        </div>
      </header>
    );
}
export default Header;