import { Calculator } from './calculator';

function main(): void {
  const calculator = new Calculator();
  
  // Exemplos de uso da calculadora
  const soma = calculator.add(5, 3);
  const subtracao = calculator.subtract(10, 4);
  const multiplicacao = calculator.multiply(2, 6);
  const divisao = calculator.divide(20, 5);
  
  // Usando console.log apenas para demonstração
  // eslint-disable-next-line no-console
  console.log(`Soma: ${soma}`);
  // eslint-disable-next-line no-console
  console.log(`Subtração: ${subtracao}`);
  // eslint-disable-next-line no-console
  console.log(`Multiplicação: ${multiplicacao}`);
  // eslint-disable-next-line no-console
  console.log(`Divisão: ${divisao}`);
}

if (require.main === module) {
  main();
} 