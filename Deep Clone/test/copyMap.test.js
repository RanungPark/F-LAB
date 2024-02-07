import copyMap from '../src/copys/copyMap';

describe('Map 인스턴스 복사 테스트', () => {
  const input = new Map([
    [1, "one"],
    [2, "two"],
    [3, "three"],
  ]);

  const output = copyMap(input);

  test('Map 인스턴스 복사를 진행한 서로 다른 두 Map 인스턴스는 동일하지 않다.', () => {
    expect(output).toStrictEqual(input);
  })

  test('Map 인스턴스 복사를 진행한 서로 다른 두 Map 인스턴스는 동등하다.', () => {
    expect(output).toEqual(input);
  })
})
