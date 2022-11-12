const ERROR = {
  MUST_BE_1000_UNIT: '[ERROR] 1,000원 단위의 금액만 입력 가능합니다.',
  MUST_INPUT_MORE_THAN_1000:
    '[ERROR] 1,000원 미만의 금액으로 로또를 구매할 수 없습니다.',
  MUST_BE_NUMBER: '[ERROR] 숫자만 입력해야 합니다.',
  MUST_HAVE_SIX_NUMBER: '[ERROR] 로또 번호는 6개여야 합니다.',
  MUST_INPUT_ONLY_NUMBER:
    '[ERROR] 문자, 특수기호를 제외한 1 ~ 45 사이의 숫자만 입력해야 합니다.',
  MUST_BE_WITHIN_RANGE: '[ERROR] 1 ~ 45 범위 이내의 숫자만 입력해야 합니다.',
  NOT_ALLOW_SAME_NUMBER: '[ERROR] 서로 다른 숫자만 입력해야 합니다.',
  MUST_NOT_BE_INCLUDED_IN_WINNING_NUMBER:
    '[ERROR] 당첨 번호에 포함된 숫자를 보너스 번호로 지정할 수 없습니다.',
};

const NUMBER = {
  INPUT_UNITS: 1000,
  COUNT_OF_PICKING: 6,
  MIN_LOTTO_NUMBER: 1,
  MAX_LOTTO_NUMBER: 45,
  FIRST_PLACE: 1,
  SECOND_PLACE: 2,
  THIRD_PLACE: 3,
  FOURTH_PLACE: 4,
  FIFTH_PLACE: 5,
  TO_WIN_FIRST_PLACE: 6,
  TO_WIN_SECOND_PLACE: 5,
  TO_WIN_FOURTH_PLACE: 4,
  TO_WIN_FIFTH_PLACE: 3,
};

const MESSAGE = {
  INPUT_CASH: '구입금액을 입력해 주세요.\n',
  COUNT_OF_PURCHASED_LOTTOS: '개를 구매했습니다.',
  INPUT_LOTTO_NUMBERS: '당첨 번호를 입력해 주세요.\n',
  INPUT_BONUS_NUMBER: '보너스 번호를 입력해 주세요.\n',
  WINNING_HISTORY: '\n당첨 통계\n---',
  INFO_OF_FIFTH_PLACE: '3개 일치 (5,000원) - ',
  INFO_OF_FOURTH_PLACE: '4개 일치 (50,000원) - ',
  INFO_OF_THIRD_PLACE: '5개 일치 (1,500,000원) - ',
  INFO_OF_SECOND_PLACE: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  INFO_OF_FIRST_PLACE: '6개 일치 (2,000,000,000원) - ',
};

module.exports = { ERROR, NUMBER, MESSAGE };
