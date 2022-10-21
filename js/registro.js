//declarar varibales de referencia a objetos
const nombre = document.getElementById('name');
const email = document.getElementById('email');
const user = document.getElementById('user');
const pass = document.getElementById('pass');
const formulario = document.getElementById('formregistro');

formulario.addEventListener('submit', registro);

function registro(e){
    e.preventDefault();

    let nombreVal = nombre.value;
    let emailVal = email.value;
    let userVal = useer.value;
    let passValue = pass.value;

    if(nombreVal == '' || emailVal == '' || userVal == '' || passValue == ''){
        creaMensaje('verifica tus campos', 'danger');
        return;
    }

    const usuario = {
        nombre: nombreVal,
        email: emailVal,
        user: userVal,
        pass: passValue
    }

    localStorage.setItem('usuario'. JSON.stringify(usuario));

    nombre.value = '';
    email.value = ''; 
    useer.value = '';
    pass.value = '';

    creaMensaje('usuario registrado!', 'success')
}

