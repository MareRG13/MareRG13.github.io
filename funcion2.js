function area() {
    var v1=document.getElementById("n1").value

    var v2=document.getElementById("n2").value
if (v1==0 && v2==0  ) {
     alert("La divicion no esta definida para los numeros indicados" );
}
if (v1!=0 && v2==0 ) {
     alert("Valor infinito" );
}
if (v1!=0 && v2!==0 ) {
    var res=((parseFloat(v1)*parseFloat(v2))/2);
    var resultado=document.getElementById("resp").value=res.toFixed(2)
}
}
function borrar() {
    var v1=document.getElementById("n1").value=""

    var v2=document.getElementById("n2").value=""
    var resultado=document.getElementById("resp").value=""
}
