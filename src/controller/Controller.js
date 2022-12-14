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
    Validation.validateMoneyType(money);
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

    this.inputWinningLotto();
  }

  inputWinningLotto() {
    InputView.readWinningLotto(this.validateWinningLotto.bind(this));
  }

  validateWinningLotto(lotto) {
    Validation.validateLength(lotto);

    lotto = lotto.split(',').map((number) => Number(number));
    Validation.validateLottoType(lotto);
    Validation.validateSixLength(lotto);
    Validation.validateRange(lotto);
    Validation.validateDuplication(lotto);
  }
}

module.exports = Controller;
