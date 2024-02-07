import isArray from '../src/comparators/isArray';

describe('Array 확인 테스트', () => {
  test('Array에 대해서 `true`를 반환합니다.', () => {
    expect(isArray([1, 2, 3])).toBe(true);
  })

  test('Array에 대해 `false`를 반환합니다.', () => {
    expect(isArray('a')).toBe(false);
    expect(isArray(1)).toBe(false);
    expect(isArray(true)).toBe(false);
    expect(isArray(null)).toBe(false);
    expect(isArray(undefined)).toBe(false);
    expect(isArray(Object('a'))).toBe(false);
    expect(isArray(Object(1))).toBe(false);
    expect(isArray(Object(true))).toBe(false);
    expect(isArray({ a: 1 })).toBe(false);
    expect(isArray(new Date())).toBe(false);
    expect(isArray(/a/)).toBe(false);
    expect(isArray(new Map())).toBe(false);
    expect(isArray(new Set())).toBe(false);
    expect(isArray(new WeakMap())).toBe(false);
    expect(isArray(new WeakSet())).toBe(false);
  })
})
