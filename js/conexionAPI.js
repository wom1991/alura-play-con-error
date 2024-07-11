async function listarVideos(){
    const conexion = await fetch("http://localhost:3001/videos");

    const conexionConvertida = conexion.json();

    //console.log(conexionConvertida);
    return conexionConvertida;
}

async function enviarVideo(titulo,descripcion,url,imagen){
    const conexion = await fetch("http://localhost:3001/videos", {
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
            titulo:titulo,
            descripcion:`${descripcion} mil visualizaciones.`,
            url:url,
            imagen:imagen
        })
    })
    const conexionConvertida = conexion.json();
    return conexionConvertida;

}

async function buscarVideos(palabraClave){
    const conexion = await fetch(`http://localhost:3001/videos?q=${palabraClave}`);
    const conexionConvertida = await conexion.json();
    return conexionConvertida.filter(video => video.titulo.toLowerCase().includes(palabraClave.toLowerCase()) || video.descripcion.toLowerCase().includes(palabraClave.toLowerCase()) );
}

export const conexionAPI={
    listarVideos,enviarVideo,buscarVideos
}

//listarVideos();