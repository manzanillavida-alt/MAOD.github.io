// Vinculación obligatoria usando document.getElementById()
document.getElementById("btnCalcular").addEventListener("click", procesarFibonacci);

function procesarFibonacci() {
    // Lectura de datos desde el formulario mediante getElementById
    let inputMeses = document.getElementById("meses").value;
    let areaResultado = document.getElementById("resultado");

    // Validación interna previa
    if (inputMeses === "" || inputMeses <= 0) {
        areaResultado.innerHTML = "<p style='color:red;'>Error: Ingrese una cantidad válida de meses.</p>";
        return;
    }

    let n = parseInt(inputMeses);

    // Algoritmo de Fibonacci implementado estrictamente con variables simples (sin vectores)
    let a = 0;
    let b = 1;
    let c;

    let totalAcumulado = 0;

    // Construcción de la tabla para representar el comportamiento mes a mes en pantalla
    let tablaContenido = `
        <p>A continuación se despliega la simulación de ahorro basado en el patrón matemático:</p>
        <table>
            <thead>
                <tr>
                    <th>Mes</th>
                    <th>Depósito del Mes</th>
                    <th>Total Acumulado</th>
                </tr>
            </thead>
            <tbody>
    `;

    for (let i = 1; i <= n; i++) {
        let ahorroDelMes;

        if (i === 1) {
            ahorroDelMes = 1; // Primer mes preestablecido en Bs. 1
        } else {
            c = a + b;
            ahorroDelMes = c;
            a = b;
            b = c;
        }

        totalAcumulado += ahorroDelMes;

        tablaContenido += `
            <tr>
                <td>Mes ${i}</td>
                <td>Bs. ${ahorroDelMes}</td>
                <td>Bs. ${totalAcumulado}</td>
            </tr>
        `;
    }

    tablaContenido += `
            </tbody>
        </table>
        <p style="margin-top:15px; font-weight:bold; color:#27ae60; font-size:1.1rem;">
            ¡Felicidades! El monto total final ahorrado es: Bs. ${totalAcumulado}
        </p>
    `;

    // Despliegue de los resultados en la interfaz de la página web
    areaResultado.innerHTML = tablaContenido;
}