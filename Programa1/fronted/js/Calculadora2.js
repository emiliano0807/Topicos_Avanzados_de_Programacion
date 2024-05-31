document.addEventListener("DOMContentLoaded",()=>{
    const formulario = document.getElementById("Formularios");
    const numero1In = document.getElementById("numero1");
    const numero2In = document.getElementById("numero2");
    const mesagge = document.getElementById("mensaje");

    const evenForm = async (e)=>{
        e.preventDefault();
        var numero1 = numero1In.value;
        var numero2 = numero2In.value;
        var objectJson = {numero1,numero2};

        const cabeceras = {
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(objectJson)
        }
        const datosSinFormato = await fetch("http://localhost:3000/sumar", cabeceras);
        const text = await datosSinFormato.text();
        console.log(datosSinFormato);

        var alerta;
        if (datosSinFormato.status == 500) {
            alerta=`<div class="alert error">
                        ${text}
                    </div>`;
        }else{
            alerta= `<div class="alert success">
                        ${text}
                    </div>`
        }
        mesagge.innerHTML= alerta;
    }
    formulario.addEventListener("submit", evenForm)

});