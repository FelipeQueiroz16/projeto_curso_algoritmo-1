
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
