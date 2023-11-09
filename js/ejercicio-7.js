//Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.

const numero = parseInt(prompt("Ingrese un numero para generar una tabla de multiplicacion"));

function tablaDeMultiplicacion(num){
        for( let i = 1; i <= 10; i++){
                let resultado = num * i;
                document.write(num + " x " + i + " = " + resultado );
        }
}

if (!isNaN(numero)) {
        document.write("Tabla de multiplicar del " + numero + ":");
        tablaDeMultiplicacion(numero);
      } else {
        document.write("Por favor, ingrese un número válido.");
      }