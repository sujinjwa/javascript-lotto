const { set } = require('express/lib/response');
const {
  LOTTO_LENGTH,
  ZERO,
  LOTTO_UNIT,
  LOTTO_NUMBER,
} = require('../utils/constants');

const Validation = {
  validateLength(input) {
    if (input.length === ZERO) throw '[ERROR] 공백입니다. 값을 입력해주세요.';
  },

  validateMoneyType(money) {
    if (Number(money) === NaN) throw '[ERROR] 숫자를 입력해주세요.';
  },

  validateUnit(money) {
    if (money % LOTTO_UNIT !== ZERO)
      throw '[ERROR] 구매 금액은 1,000원 단위로 입력해주세요.';
  },

  validateAmount(money) {
    if (money < LOTTO_UNIT) throw '[ERROR] 최소 구매 금액은 1,000원입니다.';
  },

  validateLottoType(lotto) {
    if (lotto.includes(NaN)) throw '[ERROR] 숫자를 입력해주세요.';
  },

  validateSixLength(lotto) {
    if (lotto.length !== LOTTO_LENGTH.max)
      throw '[ERROR] 6개의 숫자를 입력해주세요.';
  },

  validateRange(lotto) {
    lotto.map((number) => {
      if (number < LOTTO_NUMBER.min || number > LOTTO_NUMBER.max) {
        throw '[ERROR] 로또의 번호 범위는 1 ~ 45 이내입니다.';
      }
    });
  },

  validateDuplication(lotto) {
    if (lotto.length !== new Set(lotto).size) {
      throw '[ERROR] 중복되는 번호가 있습니다.';
    }
  },
};

module.exports = Validation;
