const {
  ERROR,
  MIN_LOTTO_NUMBER,
  MAX_LOTTO_NUMBER,
} = require('./utils/constants');

class BonusNumber {
  constructor(bonusNumber, winningLottoNumbers) {
    this.valid(bonusNumber, winningLottoNumbers);
    this.bonusNumber = bonusNumber;
  }

  valid(number, numbers) {
    if (numbers.includes(number)) {
      throw ERROR.MUST_NOT_BE_INCLUDED_IN_WINNING_NUMBER;
    }
    if (number < MIN_LOTTO_NUMBER || number > MAX_LOTTO_NUMBER) {
      throw ERROR.MUST_BE_WITHIN_RANGE;
    }
    if (Number.isNaN(number)) {
      throw ERROR.MUST_INPUT_ONLY_NUMBER;
    }
  }

  getBonusNumber() {
    return this.bonusNumber;
  }
}

module.exports = BonusNumber;
