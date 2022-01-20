function acaoBotao(){

    var sairLoop, valor1, valor2;

    do {
        valor1 = prompt("Digite o valor1: ")
        valor2 = prompt("Digite o valor2: ")
        document.getElementById("paragrafo").innerText = "Resultado: " + (parseInt(valor1) + parseInt(valor2))
        sairLoop = prompt("Deseja sair? ")
    } while (sairLoop == "N");

}