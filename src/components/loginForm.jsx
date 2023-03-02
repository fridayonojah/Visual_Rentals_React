import React from "react";
import { Navigate } from "react-router-dom";
import Joi from "joi-browser";
import Form from "./common/form";
import withRouter from "./common/withRouter";
import auth from "../services/authService"

class LoginForm extends Form {
  state = {
    data: { Username: "", Password: "" },
    errors: {},
  };

  schema = {
    Username: Joi.string().required().label("Username"),
    Password: Joi.string().required().label("Password"),
  };

  doSubmit = async () => {

    try {
      const { data } = this.state;
      await auth.login(data.Username, data.Password);
     
      const { state } = this.props.location;
      console.log(state)
      window.location = state ? state.from.pathname : "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400 ) {
        const errors = { ...this.state.errors };
        errors.Username = ex.response.data;
        this.setState({ errors });
      }
    }

  };

  render() {
    if(auth.getCurrentUser()) return <Navigate to={"/"} />
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("Username", "Username")}
          {this.renderInput("Password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);
