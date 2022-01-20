function acaoBotao(){

    var nome, idade, limite, contador;

    limite = prompt("Digite a quantidade que sera verificado a idade: ")
    contador = 0

    while(contador < limite) {
        nome = prompt("Digite o nome: ")
        idade = prompt("Digite a idade de " + nome)
        if(idade > 18)
            document.getElementById("paragrafo").innerText = nome + " voce e maior de idade!"
        else
            document.getElementById("paragrafo").innerText = nome + " voce e menor de idade!" 
        contador++        
    }
    
}