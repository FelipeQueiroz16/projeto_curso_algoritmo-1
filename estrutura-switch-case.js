function acaoBotao (){

    var valor01, valor02, resultado, operacao
    valor01 = prompt("DIGITE PRIMEIRO VALOR: ")
    operacao = prompt("DIGITE A OPERACAO: EX: +, -, *, / ")
    valor02 = prompt("DIGITE SEGUNDO VALOR: ")

    switch (operacao){
        case "+":
            resultado = parseInt( valor01 ) + parseInt( valor02 )
            break;
        case "-":
            resultado = parseInt( valor01 ) - parseInt( valor02 )
            break;
        case "*":
            resultado = parseInt( valor01 ) * parseInt( valor02 )
            break;
        case "/":
            resultado = parseInt( valor01 ) / parseInt( valor02 )
            break;
    }   
    document.getElementById("paragrafo").innerText = resultado
}