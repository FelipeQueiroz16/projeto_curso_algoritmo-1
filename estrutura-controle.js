
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

       