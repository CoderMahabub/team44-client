import React from "react";
import TopBar from "../Shared/TopBar/TopBar";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <TopBar />

      <div className="contact">
        <div className="c">
          <div className="c-wrapper">
            <div className="c-right">
              <p className="c-desc">Contact Us</p>
              <form className="c-form">
                <input
                  className="c-input"
                  type="text"
                  placeholder="Name"
                  name="user_name"
                />
                <input
                  className="c-input"
                  type="text"
                  placeholder="Subject"
                  name="user_subject"
                />
                <input
                  className="c-input"
                  type="text"
                  placeholder="Email"
                  name="user_email"
                />
                <textarea rows="5" placeholder="Message" name="message" />
                <button className="c-button">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
