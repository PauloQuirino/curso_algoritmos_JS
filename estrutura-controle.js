var nota1, nota2, nome, media;

nome = prompt("Digite o nome do aluno: ")
nota1 = prompt("Digite a nota1 do aluno: ")
nota2 = prompt("Digite a nota2 do aluno: ")

media = (parseInt(nota1) + parseInt(nota2)) / 2

if (media >= 5) 
    alert("Aprovado!")
else
    alert("Reprovado!")

