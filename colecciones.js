
//actualiza el estado
function actualizarEstado() {
    let lista = ""
    for (let i=0; i<localStorage.length; i++) {
        const savedId = localStorage.key(i);
        if (savedId){
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

//ver si hace click
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM cargado");

    const hearts = document.querySelectorAll('.heart');

    hearts.forEach((heart) => {
        const producto = heart.closest('.producto');
        const id = producto.dataset.id;
        const name = producto.dataset.name;
        const savedState = localStorage.getItem(`heart_${id}`);

        if (savedState === 'true') {
            heart.classList.add('liked');
        }

        heart.addEventListener("click", (e) => {
            //console.log("click");
            e.stopPropagation();
            heart.classList.toggle('liked');
            const isLiked = heart.classList.contains('liked');
            const data = [isLiked ? 'true' : 'false', name];
            localStorage.setItem(`heart_${id}`, JSON.stringify(data));
            //console.log(`cambiado a ${isLiked}`);
            actualizarEstado();
        });
    });
});
function buildProductCard(id, name, descr) {
    let contenedor = document.querySelector(".productos");

    let nuevoDiv = document.createElement("div");
    nuevoDiv.dataset.name = name;
    nuevoDiv.dataset.id = id;
    
    nuevoDiv.innerHTML = `
        <img src="scr/${id}.webp" alt="${name}" height="800">
        <div class="descr">
            <p>${descr}</p>
            <svg xmlns="http://www.w3.org/2000/svg" class="heart" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"  width="50px">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
        </div>
    `;
    nuevoDiv.classList.add('producto');
    contenedor.appendChild(nuevoDiv);
    console.log(`creado el div ${name}`)
}

document.querySelector(".productos").innerHTML = "";