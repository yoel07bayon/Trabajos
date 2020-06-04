function vender(){
	var precios=document.getElementsByClassName("precio");
	console.log(precios);
	let prueba["java","python","php"]
	total=0;
	
	for (var  i = 0; i< precio.length; i++) {
        total=total+parseFloat(precios[i].value);
	}

    /*
	prueba.forEach(function(elemento){
		console.log(elemento);
	});
	for (var item in precios) {
		 console.long(item);
	}*/

	
     
     document.getElementById("salida").innerHTML="total: "+total;
}
