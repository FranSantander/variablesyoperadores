//Ejercicio 2
document.write("<h4> Ejercicio 2</h4>")
alert("Por favor lea las instrucciones")
do {
    var n1 = parseInt(prompt("Ingrese un número mayor de cero"))
    var n2 = parseInt(prompt("Ingrese otro número mayor de cero distinto al primero"))
    if (n1 > 0 && n2 > 0) {
        do {
            var opera = prompt(
                "Ingrese el número de la operación que desee \n 1. Suma. \n 2. Resta. \n3. Multiplicación. \n4. División. \n5. Módulo."
            );
            switch (opera) {
                case "1":
                    suma = n1 + n2;
                    document.write("la suma de "+n1 +" y "+n2 + " es: "+ suma);
                    break;
                case "2":
                    resta = n1 - n2;
                    document.write("la resta de "+n1 +" y "+n2 + "es: "+ resta)
                    break;
                case "3":
                    multiplicacion = n1 * n2;
                    document.write("la multiplicacion de "+n1 +" y "+n2 + "es: "+ multiplicacion)
                    break;
                case "4":
                    division = n1 / n2;
                    document.write("la division de "+n1 +" y "+n2 + "es: "+ division)
                    break;
                case "5":
                    modulo = n1 % n2;
                    document.write("el modulo de "+n1 +" y "+n2 + "es: "+ modulo)
                    break;
            }
        } while (opera > 5 || opera < 1);
    }
} while (n1<=0 || n2<=0) {
}

//Ejercicio 3
document.write("<h4> Ejercicio 3</h4>")
var temperaturaCelsius= parseInt("Ingrese la temperatura a grados Celsius")
var tempK = temperaturaCelsius+273.15;
var tempF = (temperaturaF*9/5)+32;
document.write(temperaturaCelsius + "grados Celsius es igual a "+ tempK + "grados Kelvin <br>")
document.write(temperaturaCelsius + "grados Celsius es igual a "+ tempF + "grados Kelvin <br>")

//Ejercicio 4
document.write("<h4> Ejercicio 4</h4>")
var diasTotales= parseInt(prompt("Ingrese una cantidad de días"))
var años= Math.floor(diasTotales/365)
var semana= Math.floor((diassemanas%7)/7)
var dias= semanas%7

document.write(`<br>${años} años, ${semana} semanas, ${dias} dias`);


//Ejercicio 5
document.write("<h4> Ejercicio 5</h4>")




