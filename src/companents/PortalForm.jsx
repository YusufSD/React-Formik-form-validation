import React from "react";
import { Form, Formik } from "formik";
import CustomInput from "./CustomInput";
import { advancedSchema } from "../schemas/Validation";
import CustomSelect from "./CustomSelect";
import CustomCheckbox from "./CustomCheckbox";
import { Link } from "react-router-dom";

const onSubmit = async (values, actions) => {
  console.log(values);
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  actions.resetForm();
};
function PortalForm() {
  return (
    <>
      <Formik
        initialValues={{ username: "", university: "", isAccepted: false }}
        onSubmit={onSubmit}
        validationSchema={advancedSchema}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="formTitle">FORM VALIDATION PORTAL</div>
            <CustomInput
              labelProps="Kullanıcı Adı"
              name="username"
              type="text"
              placeholder="Kullanıcı adınızı giriniz"
            />
            <CustomSelect
              labelProps="Üniversite"
              name="university"
              placeholder="Lütfen üniversitenizi seçiniz"
            >
              <option value="">Lütfen Üniversitenizi Seçiniz</option>
              <option value="bogazici">Boğaziçi Üniversitesi</option>
              <option value="odtü">Orta Doğu Teknik Üniversitesi</option>
              <option value="gsü">Galatasaray Üniversitesi</option>
              <option value="itü">Bİstanbul Teknik Üniversitesi</option>
            </CustomSelect>
            <CustomCheckbox type="checkbox" name="isAccepted" />
            <button
              disabled={isSubmitting}
              type="submit"
              className="submitButton"
            >
              Kaydet
            </button>
            <Link className="link" to="/">
              Ana Forma Git
            </Link>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default PortalForm;
