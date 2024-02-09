import copyBooleanObject from '../src/copys/copyBooleanObject';

describe('Boolean 인스턴스 복사 테스트', () => {
  const input = new Boolean(true);

  const output = copyBooleanObject(input);

  test('Boolean 인스턴스 복사를 진행한 서로 다른 두 Boolean 인스턴스는 동일하지 않다.', () => {
    expect(output).toStrictEqual(input);
  })

  test('Boolean 인스턴스 복사를 진행한 서로 다른 두 Boolean 인스턴스는 동등하다.', () => {
    expect(output).toEqual(input);
  })
})