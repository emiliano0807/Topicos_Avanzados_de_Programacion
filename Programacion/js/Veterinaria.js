function mostrarDatos() {
    var nombreDueño = document.getElementById("nombreDueño").value;
    var nombreMascota = document.getElementById("nombreMascota").value;
    var sintomas = document.getElementById("sintomas").value.split(",");
    var contacto = document.getElementById("contacto").value;
    var imagenMascota = document.getElementById("imagenMascota").files[0];

    var datosMascota = document.getElementById("datosMascota");
    datosMascota.innerHTML= "<strong>Nombre del dueño:</strong> " + nombreDueño + "<br>" +
                            "<strong>Nombre de la mascota:</strong> " + nombreMascota + "<br>" +
                            "<strong>Síntomas:</strong> " + sintomas.join(", ") + "<br>" +
                            "<strong>Número de contacto:</strong> " + contacto;

    var imagenMascotaPrev = document.getElementById("imagenMascotaPrev");
    if (imagenMascota) {
        var reader = new FileReader();
        reader.onload = function(e) {
            imagenMascotaPrev.src = e.target.result;
            imagenMascotaPrev.style.display = "inline";
        };
        reader.readAsDataURL(imagenMascota);
    }
}