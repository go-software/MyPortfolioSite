import React from "react";

const Contact = () => {
  return (
    <section className="page-section" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">İletişim</h2>
            <h3 className="section-subheading text-muted">
              Bilgi almak için lütfen mesaj atın
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <form id="contactForm" name="sentMessage" noValidate="novalidate">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      className="form-control"
                      id="name"
                      type="text"
                      placeholder="Ad Soyad *"
                      required="required"
                      data-validation-required-message="Please enter your name."
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      id="email"
                      type="email"
                      placeholder="Email *"
                      required="required"
                      data-validation-required-message="Please enter your email address."
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      id="phone"
                      type="tel"
                      placeholder="Telefon *"
                      required="required"
                      data-validation-required-message="Please enter your phone number."
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      id="message"
                      placeholder="Mesajınız*"
                      required="required"
                      data-validation-required-message="Please enter a message."
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="clearfix"></div>
                <div className="col-lg-12 text-center">
                  <div id="success"></div>
                  <button
                    id="sendMessageButton"
                    className="btn btn-primary btn-xl text-uppercase"
                    type="submit"
                  >
                    Gönder
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
