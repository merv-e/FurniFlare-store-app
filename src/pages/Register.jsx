import React from "react";
import FormInput from "../components/FormInput";
import { register_btn, register_form_input } from "../data";

const Register = () => {
  return (
    <FormInput input_data={register_form_input} button_data={register_btn} />
  );
};

export default Register;
