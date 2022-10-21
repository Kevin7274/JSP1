//declarar varibales para vincular los objetos del formulario
const usuario = document.getElementById('user');
const password = document.getElementById('pass');
const formulario = document.getElementById('user');

//generadno eventos
formulario.addEventListener('submit', login);

//funciones a ejecutar
function login(e){
    e.preventDefault();

    let usuarioVal = usuario.value;
    let passwordVal = password.value;

    if(usuarioVal == '' || passwordVal == '' ){
        creaMensaje('verifica tus campos', 'danger')
        return;
    }

   if(localStorage.getItem('usuario')){
    let objeto = JSON.parse(localStorage.getItem('usuario'));

    if(usuarioVal == objeto.user && passwordVal == objeto.pass ){
        creaMensaje('login correcto', 'succes');
        localStorage.setItem('sesion', 'activa');
        setTimeout(function(){
            window.open('./inicio.html', '_self');
        }, 2000);
    } else {
        creaMensaje('usuario incorrecto', 'danger');
    }
   } else {
    creaMensaje('no hay registros', 'danger');
   }
}