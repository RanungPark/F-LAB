import copyNumberObject from '../src/copys/copyNumberObject';

describe('Number 인스턴스 복사 테스트', () => {
  const input = new Number(1);

  const output = copyNumberObject(input);

  test('Number 인스턴스 복사를 진행한 서로 다른 두 Number 인스턴스는 동일하지 않다.', () => {
    expect(output).toStrictEqual(input);
  })

  test('Number 인스턴스 복사를 진행한 서로 다른 두 Number 인스턴스는 동등하다.', () => {
    expect(output).toEqual(input);
  })
})