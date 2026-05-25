document.getElementById("btnFibonacci").addEventListener("click", calcularFibonacci);
document.getElementById("btnPrimos").addEventListener("click", verificarPrimo);
function calcularFibonacci() {
    // Captura de datos desde el formulario
    let mesesInput = document.getElementById("meses").value;
    let resultadoDiv = document.getElementById("resFibonacci");
    // Validación simple por si el campo está vacío o es menor a 1
    if (mesesInput === "" || mesesInput < 1) {
        resultadoDiv.innerHTML = "Por favor, ingresa un número de meses válido.";
        return;
    }
    let n = parseInt(mesesInput);
    // Variables básicas para Fibonacci (Sin usar vectores/arrays)
    let a = 0;
    let b = 1;
    let c = 0;
    let totalAhorrado = 0;
    // Variable para ir acumulando el texto que se mostrará en pantalla
    let textoResultado = "<ul>";
    // Ciclo para calcular el ahorro mes a mes
    for (let i = 1; i <= n; i++) {
        let ahorroMes = 0;

        if (i === 1) {
            ahorroMes = 1;
        } else {
            c = a + b;
            ahorroMes = c;
            a = b;
            b = c;
        }
        totalAhorrado = totalAhorrado + ahorroMes;
        textoResultado = textoResultado + "<li>Mes " + i + ": Bs. " + ahorroMes + "</li>";
    }
    textoResultado = textoResultado + "</ul><p><b>Total acumulado final: Bs. " + totalAhorrado + "</b></p>";
    resultadoDiv.innerHTML = textoResultado;
}
function verificarPrimo() {
    // Captura de datos desde el formulario
    let codigoInput = document.getElementById("codigo").value;
    let resultadoDiv = document.getElementById("resPrimos");
    // Validación simple
    if (codigoInput === "" || codigoInput < 1) {
        resultadoDiv.innerHTML = "Por favor, ingresa un código numérico válido.";
        return;
    }
    let num = parseInt(codigoInput);
    let contadorDivisores = 0;
    // Ciclo básico para contar cuántas veces la división es exacta
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            contadorDivisores = contadorDivisores + 1; // Si el residuo es 0, encontramos un divisor
        }
    }
    // Un número es primo SI Y SOLO SI tiene exactamente 2 divisores (el 1 y él mismo)
    if (contadorDivisores === 2) {
        resultadoDiv.innerHTML = "El número " + num + " es PRIMO. <br><b>Estado: Código de acceso seguro.</b>";
    } else {
        resultadoDiv.innerHTML = "El número " + num + " NO es primo. <br><b>Estado: Código inseguro.</b>";
    }
}