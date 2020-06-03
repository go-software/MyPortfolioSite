import React from "react";

const About = () => {
  return (
    <section className="page-section" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">Ben</h2>
            <h3 className="section-subheading text-muted">
              Sürekli araştıran meraklı yazılımcı
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <ul className="timeline">
              <li>
                <div className="timeline-image">
                  <img
                    className="rounded-circle img-fluid"
                    src="img/about/1.jpg"
                    alt=""
                  />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>2015</h4>
                    <h4 className="subheading">Üniversite Mezuniyet</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">
                      {" "}
                      2012-2015 Anadolu Üniversitesi Endüstri Mühendisliği
                      bölümü mezunuyum. O dönemlerde ilgi duyarak başladığım
                      yazılım dünyası her geçen gün beni daha da içine çekmeyi
                      başardı.
                    </p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <img
                    className="rounded-circle img-fluid"
                    src="img/about/2.jpg"
                    alt=""
                  />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>2015</h4>
                    <h4 className="subheading">Ankara</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">
                      Hacettepe Teknokent profosyonel olarak yazılım alanında
                      projeler geliştirmeme vesile olan benim için özel bir yer.{" "}
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="timeline-image">
                  <img
                    className="rounded-circle img-fluid"
                    src="img/about/3.jpg"
                    alt=""
                  />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>2016-2018</h4>
                    <h4 className="subheading">Bakanlıklar da pişmek</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">
                      Ankara'da çalışan her yazılımcının deneyim ve tecrübe
                      kazandığı büyük ölçekli projelerin doğum yerlerinde web
                      projeleri geliştirme.
                    </p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <img
                    className="rounded-circle img-fluid"
                    src="img/about/4.jpg"
                    alt=""
                  />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>2018-2019</h4>
                    <h4 className="subheading">Uçaklar</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">
                      Sivil Havacılık okullarının pilotluk eğitim süreçlerini
                      teknoloji ile birleştirip web ortamına taşımak.
                    </p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <h4>
                    Şimdi
                    <br />
                    neden sizle
                    <br />
                    Olmayalım!
                  </h4>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
