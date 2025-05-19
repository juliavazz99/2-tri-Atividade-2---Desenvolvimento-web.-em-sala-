function soma(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

function multiplicacao(a, b) {
  return a * b;
}

function divisao(a, b) {
  if (b === 0) {
    return "Erro: divisão por zero";
  }
  return a / b;
}
console.log("Soma: " + soma(10, 5));              // 15
console.log("Subtração: " + subtracao(10, 5));    // 5
console.log("Multiplicação: " + multiplicacao(10, 5)); // 50
console.log("Divisão: " + divisao(10, 5));        // 2
