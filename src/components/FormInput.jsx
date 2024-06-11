import React, { useState } from "react";
import { Link } from "react-router-dom";

const FormInput = ({ input_data, button_data }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {};

  return (
    <main className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          {isLoading ? (
            <span className="loading loading-spinner loading-sm"></span>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {input_data.map((data) => (
                <div key={data.id}>
                  <label className="input input-bordered flex items-center gap-2">
                    {data.label_name}
                    <input
                      type={data.type}
                      className="grow"
                      placeholder={data.placeholder}
                    />
                  </label>
                </div>
              ))}
              {button_data.map((data) => (
                <div className="flex flex-col justify-center gap-2" key={data.id}>
                  <Link to="/" className="btn btn-primary">
                    {data.btn_name}
                  </Link>
                </div>
              ))}
            </form>
          )}
        </div>
      </div>
    </main>
  );
};

export default FormInput;
