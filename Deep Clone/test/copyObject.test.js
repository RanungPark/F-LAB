import copyObject from '../src/copys/copyObject';

describe('Object 복사 테스트', () => {
  const input = {
    a: 1,
    b: {
      c: 2
    }
  };

  const output = copyObject(input);

  test('Object 복사를 진행한 서로 다른 두 Object는 동일하지 않다.', () => {
    expect(output).toStrictEqual(input);
  })

  test('Object 복사를 진행한 서로 다른 두 Object는 동등하다.', () => {
    expect(output).toEqual(input);
  })
})
