let diaSemana = prompt("Que dia es hoy?");

switch (diaSemana) {
    case "lunes":
        alert("Hoy es lunes");
        alert("20 abdominales, 10 sentadillas");
        break;
    case "martes":
        alert("Hoy es martes");
        alert("Caminar 30 minutos.");
        break;
    case "miercoles":
        alert("Hoy es miercoles");
        alert("30 abdominales, 20 sentadillas, 10 lagartijas");
        break;
    case "jueves":
        alert("Hoy es jueves");
        alert("Correr 20 minutos.");
        break;   
    case "viernes":
        alert("Hoy es viernes");
        alert("Correr 30 minutos");
        break;        
    case "sabado":
        alert("Hoy es sabado");
        alert("Descanso.");
        break;
    case "domingo":
        alert("Hoy es domingo");
        alert("Descanso.");
        break;
    default:
        alert("Escribe el dia de la semana en minusculas.");
}



for(let i=20;i<=70;i++){
    document.write(`El numero es: ${i} <br>`);
}