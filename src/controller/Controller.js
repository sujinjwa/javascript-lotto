const OutputView = require('../view/OutputView');
const InputView = require('../view/InputView');
const Validation = require('../utils/Validation');
const LottoSimulator = require('../model/LottoSimulator');
const Lotto = require('../model/Lotto');
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

    this.setWinningLotto(new Lotto(lotto).getLotto());
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

    this.setBonusNumber(number);
  }

  setBonusNumber(number) {
    this.lottoSimulator.setBonusNumber(number);

    this.printResult();
  }

  printResult() {
    this.lottoSimulator.setCountOfSameNumbers();
    this.lottoSimulator.setRanking();
    this.lottoSimulator.setRateOfReturn();
    OutputView.printResult(this.lottoSimulator);
  }
}

module.exports = Controller;
