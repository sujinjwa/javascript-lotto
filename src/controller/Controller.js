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
    Validation.validateLottoRange(lotto);
    Validation.validateDuplication(lotto);

    this.setWinningLotto(lotto);
  }

  setWinningLotto(lotto) {
    this.lottoSimulator.setWinningLotto(lotto);

    this.inputBonusNumber();
  }

  inputBonusNumber() {
    InputView.readBonusNumber(this.validateBonusNumber.bind(this));
  }

  validateBonusNumber(number) {
    Validation.validateLength(number);
    Validation.validateBonusType(number);
    Validation.validateBonusRange(number);
    this.lottoSimulator.validateDuplication(number);

    this.printResult();
  }

  printResult() {
    this.lottoSimulator.setCountOfSameNumbers();
    OutputView.printMessage(this.lottoSimulator.getCountOfSameNumbers());
    OutputView.printResult(this.lottoSimulator);
  }
}

module.exports = Controller;
