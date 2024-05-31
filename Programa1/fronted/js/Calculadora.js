document.addEventListener("DOMContentLoaded",()=>{
    const formulario=document.getElementById("Formularios");
    const num1I=document.getElementById("numero1");
    const num2I=document.getElementById("numero2");
    const mesagge=document.getElementById("mensaje");

    const eventoFormulario = async (evt)=>{
        evt.preventDefault();
        let num1=num1I.value;
        let num2=num2I.value;

        const respuesta = await fetch(`http://localhost:3000/suma/${num1.trim()}/${num2.trim()}`);
        const texto = await respuesta.text();

        console.log(respuesta);
        var alerta;

        if (respuesta.status == 500) {
            alerta=`<div class="alert error">
                        ${texto}
                    </div>`;
        }else{
            alerta= `<div class="alert success">
                        ${texto}
                    </div>`
        }
        mesagge.innerHTML=alerta;
    };
    formulario.addEventListener("submit", eventoFormulario);
    
});