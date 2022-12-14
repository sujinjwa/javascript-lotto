const OutputView = require('../view/OutputView');
const InputView = require('../view/InputView');
const Validation = require('../utils/Validation');

class Controller {
  constructor() {}

  inputMoney() {
    InputView.readInputtedMoney(this.validateInputtedMoney.bind(this));
  }

  validateInputtedMoney(money) {
    Validation.validateLength(money);
    Validation.validateNumber(money);
    Validation.validateUnit(money);
    Validation.validateAmount(money);
  }
}

module.exports = Controller;
