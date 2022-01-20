var resultado, valor1, valor2, valor3;

valor1 = prompt("Digite o valor1: ")
valor2 = prompt("Digite o valor2: ")
valor3 = prompt("Digite o valor3: ")

resultado = (parseInt(valor1) + parseInt(valor2)) / valor3

document.getElementById("paragrafo").innerText = resultado