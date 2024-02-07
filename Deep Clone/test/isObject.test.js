import isObject from '../src/comparators/isObject';

describe('Object 확인 테스트', () => {
  test('Object에 대해서 `true`를 반환합니다.', () => {
    expect(isObject(Object('a'))).toBe(true);
    expect(isObject(Object(1))).toBe(true);
    expect(isObject(Object(true))).toBe(true);
    expect(isObject({ a: 1 })).toBe(true);
    expect(isObject([1, 2, 3])).toBe(true);
    expect(isObject(new Date())).toBe(true);
    expect(isObject(/a/)).toBe(true);
    expect(isObject(new Map())).toBe(true);
    expect(isObject(new Set())).toBe(true);
    expect(isObject(new WeakMap())).toBe(true);
    expect(isObject(new WeakSet())).toBe(true);
  })

  test('Object에 대해서 `false`를 반환합니다.', () => {
    expect(isObject('a')).toBe(false);
    expect(isObject(1)).toBe(false);
    expect(isObject(true)).toBe(false);
    expect(isObject(null)).toBe(false);
    expect(isObject(undefined)).toBe(false);
    expect(isObject(Symbol('a'))).toBe(false);
  })
})