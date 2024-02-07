import isMap from '../src/comparators/isMap';

describe('Map 확인 테스트', () => {
  test('Map에 대해서 `true`를 반환합니다.', () => {
    expect(isMap(new Map())).toBe(true);
  })

  test('Map에 대해 `false`를 반환합니다.', () => {
    expect(isMap('a')).toBe(false);
    expect(isMap(1)).toBe(false);
    expect(isMap(true)).toBe(false);
    expect(isMap(null)).toBe(false);
    expect(isMap(undefined)).toBe(false);
    expect(isMap(Symbol('a'))).toBe(false);
    expect(isMap(Object('a'))).toBe(false);
    expect(isMap(Object(1))).toBe(false);
    expect(isMap(Object(true))).toBe(false);
    expect(isMap({ a: 1 })).toBe(false);
    expect(isMap([1, 2, 3])).toBe(false);
    expect(isMap(new Date())).toBe(false);
    expect(isMap(/a/)).toBe(false);
    expect(isMap(new Set())).toBe(false);
    expect(isMap(new WeakMap())).toBe(false);
    expect(isMap(new WeakSet())).toBe(false);
  })
})
