import copyDate from '../src/copys/copyDate';

describe('Date 복사 테스트', () => {
  const input = new Date('December 17, 1995 03:24:00');

  const output = copyDate(input);

  test('Date 복사를 진행한 서로 다른 두 Date는 동일하지 않다.', () => {
    expect(output).toStrictEqual(input);
  })

  test('Date 복사를 진행한 서로 다른 두 Date는 동등하다.', () => {
    expect(output).toEqual(input);
  })
})
