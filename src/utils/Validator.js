const Validator = (() => {
  return {
    isEmpty(string) {
      return string.trim().length === 0;
    },
    isValid(value, regex) {
      return regex.test(value);
    },
    passwordRegExp: /\w{8,}/,
    emailRegExp: /\w{5,}@\w{5,}\.[a-z]{3,}/,
    zipcodeRegExp: /[0-9]{5}/,
  };
})();
export default Validator;
