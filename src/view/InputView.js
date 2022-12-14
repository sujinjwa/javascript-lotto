const { input } = require('../utils/utils');
const { MESSAGE } = require('../utils/constants');

const InputView = {
  readInputtedMoney(callback) {
    input(MESSAGE.inputMoney, callback);
  },
};

module.exports = InputView;
