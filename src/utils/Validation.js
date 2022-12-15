const {
  LOTTO_LENGTH,
  ZERO,
  LOTTO_UNIT,
  LOTTO_NUMBER,
  ERROR,
} = require('../utils/constants');

const Validation = {
  validateLength(input) {
    if (input.length === ZERO) throw ERROR.isBlank;
  },

  validateMoneyType(money) {
    if (Number.isNaN(Number(money))) throw ERROR.isNotNumber;
  },

  validateUnit(money) {
    if (money % LOTTO_UNIT !== ZERO) throw ERROR.isNotValidUnit;
  },

  validateAmount(money) {
    if (money < LOTTO_UNIT) throw ERROR.isNotEnoughMoney;
  },

  validateLottoType(lotto) {
    if (lotto.includes(NaN)) throw ERROR.isNotNumber;
  },

  validateSixLength(lotto) {
    if (lotto.length !== LOTTO_LENGTH.max) throw ERROR.isNotSixLength;
  },

  validateLottoRange(lotto) {
    lotto.map((number) => {
      if (number < LOTTO_NUMBER.min || number > LOTTO_NUMBER.max) {
        throw ERROR.isNotValidRange;
      }
    });
  },

  validateDuplication(lotto) {
    if (new Set(lotto).size !== LOTTO_LENGTH.max)
      throw ERROR.hasDuplicatedNumber;
  },

  validateBonusType(number) {
    if (Number.isNaN(Number(number))) throw ERROR.isNotNumber;
  },

  validateBonusRange(number) {
    if (number < LOTTO_NUMBER.min || number > LOTTO_NUMBER.max) {
      throw ERROR.isNotValidRange;
    }
  },
};

module.exports = Validation;
