const { print } = require('../utils/utils');
const {
  LINE_BREAK,
  COUNT_OF_BOUGHT_LOTTOS,
  LOTTO,
  MESSAGE,
  INFO,
  COUNT,
  RATE_OF_RETURN,
} = require('../utils/constants');
const LottoSimulator = require('../model/LottoSimulator');

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
    const ranking = lottoSimulator.getRanking();
    print(MESSAGE.result);
    print(INFO.fifthPrize + COUNT(ranking[5]));
    print(INFO.fourthPrize + COUNT(ranking[4]));
    print(INFO.thirdPrize + COUNT(ranking[3]));
    print(INFO.secondPrize + COUNT(ranking[2]));
    print(INFO.firstPrize + COUNT(ranking[1]));
    print(RATE_OF_RETURN(lottoSimulator.getRateOfReturn()));
  },
};

module.exports = OutputView;
