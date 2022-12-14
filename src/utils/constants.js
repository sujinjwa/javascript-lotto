const MESSAGE = Object.freeze({
  inputMoney: '구입금액을 입력해 주세요.\n',
  inputWinningLotto: '당첨 번호를 입력해 주세요.\n',
  inputBonusNumber: '\n보너스 번호를 입력해 주세요.\n',
});

const COUNT_OF_BOUGHT_LOTTOS = (count) => `${count}개를 구매했습니다.`;

const LOTTO = (lotto) =>
  `[${lotto[0]}, ${lotto[1]}, ${lotto[2]}, ${lotto[3]}, ${lotto[4]}, ${lotto[5]}]`;

const LINE_BREAK = Object.freeze('');

const LOTTO_LENGTH = {
  min: 1,
  max: 6,
};

const LOTTO_NUMBER = {
  min: 1,
  max: 45,
};

const LOTTO_UNIT = 1000;
const ZERO = 0;

module.exports = {
  MESSAGE,
  LOTTO,
  COUNT_OF_BOUGHT_LOTTOS,
  LINE_BREAK,
  LOTTO_LENGTH,
  LOTTO_NUMBER,
  LOTTO_UNIT,
  ZERO,
};
