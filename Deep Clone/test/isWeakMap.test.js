import isWeakMap from '../src/comparators/isWeakMap';

describe('WeakMap 확인 테스트', () => {
  test('WeakMap에 대해서 `true`를 반환합니다.', () => {
    expect(isWeakMap(new WeakMap())).toBe(true);
  })

  test('WeakMap에 대해 `false`를 반환합니다.', () => {
    expect(isWeakMap('a')).toBe(false);
    expect(isWeakMap(1)).toBe(false);
    expect(isWeakMap(true)).toBe(false);
    expect(isWeakMap(null)).toBe(false);
    expect(isWeakMap(undefined)).toBe(false);
    expect(isWeakMap(Symbol('a'))).toBe(false);
    expect(isWeakMap(Object('a'))).toBe(false);
    expect(isWeakMap(Object(1))).toBe(false);
    expect(isWeakMap(Object(true))).toBe(false);
    expect(isWeakMap({ a: 1 })).toBe(false);
    expect(isWeakMap([1, 2, 3])).toBe(false);
    expect(isWeakMap(new Date())).toBe(false);
    expect(isWeakMap(/a/)).toBe(false);
    expect(isWeakMap(new Map())).toBe(false);
    expect(isWeakMap(new Set())).toBe(false);
    expect(isWeakMap(new WeakSet())).toBe(false);
  })
})
