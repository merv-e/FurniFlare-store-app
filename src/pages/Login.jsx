import React from "react";
import FormInput from "../components/FormInput";
import { login_btn, login_form_input } from "../data";

const Login = () => {
  return <FormInput input_data={login_form_input} button_data={login_btn} />;
};

export default Login;
