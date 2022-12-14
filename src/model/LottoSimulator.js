const { Random } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const { LOTTO_NUMBER, LOTTO_LENGTH } = require('../utils/constants');

class LottoSimulator {
  #boughtLottos = [];
  #winningLotto = [];
  #countOfSameNumbers = 0;

  constructor() {}

  makeLottos(count) {
    for (let i = 0; i < count; i++) {
      const numbers = Random.pickUniqueNumbersInRange(
        LOTTO_NUMBER.min,
        LOTTO_NUMBER.max,
        LOTTO_LENGTH.max
      );

      this.#boughtLottos.push(new Lotto(numbers).getLotto());
    }
  }

  setWinningLotto(lotto) {
    this.#winningLotto = lotto;
  }

  getBoughtLottos() {
    return this.#boughtLottos;
  }

  validateDuplication(bonusNumber) {
    if (this.#winningLotto.includes(Number(bonusNumber))) {
      throw '[ERROR] 당첨 번호와 중복되는 번호가 있습니다.';
    }
  }

  setCountOfSameNumbers() {
    let maxCount = 0;
    this.#boughtLottos.map((lotto) => {
      let nums = lotto.filter((number) => this.#winningLotto.includes(number));
      if (maxCount < nums.length) maxCount = nums.length;
    });

    this.#countOfSameNumbers = maxCount;
  }

  getCountOfSameNumbers() {
    return this.#countOfSameNumbers;
  }
}

module.exports = LottoSimulator;
