const { Random } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const { LOTTO_NUMBER, LOTTO_LENGTH, RETURN } = require('../utils/constants');

class LottoSimulator {
  #boughtLottos = [];
  #winningLotto = [];
  #countOfSameNumbers = 0;
  #ranking = [0, 0, 0, 0, 0, 0];
  #bonusNumber;
  #hasBonus;
  #rateOfReturn;

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

  setBonusNumber(number) {
    this.#bonusNumber = number;
  }

  setCountOfSameNumbers() {
    let maxCount = 0;
    this.#boughtLottos.map((lotto) => {
      let nums = lotto.filter((number) => this.#winningLotto.includes(number));
      if (nums.length === 5 && lotto.includes(this.#bonusNumber))
        this.#hasBonus += 1;
      if (maxCount < nums.length) maxCount = nums.length;
    });

    this.#countOfSameNumbers = maxCount;
  }

  setRanking() {
    let rank = 0;
    if (this.#countOfSameNumbers === 6) rank = 1;
    if (this.#countOfSameNumbers === 5 && this.#hasBonus) rank = 2;
    if (this.#countOfSameNumbers === 5 && !this.#hasBonus) rank = 3;
    if (this.#countOfSameNumbers === 4) rank = 4;
    if (this.#countOfSameNumbers === 3) rank = 5;

    this.#ranking[rank] = 1;
  }

  getRanking() {
    return this.#ranking;
  }

  setRateOfReturn() {
    this.#ranking.map((num, index) => {
      if (num === 1) {
        this.#rateOfReturn = RETURN[index] / this.#boughtLottos.length / 10;
      }
    });
  }

  getRateOfReturn() {
    return this.#rateOfReturn.toFixed(1);
  }
}

module.exports = LottoSimulator;
