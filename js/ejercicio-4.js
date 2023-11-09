//4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.



function ParOImpar(numero) {
        if (numero % 2 === 0) {
          return "El número es par";
        } else {
          return "El número es impar";
        }
      }
      
      let numero = parseInt(prompt("Ingrese un número entero:"));
      
      if (!isNaN(numero)) {
        let resultado = ParOImpar(numero);
        document.write(resultado);
      } else {
        document.write("Entrada no válida. Por favor, ingrese un número entero.");
      }
      