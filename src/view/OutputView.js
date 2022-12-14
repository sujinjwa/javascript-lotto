const { print } = require('../utils/utils');
const {
  LINE_BREAK,
  COUNT_OF_BOUGHT_LOTTOS,
  LOTTO,
  MESSAGE,
} = require('../utils/constants');

const OutputView = {
  printMessage(message) {
    print(message);
  },

  printLottos(lottoSimulator, count) {
    print(LINE_BREAK);
    print(COUNT_OF_BOUGHT_LOTTOS(count));

    lottoSimulator.getBoughtLottos().map((lotto) => {
      print(LOTTO(lotto));
    });

    print(LINE_BREAK);
  },

  printResult(lottoSimulator) {
    print(MESSAGE.result);
  },
};

module.exports = OutputView;
