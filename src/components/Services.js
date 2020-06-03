import React from "react";

const Services = () => {
  return (
    <section className="page-section" id="services">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">Neler Tasarlarım?</h2>
            <h3 className="section-subheading text-muted">
              Web, mobile ve masaüstü platformlar için yaratıcı, farklı ve çözüm
              odaklı projeler
            </h3>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary"></i>
              <i className="fa fa-sitemap fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="service-heading">Web Site</h4>
            <p className="text-muted">
              Web site tasarımı, banner, sosyal ağ, interaktif tasarımlar ve
              içerik geliştirme.
            </p>
          </div>
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary"></i>
              <i className="fa fa-users fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="service-heading">Sosyal Medya</h4>
            <p className="text-muted">
              Facebook, Twitter, Instagram gibi sosyal medya platformlarının
              konsept geliştirme, sayfa ve banner tasarımları.
            </p>
          </div>
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary"></i>
              <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="service-heading">Logo Tasarımı</h4>
            <p className="text-muted">
              Özgün ve yaratıcı üslubuyla firmanızın marka değerini yükseltecek
              amblem ve logo tasarımları.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
