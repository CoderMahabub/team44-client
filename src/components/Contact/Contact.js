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
              <form>
                <input type="text" placeholder="Name" name="user_name" />
                <input type="text" placeholder="Subject" name="user_subject" />
                <input type="text" placeholder="Email" name="user_email" />
                <textarea rows="5" placeholder="Message" name="message" />
                <button>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
