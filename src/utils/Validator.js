const Validator = (() => {
  return {
    isEmpty(string) {
      return string.trim().length === 0;
    },
    isValid(value, regex) {
      return regex.test(value.trim());
    },
    areEqual(firstValue, secondValue) {
      return firstValue.trim() === secondValue.trim();
    },
    passwordRegExp: /\w{8,}/,
    emailRegExp: /\w{5,}@\w{5,}\.[a-z]{3,}/,
    zipcodeRegExp: /[0-9]{5}/,
  };
})();
export default Validator;
