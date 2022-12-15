const { print } = require('../utils/utils');
const {
  LINE_BREAK,
  COUNT_OF_BOUGHT_LOTTOS,
  LOTTO,
  MESSAGE,
  INFO,
  COUNT,
  RANK,
  RATE_OF_RETURN,
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
    const ranking = lottoSimulator.getRanking();
    print(MESSAGE.result);
    print(INFO.fifthPrize + COUNT(ranking[RANK.fifth]));
    print(INFO.fourthPrize + COUNT(ranking[RANK.fourth]));
    print(INFO.thirdPrize + COUNT(ranking[RANK.third]));
    print(INFO.secondPrize + COUNT(ranking[RANK.second]));
    print(INFO.firstPrize + COUNT(ranking[RANK.first]));
    print(RATE_OF_RETURN(lottoSimulator.getRateOfReturn()));
  },
};

module.exports = OutputView;
