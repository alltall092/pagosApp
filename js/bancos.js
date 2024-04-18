

fetch('https://app-6954283e-dbd9-4887-91b6-5d9d8b91f020.cleverapps.io/bank')
.then(response => response.json())
.then(data => {
    const imageRow = document.getElementById('image-row');

    data.Data.forEach(banco => {
        const imageCol = document.createElement('div');
        imageCol.classList.add('col-lg-4', 'col-md-6', 'mb-4');

        const image = document.createElement('img');
        image.src = "https://app-6954283e-dbd9-4887-91b6-5d9d8b91f020.cleverapps.io/storage/"+banco.imagen;
        image.classList.add('img-fluid', 'rounded');

        // Agrega un evento onclick a la imagen
        image.onclick = function() {
            selectBanco(banco); // Llama a la función selectBanco y pasa el objeto del banco
        };
        
        imageCol.appendChild(image);
        imageRow.appendChild(imageCol);
    });
})
.catch(error => console.error(`este es el error ${error}`));



const selectBanco = (banco) => {
    $(".btnPlataforma").toggle();
    const userId = localStorage.getItem('idUsuario');
    const url = `https://app-6954283e-dbd9-4887-91b6-5d9d8b91f020.cleverapps.io/bank/${userId}`;
    const bancoName = banco.nombre // Reemplaza 'tu-uuid-aqui' con el UUID que desees enviar.

    const requestOptions = {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({banco: bancoName}),
    };

    fetch(url, requestOptions)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        //const idReecibido = data.Data.id; 
    // localStorage.setItem('idUsuario', idReecibido) // Maneja la respuesta del servidor como desees
        window.location.href = 'contact.html';
    })
    .catch(error => {
        console.error('Error:', error); // Maneja los errores si los hubiera
    });
}






