import isDate from '../src/comparators/isDate'

describe('Date 확인 테스트', () => {
  test('Date에 대해서 `true`를 반환합니다.', () => {
    expect(isDate(new Date())).toBe(true);
  })

  test('Date에 대해 `false`를 반환합니다.', () => {
    expect(isDate('a')).toBe(false);
    expect(isDate(1)).toBe(false);
    expect(isDate(true)).toBe(false);
    expect(isDate(null)).toBe(false);
    expect(isDate(undefined)).toBe(false);
    expect(isDate(Symbol('a'))).toBe(false);
    expect(isDate(Object('a'))).toBe(false);
    expect(isDate(Object(1))).toBe(false);
    expect(isDate(Object(true))).toBe(false);
    expect(isDate({ a: 1 })).toBe(false);
    expect(isDate([1, 2, 3])).toBe(false);
    expect(isDate(/a/)).toBe(false);
    expect(isDate(new Map())).toBe(false);
    expect(isDate(new Set())).toBe(false);
    expect(isDate(new WeakMap())).toBe(false);
    expect(isDate(new WeakSet())).toBe(false);
  })
})
