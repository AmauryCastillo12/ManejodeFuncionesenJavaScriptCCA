
function Sueldo(){

    var horas=null;

    var salario=null;

    horas =document.getElementById("idhoras").value;

    salario= document.getElementById("idsalario").value;

    var sueldodia=horas*salario;

    alert("Tu sueldo es : "+sueldodia+" USD al dia, Si continuas asi, podrias ganar "+(sueldodia*6)+" EN UNA SEMANA!");
    }




