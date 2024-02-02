import cloneDeep from './index';

describe('깊은 복사 테스트', () => {
  // given
  const input = {
    a: 1,
    b: {
      c: null,
      d: [1, 2]
    }
  };

  // when
  const output = cloneDeep(input);

  // then
  test("깊은 복사를 진행한 서로 다른 두 객체는 동일하지 않다.", () => {
    expect(output).not.toBe(input);
  });

  test("깊은 복사를 진행한 서로 다른 두 객체는 동등하다.", () => {
    expect(output).toEqual(input);
  });
})
