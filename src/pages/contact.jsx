import React, { useState } from "react";
import Axios from "axios";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    disabled: false,
    emailSent: null,
  });

  const handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setForm({
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setForm({
      disabled: true,
    });

    Axios.post("http://localhost:3000/api/email", form)
      .then((res) => {
        if (res.data.success) {
          setForm({
            disabled: false,
            emailSent: true,
          });
        } else {
          setForm({
            disabled: false,
            emailSent: false,
          });
        }
      })
      .catch((err) => {
        console.log(err);

        setForm({
          disabled: false,
          emailSent: false,
        });
      });
  };
  const pageVariants = {
    initial: {
      opacity: 0,
      x: "-100vw",
      scale: 0.8,
    },
    in: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
    out: {
      opacity: 0,
      x: "100vw",
      scale: 1.2,
    },
  };
  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 1,
  };

  const pageStyle = {
    position: "absolute",
  };

  let day = new Date();
  let days = new Array[
    ("Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday")
  ]();
  const greet = "Have a good " + days[day.getDay()];
  return (
    <motion.div
      style={pageStyle}
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="contact-page">
        <div className="a">
          <p>LET'S COMUNICATE</p>
        </div>
        <div className="b">
          <form onSubmit={handleSubmit}>
            <h5>Full Name</h5>
            <Form.Control
              className={"full-name"}
              id="full-name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
            />

            <h5>Email</h5>
            <Form.Control
              className="email"
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
            />

            <h5>Hello Zakaria,</h5>
            <Form.Control
              className="message"
              id="message"
              name="message"
              as="textarea"
              rows="3"
              value={form.message}
              placeholder="and continue here..."
              onChange={handleChange}
            />

            <button
              className="submit-button"
              variant="primary"
              type="submit"
              disabled={form.disabled}
            >
              SUBMIT
            </button>
            <p className="goodBey">{greet}</p>
            {form.emailSent === true && (
              <p className="d-inline success-msg">Email Sent</p>
            )}
            {form.emailSent === false && (
              <p className="d-inline err-msg">Email Not Sent</p>
            )}
          </form>
        </div>
        <div className="c">
          <div></div>
        </div>
        <div className="navBar">
          <Link to="/home">HOME</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/services">SERVICES</Link>
          <Link to="/work">WORK</Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;

//   let day=new Date()
//                       let days=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday")
//                       document.getElementById('goodday').innerHTML ="Have a good " + days[day.getDay()]
{
  /* <div className="good-day">
<label id="goodday"></label>
</div> */
}
