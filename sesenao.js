function acaoBotao (){

    var valor01, valor02, resultado, operacao
    valor01 = prompt("DIGITE PRIMEIRO VALOR: ")
    operacao = prompt("DIGITE A OPERACAO: EX: +, -, *, / ")
    valor02 = prompt("DIGITE SEGUNDO VALOR: ")

    if ( operacao == "+" ){
        resultado = parseInt( valor01 ) + parseInt( valor02 )
    }else if(operacao == "-" ){
        resultado = parseInt( valor01 ) - parseInt( valor02 )
    }else if(operacao == "*"){
        resultado = parseInt( valor01 ) * parseInt( valor02 )
    }else if(operacao == "/"){
        resultado = parseInt( valor01 ) / parseInt( valor02 )
    }
    document.getElementById("paragrafo").innerText = resultado
}