/*
   numero, fatorial, contador: inteiro

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 
   escreva ("DIGITE O N�MERO PARA CALCULAR O FATORIAL: ")
   leia (numero)
   fatorial := 1
   para contador de 1 ate numero faca
        fatorial := fatorial * contador
   fimpara
   escreva ("O FATORIAL DE ", numero, " �: ", fatorial)

Fimalgoritmo
*/
function acaoBotao (){

    var numero, fatorial
    numero = prompt ("DIGITE O NUMERO PARA CALCULAR O FATORIAL")
    fatorial = 1
    for (var contador = 1; contador <= numero; contador++) {
        fatorial = fatorial * contador
    }
    document.getElementById("paragrafo").innerText = "O FATORIAL DE " + numero + " =: " + fatorial
}