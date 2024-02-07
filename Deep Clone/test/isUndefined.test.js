import isUndefined from '../src/comparators/isUndefined';

describe('undefined 확인 테스트', () => {
  test('undefined에 대해서 `true`를 반환합니다.', () => {
    expect(isUndefined(undefined)).toBe(true);
  })

  test('undefined에 대해 `false`를 반환합니다.', () => {
    expect(isUndefined('a')).toBe(false);
    expect(isUndefined(1)).toBe(false);
    expect(isUndefined(true)).toBe(false);
    expect(isUndefined(null)).toBe(false);
    expect(isUndefined(Symbol('a'))).toBe(false);
    expect(isUndefined(Object('a'))).toBe(false);
    expect(isUndefined(Object(1))).toBe(false);
    expect(isUndefined(Object(true))).toBe(false);
    expect(isUndefined({ a: 1 })).toBe(false);
    expect(isUndefined([1, 2, 3])).toBe(false);
    expect(isUndefined(new Date())).toBe(false);
    expect(isUndefined(/a/)).toBe(false);
    expect(isUndefined(new Map())).toBe(false);
    expect(isUndefined(new Set())).toBe(false);
    expect(isUndefined(new WeakMap())).toBe(false);
    expect(isUndefined(new WeakSet())).toBe(false);
  })
})
