const Validation = {
  validateLength(input) {
    if (input.length < 0) throw '[ERROR]';
  },

  validateNumber(input) {
    if (Number(input) === NaN) throw '[ERROR]';
  },

  // 1000으로 나누어떨어지지 않는 경우 예외처리
  validateUnit(money) {
    if (money % 1000 !== 0) throw '[ERROR];';
  },

  validateAmount(money) {
    if (money < 1000) throw '[ERROR]';
  },
};

module.exports = Validation;
