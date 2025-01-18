function area() {
    var v1=document.getElementById("n1").value
if (v1==0 ) {
     alert("La divicion no esta definida para los numeros indicados" );
}
if (v1!=0) {
    var res= 3.1416 * (parseFloat(v1)**2);
    var resultado=document.getElementById("resp").value=res.toFixed(2)
}
}
function borrar() {
    var v1=document.getElementById("n1").value="";
    var resultado=document.getElementById("resp").value=""
}