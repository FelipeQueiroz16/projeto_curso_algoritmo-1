

function acaoBotao (){
    var valor01, valor02, sairLoop
    do{
       valor01=prompt("Digite primeiro valor: ")
       valor02=prompt("Digite segundo valor: ")
       document.getElementById("paragrafo").innerText = "Resultado = " + (parseInt ( valor01 ) + parseInt ( valor02 ) )
       sairLoop=prompt("Deseja sair? S/N")
    }while(sairLoop == "N" || sairLoop == "n")
}
