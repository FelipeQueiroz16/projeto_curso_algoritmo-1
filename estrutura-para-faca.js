
function acaoBotao (){

    var numero, fatorial
    numero = prompt ("DIGITE O NUMERO PARA CALCULAR O FATORIAL")
    fatorial = 1
    for (var contador = 1; contador <= numero; contador++) {
        fatorial = fatorial * contador
    }
    document.getElementById("paragrafo").innerText = "O FATORIAL DE " + numero + " =: " + fatorial
}