/*
Ferrete lamparas 2.0 El empleado del negocio ingresa los siguientes datos de cada venta, teniendo en cuenta que tenemos
varias ventas:
nombre del cliente
cantidad de lamparas marca (FelipeLamparas - ArgentinaLuz - Illuminatis)
precio por unidad total de la compra: dato que se calcula.
Se sabe que si la marca es FelipeLamparas y la cantidad de lamparas supera las 5 unidades,
se aplica un descuento del 10% sobre la compra Si la marca es ArgentinaLuz y compra 3 o mas unidades, el descuento es del 5%.
Ningun otro caso aplica descuento.
al terminar la carga de todas las ventas,la empresa desea saber:
a) Cuanto recauda la empresa en concepto de todas las ventas realizadas.
b) Cuanto "perdio" la empresa en concepto de descuentos.
c) El promedio de la cantidad de lamparas vendidas de cada marca.
d) La marca que mas ventas realizo (sin importar la cantidad de lamparas vendidas)
 */

function mostrar()
{
	let nombre;
	let cantidad;
	let marca;
	let precioU;
	let precioIt = 0;
	let precioTotal = 0;
	let pregunta;
	let precioFinal = 0;
	let descuento;
	let preciodescuento = 0;
	let precioRecaudo = 0;
	let descuentoFinal = 0;
	let promF = 0;
	let promA = 0;
	let promL = 0;
	let contF = 0;
	let contA = 0;
	let contL = 0;
	let acumF = 0;
	let acumA = 0;
	let acumL = 0;
	let marcaMax;
	let preciomarcaMax = 0;
	let flagMarca = 1;

	do{

		nombre = prompt("Ingrese nombre del cliente: ");

		cantidad = parseInt(prompt("Ingrese cantidad de lamparas: "));
		while(isNaN(cantidad) || cantidad<=0 ){
			cantidad = parseInt(prompt("Error. Ingrese cantidad de lamparas: "));
		}

		marca = prompt("Ingrese marca de la lampara: FelipeLamparas/ArgentinaLuz/LLLuminatis ");
		while(marca!="FelipeLamparas" && marca!="ArgentinaLuz" && marca!="LLLuminatis"){
			marca = prompt("Error. Ingrese marca de la lampara: FelipeLamparas/ArgentinaLuz/LLLuminatis ");
		}

		precioU = parseInt(prompt("Ingrese precio por unidad de lampara: "));
		while(isNaN(precioU) || precioU<=0 ){
			precioU = parseInt(prompt("Error. Ingrese precio por unidad de lampara: "));
		}

		precioIt=cantidad*precioU;
		
		if(marca=="FelipeLamparas" && cantidad>5){
			descuento = precioIt*0.10;
			preciodescuento= precioIt - descuento; 
		}
		
		if(marca=="ArgentinaLuz" && cantidad>=3){
			descuento = precioIt*0.05;
			preciodescuento= precioIt - descuento; 
		}
		
		if(preciodescuento!=0){
			precioFinal=preciodescuento;
		}else{
			precioFinal=precioIt;
		}

		if(marca=="ArgentinaLuz"){
			acumA+=cantidad;
			contA++;
		}else if(marca=="FelipeLamparas"){
			acumF+=cantidad;
			contF++;
		}else{
			acumL+=cantidad;
			contL++;
		}

		if(flagMarca || precioIt>preciomarcaMax){
			preciomarcaMax=precioIt;
			marcaMax=marca;
			flagMarca=0;
		}

		precioRecaudo+=precioFinal;
		descuentoFinal+=descuento;



		
		pregunta = prompt("Desea ingresar otro empleado? ");
	}while(pregunta=="s");
	
	console.log("a) Recaudo de todas las ventas realizadas por la empresa: $" + precioRecaudo);
	console.log("b) La empresa perdio " + descuentoFinal + " en concepto de descuento");
	if(contA!=0){
		promA=acumA/contA;
		console.log("c) Promedio de lamparas vendidas marca ArgentinaLuz: " + promA);
	}
	if(contF!=0){
		promF=acumF/contF;
		console.log("c) Promedio de lamparas vendidas marca FelipeLamparas: " + promF);
	}
	if(contL!=0){
		promL=acumLpromL/contLpromL;
		console.log("c) Promedio de lamparas vendidas marca LLLuminatis: " + promL);
	}

	console.log("d) Marca que mas ventas realizo: " + marcaMax);


	
}
