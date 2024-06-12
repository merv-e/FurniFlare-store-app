import React from "react";

const FormInput = ({ name, defaultValue, label, type }) => {
  return (
    <label className="input input-bordered flex items-center gap-2">
      {label}
      <input
        type={type}
        name={name}
        className="grow"
        placeholder={name}
        defaultValue={defaultValue}
      />
    </label>
  );
};

export default FormInput;
