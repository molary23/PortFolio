import React, { useState, useContext } from "react";
import { InfoContext } from "../services/info.services";
import Loader from "../layout/Loader";

import TextAreaField from "../layout/TextAreaField";
import TextInputField from "../layout/TextInputField";
import Modal from "../layout/Modal";
function Contact() {
  const [inputs, setInputs] = useState({}),
    [errors, setErrors] = useState({}),
    [loading, setLoading] = useState(false),
    [modal, setModal] = useState(false),
    [sender, setSender] = useState(null),
    { info, isLoading } = useContext(InfoContext);

  let connect, contact;
  if (isLoading) {
    contact = <Loader />;
  } else {
    let contacts = info.contacts;
    contact = (
      <div className="contact-details">
        <div className="contact-icon"></div>
        <div className="contact-info">{contacts.mail}</div>
        <div className="contact-icon"></div>
        <div className="contact-info">{contacts.phone}</div>
        <div className="contact-icon"></div>
        <div className="contact-info">{contacts.location}</div>
        <div className="contact-icon"></div>
        <div className="contact-info">{contacts.office}</div>
      </div>
    );
    let connects = info.connects;

    connect = connects.map((con, i) => {
      return (
        <div className="connect-social" key={i}>
          <a href={con.url} target="_blank" rel="noreferrer">
            <img src={con.image} alt={"Hassan Adeola's " + con.name} />
          </a>
        </div>
      );
    });
  }

  const modalHandler = (close) => {
    setModal(close);
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    /*
        if (!Object.keys(inputs).includes("name") || inputs.name === "") {
          setErrors({
            name: "We need your name for documentation purposes.",
          });
        } else if (
          !Object.keys(inputs).includes("email") ||
          inputs.email === ""
        ) {
          setErrors({
            email: "We need your email for our response to reach you.",
          });
        } else if (
          !Object.keys(inputs).includes("phone") ||
          inputs.phone === ""
        ) {
          setErrors({
            phone: "We need  your phone number for faster communication.",
          });
        } else if (isNaN(inputs.phone)) {
          setErrors({
            phone: "Phone number can only be numbers.",
          });
        } else if (
          !Object.keys(inputs).includes("subject") ||
          inputs.subject === ""
        ) {
          setErrors({
            subject: "You need to enter a Subject for your message.",
          });
        } else if (
          !Object.keys(inputs).includes("message") ||
          inputs.message === ""
        ) {
          setErrors({
            message: "What is a Message without content?",
          });
        } else {
          setLoading(true);
          setErrors({});
          const message = {
            name: inputs.name.toLowerCase(),
            email: inputs.email.toLowerCase(),
            phone: inputs.phone,
            subject: inputs.subject,
            message: inputs.message,
            send: "message",
          };

          try {
            let response = await axios.post(
              API_PATH,
              {
                message,
              },
              { headers: { "content-type": "application/json" } }
            );
            if (response.data === 1) {
              setInputs({});
              setLoading(false);
              setSender("success");
              setModal(true);
            }
          } catch (error) {
            setSender("error");
            setModal(true);
          }
        }*/
  };

  return (
    <div className="contact">
      <div className="contact-me">
        <div className="section-heading">
          <h1>Contact Me</h1>
          <h2>get in touch</h2>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="contact-info-card">{contact}</div>
              <div className="connect-info-card">{connect}</div>
            </div>
            <div className="col-lg-6 col-12">
              <form className="contact-form" onSubmit={submitHandler}>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 col-12">
                      <TextInputField
                        id="contact-form-name"
                        label="Name"
                        type="name"
                        name="name"
                        value={inputs.name || ""}
                        onChange={changeHandler}
                        error={errors.name}
                        maxLength="50"
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <TextInputField
                        id="contact-form-email"
                        label="Email Address"
                        type="email"
                        name="email"
                        value={inputs.email || ""}
                        onChange={changeHandler}
                        error={errors.email}
                        maxLength="50"
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <TextInputField
                        id="contact-form-phone"
                        label="Phone Number"
                        type="phone"
                        name="phone"
                        value={inputs.phone || ""}
                        onChange={changeHandler}
                        error={errors.phone}
                        maxLength="50"
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <TextInputField
                        id="contact-form-subject"
                        label="Subject"
                        type="subject"
                        name="subject"
                        value={inputs.subject || ""}
                        onChange={changeHandler}
                        error={errors.subject}
                        maxLength="50"
                      />
                    </div>
                    <div className="col-12">
                      <TextAreaField
                        id="contact-form-message"
                        label="Message"
                        name="message"
                        value={inputs.message || ""}
                        onChange={changeHandler}
                        error={errors.message}
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn default-btn btn-block btn-lg"
                  >
                    Send Message
                    {loading && (
                      <span className="spinner-border spinner-border-sm ms-2"></span>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {modal ? (
        <Modal onClick={modalHandler} modal={modal} sender={sender} />
      ) : null}
    </div>
  );
}

export default Contact;
