const { Random } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const {
  LOTTO_NUMBER,
  LOTTO_LENGTH,
  LOTTO_UNIT,
  RETURN,
  ERROR,
  RANK,
  ONE,
  THREE,
  FOUR,
  FIVE,
  SIX,
  HUNDRED,
} = require('../utils/constants');

class LottoSimulator {
  #boughtLottos = [];
  #winningLotto = [];
  #countOfSameNumbers = [0];
  #ranking = [0, 0, 0, 0, 0, 0];
  #bonusNumber;
  #hasBonus = [0];
  #rateOfReturn;

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
      throw ERROR.hasWinningNumber;
    }
  }

  setBonusNumber(number) {
    this.#bonusNumber = number;
  }

  hasBonusNumber(lotto) {
    return lotto.includes(this.#bonusNumber);
  }

  setCountOfSameNumbers() {
    this.#boughtLottos.map((lotto, index) => {
      const nums = lotto.filter((num) => this.#winningLotto.includes(num));
      this.#countOfSameNumbers.push(nums.length);

      if (this.hasBonusNumber(lotto)) this.#hasBonus[index] = ONE;
    });
  }

  setRanking() {
    this.#countOfSameNumbers.map((count, index) => {
      let rank = 0;
      if (count === SIX) rank = RANK.first;
      if (count === FIVE && this.#hasBonus[index]) rank = RANK.second;
      if (count === FIVE && !this.#hasBonus[index]) rank = RANK.third;
      if (count === FOUR) rank = RANK.fourth;
      if (count === THREE) rank = RANK.fifth;
      this.#ranking[rank] += 1;
    });
  }

  getRanking() {
    return this.#ranking;
  }

  setRateOfReturn() {
    let returns = 0;
    this.#ranking.map((num, index) => {
      if (num >= ONE) returns += RETURN[index] * num;
    });
    this.#rateOfReturn =
      (returns / (this.#boughtLottos.length * LOTTO_UNIT)) * HUNDRED;
  }

  getRateOfReturn() {
    return this.#rateOfReturn
      .toFixed(1)
      .toLocaleString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}

module.exports = LottoSimulator;
