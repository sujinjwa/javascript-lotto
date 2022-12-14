const OutputView = require('../view/OutputView');
const InputView = require('../view/InputView');

class Controller {
  constructor() {}

  inputMoney() {
    InputView.readInputtedMoney(this.validateInputtedMoney.bind(this));
  }

  validateInputtedMoney(money) {
    try {
    } catch (error) {}
  }
}

module.exports = Controller;
