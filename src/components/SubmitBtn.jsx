import React from "react";

const SubmitBtn = ({ text }) => {
  return (
    <button type="submit" className="btn btn-primary">
      {text}
    </button>
  );
};

export default SubmitBtn;
