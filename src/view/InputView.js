const { input } = require('../utils/utils');

const InputView = {
  readInputtedMoney(callback) {
    input('구입금액을 입력해 주세요.\n', callback);
  },
};

module.exports = InputView;
