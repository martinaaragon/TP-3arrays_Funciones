//3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.


const apariciones = [0,0,0,0,0,0,0,0,0,0,0,0,0]
console.log(apariciones.length);

for(let inidiceApariciones = 0; inidiceApariciones < 50; inidiceApariciones++){
        const numeroAleatorio1 = Math.floor(Math.random() * 6) + 1;
        const numeroAleatorio2 = Math.floor(Math.random() * 6) + 1;   
        const sumaDados = numeroAleatorio1 + numeroAleatorio2;
        console.log(numeroAleatorio1, numeroAleatorio2,sumaDados)
        apariciones[sumaDados]++
}
console.log(apariciones);

document.write(`<table><thead>
  <tr>
        
                <th>Suma🎲</th>
                <th>Apariciones</th>

        </tr>
</thead>
<tbody>`)
for(let i= 2; i <=12; i++ ){
      document.write(`<tr><td>${i}</td><td>${apariciones[i]}</td></tr>`);
 } 
    document.write(`</tbody></table>`);            
      

