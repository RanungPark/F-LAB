import copyArray from '../src/copys/copyArray';

describe('Array 복사 테스트', () => {
  const input = [1, 2, 3];

  const output = copyArray(input);

  test('Array 복사를 진행한 서로 다른 두 Array는 동일하지 않다.', () => {
    expect(output).toStrictEqual(input);
  })

  test('Array 복사를 진행한 서로 다른 두 Array는 동등하다.', () => {
    expect(output).toEqual(input);
  })
})
