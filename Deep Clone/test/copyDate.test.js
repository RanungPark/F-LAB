import copyDate from '../src/copys/copyDate';

describe('Date 인스턴스 복사 테스트', () => {
  const input = new Date('December 17, 1995 03:24:00');

  const output = copyDate(input);

  test('Date 인스턴스 복사를 진행한 서로 다른 두 Date 인스턴스는 동일하지 않다.', () => {
    expect(output).toStrictEqual(input);
  })

  test('Date 인스턴스 복사를 진행한 서로 다른 두 Date 인스턴스는 동등하다.', () => {
    expect(output).toEqual(input);
  })
})
