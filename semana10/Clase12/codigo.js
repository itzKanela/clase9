function verHora() {
    var miHora = new Date ();
    var horas = miHora.getHours().toString();
    var minutos = miHora.getMinutes().toString();
    if (minutos.length == 1) minutos = "0" + minutos;
    var segundos = miHora.getSeconds().toString();
    if (segundos.length == 1) segundos = "0" + segundos;
    document.forms[0].miReloj.value = horas + ":" + minutos + ":" + segundos;
}

var r = setInterval("verHora()", 500);