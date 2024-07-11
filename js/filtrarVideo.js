import { conexionAPI } from "./conexionAPI.js";
import crearCard from "./mostrarvideos.js";

async function filtrarVideo(){
    evento.preventDefault();
    const lista = document.querySelector("[data-lista]");
    const datosDeBusqueda = document.querySelector("[data-busqueda]").value;
    const busqueda = await conexionAPI.buscarVideos(datosDeBusqueda);

    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }

    busqueda.forEach(video => lista.appendChild(crearCard(video.titulo,video.descripcion,video.url,video.imagen)));

    //console.log(busqueda)
}

const boton = document.querySelector("[data-boton-busqueda]");
boton.addEventListener("click", evento => filtrarVideo(evento));