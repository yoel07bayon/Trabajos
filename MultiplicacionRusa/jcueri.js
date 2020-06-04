function MultiplicacionRusa(){
	var n1,n2;
	var cotador=0;
	n1 =document.getElementById('numero1').value;
	n2 =document.getElementById('numero2').value;
	while(n1!=0){
		if (n1%2!=0) {
			cotador= parseInt(cotador+n2);
		}
		n1= parseInt(n1/2);
		n2= parseInt(n2*2);
	}
	alert("La respuesta es  "+(cotador));
} 