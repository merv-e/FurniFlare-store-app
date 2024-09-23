const FormInput = ({ name, defaultValue, label, type, size }) => {
  return (
    <div className="form-control">
      <label className="input input-bordered flex items-center gap-2 capitalize">
        {label}
        <input
          type={type}
          name={name}
          className={` input input-bordered  ${size}`}
          placeholder={name}
          defaultValue={defaultValue}
        />
      </label>
    </div>
  );
};

export default FormInput;
