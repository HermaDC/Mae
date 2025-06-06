//import { createProductCard } from "colecciones.js"
function searchLocalStorage() {
    let lista = {}
    for (let i=0; i<localStorage.length; i++) {
        const savedId = localStorage.key(i);
        if (savedId){
            const savedState = JSON.parse(localStorage.getItem(savedId));
            if (savedState && savedState[0] === "true") {
                lista[savedId.replace(/^heart_/, "")] = savedState;
            }
        }    
    }
    return lista;
}  
function renderFavoritos() {
    const favoritos = searchLocalStorage();
    console.log("Favoritos encontrados:", favoritos);
    productos = document.querySelector(".productos");
    if (Object.keys(favoritos).length === 0) {
        console.log("sin favs")
        productos.innerHTML =  '<h2>No tienes favortios</h2><p>ve a <a href="coleccionesNina.html">colecciones de niña</a> o a <a href="coleccionesMujer.html">colecciones de mujer</a></p>';
        productos.style.display = "flex";
        productos.style.flexDirection = "column";
        productos.style.alignItems = "center";


    }
    else{
        productos.style.diplay = "grid";
        for (const clave in favoritos) {
            console.log(clave)
            const item = favoritos[clave];
            console.log(item)
            buildProductCard(clave, item[1], null)
        }
    }
}

renderFavoritos();

