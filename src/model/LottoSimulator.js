const { Random } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');

class LottoSimulator {
  #boughtLottos = [];
  #winningLotto = [];
  constructor() {}

  makeLottos(count) {
    for (let i = 0; i < count; i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      this.lotto = new Lotto(numbers);
      this.#boughtLottos.push(this.lotto.getLotto());
    }
  }
}

module.exports = LottoSimulator;
