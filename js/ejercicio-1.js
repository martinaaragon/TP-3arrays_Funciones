/*1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista los doce nombres del arreglo.
*/

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'octubre', 'noviembre', 'diciembre'];

function mostrarMeses(titulo){
document.write(`<h2>Lista de Meses ${titulo}</h2>`);
document.write(`<ul>`);
for(let i = 0; i <meses.length; i++){
        document.write(`<li>${meses[i]}</li>`);

}
document.write(`</ul>`);
}
mostrarMeses("");
console.log(meses);

