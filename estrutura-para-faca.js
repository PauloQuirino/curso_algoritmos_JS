function acaoBotao(){

    var numero, fatorial;

    numero = prompt("Digite o numero: ")
    fatorial = 1

    for (var contador = 1; contador <= numero; contador++) {
        fatorial = fatorial * contador        
    }

    document.getElementById("paragrafo").innerText = "O Fatorial de " + numero + ": " + fatorial
    
}