import React, { useState } from "react";
import Axios from "axios";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
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
  return (
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

          <h5>Message</h5>
          <Form.Control
            className="message"
            id="message"
            name="message"
            as="textarea"
            rows="3"
            value={form.message}
            onChange={handleChange}
          />

          <button
            className="d-inline-block"
            variant="primary"
            type="submit"
            disabled={form.disabled}
          >
            Send
          </button>

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
      <div className={"show_work-services-nav"}>
        <Link to="/">HOME</Link>
      </div>
    </div>
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
