import React, { Component } from "react";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedback: "",
      name: "",
      phone: "",
      email: "",
      responseMesg: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    var template_id = "template_nA0IQzMd";
    var service_id = "portfolio_mesaj";

    this.sendFeedback(service_id, template_id, {
      message_html: this.state.feedback + this.state.phone,
      from_name: this.state.name,
      reply_to: this.state.email,
    });
  }

  sendFeedback(service_id, template_id, variables) {
    window.emailjs
      .send(service_id, template_id, variables)
      .then((res) => {
        this.setState({ responseMesg: res.status });
        console.log(this.state.responseMesg);
      })
      // Handle errors here however you like, or use a React error boundary
      .catch((err) => console.error("Mesajınız iletilmedi:", err));
  }

  render() {
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
                        name="name"
                        className="form-control"
                        id="name"
                        type="text"
                        placeholder="Ad Soyad *"
                        required
                        data-validation-required-message="Please enter your name."
                        value={this.state.name}
                        onChange={this.handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="form-group">
                      <input
                        name="email"
                        className="form-control"
                        id="email"
                        type="email"
                        placeholder="Email *"
                        required
                        data-validation-required-message="Please enter your email address."
                        value={this.state.email}
                        onChange={this.handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="form-group">
                      <input
                        name="phone"
                        className="form-control"
                        id="phone"
                        type="tel"
                        placeholder="Telefon *"
                        required
                        data-validation-required-message="Please enter your phone number."
                        value={this.state.phone}
                        onChange={this.handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <textarea
                        name="feedback"
                        className="form-control"
                        id="message"
                        placeholder="Mesajınız*"
                        required
                        data-validation-required-message="Please enter a message."
                        value={this.state.feedback}
                        onChange={this.handleChange}
                      ></textarea>
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="clearfix"></div>
                  <div className="col-lg-12 col-sm-12 col-md-12 text-center">
                    <div id="success"></div>
                    <button
                      id="sendMessageButton"
                      className="btn btn-primary"
                      type="submit"
                      onClick={((e) => e.preventDefault(), this.handleSubmit)}
                    >
                      Gönder
                    </button>
                  </div>                  
                  <span className="responseMessage">{this.state.responseMesg ? 'Mesajınız başarılı bir şekilde iletilmiştir' : ""}</span>                   
                  }
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
