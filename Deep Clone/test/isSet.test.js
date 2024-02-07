import isSet from '../src/comparators/isSet';

describe('Set 확인 테스트', () => {
  test('Set에 대해서 `true`를 반환합니다.', () => {
    expect(isSet(new Set())).toBe(true);
  })

  test('Set에 대해 `false`를 반환합니다.', () => {
    expect(isSet('a')).toBe(false);
    expect(isSet(1)).toBe(false);
    expect(isSet(true)).toBe(false);
    expect(isSet(null)).toBe(false);
    expect(isSet(undefined)).toBe(false);
    expect(isSet(Symbol('a'))).toBe(false);
    expect(isSet(Object('a'))).toBe(false);
    expect(isSet(Object(1))).toBe(false);
    expect(isSet(Object(true))).toBe(false);
    expect(isSet({ a: 1 })).toBe(false);
    expect(isSet([1, 2, 3])).toBe(false);
    expect(isSet(new Date())).toBe(false);
    expect(isSet(/a/)).toBe(false);
    expect(isSet(new Map())).toBe(false);
    expect(isSet(new WeakMap())).toBe(false);
    expect(isSet(new WeakSet())).toBe(false);
  })
})
