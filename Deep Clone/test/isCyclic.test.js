import isCyclic from '../src/comparators/isCyclic'

describe('순환참조 혹인 테스트', () => {
  test('순환참조에 대해서 `true`를 반환합니다.', () => {
    const input = {};
    input.circularRef = input;

    expect(isCyclic(input)).toBe(true)
  })
})