/*
Var
// Se��o de Declara��es das vari�veis
   nome: caractere
   numero: real
   

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc...
   escreval("Digite seu nome: ")
   leia(nome)
   escreval("Digite o numero: ")
   leia(numero)
   
   
   escreval(nome, " : " , numero)
*/

var nome, numero

nome = prompt("Digite o seu nome: ")
numero = prompt("Digite o numero: ")

document.getElementById("paragrafo").innerText = nome + " : " + numero