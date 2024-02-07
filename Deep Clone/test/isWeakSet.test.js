import isWeakSet from '../src/comparators/isWeakSet';

describe('WeakSet 확인 테스트', () => {
  test('WeakSet에 대해 `true`를 반환합니다.', () => {
    expect(isWeakSet(new WeakSet())).toBe(true);
  })

  test('WeakSet에 대해 `false`를 반환합니다.', () => {
    expect(isWeakSet('a')).toBe(false);
    expect(isWeakSet(1)).toBe(false);
    expect(isWeakSet(true)).toBe(false);
    expect(isWeakSet(null)).toBe(false);
    expect(isWeakSet(undefined)).toBe(false);
    expect(isWeakSet(Symbol('a'))).toBe(false);
    expect(isWeakSet(Object('a'))).toBe(false);
    expect(isWeakSet(Object(1))).toBe(false);
    expect(isWeakSet(Object(true))).toBe(false);
    expect(isWeakSet({ a: 1 })).toBe(false);
    expect(isWeakSet([1, 2, 3])).toBe(false);
    expect(isWeakSet(new Date())).toBe(false);
    expect(isWeakSet(/a/)).toBe(false);
    expect(isWeakSet(new Map())).toBe(false);
    expect(isWeakSet(new Set())).toBe(false);
    expect(isWeakSet(new WeakMap())).toBe(false);
  })
})
