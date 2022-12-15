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
  }

  getLotto() {
    return this.#numbers;
  }
}

module.exports = Lotto;
