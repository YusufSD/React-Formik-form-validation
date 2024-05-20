import * as yup from "yup";

const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
export const schema = yup.object().shape({
  email: yup
    .string()
    .email("Lütfen geçerli bir email giriniz!")
    .required("Email alanı zorunludur."),
  age: yup
    .number()
    .positive("Lütfen pozitif bir sayı giriniz!")
    .integer("Lütfen yaşınızı tam sayı olarak giriniz!")
    .required("Yaş alanı zorunludur."),
  password: yup
    .string()
    .min(5, "Şifre minimum 5 karakter olmalıdır!")
    .required("Email girmek zorunludur.")
    .matches(regex, {
      message: "Lütfen en az 1 büyük harf, 1 küçük harf ve 1 sayı giriniz",
    })
    .required("Şifre alanı zorunludur!"),
  comfirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Şifreler eşleşmiyor")
    .required("Tekrar şifre girişi zorunludur!"),
});

export const advancedSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Kullanıcı adı en az 3 karakter uzunluğunda olmalıdır")
    .required("Kullanıcı adı zorunludur."),
  university: yup
    .string()
    .oneOf(["bogazici", "odtü", "gsü", "itü"], "Lütfen üniversitenizi seçiniz")
    .required("Üniversite alanı zorunludur."),
  isAccepted: yup.boolean().oneOf([true], "Kullanım koşullarını kabul ediniz!"),
});
