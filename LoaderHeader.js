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

            // ✅ Este bloque se ejecuta solo después de insertar el header
            const toggle = document.querySelector(".menu-toggle");
            const menu = document.querySelector(".navbar ul");

            if (toggle && menu) {
                toggle.addEventListener("click", () => {
                    menu.classList.toggle("show");
                });
            } else {
                console.warn("El botón o el menú no se ha encontrado");
            }
        })
        .catch(error => console.error('Error cargando el header:', error));
});