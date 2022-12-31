import React, { useMemo } from "react";
import "./TextField.css";
import { useField } from "react-final-form";

const TextField = ({ name, label, multiline = false, ...rest }) => {
  const field = useField(name);

  const { submitError, dirtySinceLastSubmit, error, touched } = field.meta;

  const isError = !!(
    ((submitError && !dirtySinceLastSubmit) || error) &&
    touched
  );

  const errorText = error || submitError;

  const id = useMemo(() => Math.random(), []);

  const inputProps = {
    type: "input",
    className: "form__field",
    id: id,
    placeholder: label,
    error: errorText,
    value: field.input.value,
    onChange: field.input.onChange,
    onBlur: field.input.onBlur,
    onFocus: field.input.onFocus,
    ...rest,
  };

  return (
    <div className="form__group field">
      {multiline ? <textarea {...inputProps} /> : <input {...inputProps} />}
      <label htmlFor={id} className="form__label">
        {label}
      </label>

      {isError && <p className="form__helper__text">{errorText}</p>}
    </div>
  );
};

export default TextField;
