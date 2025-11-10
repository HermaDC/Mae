//necesario en astro
// Función que actualiza y muestra la lista de productos marcados como favoritos
function actualizarEstado() {
    let lista = "";
    for (let i = 0; i < localStorage.length; i++) {
        const savedId = localStorage.key(i);
        if (savedId && savedId.startsWith("heart_")) {
            const savedState = JSON.parse(localStorage.getItem(savedId));
            if (Array.isArray(savedState) && savedState[0] === "true") {
                lista += savedState[1] + " ";
            }
        }
    }
    console.log("Lista de favoritos: " + lista);
    //document.getElementById("p").innerHTML = lista;
    return lista;
}

// Ejecuta esto cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM cargado");

    const hearts = document.querySelectorAll('.heart');

    //añade corazones y los colorea segun localstorage
    hearts.forEach((heart) => {
        const producto = heart.closest('.producto');
        const id = producto.dataset.id;
        const name = producto.dataset.name;
        const savedState = localStorage.getItem(`heart_${id}`);

        if (savedState) {
            const parsed = JSON.parse(savedState);
            if (Array.isArray(parsed) && parsed[0] === "true") {
                heart.classList.add('liked');
            }
        }

        //cambia el estadado del corazon cuando se hace click
        heart.addEventListener("click", (e) => {
            e.stopPropagation();
            heart.classList.toggle('liked');
            const isLiked = heart.classList.contains('liked');
            const data = [isLiked ? 'true' : 'false', name];
            localStorage.setItem(`heart_${id}`, JSON.stringify(data));
            actualizarEstado();
        });
    });

    // crea el popup al hacer click en un producto
    const productos = document.querySelectorAll('.producto')

    productos.forEach(producto => {
        producto.addEventListener("click", e => {
            e.stopPropagation();
            showPopUp(producto.dataset.id, producto.dataset.name, producto.dataset.descr);
            console.log("popup creado")
        });
    });

    //cierra el popup
    let popup = document.querySelector(".popup");
    popup.addEventListener("click", (event) => {
        if (event.target === event.currentTarget) {
            closePopup();
        }
    });
    let closeBtn = document.querySelector(".close-btn");
    closeBtn.addEventListener("click", () =>{document.querySelector(".popup").style.display = "none";})
});


function showPopUp(id, name, descr) {
    //pruductInfo = searchDatabase(id); // id:[id, name, descr, [img1, img2, img3]]
    console.log(id);
    // poner el nombre, descr y carrusel de fotos
    let popupContentImg = document.querySelector(".popup-content img");
    popupContentImg.src = `/${id}.webp`;
    document.getElementById("descr").innerHTML = descr;
    document.getElementById("title").innerHTML = name
    document.getElementById("popup").style.display = "flex";


}
function closePopup(){
    document.querySelector(".popup").style.display = "none"}
