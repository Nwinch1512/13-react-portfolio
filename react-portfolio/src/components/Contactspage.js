import React, { Component } from "react";
import "../styles/Contactspage.css";
import Contact from "./Contactinfo.js";

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

    alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
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
            <label for="exampleFormControlInput1">First name: </label>
            <input
              value={this.state.firstName}
              name="firstName"
              className="form-control"
              onChange={this.inputChange}
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group">
            <label for="exampleFormControlInput1">Last name: </label>
            <input
              value={this.state.lastName}
              name="lastName"
              className="form-control"
              onChange={this.inputChange}
              type="text"
              placeholder="Enter your last name"
            />
          </div>
          <div className="form-group">
            <label for="exampleFormControlInput1">Email: </label>
            <input
              value={this.state.email}
              name="email"
              className="form-control"
              onChange={this.inputChange}
              type="email"
              placeholder="name@example.com"
            />
            <button onClick={this.submitForm}>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Contactspage;
