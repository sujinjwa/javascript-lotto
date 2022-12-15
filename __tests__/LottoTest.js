const Lotto = require('../src/model/Lotto');

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  // 아래에 추가 테스트 작성 가능
  test.each([
    ['안녕', '[ERROR] 6개의 숫자를 입력해주세요.'],
    [[1, 2, 3, 4, 5, 6, 7], '[ERROR] 6개의 숫자를 입력해주세요.'],
    [[0, 1, 44, 45, 22, 2], '[ERROR] 로또의 번호 범위는 1 ~ 45 이내입니다.'],
    [[1, 2, 3, 44, 45, 46], '[ERROR] 로또의 번호 범위는 1 ~ 45 이내입니다.'],
    [[1, 2, 3, 4, 5, 5], '[ERROR] 중복되는 번호가 있습니다.'],
  ])('예외 테스트', (input, expected) => {
    expect(() => {
      new Lotto(input);
    }).toThrow(expected);
  });
});
