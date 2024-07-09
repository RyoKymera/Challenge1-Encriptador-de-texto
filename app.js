let Encriptar = 0;
let Desencriptar = 0;
let Copiar = 0;


function EncriptarMensaje () {
    let EscritoUsuario = document.getElementById("TextoUsuario").value
    console.log (EscritoUsuario)

    if (EscritoUsuario === ''){
        document.getElementById("Seccion__Der__imagen").style.display = "block";
        document.getElementById("Seccion__Der__textos").style.display = "block";
        document.getElementById("Mensaje__Encriptado").style.display = "none";
    } else {
        let mensajeEncriptado = EscritoUsuario.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
        document.getElementById("Seccion__Der__imagen").style.display = "none";
        document.getElementById("Seccion__Der__textos").style.display = "none";
        document.getElementById("Mensaje__Encriptado").style.display = "block";
        document.getElementById("Mensaje__Encriptado__titulo").textContent = "Su mensaje encriptado es:";
        document.getElementById("Mensaje__Encriptado__Resultado").textContent = mensajeEncriptado;
        document.getElementById("Mensaje__Encriptado__Resultado").style.display = "block";
    }

    return
}

function DesencriptarMensaje () {
    let EscritoUsuarioCodigo = document.getElementById("TextoUsuario").value
    console.log (EscritoUsuarioCodigo)

    if (EscritoUsuarioCodigo === ''){
        document.getElementById("Seccion__Der__imagen").style.display = "block";
        document.getElementById("Seccion__Der__textos").style.display = "block";
        document.getElementById("Mensaje__Encriptado").style.display = "none";
    } else {
        let mensajeEncriptado = EscritoUsuarioCodigo.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
        document.getElementById("Seccion__Der__imagen").style.display = "none";
        document.getElementById("Seccion__Der__textos").style.display = "none";
        document.getElementById("Mensaje__Encriptado").style.display = "block";
        document.getElementById("Mensaje__Encriptado__titulo").textContent = "Su mensaje desencriptado es:";
        document.getElementById("Mensaje__Encriptado__Resultado").textContent = mensajeEncriptado;
        document.getElementById("Mensaje__Encriptado__Resultado").style.display = "block";
    }

    return
}

function CopiarMensaje() {
    let mensajeEncriptado = document.getElementById("Mensaje__Encriptado__Resultado").textContent;
    navigator.clipboard.writeText(mensajeEncriptado).then(() => {
        alert('Mensaje copiado al portapapeles');
    }).catch(err => {
        console.error('Error al copiar el mensaje: ', err);
    });
}