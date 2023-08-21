import * as yup from 'yup';

const EMAIL_REGEXP = /^\w+@[a-z]+\.[a-z]{2,}$/;
const PASSWORD_REGEXP = /^(?=.*\d)(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;

export const formFields = {
  email: 'E-mail',
  password: 'Password'
} as const;

export const validationSchema = yup.object({
  email: yup
    .string()
    .required('E-mail is a required field')
    .matches(
      EMAIL_REGEXP,
      { message: 'E-mail must be correct' }
    ),
  password: yup
    .string()
    .required('Password is a required field')
    .matches(
      PASSWORD_REGEXP,
      { message: 'Password must consist of at least one digit and one letter' }
    )
}).required();
