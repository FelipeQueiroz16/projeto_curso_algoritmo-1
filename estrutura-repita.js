/*
Var
// Seção de Declarações das variáveis
   sairLoop: caractere
   valor01, valor02: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
  repita
  
   repita
      escreva ("Digite primeiro valor: ")
      leia (valor01)
      escreva ("Digite segundo valor: ")
      leia (valor02)
      escreval ("Resultado: " , valor01 + valor02)
      escreval ("Deseja sair? S/N")
      leia (sairLoop)
    ate sairLoop <> "N"
   ate sairLoop <> "n"
*/


function acaoBotao (){
    var valor01, valor02, sairLoop
    do{
       valor01=prompt("Digite primeiro valor: ")
       valor02=prompt("Digite segundo valor: ")
       document.getElementById("paragrafo").innerText = "Resultado = " + (parseInt ( valor01 ) + parseInt ( valor02 ) )
       sairLoop=prompt("Deseja sair? S/N")
    }while(sairLoop == "N" || sairLoop == "n")
}
