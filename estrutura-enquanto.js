/*
Var
// Seção de Declarações das variáveis
   nome: caractere
   idade, limite, contador: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
   escreva ("DIGITE A QUANTIDADE DE VEZES QUE SERÁ VERIFICADO A IDADE: ")
   leia (limite)
   contador := 0
   enquanto contador < limite faca
            escreva ("DIGITE O NOME: ")
            leia (nome)
            escreva ("DIGITE A IDADE: ")
            leia (idade)
            se idade > 18 entao
               escreval (nome , " você é maior de idade! ")
            senao
               escreval (nome , " você é menor de idade! ")
            fimse
            contador := contador + 1
   fimenquanto
*/
function acaoBotao (){
    var nome, idade, limite, contador
    limite = prompt("DIGITE A QUANTIDADE DE VEZES QUE SERÁ VERIFICADO A IDADE: ")
    contador = 0
    while (contador < limite) {
            nome = prompt("Digite o nome da pessoa: ")
            idade = prompt("Digite a idade do "+ nome)
            if (idade > 18)
              document.getElementById("paragrafo").innerText = nome + " você é maior de idade!"
            else
               document.getElementById("paragrafo").innerText = nome + " você é menor de idade!"
            contador++
    }
}
