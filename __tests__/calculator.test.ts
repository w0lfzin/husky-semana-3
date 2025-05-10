import { Calculator } from '../src/calculator';

describe('Calculator', () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test('deve somar dois números corretamente', () => {
    expect(calculator.add(2, 3)).toBe(5);
    expect(calculator.add(-1, 1)).toBe(0);
    expect(calculator.add(0, 0)).toBe(0);
  });

  test('deve subtrair dois números corretamente', () => {
    expect(calculator.subtract(5, 2)).toBe(3);
    expect(calculator.subtract(1, 1)).toBe(0);
    expect(calculator.subtract(0, 5)).toBe(-5);
  });

  test('deve multiplicar dois números corretamente', () => {
    expect(calculator.multiply(2, 3)).toBe(6);
    expect(calculator.multiply(-2, 3)).toBe(-6);
    expect(calculator.multiply(0, 5)).toBe(0);
  });

  test('deve dividir dois números corretamente', () => {
    expect(calculator.divide(6, 2)).toBe(3);
    expect(calculator.divide(5, 2)).toBe(2.5);
    expect(calculator.divide(0, 5)).toBe(0);
  });

  test('deve lançar erro ao dividir por zero', () => {
    expect(() => calculator.divide(5, 0)).toThrow('Divisão por zero não é permitida');
  });
}); 