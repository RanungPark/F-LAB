import isSymbol from '../src/comparators/isSymbol';

describe('symbol 확인 테스트', () => {
  test('symbol에 대해 `true`를 반환합니다.', () => {
    expect(isSymbol(Symbol('a'))).toBe(true);
  })

  test('symbol에 대해 `false`를 반환합니다.', () => {
    expect(isSymbol('a')).toBe(false);
    expect(isSymbol(1)).toBe(false);
    expect(isSymbol(true)).toBe(false);
    expect(isSymbol(null)).toBe(false);
    expect(isSymbol(undefined)).toBe(false);
    expect(isSymbol(Object('a'))).toBe(false);
    expect(isSymbol(Object(1))).toBe(false);
    expect(isSymbol(Object(true))).toBe(false);
    expect(isSymbol({ a: 1 })).toBe(false);
    expect(isSymbol([1, 2, 3])).toBe(false);
    expect(isSymbol(new Date())).toBe(false);
    expect(isSymbol(/a/)).toBe(false);
    expect(isSymbol(new Map())).toBe(false);
    expect(isSymbol(new Set())).toBe(false);
    expect(isSymbol(new WeakMap())).toBe(false);
    expect(isSymbol(new WeakSet())).toBe(false);
  })
})
