//añadir hoja de stilos del header
let link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href = "css/header.css"; // Ruta de la hoja de estilos
document.head.appendChild(link);

let icon = document.createElement("link");
icon.rel = "icon";
icon.type = "image/svg+xml";
icon.href = "mae-icon.svg"; // Ruta del icono
document.head.appendChild(icon);


//añadir navbar
document.addEventListener('DOMContentLoaded', function() {
    fetch('headerTemplate.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
        })
        .catch(error => console.error('Error cargando el header:', error));
});


//para activar el menu
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.navbar ul');

    toggle.addEventListener('click', () => {
        menu.classList.toggle('show');
    });
});