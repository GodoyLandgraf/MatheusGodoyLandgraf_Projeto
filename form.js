const form=document.getElementById('validador');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', e => {
    e.preventDefault();
    ValidadeInputs();
});
const setError = (element, message) =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('sucess');
}

const isValidEmail= email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const ValidadeInputs = () => {
    const nomevalor = nome.value.trim();
    const emailvalor = email.value.trim();
    const mensagemvalor = mensagem.value.trim();
}

    if(nomevalor ==='')
        setError(nome, 'O campo nome é obrigatório');
        {
            setSucess(nome);
        }
        if(emailvalor ===''){
            setError(email, 'O campo e-mail é obrigatório');
             {
                setSucess(email);
            }
            if(mensagemvalor ===''){
                setError(mensagem, 'Por favor, insira sua mensagem');
                {
                    setSucess(mensagem);
                }
        
    



    }

}