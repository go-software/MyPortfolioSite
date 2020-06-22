import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="footer-category col-md-4 col-sm-12">
            <h5 className="uppercase">
              Teknolojiler
            </h5>
            <hr/>
            <ul className="list-inline quicklinks">
              <li className="list-inline-item">
                .NET 
              </li>
              <li className="list-inline-item">
                JavaScript
              </li>
              <li className="list-inline-item">
                NodeJS
              </li>
              <li className="list-inline-item">
                AngularJS
              </li>
              <li className="list-inline-item">
                C#
              </li>
              <li className="list-inline-item">
                MSSQL Server
              </li>
              <li className="list-inline-item">
                Web Service
              </li>
            </ul>
          </div>
          <div className="footer-category col-md-4 col-sm-12">
          <h5 className="footer-category-title">              
              Takipte Kal
            </h5>
            <hr/>
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="https://twitter.com/gkhnokay">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://instagram.com/gkhn.okay">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://linkedin.com/in/gökhan-okay-2a6b8368">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-category col-md-4 col-sm-12">
          <h5 className="uppercase">
              İletişim
            </h5>
            <hr/>
            <ul className="list-inline quicklinks">
              <li className="list-inline-item">
                gokay2619@gmail.com
              </li>
              <li className="list-inline-item">
                0(507) 840 26 74
              </li>
              <li className="list-inline-item">
                Yaşamkent Mah 3158. Cadde No: 20 Çankaya/ANKARA
              </li>
            </ul>
          </div>         
        </div>
        <div className="row align-items-center">
        <span className="copyright">
              Copyright &copy; Go-Software 2020
            </span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
