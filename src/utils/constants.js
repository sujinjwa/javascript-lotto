const MESSAGE = Object.freeze({
  inputMoney: '구입금액을 입력해 주세요.\n',
  inputWinningLotto: '당첨 번호를 입력해 주세요.\n',
  inputBonusNumber: '\n보너스 번호를 입력해 주세요.\n',
  result: '\n당첨 통계\n---\n',
});

const INFO = Object.freeze({
  firstPrize: '6개 일치 (2,000,000,000원) - ',
  secondPrize: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  thirdPrize: '5개 일치 (1,500,000원) - ',
  fourthPrize: '4개 일치 (50,000원) - ',
  fifthPrize: '3개 일치 (5,000원) - ',
});

const COUNT_OF_BOUGHT_LOTTOS = (count) => `${count}개를 구매했습니다.`;

const LOTTO = (lotto) =>
  `[${lotto[0]}, ${lotto[1]}, ${lotto[2]}, ${lotto[3]}, ${lotto[4]}, ${lotto[5]}]`;

const COUNT = (count) => `${count}개`;

const RATE_OF_RETURN = (rateOfReturn) => `총 수익률은 ${rateOfReturn}%입니다.`;

const LINE_BREAK = Object.freeze('');

const LOTTO_LENGTH = {
  min: 1,
  max: 6,
};

const LOTTO_NUMBER = {
  min: 1,
  max: 45,
};

const RETURN = [0, 2000000000, 30000000, 1500000, 50000, 5000];

const LOTTO_UNIT = 1000;
const ZERO = 0;

module.exports = {
  MESSAGE,
  INFO,
  LOTTO,
  COUNT_OF_BOUGHT_LOTTOS,
  COUNT,
  RATE_OF_RETURN,
  LINE_BREAK,
  LOTTO_LENGTH,
  LOTTO_NUMBER,
  RETURN,
  LOTTO_UNIT,
  ZERO,
};
