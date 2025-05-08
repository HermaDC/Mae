//añadir hoja de stilos del header
let link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href = "css/header.css";  // Ruta de la hoja de estilos
document.head.appendChild(link);

//añadir navbar
document.addEventListener('DOMContentLoaded', function () {
    fetch('headerTemplate.html')
        .then(response => response.text())
        .then(data => {
        document.getElementById('header').innerHTML = data;
    })
    .catch(error => console.error('Error cargando el header:', error));
});

