import React from "react";
import SignIn from "./SignIn";
import Greet from "./Greet";

class App extends React.Component {
  state = {
    authemail: "dikshi.01@gmail.com",
    authpass: "12345678",
    result: false,
    usermsg: ""
  };

  comparison = (email, pass) => {
    console.log(email);
    console.log(pass);
    if (email === this.state.authemail && pass === this.state.authpass) {
      this.setState({
        result: true,
        usermsg: "Authorized"
      });
    } else {
      this.setState({
        result: false,
        usermsg: "Not Authorized"
      });
    }
  };
  render() {
    return (
      <div>
        {/* //   {this.state.result ? (
      //     <Greet result={this.state.usermsg} />
      //   ) : (
      //     <div>
      //       {this.state.usermsg ? <Greet result={this.state.usermsg} /> : null}
      //       <SignIn comparison={this.comparison}></SignIn>
      //     </div>
      //   )} */}
        <SignIn comparison={this.comparison}></SignIn>
        <Greet result={this.state.usermsg}></Greet>
      </div>
    );
  }
}

export default App;
