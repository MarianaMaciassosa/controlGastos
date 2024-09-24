let listaNombresGastos = [];
let listaValoresGastos = [];

function clickBoton(){
    let nombreGasto = document.getElementById("nombreGasto").value;
    let valorGasto = document.getElementById("valorGasto").value;
 
    listaNombresGastos.push(nombreGasto);
    listaValoresGastos.push(valorGasto); 

    actualizarListaGastos();

}

function actualizarListaGastos (){
   const listaElementos= document.getElementById("listaDeGastos");
 const totalElementos= document.getElementById("totalGastos");
   let htmLista = '';
 let totalGastos = 0;
listaNombresGastos.forEach((elemento,posicion) => {
const valorGasto = listaValoresGastos[posicion];
    htmLista += `<li> ${elemento} - USD ${valorGasto}
    <button onclick="eliminarGasto();">Eliminar</button></li>`;
    totalGastos += Number(valorGasto);
});

listaElementos.innerHTML = htmLista;
totalElementos.innerHTML = totalGastos;
limpiar();
}

function limpiar(){
    document.getElementById("nombreGasto").value="";
    document.getElementById("valorGasto").value="";
}