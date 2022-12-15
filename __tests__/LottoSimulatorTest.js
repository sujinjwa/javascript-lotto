const LottoSimulator = require('../src/model/LottoSimulator');

describe('로또 시뮬레이터 테스트', () => {
  test.each([
    ['', '[ERROR] 공백입니다. 값을 입력해주세요.'],
    ['이천원', '[ERROR] 숫자를 입력해주세요.'],
    ['999', '[ERROR] 최소 구매 금액은 1,000원입니다.'],
    ['1001', '[ERROR] 구매 금액은 1,000원 단위로 입력해주세요.'],
  ])('구매금액에 대한 예외 처리', (input, expected) => {
    expect(() => {
      const lottoSimulator = new LottoSimulator();
      lottoSimulator.validateInputtedMoney(input);
    }).toThrow(expected);
  });

  test.each([
    ['', '[ERROR] 공백입니다. 값을 입력해주세요.'],
    ['보너스넘버', '[ERROR] 숫자를 입력해주세요.'],
    ['0', '[ERROR] 로또의 번호 범위는 1 ~ 45 이내입니다.'],
    ['46', '[ERROR] 로또의 번호 범위는 1 ~ 45 이내입니다.'],
    ['46', '[ERROR] 로또의 번호 범위는 1 ~ 45 이내입니다.'],
  ])('보너스 번호에 대한 예외 처리', (input, expected) => {
    expect(() => {
      const lottoSimulator = new LottoSimulator();
      lottoSimulator.validateBonusNumber(input);
    }).toThrow(expected);
  });

  test.each([
    [[1, 2, 3, 4, 5, 6], 2, '[ERROR] 당첨 번호와 중복되는 번호가 있습니다.'],
    [[1, 2, 3, 4, 5, 6], 3, '[ERROR] 당첨 번호와 중복되는 번호가 있습니다.'],
    [[1, 2, 3, 4, 5, 6], 4, '[ERROR] 당첨 번호와 중복되는 번호가 있습니다.'],
  ])(
    '보너스 번호가 당첨 번호와 중복되는 경우 예외 처리',
    (winningLotto, bonusNumber, expected) => {
      expect(() => {
        const lottoSimulator = new LottoSimulator();
        lottoSimulator.setWinningLotto(winningLotto);
        lottoSimulator.validateDuplication(bonusNumber);
      }).toThrow(expected);
    }
  );
});
