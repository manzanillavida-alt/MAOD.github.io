document.getElementById("btnVerificar").addEventListener("click", evaluarCodigoPrimo);
function evaluarCodigoPrimo() {
    let inputCodigo = document.getElementById("codigo").value;
    let areaResultado = document.getElementById("resultado");
    if (inputCodigo === "" || parseInt(inputCodigo) <= 0) {
        areaResultado.innerHTML = "<p style='color:#e53e3e; font-weight:bold;'>Error: Por favor, ingrese un código numérico mayor a cero.</p>";
        return;
    }
    let numero = parseInt(inputCodigo);
    let contador = 0;
    for (let i = 1; i <= numero; i++) {
        if (numero % i == 0) {
            contador++;
        }
    }
    if (contador == 2) {
        areaResultado.innerHTML = `
            <div class="alerta-segura">
                Analizado: Código [ ${numero} ]<br>
                Resultado: EL NÚMERO ES PRIMO.<br>
                Clasificación: Código de acceso aprobado y altamente seguro para transacciones.
            </div>
        `;
    } else {
        areaResultado.innerHTML = `
            <div class="alerta-insegura">
                Analizado: Código [ ${numero} ]<br>
                Resultado: EL NÚMERO NO ES PRIMO.<br>
                Clasificación: Código inseguro o predecible. Se recomienda cambiar por un valor primo.
            </div>
        `;
    }
}