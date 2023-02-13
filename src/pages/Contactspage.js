import React, { Component } from "react";
import "../styles/Contactspage.css";
import Contact from "../components/Contactinfo.js";

class Contactspage extends Component {
  state = {
    firstName: "",
    lastName: "",
  };

  inputChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  submitForm = (event) => {
    event.preventDefault();

    alert(
      `Greetings ${this.state.firstName} ${this.state.lastName} and welcome to my site!`
    );
    this.setState({
      firstName: "",
      lastName: "",
    });
  };

  render() {
    return (
      <div>
        <Contact />
        <form className="form">
          <div className="form-group">
            <h2>Contact Form</h2>
            <p className="instruction">
              Enter your details if you'd like to get in touch
            </p>
            <label for="firstName">First name: </label>
            <input
              value={this.state.firstName}
              name="firstName"
              className="form-control"
              onChange={this.inputChange}
              type="text"
              placeholder="Enter your name"
            />

            <label for="lastName">Last name: </label>
            <input
              value={this.state.lastName}
              name="lastName"
              className="form-control"
              onChange={this.inputChange}
              type="text"
              placeholder="Enter your last name"
            />

            <label for="email">Email: </label>
            <input
              value={this.state.email}
              name="email"
              className="form-control"
              onChange={this.inputChange}
              type="email"
              placeholder="name@example.com"
            />
            <button
              onClick={this.submitForm}
              className="btn btn-primary submit-btn"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Contactspage;
