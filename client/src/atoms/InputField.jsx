import React from "react";
import './atom.styles.scss';

const InputField = ({
  label,
  name,
  type,
  className,
  value,
  id,
  placeholder,
  error,
  ...rest
}) => {
  return (
    <div>
      {label && <label className="input-field__label">{label}</label>}{" "}
      <input
        type={type}
        name={name}
        id={id}
        className={`${className}`}
        value={value}
        placeholder={placeholder}
        {...rest}
      />
      {error && <span className="errorfeedback-message">{error}</span>}
    </div>
  );
};
export default InputField;
