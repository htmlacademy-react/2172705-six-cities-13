export const validate = (regExp: string | RegExp, string: string): boolean => {
  if (typeof regExp === 'string') {
    regExp = regExp.replace(/\//g, '');
  }

  return (new RegExp(regExp)).test(string);
};
