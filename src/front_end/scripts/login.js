let modalRegistro = document.querySelector('#modal-registro')

function abreModalRegistro(){
    modalRegistro.showModal()
}

function fechaModalRegistro(){
    modalRegistro.close()
}

function registrarUsuario(){
    let nomeUsuario = document.querySelector('#nome-usuario')
    let username = document.querySelector('#username')
    let senha = document.querySelector('#senha')
    let confirmaSenha = document.querySelector('#confirma-senha')

    let dados = {
        username: username.value,
        senha: senha.value,
        nome_usuario: nomeUsuario.value
    }
    
    fetch('http://localhost/projeto/back_end/registro.php/registro')
}