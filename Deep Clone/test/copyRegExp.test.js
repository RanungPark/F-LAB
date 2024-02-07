import copyRegExp from '../src/copys/copyRegExp';

describe('RegExp 인스턴스 복사 테스트', () => {
  const input = new RegExp('\\w+');

  const output = copyRegExp(input);

  test('RegExp 인스턴스 복사를 진행한 서로 다른 두 RegExp 인스턴스는 동일하지 않다.', () => {
    expect(output).toStrictEqual(input);
  })

  test('RegExp 인스턴스 복사를 진행한 서로 다른 두 RegExp 인스턴스는 동등하다.', () => {
    expect(output).toEqual(input);
  })
})
