/*1 - Solicita un nombre, la edad y muestra por consola el mensaje "Hola ____, tienes ____ años y el año que viene tendrás ____ años"
Realiza el ejercicio con prompt(mensaje) y haz uso de los template strings*/
document.getElementById('ejecutarEjercicio1').addEventListener('click', function() {
    const nombre = prompt('Por favor, introduce tu nombre:');
    const edad = parseInt(prompt('Por favor, introduce tu edad:'));
    const edadElAnioQueViene = edad + 1;
    const mensaje = `Hola ${nombre}, tienes ${edad} años y el año que viene tendrás ${edadElAnioQueViene} años`;
    console.log(mensaje);
});
/*3 - Solicita un número e imprime todos los números pares e impares desde 1 hasta ese número con el mensaje "es par" o "es impar"
    si el número es 5 el resultado será:
        1 - es impar
        2 - es par
        3 - es impar
        4 - es par
        5 - es impar */
document.getElementById('ejecutarEjercicio3').addEventListener('click', function() {
    const numero = parseInt(document.getElementById('numero1').value);
    let resultado = '';

    for (let i = 1; i <= numero; i++) {
        if (i % 2 === 0) {
            resultado += `${i} - es par\n`;
        } else {
            resultado += `${i} - es impar\n`;
        }
    }

    document.getElementById('resultado3').textContent = resultado;
});
/* 4 - Escribe un programa que pida un número entero mayor que 1 y que escriba si el número primo o no.
    Un número primo es aquel que solo es divisible por sí mismo y la unidad*/

document.getElementById('ejecutarEjercicio4').addEventListener('click', function() {
    const numero = parseInt(document.getElementById('numero2').value);
    let esPrimo = true;

    if (numero <= 1) {
        esPrimo = false;
    } else {
        for (let i = 2; i < numero; i++) {
            if (numero % i === 0) {
                esPrimo = false;
                break;
            }
        }
    }

    const resultado = esPrimo ? 'Es un número primo' : 'No es un número primo';
    document.getElementById('resultado4').textContent = resultado;
});

/* 5 - Escriba un programa que pida un número entero mayor que cero y calcule su factorial.
    El factorial es el resultado de multiplicar ese número por sus anteriores hasta la unidad.

    !5 = 5*4*3*2*1 = 120*/

document.getElementById('ejecutarEjercicio5').addEventListener('click', function() {
    const numero = parseInt(document.getElementById('numero3').value);
    let factorial = 1;

    if (numero > 0) {
        for (let i = 1; i <= numero; i++) {
            factorial *= i;
        }
    }

    document.getElementById('resultado5').textContent = `El factorial de ${numero} es ${factorial}`;
});

/*6 - Escribe un programa que permita ir introduciendo una serie indeterminadade números mientras su suma no supere 50. Cuando esto ocurra, se debe mostrar el total acumulado y el contador de cuantos números se han introducido */
document.getElementById('ejecutarEjercicio6').addEventListener('click', function() {
    const numeroInput = document.getElementById('numero4');
    const agregarButton = document.getElementById('ejecutarEjercicio6');
    const totalSpan = document.getElementById('total6');
    const contadorSpan = document.getElementById('contador6');

    let total = 0;
    let contador = 0;

    agregarButton.addEventListener('click', function() {
        const numero = parseInt(numeroInput.value);
        if (!isNaN(numero)) {
            total += numero;
            contador++;
            totalSpan.textContent = total;
            contadorSpan.textContent = contador;
            if (total > 50) {
                alert('La suma supera 50.');
                numeroInput.disabled = true;
                agregarButton.disabled = true;
            }
        }
    });
});

/* 7 - Crea 3 arrays. El primero tendra 5 números y el segundo se llamará pares y el tercero impares, ambos estarán vacíos. Después multiplica cada uno de los números del primer array por un número aleatorio entre 1 y 10, si el resultado es par guarda ese número en el array de pares y si es impar en el array de impares. Muestra por consola:
    -la multiplicación que se produce junto con su resultado con el formato 2 x 3 = 6
    -el array de pares e impares*/
document.getElementById('ejecutarEjercicio7').addEventListener('click', function() {
    const multiplicacionesUl = document.getElementById('multiplicaciones7');
    const paresUl = document.getElementById('pares7');
    const imparesUl = document.getElementById('impares7');

    const numeros = [5, 8, 2, 9, 12];
    const pares = [];
    const impares = [];

    numeros.forEach(numero => {
        const aleatorio = Math.floor(Math.random() * 10) + 1;
        const resultado = numero * aleatorio;
        multiplicacionesUl.innerHTML += `<li>${numero} x ${aleatorio} = ${resultado}</li>`;
        if (resultado % 2 === 0) {
            pares.push(resultado);
        } else {
            impares.push(resultado);
        }
    });

    pares.forEach(numero => {
        paresUl.innerHTML += `<li>${numero}</li>`;
    });

    impares.forEach(numero => {
        imparesUl.innerHTML += `<li>${numero}</li>`;
    });
});

/* 8 - Dado un array de letras, solicita un número de DNI y calcula que letra le corresponde. El número no puede ser negativo ni tener más de 8 dígitos. La posición de la letra es el resultado del módulo del número introducido entre 23

const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
*/
document.getElementById('ejecutarEjercicio8').addEventListener('click', function() {
    const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    const calcularLetra = () => {
        const dni = parseInt(document.getElementById('dni').value);

        if (dni > 0 && dni <= 99999999) {
            const letra = letras[dni % 23];
            document.getElementById('letra8').textContent = letra;
        } else {
            alert('El número de DNI no es válido.');
        }
    };

    document.getElementById('ejecutarEjercicio8').addEventListener('click', calcularLetra);
});

/*9 - Solicitar al usuario una palabra y mostrar por consola el número de consonantes, vocales y longitud de la palabra. */
document.getElementById('ejecutarEjercicio9').addEventListener('click', function() {
    const palabra = document.getElementById('palabra9').value.toLowerCase();
    const consonantes = palabra.match(/[^aeiou]/g).length;
    const vocales = palabra.match(/[aeiou]/g).length;
    const longitud = palabra.length;

    document.getElementById('consonantes9').textContent = consonantes;
    document.getElementById('vocales9').textContent = vocales;
    document.getElementById('longitud9').textContent = longitud;
});

/*10 - Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "rosa"] determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no. */
document.getElementById('ejecutarEjercicio10').addEventListener('click', function() {
    const colores = ["azul", "amarillo", "rojo", "verde", "rosa"];
    const colorInput = document.getElementById('color10').value.toLowerCase();
    const resultado = colores.includes(colorInput) ? 'El color está en el array.' : 'El color no está en el array.';
    document.getElementById('resultado10').textContent = resultado;
});