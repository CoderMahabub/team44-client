import React from "react";

const HireUs = () => {
  return (
    <>
      <h2 className="wantToHireUsTitle">Want To Hire Us?</h2>
      <div className="aboutContentContainer">
        <div className="formContainer">
          <form action="#" className="form">
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter Your Name"
              required
              className="aboutInput"
            />
            <input
              type="email"
              name=""
              id=""
              placeholder="Enter Your Email"
              required
              className="aboutInput"
            />
            <textarea
              name=""
              id=""
              placeholder="Project Description"
              className="aboutInput"
            ></textarea>
            <button type="submit" className="submitBtn">
              Sumbit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default HireUs;
