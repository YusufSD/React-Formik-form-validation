import React from "react";
import { useFormik } from "formik";
import { schema } from "../schemas/Validation";
import { Link } from "react-router-dom";

const onSubmit = async (values, actions) => {
  console.log(values);
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  actions.resetForm();
};
function GenaralForm() {
  const { values, errors, isSubmitting, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        age: "",
        password: "",
        comfirmPassword: "",
      },
      validationSchema: schema,
      onSubmit,
    });
  return (
    <form onSubmit={handleSubmit}>
      <div className="formTitle">FORM VALIDATION</div>
      <div className="inputDiv">
        <label>E-Mail</label>
        <input
          type="text"
          placeholder="Mail adresinizi giriniz"
          onChange={handleChange}
          value={values.email}
          id="email"
          className={errors.email ? "input-error" : ""}
        />
        {errors.email && <p className="errorMessage">{errors.email}</p>}
      </div>

      <div className="inputDiv">
        <label>Yaş</label>
        <input
          type="number"
          placeholder="Yaşınızı giriniz"
          onChange={handleChange}
          value={values.age}
          id="age"
          className={errors.age ? "input-error" : ""}
        />
        {errors.age && <p className="errorMessage">{errors.age}</p>}
      </div>

      <div className="inputDiv">
        <label>Şifre</label>
        <input
          type="password"
          placeholder="Şifrenizi giriniz"
          onChange={handleChange}
          value={values.password}
          id="password"
          className={errors.password ? "input-error" : ""}
        />
        {errors.password && <p className="errorMessage">{errors.password}</p>}
      </div>

      <div className="inputDiv">
        <label>Şifre Tekrar</label>
        <input
          type="password"
          placeholder="Şifrenizi tekrar giriniz"
          onChange={handleChange}
          value={values.comfirmPassword}
          id="comfirmPassword"
          className={errors.comfirmPassword ? "input-error" : ""}
        />
        {errors.comfirmPassword && (
          <p className="errorMessage">{errors.comfirmPassword}</p>
        )}
      </div>
      <button disabled={isSubmitting} className="submitButton" type="submit">
        KAYDET
      </button>
      <Link className="link" to="/portal">
        Portala Git
      </Link>
    </form>
  );
}

export default GenaralForm;
