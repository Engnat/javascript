console.log("Hola Mundo");


/*var miFuncion = function(valor){
  var is_not_number = Number.isNaN(valor);
  if(is_not_number){
    valor = valor.toLowerCase();
  }
  if(valor=="dia" || (valor <=  12  && valor >= 0)){
    console.log("Buenos días");
  }else if (valor == "noche" || valor == 13) {
    console.log("Buenas noches");
  }

};

var suerte = function(valor){
if (valor === 7) {
  console.log("Buena suerte");
}else if (valor === "13") {
  console.log("Sentido pesame");
}
};
var num = 0;
while(num<10){
  console.log(++num);
}*/

var casa = {altura:100, ancho:400};
var casota = Object.create(casa);
var arreglo = ["a" , 5 , true , "abc"];
casota.ventana = 100;
for(var pos in arreglo){
  /*console.log(pos);*/
  console.log(arreglo[pos]);
}
for (var prop in casota) {
  /*console.log(prop);*/
  console.log(prop + ":" + casota[prop]);
}
