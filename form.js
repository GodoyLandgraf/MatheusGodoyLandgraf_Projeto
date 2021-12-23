var validador = document.getElementById('validador');

function validar (){
    var nome = validador.nome.value;
    var email = validador.email.value;
    var mensagem = validador.mensagem.value;

    if(nome ==""){
        alert('Preencha o campo nome!');
        validador.nome.focus();
        return false;
    }

    if(email == "" || email.indexOf('@') == -1 || email.indexOf('.') == -1 ){
        alert('Preencha corretamente o campo email!');
        validador.nome.focus();
        return false;
    }

    if(mensagem == "" || mensagem.length <15 ){
        alert('O campo da mensagem deve possuir no mínimo 15 caracteres, preencha corretamente!');
        validador.nome.focus();
        return false;
    }
    alert('Sua mensagem foi enviada corretamente e em breve será respondida! Muito Obrigado :)')

}
