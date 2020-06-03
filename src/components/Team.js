import React from "react";
import CoffieImage from '../../src/assets/img/coffie.jpg';
import PianoImage from '../../src/assets/img/piano.jpg';
import LaptopImage from '../../src/assets/img/laptop.jpg';
import OfficeImage from '../../src/assets/img/office.jpg';

const Team = () => {
  return (
    <section className="bg-light page-section" id="team">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">Ve Yardımcılarım</h2>
            <h3 className="section-subheading text-muted">
              İyi bir yazılıma hazırız
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="card">
              <img src={CoffieImage} className="card-img-top" alt="coffie" />
              <div className="card-body">
                <h5 className="card-title">Filtre Kahve</h5>
                <p className="card-text">
                  Kendime getirir, uyandırır, odaklatır, uykumu kaçırır, zihnimi
                  açar, içimi ısıtır. Onsuz olmaz...
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="card">
              <img src={PianoImage} className="card-img-top" alt="piano" />
              <div className="card-body">
                <h5 className="card-title">Müziksiz Olmaz</h5>
                <p className="card-text">
                  Müzik dinlemenin çalışmalarıma pozitif katkısı olmasını
                  seviyorum. Onsuz olmaz...
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="card">
              <img src={LaptopImage} className="card-img-top" alt="laptop" />
              <div className="card-body">
                <h5 className="card-title">Machintosh</h5>
                <p className="card-text">
                  Söz dinleyen, komutlarımı yerine getiren, karşısında code
                  yazasım gelen makinam...
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="card">
              <img src={OfficeImage} className="card-img-top" alt="office" />
              <div className="card-body">
                <h5 className="card-title">Home Office</h5>
                <p className="card-text">
                  Beni huzurlu ve konforlu hissettiren tüm yükümü taşıyan
                  alanım, o da olmazsa olmaz...
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <p className="large text-muted"> </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Team;
