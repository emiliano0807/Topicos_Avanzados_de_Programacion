document.addEventListener("DOMContentLoaded", () => {
    const unidadInput = document.getElementById("valor");
    const operacionesSelect = document.getElementById("unidad");
    var resultados = document.getElementById("Resulta");
    const formulario = document.getElementById("unidadConversion");

    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        var unidad = parseFloat(unidadInput.value);
        var operacion = operacionesSelect.value;
        var resultado="";
        switch (operacion) {
            case "mm":
                resultado = unidad*1000;
                break;
                case "cm":
                resultado = unidad*100;
                break;
                case "km":
                resultado = unidad/1000;
                break;
                case "in":
                resultado = unidad*39.3701;
                break;
                case "ft":
                resultado = unidad*3.28084;
                break;
                case "yd":
                resultado = unidad*1.09361;
                break;
                case "SE":
                    alert("Seleccione una unidad");
            default:
                break;
        }
        resultados.textContent = "El resultado = "+resultado;
})
})