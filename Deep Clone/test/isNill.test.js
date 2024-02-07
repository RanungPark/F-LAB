import isNill from '../src/comparators/isNill';

describe('null 또는 undefined 확인 테스트', () => {
  test('null 또는 undefined에 대해서 `true`를 반환합니다.', () => {
    expect(isNill(null)).toBe(true);
    expect(isNill(undefined)).toBe(true);
  })

  test('`null 또는 undefined 대해 `false`를 반환합니다.', () => {
    expect(isNill('a')).toBe(false);
    expect(isNill(1)).toBe(false);
    expect(isNill(true)).toBe(false);
    expect(isNill(Symbol('a'))).toBe(false);
    expect(isNill(Object('a'))).toBe(false);
    expect(isNill(Object(1))).toBe(false);
    expect(isNill(Object(true))).toBe(false);
    expect(isNill({ a: 1 })).toBe(false);
    expect(isNill([1, 2, 3])).toBe(false);
    expect(isNill(new Date())).toBe(false);
    expect(isNill(/a/)).toBe(false);
    expect(isNill(new Map())).toBe(false);
    expect(isNill(new Set())).toBe(false);
    expect(isNill(new WeakMap())).toBe(false);
    expect(isNill(new WeakSet())).toBe(false);
  })
})
