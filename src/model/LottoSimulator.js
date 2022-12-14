const { Random } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const { LOTTO_NUMBER, LOTTO_LENGTH } = require('../utils/constants');

class LottoSimulator {
  #boughtLottos = [];
  #winningLotto = [];

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

  getBoughtLottos() {
    return this.#boughtLottos;
  }
}

module.exports = LottoSimulator;
