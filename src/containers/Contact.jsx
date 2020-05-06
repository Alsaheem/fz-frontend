import React from "react";

export default function Contact() {
  return (
    <div>
      <ContactForm />
    </div>
  );
}

const ContactForm = () => {
  return (
    <div className="">
      <div className="container contact-form">
        <div className="contact-image">
          <img
            src="https://image.ibb.co/kUagtU/rocket_contact.png"
            alt="rocket_contact"
          />
        </div>
        <form action="mailto:someone@example.com" method="post" enctype="text/plain">
          <h3>Drop Us a Message</h3>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  name="txtName"
                  className="form-control"
                  placeholder="Your Name *"
                />
              </div>
              <div className="form-group">

                <input
                  type="text"
                  name="txtEmail"
                  className="form-control"
                  placeholder="Your Email *"
                />
              </div>

              <div className="form-group">
                <input
                  type="submit"
                  name="btnSubmit"
                  className="btnContact"
                  defaultValue="Send Message"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <textarea
                  name="txtMsg"
                  className="form-control"
                  placeholder="Your Message *"
                  style={{ width: "100%", height: 150 }}
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
