import React, { useState } from "react";
import { FormInput, SubmitBtn } from "../components";
import { Form, Link } from "react-router-dom";

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <section className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          {isLoading ? (
            <span className="loading loading-spinner loading-lg"></span>
          ) : (
            <Form
              method="POST"
              className="card w-96 p-14 flex flex-col gap-y-5 shadow-2xl"
            >
              <h3 className="text-3xl font-bold mb-6">Register</h3>
              <FormInput type="username" label="username" name="username" />
              <FormInput type="email" label="email" name="identifier" />
              <FormInput type="password" label="password" name="password" />
              <SubmitBtn text="Register" />
              <p className="font-bold">
                Already a member?
                <Link
                  to="/login"
                  className="ml-2 link link-hover link-primary"
                >
                  Login
                </Link>
              </p>
            </Form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Register;
