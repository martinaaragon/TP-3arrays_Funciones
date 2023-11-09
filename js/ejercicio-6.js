
let ladoA = parseInt(prompt("Ingrese la longitud del lado A:"));
let ladoB = parseInt(prompt("Ingrese la longitud del lado B:"));


function calcularPerimetro(a, b) {
  return 2 * (a + b);
}

if (!isNaN(ladoA) && !isNaN(ladoB)) {
  
  let perimetro = calcularPerimetro(ladoA, ladoB);
  document.write("El perímetro del rectángulo es: " + perimetro);
} else {
  document.write("Por favor, ingrese valores numéricos válidos para los lados del rectángulo.");
}
