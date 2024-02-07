import isNumber from '../src/comparators/isNumber';

describe('number 확인 테스트', () => {
  test('number에 대해 `true`를 반환합니다.', () => {
    expect(isNumber(1)).toBe(true);
  })

  test('number에 대해 `false`를 반환합니다.', () => {
    expect(isNumber('a')).toBe(false);
    expect(isNumber(true)).toBe(false);
    expect(isNumber(null)).toBe(false);
    expect(isNumber(undefined)).toBe(false);
    expect(isNumber(Symbol('a'))).toBe(false);
    expect(isNumber(Object('a'))).toBe(false);
    expect(isNumber(Object(1))).toBe(false);
    expect(isNumber(Object(true))).toBe(false);
    expect(isNumber({ a: 1 })).toBe(false);
    expect(isNumber([1, 2, 3])).toBe(false);
    expect(isNumber(new Date())).toBe(false);
    expect(isNumber(/a/)).toBe(false);
    expect(isNumber(new Map())).toBe(false);
    expect(isNumber(new Set())).toBe(false);
    expect(isNumber(new WeakMap())).toBe(false);
    expect(isNumber(new WeakSet())).toBe(false);
  })
})
