const OutputView = require('../view/OutputView');
const InputView = require('../view/InputView');
const Validation = require('../utils/Validation');
const LottoSimulator = require('../model/LottoSimulator');
const { LOTTO_UNIT } = require('../utils/constants');

class Controller {
  constructor() {
    this.lottoSimulator = new LottoSimulator();
  }

  inputMoney() {
    InputView.readInputtedMoney(this.validateInputtedMoney.bind(this));
  }

  validateInputtedMoney(money) {
    Validation.validateLength(money);
    Validation.validateNumber(money);
    Validation.validateUnit(money);
    Validation.validateAmount(money);

    this.buyLottos(money / LOTTO_UNIT);
  }

  buyLottos(count) {
    this.lottoSimulator.makeLottos(count);

    this.printBoughtLottos(count);
  }

  printBoughtLottos(count) {
    OutputView.printLottos(this.lottoSimulator, count);
  }
}

module.exports = Controller;
