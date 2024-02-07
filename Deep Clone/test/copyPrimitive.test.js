import clonePrimitive from '../src/clonePrimitive';
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
  
  const cloneNumber = clonePrimitive(inputNumber);
  const cloneString = clonePrimitive(inputString);
  const cloneBoolean = clonePrimitive(inputBoolean);
  const cloneNull = clonePrimitive(inputNull);
  const cloneUndefined = clonePrimitive(inputUndefined);

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


  test('원시 타입 복사를 진행한 서로 다른 두 undefined는 동등하다.', () => {
    expect(cloneNumber).toBe(inputNumber);
  })
  test('원시 타입 복사를 진행한 서로 다른 두 undefined는 동등하다.', () => {
    expect(cloneString).toBe(inputString);
  })
  test('원시 타입 복사를 진행한 서로 다른 두 undefined는 동등하다.', () => {
    expect(cloneBoolean).toBe(inputBoolean);
  })
  test('원시 타입 복사를 진행한 서로 다른 두 undefined는 동등하다.', () => {
    expect(cloneNull).toBe(inputNull);
  })
  test('원시 타입 복사를 진행한 서로 다른 두 undefined는 동등하다.', () => {
    expect(cloneUndefined).toBe(inputUndefined);
  })
})