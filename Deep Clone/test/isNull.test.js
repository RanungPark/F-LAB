import isNull from '../src/comparators/isNull';

describe('null 확인 테스트', () => {
  test('null에 대해 `true`를 반환합니다.', () => {
    expect(isNull(null)).toBe(true);
  })

  test('null에 대해 `false`를 반환합니다.', () => {
    expect(isNull('a')).toBe(false);
    expect(isNull(1)).toBe(false);
    expect(isNull(true)).toBe(false);
    expect(isNull(undefined)).toBe(false);
    expect(isNull(Symbol('a'))).toBe(false);
    expect(isNull(Object('a'))).toBe(false);
    expect(isNull(Object(1))).toBe(false);
    expect(isNull(Object(true))).toBe(false);
    expect(isNull({ a: 1 })).toBe(false);
    expect(isNull([1, 2, 3])).toBe(false);
    expect(isNull(new Date())).toBe(false);
    expect(isNull(/a/)).toBe(false);
    expect(isNull(new Map())).toBe(false);
    expect(isNull(new Set())).toBe(false);
    expect(isNull(new WeakMap())).toBe(false);
    expect(isNull(new WeakSet())).toBe(false);
  })
})
