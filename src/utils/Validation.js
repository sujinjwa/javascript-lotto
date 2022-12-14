const { LOTTO_LENGTH, ZERO, LOTTO_UNIT } = require('../utils/constants');

const Validation = {
  validateLength(input) {
    if (input.length < LOTTO_LENGTH.min) throw '[ERROR]';
  },

  validateNumber(input) {
    if (Number(input) === NaN) throw '[ERROR]';
  },

  // 1000으로 나누어떨어지지 않는 경우 예외처리
  validateUnit(money) {
    if (money % LOTTO_UNIT !== ZERO) throw '[ERROR];';
  },

  validateAmount(money) {
    if (money < LOTTO_UNIT) throw '[ERROR]';
  },
};

module.exports = Validation;
