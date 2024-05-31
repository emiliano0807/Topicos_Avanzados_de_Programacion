document.addEventListener("DOMContentLoaded", () => {
    const  numero1Input  = document.getElementById("num1");
    const numero2Input = document.getElementById("num2");
    const operacionesSelect = document.getElementById("Operaciones");
    var resultados = document.getElementById("Resulta");
    const formulario = document.getElementById("calculadora");

    formulario.addEventListener("submit",(e) => {
        e.preventDefault();
        var numero1 = parseFloat( numero1Input.value);
        var numero2 = parseFloat( numero2Input.value);
        var operacion = operacionesSelect.value;
        var respuesta ="";
        switch (operacion) {
            case "S": 
            respuesta = numero1+numero2;
            break;
            case "R": 
            respuesta = numero1 - numero2;
            break;
            case "M": 
            respuesta = numero1 * numero2;
            break;
            case "D": 
            respuesta = numero1 / numero2;
                break;
                default:
                    alert ("operacion no valida");
        }
        resultados.textContent = "El resultado = "+respuesta;

})
})