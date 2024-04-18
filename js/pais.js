    const registroPais = () => {
        $(".btnPlataforma").toggle();
        const userId = localStorage.getItem('idUsuario');
        const url = `https://app-6954283e-dbd9-4887-91b6-5d9d8b91f020.cleverapps.io/paisaportacion/${userId}`;
        const pais = $("#pais").val(); // Reemplaza 'tu-uuid-aqui' con el UUID que desees enviar.

        const requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({pais: pais}),
        };

        fetch(url, requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            //const idReecibido = data.Data.id; 
        // localStorage.setItem('idUsuario', idReecibido) // Maneja la respuesta del servidor como desees
            window.location.href = 'service.html';
        })
        .catch(error => {
            console.error('Error:', error); // Maneja los errores si los hubiera
        });
    }