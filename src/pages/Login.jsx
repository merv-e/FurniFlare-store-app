import React, { useState } from "react";
import { login_btn, login_form_input } from "../data";
import { SubmitBtn, FormInput } from "../components";
import { Form, Link } from "react-router-dom";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {};

  return (
    <section className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          {isLoading ? (
            <span className="loading loading-spinner loading-lg"></span>
          ) : (
            <Form
              method="post"
              onSubmit={handleSubmit}
              className="card w-96 p-14 bg-secondary flex flex-col gap-y-5"
            >
              <h3 className="text-3xl font-bold">Login</h3>
              <FormInput
                type="email"
                label="email"
                name="identifier"
                defaultValue="test@test.com"
              />
              <FormInput
                type="password"
                label="password"
                name="password"
                defaultValue="secret"
              />
              <div className="flex flex-col justify-center gap-2">
                <SubmitBtn text="Login" />
                <button type="button" className="btn btn-neutral">
                  Guest User
                </button>
              </div>
              <p className="font-bold">
                Haven't registered yet? 
                <Link to="/register" className="ml-2 link link-hover link-primary">
                  Register
                </Link>
              </p>
            </Form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Login;
