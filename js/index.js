

const crearRegistro = () => {
    const timestamp = 'nuevo';
    const url = 'https://app-6954283e-dbd9-4887-91b6-5d9d8b91f020.cleverapps.io/aportacion/add';
    const idEnviado = timestamp; // Reemplaza 'tu-uuid-aqui' con el UUID que desees enviar.
 
    const requestOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({idEnviado}),
    };

    fetch(url, requestOptions)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const idReecibido = data.id;
        localStorage.setItem('idUsuario', JSON.stringify(data.aportacion.id)) // Maneja la respuesta del servidor como desees
        window.location.href = 'about.html';
    })
    .catch(error => {
        console.error('Error:', error); // Maneja los errores si los hubiera
    });
}

const iniciar = () =>{
   $(".btnInicio").toggle();
    crearRegistro();
}
