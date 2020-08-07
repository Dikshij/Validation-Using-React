import React from "react";

class SignIn extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  verificationCheck = (event) => {
    event.preventDefault();
    this.props.comparison(this.state.email, this.state.password);
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <form onSubmit={this.verificationCheck}>
          <input
            type="email"
            value={this.state.email}
            placeholder="enter your email id"
            name="email"
            onChange={this.handleChange}
            required
          ></input>
          <br></br>
          <input
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            name="password"
            placeholder="enter your password"
            required
          ></input>
          <br></br>
          <button type="submit" onClick={this.props.checkAuth}>
            Click Me
          </button>
        </form>
      </div>
    );
  }
}

export default SignIn;
