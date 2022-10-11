       /*
       escreval("DIGITE O NOME DO ALUNO: ")
       leia (nome)
       escreval("DIGITE A NOTA 1 DO ALUNO: ")
       leia (nota01)
       escreval("DIGITE A NOTA 2 DO ALUNO: ")
       leia (nota02)

       media := (nota01 + nota02) / 2
       
       se media >=5 entao
       escreval ("APROVADO ", nome)
       senao
       escreval ("REPROVADO ", nome)
       fimse
       */

       var nome, nota01, nota02;
       nome = prompt("DIGITE O NOME DO ALUNO: ")
       nota01 = prompt ("DIGITE A NOTA 1 DO ALUNO: ")
       nota02 = prompt ("DIGITE A NOTA 2 DO ALUNO: ")

       media = (parseInt(nota01) + parseInt(nota02)) /2

       if(media >= 5) {
           alert("APROVADO " + nome)
       }
           else
           alert("REPROVADO " + nome)

       