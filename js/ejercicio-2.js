/*2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
*/

const ciudades  = ['Nueva York, Estados Unidos', 'Barcelona, España', 'Tokio, Japón', 'Londres, Reino Unido', 'Roma, Italia', 'Pekín, China', 'Río de Janeiro, Brasil', 'Ámsterdam, Países Bajos', 'Sídney, Australia', 'El Cairo, Egipto'];

const posiciones = []

function mostrarCiudades(titulo){
        document.write(`<h2>Lista de ciudades ${titulo}</h2>`);
        document.write(`<ul>`);
        for(let i = 0; i < ciudades.length; i++){
                document.write(`<li>${ciudades[i]}</li>`);
        }
        document.write(`</ul>`);
}

function mostrarPosiciones(titulo){
        document.write(`<h2>Lista de posiciones ${titulo}</h2>`);
        document.write(`<ul>`);
        for(let i = 0; i < posiciones.length; i++){
                document.write(`<li>${posiciones[i]}</li>`);
        }
        document.write(`</ul>`)
}
mostrarCiudades("");
mostrarPosiciones("");

let seguir = true;

while(seguir){
        let ciudad = prompt('Ingrese el nombre de una ciudad o presione cancelar para terminar');

        if(ciudad === null){
                seguir = false;
        }else{
                ciudades.push(ciudad);
        }
}

document.write("El arreglo de ciudades tiene 10 elementos<br>");

console.log("La longitud del arreglo es:" + ciudades.length);

document.write("Primer elemento:" + ciudades[0] + "<br>");
document.write("Tercer elemento:" + ciudades[2] + "<br>");
document.write("Elemento última posicion:" + ciudades[ciudades.length -2] + "<br>");

ciudades.push("París");
mostrarCiudades(`+ 1 elemento (${ciudades.lenght})`);

mostrarCiudades(`+ 1 elemento (${ciudades.lenght})`);


document.write("Elemento en la segunda posicion:" + ciudades[1]);

ciudades[1] = "Barcelona";