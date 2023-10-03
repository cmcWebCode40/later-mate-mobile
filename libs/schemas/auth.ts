import * as Yup from 'yup';

export const LoginAuthSchema = Yup.object().shape({
  email: Yup.string().email('email is not valid!').required(),
  password: Yup.string().required('password is required!'),
});

export const ForgotPaswordAuthSchema = Yup.object().shape({
  email: Yup.string().email('email is not valid!').required(),
});

export const ResetPasswordAuthSchema = Yup.object().shape({
  token: Yup.string().required(),
  password: Yup.string().min(8).required('Password is required!'),
  password_confirmation: Yup.string()
    .min(8)
    .oneOf([Yup.ref('password')], 'Passwords are not the same!')
    .required('Password confirmation is required!'),
});

export const RegisterAuthSchema = Yup.object().shape({
  email: Yup.string().email('email is not valid!').required(),
  first_name: Yup.string().required('password is required!'),
  last_name: Yup.string().required('password is required!'),
  password: Yup.string().required('password is required!'),
});

export const ProfileNameSchema = Yup.object().shape({
  first_name: Yup.string().required('password is required!'),
  last_name: Yup.string().required('password is required!'),
  email: Yup.string().optional(),
});
