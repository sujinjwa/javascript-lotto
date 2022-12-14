const { input } = require('../utils/utils');
const { MESSAGE } = require('../utils/constants');

const InputView = {
  readInputtedMoney(callback) {
    input(MESSAGE.inputMoney, callback);
  },

  readWinningLotto(callback) {
    input(MESSAGE.inputWinningLotto, callback);
  },
};

module.exports = InputView;
