const FormInput = ({ name, defaultValue, label, type, size }) => {
  return (
    <div className="form-control">
      <label className=" flex items-center gap-2 capitalize pb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        className={` input input-bordered grow  ${size}`}
        placeholder={name}
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default FormInput;
