import isString from '../src/comparators/isString';

describe('string 확인 테스트', () => {
  test('string에 대해 `true`를 반환합니다.', () => {
    expect(isString('a')).toBe(true);
  })

  test('string에 대해 `false`를 반환합니다.', () => {
    expect(isString(1)).toBe(false);
    expect(isString(true)).toBe(false);
    expect(isString(null)).toBe(false);
    expect(isString(undefined)).toBe(false);
    expect(isString(Symbol('a'))).toBe(false);
    expect(isString(Object('a'))).toBe(false);
    expect(isString(Object(1))).toBe(false);
    expect(isString(Object(true))).toBe(false);
    expect(isString({ a: 1 })).toBe(false);
    expect(isString([1, 2, 3])).toBe(false);
    expect(isString(new Date())).toBe(false);
    expect(isString(/a/)).toBe(false);
    expect(isString(new Map())).toBe(false);
    expect(isString(new Set())).toBe(false);
    expect(isString(new WeakMap())).toBe(false);
    expect(isString(new WeakSet())).toBe(false);
  })
})
