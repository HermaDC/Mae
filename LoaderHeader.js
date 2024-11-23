document.addEventListener('DOMContentLoaded', function () {
    fetch('headerTemplate.html')
        .then(response => response.text())
        .then(data => {
        document.getElementById('header').innerHTML = data;
    })
    .catch(error => console.error('Error cargando el header:', error));
});

