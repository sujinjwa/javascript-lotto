const { LOTTO_LENGTH } = require('../utils/constants');
const Validation = require('../utils/Validation');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    Validation.validateLottoType(numbers);
    Validation.validateSixLength(numbers);
    Validation.validateLottoRange(numbers);
    Validation.validateDuplication(numbers);
    // if (numbers.length !== LOTTO_LENGTH.max) {
    //   throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    // }
  }

  getLotto() {
    return this.#numbers;
  }
  // TODO: 추가 기능 구현
}

module.exports = Lotto;
