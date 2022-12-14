const { input } = require('../utils/utils');
const { MESSAGE } = require('../utils/constants');

const InputView = {
  readInputtedMoney(callback) {
    input(MESSAGE.inputMoney, callback);
  },

  readWinningLotto(callback) {
    input(MESSAGE.inputWinningLotto, callback);
  },

  readBonusNumber(callback) {
    input(MESSAGE.inputBonusNumber, callback);
  },
};

module.exports = InputView;
