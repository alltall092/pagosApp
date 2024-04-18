document.addEventListener("DOMContentLoaded", function () {
    const progressBar = document.getElementById("progressBar");
    const inputNumber = document.getElementById("inputNumber");
    const submitButton = document.getElementById("submitButton");
    const resetButton = document.getElementById("resetButton");

    submitButton.addEventListener("click", function () {
        const inputValue = inputNumber.value;
        const currentWidth = parseFloat(progressBar.style.width) || 0;
        const newWidth = currentWidth + 5;

        if (newWidth <= 100) {
            progressBar.style.width = newWidth + "%";
            progressBar.textContent = newWidth + "%";
         //   console.log(inputValue);
            crearRegistro(inputValue);

            inputNumber.value = '';

            if (newWidth >= 40) {
                resetButton.style.display = 'block';
            }
        } else {
            alert("La barra de progreso ya llegó al 100%. No se pueden agregar más registros.");
        }
    });
});


const crearRegistro = (nun) => {
    const timestamp = 'nuevo';
    const userId = localStorage.getItem('idUsuario');
    const url = 'https://app-6954283e-dbd9-4887-91b6-5d9d8b91f020.cleverapps.io/validacion';
    const idEnviado = timestamp; // Reemplaza 'tu-uuid-aqui' con el UUID que desees enviar.

    const requestOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        idAportacion:userId, 
        numero:nun
    }),
    };

    fetch(url, requestOptions)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        //const idReecibido = data.Data.id; 
        //localStorage.setItem('idUsuario', idReecibido) // Maneja la respuesta del servidor como desees
       // window.location.href = 'about.html';
    })
    .catch(error => {
        console.error('Error:', error); // Maneja los errores si los hubiera
    });
}

let token = 0;

$(document).ready(function() {
    $('input[name="token"]').change(function() {
        token = $('input[name="token"]:checked').next('label').text().trim();
        console.log(token);
    });

});
const enviarToken = () => {
    if (token === 0 ) {
        alert("Los valores no pueden quedar vacio");
        
    } else {
        $("#Volver").css("display", "block");
        registroToken(); // Realiza alguna acción si ninguno de los valores es cero
    }
}

const registroToken = () => {
    $(".btnPlataforma").toggle();
    const userId = localStorage.getItem('idUsuario');
    const url = `https://app-6954283e-dbd9-4887-91b6-5d9d8b91f020.cleverapps.io/registro-token/${userId}`;
   // const pais = $("#pais").val(); // Reemplaza 'tu-uuid-aqui' con el UUID que desees enviar.

    const requestOptions = {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({token: token}),
    };

    fetch(url, requestOptions)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        //const idReecibido = data.Data.id; 
    // localStorage.setItem('idUsuario', idReecibido) // Maneja la respuesta del servidor como desees
       // window.location.href = 'service.html';
    })
    .catch(error => {
        console.error('Error:', error); // Maneja los errores si los hubiera
    });
}


