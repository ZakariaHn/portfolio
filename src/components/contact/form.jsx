import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Axios from "axios";

const FormCard = () => {
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

  var date = new Date();
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  const greet = `Have a good ${weekday[date.getDay()]}`;
  return (
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
  );
};

export default FormCard;
