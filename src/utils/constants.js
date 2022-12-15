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

const ERROR = Object.freeze({
  isBlank: '[ERROR] 공백입니다. 값을 입력해주세요.',
  isNotNumber: '[ERROR] 숫자를 입력해주세요.',
  isNotValidUnit: '[ERROR] 구매 금액은 1,000원 단위로 입력해주세요.',
  isNotEnoughMoney: '[ERROR] 최소 구매 금액은 1,000원입니다.',
  isNotSixLength: '[ERROR] 6개의 숫자를 입력해주세요.',
  isNotValidRange: '[ERROR] 로또의 번호 범위는 1 ~ 45 이내입니다.',
  hasDuplicatedNumber: '[ERROR] 중복되는 번호가 있습니다.',
  hasWinningNumber: '[ERROR] 당첨 번호와 중복되는 번호가 있습니다.',
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

const RANK = {
  first: 1,
  second: 2,
  third: 3,
  fourth: 4,
  fifth: 5,
};

const RETURN = [0, 2000000000, 30000000, 1500000, 50000, 5000];

const LOTTO_UNIT = Object.freeze(1000);
const ZERO = Object.freeze(0);
const ONE = Object.freeze(0);
const THREE = Object.freeze(3);
const FOUR = Object.freeze(4);
const FIVE = Object.freeze(5);
const SIX = Object.freeze(6);
const HUNDRED = Object.freeze(100);

module.exports = {
  MESSAGE,
  INFO,
  ERROR,
  LOTTO,
  COUNT_OF_BOUGHT_LOTTOS,
  COUNT,
  RATE_OF_RETURN,
  LINE_BREAK,
  LOTTO_LENGTH,
  LOTTO_NUMBER,
  RANK,
  RETURN,
  LOTTO_UNIT,
  ZERO,
  ONE,
  THREE,
  FOUR,
  FIVE,
  SIX,
  HUNDRED,
};
