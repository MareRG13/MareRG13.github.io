function area() {
    var v1=document.getElementById("n1").value
if (v1==0 ) {
     alert("La multiplicación no esta definida para los numeros indicados" );
}
if (v1!=0) {
    var res= parseFloat(v1)*parseFloat(v1);
    var resultado=document.getElementById("resp").value=res.toFixed(2)
}
}
function borrar() {
    var v1=document.getElementById("n1").value="";
    var resultado=document.getElementById("resp").value=""
}