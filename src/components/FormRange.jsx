import { useState } from "react";
import { formatPrice } from "../utils";

const FormRange = ({ label, name, size }) => {
  const step = 1000;
  const maxPrice = 100000;

  const [selectedPrice, setSelectedPrice] = useState(maxPrice);

  return (
    <div className="form-control">
      <label htmlFor={name} className="label cursor-pointer">
        <span className="label-text capitalize">{label}</span>
        <span>{formatPrice(selectedPrice)}</span>
        <input
          type="range"
          name="name"
          min={0}
          max={maxPrice}
          value={selectedPrice}
          onChange={(e) => setSelectedPrice(e.target.value)}
          className={`range range-primary ${size}`}
          step={step}
        />

      </label>
    </div>
  );
};

export default FormRange;
