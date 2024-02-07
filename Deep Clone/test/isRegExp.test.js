import isRegExp from '../src/comparators/isRegExp';

describe('RegExp 확인 테스트', () => {
  test('RegExp에 대해 `true`를 반환합니다.', () => {
    expect(isRegExp(/a/)).toBe(true);
  })

  test('RegExp에 대해 `false`를 반환합니다.', () => {
    expect(isRegExp('a')).toBe(false);
    expect(isRegExp(1)).toBe(false);
    expect(isRegExp(true)).toBe(false);
    expect(isRegExp(null)).toBe(false);
    expect(isRegExp(undefined)).toBe(false);
    expect(isRegExp(Symbol('a'))).toBe(false);
    expect(isRegExp(Object('a'))).toBe(false);
    expect(isRegExp(Object(1))).toBe(false);
    expect(isRegExp(Object(true))).toBe(false);
    expect(isRegExp({ a: 1 })).toBe(false);
    expect(isRegExp([1, 2, 3])).toBe(false);
    expect(isRegExp(new Date())).toBe(false);
    expect(isRegExp(new Map())).toBe(false);
    expect(isRegExp(new Set())).toBe(false);
    expect(isRegExp(new WeakMap())).toBe(false);
    expect(isRegExp(new WeakSet())).toBe(false);
  })
})
