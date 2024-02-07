import copySet from '../src/copys/copySet';

describe('Set 인스턴스 복사 테스트', () => {
  const input = new Set([1, 2, 3, 4, 5]);

  const output = copySet(input);

  test('Set 인스턴스 복사를 진행한 서로 다른 두 Set 인스턴스는 동일하지 않다.', () => {
    expect(output).toStrictEqual(input);
  })

  test('Set 인스턴스 복사를 진행한 서로 다른 두 Set 인스턴스는 동등하다.', () => {
    expect(output).toEqual(input);
  })
})
