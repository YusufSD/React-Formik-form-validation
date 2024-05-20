import { useField } from "formik";
import React from "react";

function CustomCheckbox({ labelProps, ...props }) {
  const [field, meta] = useField(props);

  return (
    <>
      <div className="inputCheckbox">
        <input
          {...field}
          {...props}
          className={meta.error ? "input-error" : ""}
        />
        <span>Kullanım koşullarını kabul ediyorum</span>
      </div>
      {meta.error && <div className="errorMessage">{meta.error}</div>}
    </>
  );
}

export default CustomCheckbox;
