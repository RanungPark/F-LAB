import copyStringObject from '../src/copys/copyStringObject';

describe('String 인스턴스 복사 테스트', () => {
  const input = new String('a');

  const output = copyStringObject(input);

  test('String 인스턴스 복사를 진행한 서로 다른 두 String 인스턴스는 동일하지 않다.', () => {
    expect(output).toStrictEqual(input);
  })

  test('String 인스턴스 복사를 진행한 서로 다른 두 String 인스턴스는 동등하다.', () => {
    expect(output).toEqual(input);
  })
})