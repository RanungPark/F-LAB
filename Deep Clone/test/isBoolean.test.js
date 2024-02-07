import isBoolean from '../src/comparators/isBoolean';

describe('boolean 확인 테스트', () => {
  test('boolean에 대해 `true`를 반환합니다.', () => {
    expect(isBoolean(true)).toBe(true);
  })

  test('boolean에 대해 `false`를 반환합니다.', () => {
    expect(isBoolean('a')).toBe(false);
    expect(isBoolean(1)).toBe(false);
    expect(isBoolean(null)).toBe(false);
    expect(isBoolean(undefined)).toBe(false);
    expect(isBoolean(Symbol('a'))).toBe(false);
    expect(isBoolean(Object('a'))).toBe(false);
    expect(isBoolean(Object(1))).toBe(false);
    expect(isBoolean(Object(true))).toBe(false);
    expect(isBoolean({ a: 1 })).toBe(false);
    expect(isBoolean([1, 2, 3])).toBe(false);
    expect(isBoolean(new Date())).toBe(false);
    expect(isBoolean(/a/)).toBe(false);
    expect(isBoolean(new Map())).toBe(false);
    expect(isBoolean(new Set())).toBe(false);
    expect(isBoolean(new WeakMap())).toBe(false);
    expect(isBoolean(new WeakSet())).toBe(false);
  })
})
