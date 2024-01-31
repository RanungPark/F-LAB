import add from './index';

describe('계산테스트', () => {
  test("3 adds 5 equals 8", () => {
    const num1 = 3;
    const num2 = 5

    const result = add(num1, num2)

    expect(result).toBe(num1 + num2);
  })
})