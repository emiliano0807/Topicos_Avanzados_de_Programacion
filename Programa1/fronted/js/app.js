const contenedor = document.getElementById("root");

const obtenerDatos = async (url) => {
    var datosApi= await fetch(url);
    var datos= await datosApi.text();
    const card =document.createElement("div");
    card.classList ="card center";
    //contenedor.appendChild(card);
    if(datosApi.status==500){
        card.innerHTML=datos;
        card.classList="card center"
        contenedor.appendChild(card);
        return datosApi.status;
    }
    if(datosApi.status==200){
        card.innerHTML=datos;
        contenedor.appendChild(card);
        return datosApi.status;
    }
    /*if (datosApi.status=404) {
        card.innerHTML="Fallo del servidor dato no encontrado, intento de peticion a: " + datosApi.url;
        card.classList="card center";
        contenedor.appendChild(card);
        return datosApi.status;
        
    }*/
}
const obtenerDatosJSON = async (url) => {
    var datosApi= await fetch(url);
    var datos= await datosApi.json();

    const card =document.createElement("div");
    card.className ="card center";
    card.innerHTML=datos.mesnsaje;

    console.log(datosApi);

}

/*obtenerDatos("http://localhost:3000/json");
obtenerDatos("http://localhost:3000");
/*obtenerDatos("http://localhost:3000/suma/1/2");*/

/*Hacer un formulario para la suma, realizar la peticion http 
y mostrar un alert rojo con el error y mostrar un alert verde si la respuesta es correcta*/

const $form=document.getElementById("APIform");
$form.addEventListener("submit", async(p)=>{
    p.preventDefault();
    const $num1=document.getElementById("numero1").value;
    const $num2=document.getElementById("numero2").value;
    $form.reset();

    const status= await obtenerDatos(`http://localhost:3000/suma/${$num1}/${$num2}`);
    if(status==500)appendAlert('Error en la peticion, revisa los datos','danger');
    if(status==200)appendAlert('Peticion exitosa, se han enviado los datos','success');
    //if(status==404)appendAlert('Error en la peticion, dato no encontrado','warning');
})

const Alert = document.getElementById('Alert');
const appendAlert = (mensaje, tipo) => {
    let tipoEtiqueta = '';
    let xVinculo='';
    if(tipo=='success'){
        tipoEtiqueta='success';
        xVinculo='check double';
    }
    if(tipo=='danger'){
        tipoEtiqueta='Danger';
        xVinculo='Exclamation octagon fill'
    }
    /*if(tipo == 'warning'){
        tipoEtiqueta='Warning'
        xVinculo='Exclamation triangle fill'
    }*/

    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
    `
    <div class="alert alert-${tipo} d-flex align-items-center" role="alert">
    <svg class="bi flex-shrink-0 me-2" role="img" aria-label="${tipoEtiqueta}:"><use xlink:href="#${xVinculo}"/></svg>
        <div>
            ${mensaje}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    </div>
    `
    ].join('')

    Alert.append(wrapper)
}