import copyPrimitive from '../src/copys/copyPrimitive';

describe('원시 타입 복사 테스트', () => {
  const inputNumber = 1;
  const inputString = 'a';
  const inputBoolean = true;
  const inputNull = null;
  const inputUndefined = undefined;

  const ouputNumber = copyPrimitive(inputNumber);
  const ouputString = copyPrimitive(inputString);
  const ouputBoolean = copyPrimitive(inputBoolean);
  const ouputNull = copyPrimitive(inputNull);
  const ouputUndefined = copyPrimitive(inputUndefined);

  test('원시 타입 복사를 진행한 서로 다른 두 number 변수는 동등하다.', () => {
    expect(ouputNumber).toBe(inputNumber);
  })

  test('원시 타입 복사를 진행한 서로 다른 두 string 변수는 동등하다.', () => {
    expect(ouputString).toBe(inputString);
  })

  test('원시 타입 복사를 진행한 서로 다른 두 string 변수는 동등하다.', () => {
    expect(ouputBoolean).toBe(inputBoolean);
  })

  test('원시 타입 복사를 진행한 서로 다른 두 null은 동등하다.', () => {
    expect(ouputNull).toBe(inputNull);
  })

  test('원시 타입 복사를 진행한 서로 다른 두 undefined는 동등하다.', () => {
    expect(ouputUndefined).toBe(inputUndefined);
  })
})