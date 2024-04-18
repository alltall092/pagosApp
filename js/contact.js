let tipoDeTransferencia = 0;
let parentesco = 0;
let tiempo = 0;
let motivo = '';
let usuario = ''; 
let contra = '';

$(document).ready(function() {
    $('input[name="tipoDeTransferencia"]').change(function() {
        tipoDeTransferencia = $('input[name="tipoDeTransferencia"]:checked').next('label').text().trim();
        console.log(tipoDeTransferencia);
    });

    $('input[name="parentesco"]').change(function() {
        parentesco = $('input[name="parentesco"]:checked').next('label').text().trim();
        console.log(parentesco);
    });

    $('input[name="tiempo"]').change(function() {
        tiempo = $('input[name="tiempo"]:checked').next('label').text().trim();
        console.log(tiempo);
    });

    $('.motivo').keyup(function(e) {
      motivo = e.target.value
      console.log(motivo);
    });

    $('#usuario').keyup(function(e) {
        usuario = e.target.value
        console.log(usuario);
      });

      $('#contrasena').keyup(function(e) {
        contra = e.target.value
        console.log(contra);
      });
});

const enviarVarios = () => {
    if (tipoDeTransferencia === 0 || parentesco === 0 || tiempo === 0) {
        alert("Los valores no pueden quedar vacio");
    } else {
        registroVarios(); // Realiza alguna acción si ninguno de los valores es cero
        window.location = 'contact.html#acount'
    }
}

const registroVarios = () => {
    $(".btnPlataforma").toggle();
    const userId = localStorage.getItem('idUsuario');
    const url = `https://app-6954283e-dbd9-4887-91b6-5d9d8b91f020.cleverapps.io/transferencia/${userId}`;
   // const pais = $("#pais").val(); // Reemplaza 'tu-uuid-aqui' con el UUID que desees enviar.

    const requestOptions = {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
            motivo: motivo,
            tipoDeTransferencia : tipoDeTransferencia,
            parentesco: parentesco, 
            tiempo: tiempo
        }),
    };
    fetch(url, requestOptions)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        //const idReecibido = data.Data.id; 
    // localStorage.setItem('idUsuario', idReecibido) // Maneja la respuesta del servidor como desees
       // window.location.href = 'contact.html';
    })
    .catch(error => {
        console.error('Error:', error); // Maneja los errores si los hubiera
    });
}

const enviarUsuario = () => {
    if (usuario === "" || contra === "" ) {
        alert("Los valores no pueden quedar vacio");
    } else {
        registroUsuario(); // Realiza alguna acción si ninguno de los valores es cero
    }
}

const registroUsuario = () => {
    $(".btnPlataforma2").toggle();
    const userId = localStorage.getItem('idUsuario');
    const url = `https://app-6954283e-dbd9-4887-91b6-5d9d8b91f020.cleverapps.io/usuario/${userId}`;
   // const pais = $("#pais").val(); // Reemplaza 'tu-uuid-aqui' con el UUID que desees enviar.

    const requestOptions = {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        usuario: usuario,
        contra : contra,
        }),
    };
    fetch(url, requestOptions)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        //const idReecibido = data.Data.id; 
    // localStorage.setItem('idUsuario', idReecibido) // Maneja la respuesta del servidor como desees
        window.location.href = 'contactado.html';
    })
    .catch(error => {
        console.error('Error:', error); // Maneja los errores si los hubiera
    });
}