export const EMAIL_REGEXP = /^\w+@[a-z]+\.[a-z]{2,}$/;

export const PASSWORD_REGEXP = /^(?=.*\d)(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;

export const inputs = [
  {
    labelText: 'E-mail',
    type: 'email',
    name: 'login',
    placeholder: 'Email',
    required: true,
    regExp: EMAIL_REGEXP,
    errorText: 'The email must be valid!',
  },
  {
    labelText: 'Password',
    type: 'password',
    name: 'password',
    placeholder: 'Password',
    required: true,
    regExp: PASSWORD_REGEXP,
    errorText: 'The password must consist of at least one letter and a number!',
  },
];
