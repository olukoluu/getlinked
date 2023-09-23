import React from "react";

const Input = ({
  name,
  label,
  type,
  value,
  handleChange,
  handleBlur,
  style,
  touched,
  error,
  placeholder,
}) => {
  return (
    <div className={style}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        className=' bg-transparent border rounded p-2 pl-2 outline-none w-full placeholder:text-xs placeholder:text-slate-400'
      />
      {touched && error && <p className=" text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
