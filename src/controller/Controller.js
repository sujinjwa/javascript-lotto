const OutputView = require('../view/OutputView');
const InputView = require('../view/InputView');
const Validation = require('../utils/Validation');
const LottoSimulator = require('../model/LottoSimulator');

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

    this.buyLottos(money / 1000);
  }

  buyLottos(count) {
    this.lottoSimulator.makeLottos(count);
  }
}

module.exports = Controller;
