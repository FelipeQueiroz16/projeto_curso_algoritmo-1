/*
Var
// Se��o de Declara��es das vari�veis
   nome: caractere
   idade, limite, contador: inteiro

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc...
   escreva ("DIGITE A QUANTIDADE DE VEZES QUE SER� VERIFICADO A IDADE: ")
   leia (limite)
   contador := 0
   enquanto contador < limite faca
            escreva ("DIGITE O NOME: ")
            leia (nome)
            escreva ("DIGITE A IDADE: ")
            leia (idade)
            se idade > 18 entao
               escreval (nome , " voc� � maior de idade! ")
            senao
               escreval (nome , " voc� � menor de idade! ")
            fimse
            contador := contador + 1
   fimenquanto
*/
function acaoBotao (){
    var nome, idade, limite, contador
    limite = prompt("DIGITE A QUANTIDADE DE VEZES QUE SER� VERIFICADO A IDADE: ")
    contador = 0
    while (contador < limite) {
            nome = prompt("Digite o nome da pessoa: ")
            idade = prompt("Digite a idade do "+ nome)
            if (idade > 18)
              document.getElementById("paragrafo").innerText = nome + " voc� � maior de idade!"
            else
               document.getElementById("paragrafo").innerText = nome + " voc� � menor de idade!"
            contador++
    }
}
